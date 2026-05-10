$root    = "C:\Users\ansar\Downloads\bluetrace-pages"
$nodeDir = Join-Path $root ".tools\node-v22.11.0-win-x64"
$env:Path = "$nodeDir;$env:Path"
Set-Location $root
& "$nodeDir\npm.cmd" run dev
