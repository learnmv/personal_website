# Build script for Mahesh Dommaraju's Portfolio Website
# This script prepares the site for deployment to Netlify

Write-Host "Building portfolio website for deployment..." -ForegroundColor Green

# Clean existing build directory
if (Test-Path "dist") {
    Write-Host "Cleaning existing dist directory..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force dist
}

# Create fresh dist directory
Write-Host "Creating dist directory..." -ForegroundColor Blue
New-Item -ItemType Directory -Name "dist" | Out-Null

# Copy main files
Write-Host "Copying files..." -ForegroundColor Blue
Copy-Item "index.html" "dist\"
Copy-Item "src" "dist\" -Recurse
Copy-Item "_redirects" "dist\"
Copy-Item "robots.txt" "dist\"
Copy-Item "sitemap.xml" "dist\"

Write-Host "Build completed successfully!" -ForegroundColor Green
Write-Host "Your site is ready for deployment in the 'dist' directory" -ForegroundColor Cyan

# Show what was built
Write-Host "`nBuild contents:" -ForegroundColor Magenta
Get-ChildItem dist
