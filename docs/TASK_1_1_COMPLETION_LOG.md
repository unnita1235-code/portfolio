# Task 1.1 Completion Log

**Phase:** 1 — Security & Stability
**Task:** 1 — Remove Hardcoded System Path
**Date Completed:** 2026-05-22
**Status:** ✅ COMPLETE

---

## Summary

Removed the hardcoded Windows user path `c:\Users\unnit\portfolio` from `deploy.ps1`
and replaced it with an environment-variable-driven configuration system.

## Files Changed

| File | Action | Description |
|------|--------|-------------|
| `deploy.ps1` | Modified | Sources `deploy.config.ps1`; uses `$CONFIG.ProjectDir` |
| `deploy.config.ps1` | Created | Config module — reads `PORTFOLIO_PATH` env var, defaults to CWD |
| `docs/DEPLOYMENT.md` | Created | Deployment guide for all three usage modes |
| `docs/TROUBLESHOOTING.md` | Created | Common errors and fixes |
| `test_task1.ps1` | Created | Automated test runner for all 6 protocol tests |

## Git History

The original commit (`c582b64`) contained the hardcoded path in `deploy.ps1`.
The git history was rewritten using `git-filter-repo` to replace all occurrences
with `$PSScriptRoot`, ensuring the sensitive username is permanently removed.

## Test Results

| Test | Description | Result |
|------|-------------|--------|
| 1.1 | `deploy.config.ps1` exists | ✅ PASS |
| 1.2 | Config module loads without errors | ✅ PASS |
| 1.3 | No hardcoded `C:\Users` paths in `deploy.ps1` | ✅ PASS |
| 1.4 | Git history clean | ✅ PASS |
| 1.5 | `PORTFOLIO_PATH` env var is honoured | ✅ PASS |
| 1.6 | Defaults to CWD when env var unset | ✅ PASS |

**Result: 6/6 tests passed**

## Security Notes

- `VERCEL_TOKEN` is never stored in any file — only read from environment
- `deploy.config.ps1` contains no hardcoded values
- Git history no longer exposes the system username
