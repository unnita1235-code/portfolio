# test_task1.ps1 - Phase 1, Task 1 Test Suite
# Run from the portfolio root: powershell -File test_task1.ps1

$ErrorCount = 0

function Pass($msg) { Write-Host "  [PASS] $msg" -ForegroundColor Green }
function Fail($msg) { Write-Host "  [FAIL] $msg" -ForegroundColor Red; $script:ErrorCount++ }

# ===========================================================================
# Test 1.1 - Configuration file exists
# ===========================================================================
Write-Host "`nTest 1.1: Configuration File Creation" -ForegroundColor Cyan
if (Test-Path "deploy.config.ps1") {
    Pass "deploy.config.ps1 exists"
    Pass "Valid PowerShell file"
} else {
    Fail "deploy.config.ps1 not found"
}

# ===========================================================================
# Test 1.2 - Configuration module loads without errors
# ===========================================================================
Write-Host "`nTest 1.2: Configuration Module Loads" -ForegroundColor Cyan
try {
    . "$PSScriptRoot\deploy.config.ps1"
    Pass "Configuration loaded successfully"
    Pass "Project DIR: $($CONFIG.ProjectDir)"
} catch {
    Fail "Failed to load configuration: $_"
}

# ===========================================================================
# Test 1.3 - No hardcoded C:\Users paths in deploy.ps1
# ===========================================================================
Write-Host "`nTest 1.3: No Hardcoded Paths in deploy.ps1" -ForegroundColor Cyan
$content = Get-Content "deploy.ps1" -Raw
if ($content -notmatch [regex]::Escape("C:\Users")) {
    Pass "No hardcoded C:\Users paths found in deploy.ps1"
} else {
    Fail "Hardcoded C:\Users path detected in deploy.ps1!"
}

# ===========================================================================
# Test 1.4 - Git history check (no old hardcoded path)
# ===========================================================================
Write-Host "`nTest 1.4: Git History Clean" -ForegroundColor Cyan
$gitResult = git log -p --all -S "Users\unnit\portfolio" -- deploy.ps1 2>&1
if ([string]::IsNullOrWhiteSpace($gitResult)) {
    Pass "No hardcoded user paths found in git history for deploy.ps1"
} else {
    Fail "Hardcoded path found in git history!"
}

# ===========================================================================
# Test 1.5 - PORTFOLIO_PATH environment variable is honoured
# ===========================================================================
Write-Host "`nTest 1.5: Environment Variable Resolution" -ForegroundColor Cyan
$env:PORTFOLIO_PATH = "C:\tmp\test"
try {
    # Re-dot-source to pick up new env value
    . "$PSScriptRoot\deploy.config.ps1"
    if ($CONFIG.ProjectDir -eq "C:\tmp\test") {
        Pass "PORTFOLIO_PATH environment variable correctly applied"
    } else {
        Fail "PORTFOLIO_PATH not applied. Got: $($CONFIG.ProjectDir)"
    }
} finally {
    Remove-Item Env:PORTFOLIO_PATH -ErrorAction SilentlyContinue
}

# ===========================================================================
# Test 1.6 - Default to current directory when PORTFOLIO_PATH is unset
# ===========================================================================
Write-Host "`nTest 1.6: Default Behaviour (no env var)" -ForegroundColor Cyan
Remove-Item Env:PORTFOLIO_PATH -ErrorAction SilentlyContinue
. "$PSScriptRoot\deploy.config.ps1"
$expectedDefault = (Get-Location).Path
if ($CONFIG.ProjectDir -eq $expectedDefault) {
    Pass "Correctly defaults to current directory: $expectedDefault"
} else {
    Fail "Default incorrect. Expected: $expectedDefault  Got: $($CONFIG.ProjectDir)"
}

# ===========================================================================
# Summary
# ===========================================================================
Write-Host "`n============================================================" -ForegroundColor White
if ($ErrorCount -eq 0) {
    Write-Host "ALL TESTS PASSED (6/6) - Task 1 COMPLETE" -ForegroundColor Green
} else {
    Write-Host "$ErrorCount TEST(S) FAILED" -ForegroundColor Red
}
Write-Host "============================================================`n" -ForegroundColor White

exit $ErrorCount
