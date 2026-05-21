# Troubleshooting Guide

## Deployment Issues

### ❌ "Project directory not found"

```
Configuration Error: Project directory not found: 'C:\some\path'.
```

**Cause:** `PORTFOLIO_PATH` is set to a path that doesn't exist.

**Fix:** Verify the path and update the variable:
```powershell
$env:PORTFOLIO_PATH = "C:\correct\path\to\portfolio"
```

---

### ❌ "package.json not found"

```
Configuration Error: package.json not found inside '...'.
```

**Cause:** `PORTFOLIO_PATH` points to the wrong directory (e.g., a parent folder).

**Fix:** Ensure the directory contains `package.json` at its root.

---

### ❌ "Build failed! Aborting deployment."

**Cause:** Vite build errors (syntax error, missing import, etc.).

**Fix:** Run the build manually and inspect the error output:
```powershell
npm run build
```

---

### ❌ "Not logged into Vercel"

**Cause:** No valid Vercel session or token found.

**Fix (interactive):**
```powershell
npx vercel login
```

**Fix (CI/CD):** Set the `VERCEL_TOKEN` secret in your CI environment.

---

### ❌ npm install fails

**Cause:** Network issues or a corrupted lock file.

**Fix:** Delete `node_modules` and reinstall:
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

---

## Getting Help

- Vercel documentation: https://vercel.com/docs
- Vite documentation: https://vitejs.dev
