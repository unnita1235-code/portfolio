// SRI Hash Verification Script
// Verifies that all CDN resources have correct integrity hashes
// Run: node scripts/test-sri.js

const crypto = require('crypto');
const https = require('https');
const fs = require('fs');
const path = require('path');

const SRI_HASHES = {
  'https://unpkg.com/lucide@0.263.1': 'sha384-7+sUXuGPh/aNBxK1cH5BKt8qdXIeNw5EQHWQDVvEpAo7p7LQZzNvCvlsXJKRnVb'
};

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function calculateSri(content) {
  const hash = crypto.createHash('sha384');
  hash.update(content);
  return 'sha384-' + hash.digest('base64');
}

async function verifySriHashes() {
  const results = [];
  for (const [url, expectedHash] of Object.entries(SRI_HASHES)) {
    try {
      console.log(`Verifying ${url}...`);
      const content = await fetchUrl(url);
      const actualHash = calculateSri(content);
      if (actualHash === expectedHash) {
        console.log(`✅ Hash verified: ${url}`);
        results.push({ url, status: 'verified' });
      } else {
        console.log(`⚠️  Hash mismatch for ${url}`);
        console.log(`   Expected: ${expectedHash}`);
        console.log(`   Actual:   ${actualHash}`);
        results.push({ url, status: 'mismatch', expectedHash, actualHash });
      }
    } catch (error) {
      console.log(`❌ Error verifying ${url}: ${error.message}`);
      results.push({ url, status: 'error', error: error.message });
    }
  }
  const failed = results.filter(r => r.status !== 'verified').length;
  if (failed === 0) {
    console.log('\n✅ All SRI hashes verified successfully!');
    return true;
  } else {
    console.log(`\n❌ ${failed} hash(es) failed verification`);
    return false;
  }
}

verifySriHashes().then(success => process.exit(success ? 0 : 1));
