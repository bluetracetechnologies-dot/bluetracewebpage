@echo off
setlocal
set GIT=%~dp0..\.tools\mingit\cmd\git.exe
set GIT_TERMINAL_PROMPT=0
set TOKURL=https://x-access-token:%GH_TOKEN%@github.com/bluetracetechnologies-dot/bluetracewebpage.git
set LOG=%~dp0_reset.log

echo === remote diff content === > "%LOG%" 2>&1
"%GIT%" fetch %TOKURL% main >> "%LOG%" 2>&1
echo --- package.json delta --- >> "%LOG%"
"%GIT%" diff HEAD FETCH_HEAD -- package.json >> "%LOG%" 2>&1
echo --- package-lock.json delta (versions only) --- >> "%LOG%"
"%GIT%" diff HEAD FETCH_HEAD -- package-lock.json | findstr /R /C:"\"version\":" /C:"^+++" /C:"^---" >> "%LOG%" 2>&1

echo === reset to remote === >> "%LOG%"
"%GIT%" reset --hard FETCH_HEAD >> "%LOG%" 2>&1

echo === update origin URL ref === >> "%LOG%"
"%GIT%" update-ref refs/remotes/origin/main FETCH_HEAD >> "%LOG%" 2>&1

echo === final log === >> "%LOG%"
"%GIT%" log --oneline -6 >> "%LOG%" 2>&1

echo === divergence === >> "%LOG%"
"%GIT%" rev-list --left-right --count origin/main...HEAD >> "%LOG%" 2>&1
echo (0  0 = perfectly in sync) >> "%LOG%"

echo === verify config clean === >> "%LOG%"
"%GIT%" config --local --list | findstr /R /C:"github_pat\|ghp_\|x-access-token" >> "%LOG%" 2>&1
echo (empty above = no token in config) >> "%LOG%"
endlocal
