$ErrorActionPreference = "Continue"
$git = Join-Path $PSScriptRoot "..\.tools\mingit\cmd\git.exe"
$log = Join-Path $PSScriptRoot "_sync.log"
$env:GIT_TERMINAL_PROMPT = "0"

$token = $env:GH_TOKEN
$tokenUrl = "https://x-access-token:$token@github.com/bluetracetechnologies-dot/bluetracewebpage.git"

"=== fetch via token URL ===" | Set-Content $log
& $git fetch $tokenUrl main 2>&1 | Add-Content $log

"=== status ===" | Add-Content $log
& $git status --short 2>&1 | Add-Content $log

"=== local log ===" | Add-Content $log
& $git log --oneline -10 main 2>&1 | Add-Content $log

"=== remote log (FETCH_HEAD) ===" | Add-Content $log
& $git log --oneline -10 FETCH_HEAD 2>&1 | Add-Content $log

"=== divergence ===" | Add-Content $log
& $git rev-list --left-right --count FETCH_HEAD...HEAD 2>&1 | Add-Content $log
"(left = remote-only, right = local-only)" | Add-Content $log

"=== merge-base ===" | Add-Content $log
& $git merge-base FETCH_HEAD HEAD 2>&1 | Add-Content $log

"=== files differing ===" | Add-Content $log
& $git diff --name-only FETCH_HEAD HEAD 2>&1 | Add-Content $log
