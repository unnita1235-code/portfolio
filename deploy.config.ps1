# deploy.config.ps1
# Configuration management for deployment script.
# Values are resolved from environment variables with portable defaults.
# DO NOT hardcode personal paths or tokens in this file.

# Build the configuration hashtable
$script:CONFIG = @{
    ProjectDir   = if ($env:PORTFOLIO_PATH) { $env:PORTFOLIO_PATH } else { (Get-Location).Path }
    Environment  = if ($env:PORTFOLIO_ENV)  { $env:PORTFOLIO_ENV  } else { "production" }
    VercelToken  = $env:VERCEL_TOKEN  # Must be set in CI/CD; optional for interactive use
}

# ---------------------------------------------------------------------------
# Validate-Configuration
# Throws a descriptive error if the resolved configuration is unusable.
# ---------------------------------------------------------------------------
function Test-Configuration {
    if (-not (Test-Path $script:CONFIG.ProjectDir)) {
        throw "Project directory not found: '$($script:CONFIG.ProjectDir)'. " +
              "Set the PORTFOLIO_PATH environment variable to the correct path."
    }
    if (-not (Test-Path (Join-Path $script:CONFIG.ProjectDir "package.json"))) {
        throw "package.json not found inside '$($script:CONFIG.ProjectDir)'. " +
              "Is PORTFOLIO_PATH pointing to the right directory?"
    }
}
