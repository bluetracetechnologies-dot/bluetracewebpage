@echo off
setlocal
set GIT=%~dp0..\.tools\mingit\cmd\git.exe
set GIT_TERMINAL_PROMPT=0
set TOKURL=https://x-access-token:%GH_TOKEN%@github.com/bluetracetechnologies-dot/bluetracewebpage.git
set LOG=%~dp0_sync2.log

echo === fetch === > "%LOG%" 2>&1
"%GIT%" fetch %TOKURL% main >> "%LOG%" 2>&1
echo FETCH_EXIT=%ERRORLEVEL% >> "%LOG%"

echo === local log === >> "%LOG%"
"%GIT%" log --oneline -10 main >> "%LOG%" 2>&1

echo === remote log === >> "%LOG%"
"%GIT%" log --oneline -10 FETCH_HEAD >> "%LOG%" 2>&1

echo === divergence === >> "%LOG%"
"%GIT%" rev-list --left-right --count FETCH_HEAD...HEAD >> "%LOG%" 2>&1

echo === remote-only files === >> "%LOG%"
"%GIT%" diff --name-only HEAD...FETCH_HEAD >> "%LOG%" 2>&1
endlocal
