const https = require('https');

const TIMEOUT_MS = 15000;

const CDN_RESOURCES = [
    {
        name: 'Lucide Icons UMD (primary)',
        url: 'https://unpkg.com/lucide@0.263.0/dist/umd/lucide.min.js',
        expectedMime: 'application/javascript',
        contentSignature: 'createIcons',
    },
    {
        name: 'Google Fonts - Inter',
        url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
        expectedMime: 'text/css',
        contentSignature: null,
    },
    {
        name: 'Simple Icons CDN (spot check - Python)',
        url: 'https://cdn.simpleicons.org/python',
        expectedMime: 'image/svg+xml',
        contentSignature: null,
    },
];

function checkResource({ name, url, expectedMime, contentSignature }) {
    return new Promise((resolve) => {
        let body = '';
        const startTime = Date.now();

        const req = https.get(url, { headers: { 'User-Agent': 'portfolio-cdn-verify/1.0' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                resolve(checkResource({ name, url: res.headers.location, expectedMime, contentSignature }));
                return;
            }

            if (res.statusCode !== 200) {
                resolve({ ok: false, name, url, error: `HTTP ${res.statusCode}` });
                return;
            }

            const contentType = (res.headers['content-type'] || '').toLowerCase();
            if (expectedMime && !contentType.includes(expectedMime.split('/')[1])) {
                resolve({ ok: false, name, url, error: `Unexpected MIME: ${contentType} (expected ${expectedMime})` });
                return;
            }

            if (contentSignature) {
                res.on('data', chunk => { body += chunk.toString(); });
                res.on('end', () => {
                    const elapsed = Date.now() - startTime;
                    if (!body.includes(contentSignature)) {
                        resolve({ ok: false, name, url, error: `Content signature "${contentSignature}" not found in response` });
                    } else {
                        resolve({ ok: true, name, url, elapsed });
                    }
                });
            } else {
                res.resume();
                res.on('end', () => {
                    const elapsed = Date.now() - startTime;
                    resolve({ ok: true, name, url, elapsed });
                });
            }
        });

        req.on('error', (err) => {
            resolve({ ok: false, name, url, error: err.message });
        });

        req.setTimeout(TIMEOUT_MS, () => {
            req.destroy();
            resolve({ ok: false, name, url, error: `Timed out after ${TIMEOUT_MS / 1000}s` });
        });
    });
}

async function main() {
    console.log('\nPre-deploy CDN Verification\n' + '='.repeat(40));

    const results = await Promise.all(CDN_RESOURCES.map(checkResource));
    let allPassed = true;

    results.forEach(r => {
        if (r.ok) {
            console.log(`  ${r.name} (${r.elapsed}ms)`);
        } else {
            console.error(`  ${r.name}`);
            console.error(`     URL: ${r.url}`);
            console.error(`     Error: ${r.error}`);
            allPassed = false;
        }
    });

    console.log('='.repeat(40));

    if (allPassed) {
        console.log('All CDN resources verified. Safe to deploy.\n');
        process.exit(0);
    } else {
        console.error('One or more CDN resources failed verification. Fix before deploying.\n');
        process.exit(1);
    }
}

main();
