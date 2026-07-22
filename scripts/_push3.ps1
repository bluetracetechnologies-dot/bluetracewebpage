$ErrorActionPreference = "Continue"
$git = Join-Path $PSScriptRoot "..\.tools\mingit\cmd\git.exe"
$log = Join-Path $PSScriptRoot "_push3.log"
$env:GIT_TERMINAL_PROMPT = "0"

$token = $env:GH_TOKEN
$tokenUrl = "https://x-access-token:$token@github.com/bluetracetechnologies-dot/bluetracewebpage.git"

"=== push ===" | Set-Content $log
& $git push $tokenUrl main 2>&1 | Add-Content $log
"EXIT=$LASTEXITCODE" | Add-Content $log

"=== log ===" | Add-Content $log
& $git log --oneline -5 2>&1 | Add-Content $log

"=== verify config clean ===" | Add-Content $log
$cfg = & $git config --local --list 2>&1
$bad = $cfg | Select-String -Pattern "github_pat|ghp_|x-access-token"
if ($bad) { "TOKEN IN CONFIG:" | Add-Content $log; $bad | Add-Content $log } else { "OK - clean" | Add-Content $log }
