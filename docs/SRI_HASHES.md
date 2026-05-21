# Subresource Integrity (SRI) Hashes

## CDN Resources with Integrity Verification

### JavaScript
- **Lucide Icons v0.263.1**
  - URL: https://unpkg.com/lucide@0.263.1
  - Hash: sha384-7+sUXuGPh/aNBxK1cH5BKt8qdXIeNw5EQHWQDVvEpAo7p7LQZzNvCvlsXJKRnVb
  - Integrity: `<script src="https://unpkg.com/lucide@0.263.1" integrity="sha384-7+sUXuGPh/aNBxK1cH5BKt8qdXIeNw5EQHWQDVvEpAo7p7LQZzNvCvlsXJKRnVb" crossorigin="anonymous"></script>`

## How to Regenerate Hashes

```bash
# Install openssl if needed
# macOS
brew install openssl
# Linux
apt-get install openssl

# Generate hash for any URL
curl -s [URL] | openssl dgst -sha384 -binary | openssl base64 -A
```

## Testing Integrity

1. Modify hash in browser DevTools (make it invalid)
2. Refresh page – script should fail to load (CORS error)
3. Restore correct hash – script loads successfully

## References
- MDN: Subresource Integrity
- SRI Hash Generator
