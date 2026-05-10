param(
  [Parameter(Position = 0)]
  [ValidateSet("dev", "lan", "build", "preview", "deploy", "deploy:preview", "ip", "install", "install-git", "setup-github", "push", "smoke", "help")]
  [string]$Action = "help",

  [Parameter(Position = 1)]
  [string]$Message = ""
)

$GIT_REMOTE = "https://github.com/bluetracetechnologies-dot/bluetracewebpage.git"
$GIT_BRANCH = "main"

$ErrorActionPreference = "Stop"
$root    = Split-Path -Parent $PSScriptRoot
$nodeDir = Join-Path $root ".tools\node-v22.11.0-win-x64"
$gitDir  = Join-Path $root ".tools\mingit"
$npm     = Join-Path $nodeDir "npm.cmd"
$npx     = Join-Path $nodeDir "npx.cmd"

if (-not (Test-Path $nodeDir)) {
  Write-Host "Portable Node.js missing — running installer..." -ForegroundColor Yellow
  & (Join-Path $PSScriptRoot "install-node-portable.ps1")
}

$env:Path = "$nodeDir;$env:Path"
if (Test-Path (Join-Path $gitDir "cmd\git.exe")) {
  $env:Path = "$gitDir\cmd;$env:Path"
}
Set-Location $root

function Show-LAN {
  $ips = @()
  try {
    $ips = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction Stop |
      Where-Object {
        $_.IPAddress -notlike "127.*" -and
        $_.IPAddress -notlike "169.254.*" -and
        $_.PrefixOrigin -in @("Dhcp", "Manual")
      } |
      Select-Object -ExpandProperty IPAddress
  } catch {
    $ips = @((Test-Connection -ComputerName $env:COMPUTERNAME -Count 1).IPV4Address.IPAddressToString)
  }

  Write-Host ""
  Write-Host "  ╔═════════════════════════════════════════════════════╗" -ForegroundColor Cyan
  Write-Host "  ║   Open from any device on the same Wi-Fi:           ║" -ForegroundColor Cyan
  Write-Host "  ╚═════════════════════════════════════════════════════╝" -ForegroundColor Cyan
  Write-Host "    http://localhost:3000                                  (this machine)" -ForegroundColor Green
  foreach ($ip in $ips) {
    Write-Host "    http://${ip}:3000" -ForegroundColor Green -NoNewline
    Write-Host "                              (phone / laptop)" -ForegroundColor DarkGray
  }
  Write-Host ""
  Write-Host "  Phone must be on the same Wi-Fi. Allow PowerShell through" -ForegroundColor DarkGray
  Write-Host "  Windows Firewall when prompted (private network)." -ForegroundColor DarkGray
  Write-Host ""
}

function Show-Help {
  Write-Host ""
  Write-Host "  Bluetrace site — task runner" -ForegroundColor Cyan
  Write-Host "  ────────────────────────────" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 dev              " -NoNewline; Write-Host "→ local dev server (localhost only)" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 lan              " -NoNewline; Write-Host "→ dev server exposed on Wi-Fi (phone-testable)" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 build            " -NoNewline; Write-Host "→ compile production bundle to .next/" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 preview          " -NoNewline; Write-Host "→ build + serve the production bundle" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 setup-github     " -NoNewline; Write-Host "→ init git + link this repo to GitHub (one-time)" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 push 'message'   " -NoNewline; Write-Host "→ commit all + push to GitHub main" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 deploy           " -NoNewline; Write-Host "→ ship to Vercel production (bluetrace.tech)" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 deploy:preview   " -NoNewline; Write-Host "→ ship a preview URL only" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 ip               " -NoNewline; Write-Host "→ print this machine's LAN IP(s)" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 install          " -NoNewline; Write-Host "→ npm install (after pulling new deps)" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 install-git      " -NoNewline; Write-Host "→ download MinGit into .tools\mingit (no admin)" -ForegroundColor DarkGray
  Write-Host "    .\scripts\run.ps1 smoke            " -NoNewline; Write-Host "→ HTTP-test every route on localhost:3000" -ForegroundColor DarkGray
  Write-Host ""
}

function Require-Git {
  $g = Get-Command git -ErrorAction SilentlyContinue
  if (-not $g) {
    Write-Host ""
    Write-Host "  ✗ git is not installed or not on PATH." -ForegroundColor Red
    Write-Host "    Portable Git can be installed into .tools\mingit by running:" -ForegroundColor Yellow
    Write-Host "      .\scripts\install-git-portable.ps1" -ForegroundColor Cyan
    Write-Host "    Or install Git for Windows globally: https://git-scm.com/download/win" -ForegroundColor DarkGray
    Write-Host ""
    exit 1
  }
}

