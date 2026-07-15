const fs = require('fs');
const path = require('path');

const PINNED_VERSIONS = {
    'lucide': '0.263.0',
    'googleapis': '2022-11-30',
};

const PATTERNS = {
    lucide: /unpkg\.com\/lucide@([\d.]+)/g,
    googleFonts: /fonts\.googleapis\.com\/css2.*display=swap/g,
};

function checkIndexHtml() {
    const htmlPath = path.join(__dirname, '..', 'index.html');
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    const errors = [];
    
    if (content.includes('@latest')) {
        errors.push('Found @latest in CDN URLs (unpinned versions)');
    }
    
    const lucideMatch = content.match(PATTERNS.lucide);
    if (lucideMatch) {
        lucideMatch.forEach(match => {
            const version = match.match(/@([\d.]+)/)[1];
            if (version === PINNED_VERSIONS.lucide) {
                console.log(`Lucide version correctly pinned: ${version}`);
            } else {
                errors.push(`Lucide version mismatch. Expected: ${PINNED_VERSIONS.lucide}, Found: ${version}`);
            }
        });
    }
    
    return errors;
}

function main() {
    const errors = checkIndexHtml();
    
    if (errors.length === 0) {
        console.log('All CDN versions are properly pinned!');
        process.exit(0);
    } else {
        errors.forEach(error => console.log(error));
        console.log('Version pinning issues found!');
        process.exit(1);
    }
}

main();
