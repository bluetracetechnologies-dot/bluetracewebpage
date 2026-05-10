# Downloads MinGit (portable Git for Windows) into .tools\mingit so the project
# can run git operations without a system-wide Git install. Idempotent.

$ErrorActionPreference = "Stop"
$ProgressPreference    = "SilentlyContinue"

$root    = Split-Path -Parent $PSScriptRoot
$tools   = Join-Path $root ".tools"
$dst     = Join-Path $tools "mingit"
$git     = Join-Path $dst "cmd\git.exe"
$zip     = Join-Path $tools "mingit.zip"
$version = "2.54.0"
$url     = "https://github.com/git-for-windows/git/releases/download/v$version.windows.1/MinGit-$version-64-bit.zip"

if (Test-Path $git) {
  $ver = & $git --version
  Write-Host "  ✓ Portable Git already installed: $ver" -ForegroundColor Green
  exit 0
}

if (-not (Test-Path $tools)) {
  New-Item -ItemType Directory -Path $tools | Out-Null
}

Write-Host "→ Downloading MinGit $version (~39 MB)..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $url -OutFile $zip -UseBasicParsing

Write-Host "→ Extracting to $dst ..." -ForegroundColor Cyan
if (Test-Path $dst) { Remove-Item -Recurse -Force $dst }
Expand-Archive -Path $zip -DestinationPath $dst -Force
Remove-Item $zip -Force

if (Test-Path $git) {
  $ver = & $git --version
  Write-Host ""
  Write-Host "  ✓ Installed: $ver" -ForegroundColor Green
  Write-Host "    Path: $git" -ForegroundColor DarkGray
  Write-Host ""
} else {
  Write-Host "  ✗ Extraction completed but git.exe is missing." -ForegroundColor Red
  exit 1
}