switch ($Action) {
  "help"  { Show-Help }
  "ip"    { Show-LAN }

  "install" {
    & $npm install
  }

  "install-git" {
    & (Join-Path $PSScriptRoot "install-git-portable.ps1")
  }

  "smoke" {
    & (Join-Path $PSScriptRoot "smoke.ps1")
  }

  "dev" {
    Show-LAN
    & $npm run dev
  }

  "lan" {
    Show-LAN
    & $npm run "dev:network"
  }

  "build" {
    & $npm run build
  }

  "preview" {
    & $npm run build
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    Show-LAN
    & $npm run "start:network"
  }

  "deploy" {
    Write-Host "→ Deploying to Vercel production..." -ForegroundColor Cyan
    Write-Host "  First run will open a browser for one-time auth." -ForegroundColor DarkGray
    Write-Host ""
    & $npx vercel --prod --yes
  }

  "deploy:preview" {
    Write-Host "→ Deploying a preview URL to Vercel..." -ForegroundColor Cyan
    & $npx vercel --yes
  }

  "setup-github" {
    Require-Git
    Write-Host "→ Initialising git repo..." -ForegroundColor Cyan

    if (-not (Test-Path ".git")) {
      git init -b $GIT_BRANCH
    } else {
      Write-Host "  .git already exists — skipping init." -ForegroundColor DarkGray
      git branch -M $GIT_BRANCH
    }

    $existing = git remote get-url origin 2>$null
    if ($LASTEXITCODE -ne 0 -or -not $existing) {
      git remote add origin $GIT_REMOTE
      Write-Host "  added origin → $GIT_REMOTE" -ForegroundColor Green
    } elseif ($existing -ne $GIT_REMOTE) {
      git remote set-url origin $GIT_REMOTE
      Write-Host "  updated origin → $GIT_REMOTE" -ForegroundColor Yellow
    } else {
      Write-Host "  origin already set → $GIT_REMOTE" -ForegroundColor DarkGray
    }

    $name  = git config user.name  2>$null
    $email = git config user.email 2>$null
    if (-not $name -or -not $email) {
      Write-Host ""
      Write-Host "  ⚠ git user not configured — set it once per machine:" -ForegroundColor Yellow
      Write-Host "      git config --global user.name  'Your Name'" -ForegroundColor DarkGray
      Write-Host "      git config --global user.email 'you@example.com'" -ForegroundColor DarkGray
      Write-Host ""
    }

    Write-Host ""
    Write-Host "  ✓ Ready. Next step:" -ForegroundColor Green
    Write-Host "      .\scripts\run.ps1 push 'initial commit'" -ForegroundColor Cyan
    Write-Host ""
  }

  "push" {
    Require-Git
    if (-not (Test-Path ".git")) {
      Write-Host "  ✗ No git repo yet — run setup-github first." -ForegroundColor Red
      exit 1
    }

    if (-not $Message) { $Message = "update: site content" }

    Write-Host "→ Staging all changes..." -ForegroundColor Cyan
    git add -A

    $hasStaged = $false
    git diff --cached --quiet
    if ($LASTEXITCODE -ne 0) { $hasStaged = $true }

    if ($hasStaged) {
      Write-Host "→ Committing: '$Message'" -ForegroundColor Cyan
      git commit -m $Message
    } else {
      Write-Host "  Nothing new to commit — pushing existing history." -ForegroundColor DarkGray
    }

    Write-Host "→ Pushing to origin/$GIT_BRANCH..." -ForegroundColor Cyan

    $usingMinGit = Test-Path (Join-Path $gitDir "cmd\git.exe")
    $hasGcm      = $false
    if ($usingMinGit) {
      $hasGcm = Test-Path (Join-Path $gitDir "mingw64\libexec\git-core\git-credential-manager.exe")
    }

    if ($usingMinGit -and -not $hasGcm) {
      Write-Host ""
      Write-Host "  ⚠ Portable MinGit has no credential manager." -ForegroundColor Yellow
      Write-Host "    GitHub push needs a Personal Access Token. Two options:" -ForegroundColor Yellow
      Write-Host ""
      Write-Host "    A) Token in URL (one-time, quickest):" -ForegroundColor Cyan
      Write-Host "       1. Create a token at https://github.com/settings/tokens" -ForegroundColor DarkGray
      Write-Host "          scopes: repo  (classic) — or 'Contents: read/write' (fine-grained)" -ForegroundColor DarkGray
      Write-Host "       2. Re-run with the token in env:" -ForegroundColor DarkGray
      Write-Host "          `$env:GH_TOKEN = 'ghp_xxx'; .\scripts\run.ps1 push 'msg'" -ForegroundColor Cyan
      Write-Host ""
      Write-Host "    B) Install full Git for Windows (one-time, persistent auth):" -ForegroundColor Cyan
      Write-Host "       https://git-scm.com/download/win  — re-open PowerShell after install." -ForegroundColor DarkGray
      Write-Host ""

      if ($env:GH_TOKEN) {
        $tokenUrl = $GIT_REMOTE -replace "^https://", "https://x-access-token:$($env:GH_TOKEN)@"
        Write-Host "→ Pushing with GH_TOKEN..." -ForegroundColor Cyan
        git push -u $tokenUrl $GIT_BRANCH
      } else {
        Write-Host "  Skipping push (no GH_TOKEN set)." -ForegroundColor DarkGray
        exit 1
      }
    } else {
      Write-Host "  First push will prompt GitHub auth in your browser." -ForegroundColor DarkGray
      git push -u origin $GIT_BRANCH
    }

    if ($LASTEXITCODE -eq 0) {
      Write-Host ""
      Write-Host "  ✓ Pushed → $GIT_REMOTE" -ForegroundColor Green
      Write-Host ""
      Write-Host "  Next: connect this repo to Vercel" -ForegroundColor Cyan
      Write-Host "    1. Open https://vercel.com/new" -ForegroundColor DarkGray
      Write-Host "    2. Import 'bluetracetechnologies-dot/bluetracewebpage'" -ForegroundColor DarkGray
      Write-Host "    3. Click Deploy (no config changes needed — vercel.json present)" -ForegroundColor DarkGray
      Write-Host ""
    }
  }
}
