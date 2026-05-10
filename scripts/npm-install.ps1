$ErrorActionPreference = "Continue"
$root    = "C:\Users\ansar\Downloads\bluetrace-pages"
$nodeDir = Join-Path $root ".tools\node-v22.11.0-win-x64"
$log     = Join-Path $root "scripts\npm-install.log"

$env:Path = "$nodeDir;$env:Path"

"start " + (Get-Date -Format "HH:mm:ss") | Out-File $log -Encoding utf8
"node=$(& "$nodeDir\node.exe" --version)" | Out-File $log -Append -Encoding utf8
"npm=$(& "$nodeDir\npm.cmd" --version)"   | Out-File $log -Append -Encoding utf8

Push-Location $root
& "$nodeDir\npm.cmd" install --no-audit --no-fund --loglevel=error 2>&1 | Out-File $log -Append -Encoding utf8
$code = $LASTEXITCODE
Pop-Location

"exit_code=$code" | Out-File $log -Append -Encoding utf8
"end " + (Get-Date -Format "HH:mm:ss") | Out-File $log -Append -Encoding utf8
