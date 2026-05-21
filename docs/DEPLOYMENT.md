# Deployment Guide

## Prerequisites

| Requirement | Minimum Version |
|-------------|----------------|
| PowerShell  | 5.0+           |
| Node.js     | 20+            |
| Vercel CLI  | via `npx`      |
| Vercel account | authenticated |

---

## Setup

### Option 1: Default (run from project directory) — Recommended for local use

```powershell
cd C:\path\to\portfolio
.\deploy.ps1
```

`$PSScriptRoot` is used automatically, so the script always resolves relative
to its own location — no configuration needed for interactive development.

---

### Option 2: Using the `PORTFOLIO_PATH` environment variable

Set the variable in your shell session before running:

```powershell
$env:PORTFOLIO_PATH = "C:\path\to\portfolio"
.\deploy.ps1
```

Or set it permanently for your user account:

```powershell
[System.Environment]::SetEnvironmentVariable("PORTFOLIO_PATH", "C:\path\to\portfolio", "User")
```

---

### Option 3: CI/CD (GitHub Actions, etc.)

```yaml
- name: Deploy to Vercel
  env:
    PORTFOLIO_PATH: ${{ github.workspace }}
    VERCEL_TOKEN:   ${{ secrets.VERCEL_TOKEN }}
  run: pwsh ./deploy.ps1
```

Set `VERCEL_TOKEN` as a **repository secret** in GitHub → Settings → Secrets.

---

## Environment Variables

| Variable         | Required | Default                    | Description                               |
|------------------|----------|----------------------------|-------------------------------------------|
| `PORTFOLIO_PATH` | No       | Current working directory  | Absolute path to the portfolio directory  |
| `PORTFOLIO_ENV`  | No       | `production`               | Deployment environment label              |
| `VERCEL_TOKEN`   | CI only  | —                          | Vercel authentication token               |

> **Security:** Never commit `VERCEL_TOKEN` or other secrets to version control.
> Use environment variables or secret managers.

---

## Troubleshooting

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common issues and fixes.
