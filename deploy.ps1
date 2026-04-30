# Portfolio Deployment Automation Script
# This script builds the project and deploys it to Vercel.

$PROJECT_DIR = "$PSScriptRoot"
$BUILD_DIR = "$PROJECT_DIR\dist"

Write-Host "Starting Portfolio Deployment Pipeline..." -ForegroundColor Cyan

# 1. Check for Node Modules
if (-not (Test-Path "$PROJECT_DIR\node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm --prefix $PROJECT_DIR install
}

# 2. Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm --prefix $PROJECT_DIR run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Aborting deployment." -ForegroundColor Red
    exit 1
}

# 3. Check Vercel Login
Write-Host "Checking Vercel authentication..." -ForegroundColor Yellow
$whoami = npx vercel whoami 2>&1
if ($whoami -match "Error: The specified token is not valid") {
    Write-Host "Not logged into Vercel. Please run 'npx vercel login' then try again." -ForegroundColor Red
    exit 1
}

# 4. Deploy
Write-Host "Deploying to Vercel..." -ForegroundColor Green
npx vercel deploy --prod --cwd $PROJECT_DIR --yes

Write-Host "Deployment Completed Successfully!" -ForegroundColor Green
