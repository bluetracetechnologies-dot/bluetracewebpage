$ErrorActionPreference = "Stop"
$log = "C:\Users\ansar\Downloads\bluetrace-pages\scripts\install.log"
function L($m) { ("[" + (Get-Date -Format "HH:mm:ss") + "] " + $m) | Out-File -FilePath $log -Append -Encoding utf8 }
"" | Out-File -FilePath $log -Encoding utf8

try {
  L "starting portable node install"

  $version  = "v22.11.0"
  $arch     = if ([Environment]::Is64BitOperatingSystem) { "x64" } else { "x86" }
  $folder   = "node-$version-win-$arch"
  $zipName  = "$folder.zip"
  $url      = "https://nodejs.org/dist/$version/$zipName"
  $dest     = "C:\Users\ansar\Downloads\bluetrace-pages\.tools"
  $zipPath  = Join-Path $dest $zipName
  $nodeDir  = Join-Path $dest $folder

  L "url=$url"
  L "dest=$dest"

  if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }

  if (-not (Test-Path $nodeDir)) {
    L "downloading"
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -Uri $url -OutFile $zipPath -UseBasicParsing
    L "downloaded size=$((Get-Item $zipPath).Length)"
    L "expanding"
    Expand-Archive -Path $zipPath -DestinationPath $dest -Force
    L "expanded"
    Remove-Item $zipPath -Force
  } else {
    L "node folder already exists, skipping download"
  }

  $nodeExe = Join-Path $nodeDir "node.exe"
  if (-not (Test-Path $nodeExe)) { throw "node.exe missing after extract: $nodeExe" }

  $nv = & $nodeExe --version
  L "node_version=$nv"

  $npmCmd = Join-Path $nodeDir "npm.cmd"
  $env:Path = "$nodeDir;$env:Path"
  $npmV = & $npmCmd --version
  L "npm_version=$npmV"

  L "DONE_SUCCESS path=$nodeDir"
} catch {
  L ("ERROR: " + $_.Exception.Message)
  L ("STACK: " + $_.ScriptStackTrace)
}
