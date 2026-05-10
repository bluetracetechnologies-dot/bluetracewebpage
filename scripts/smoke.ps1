# Smoke-test every public route after `next start` (or any HTTP host).
# Usage: .\scripts\smoke.ps1            -> tests http://localhost:3000
#        .\scripts\smoke.ps1 -BaseUrl http://192.168.1.42:3000
param(
  [string]$BaseUrl = "http://localhost:3000"
)

$ErrorActionPreference = "Continue"
$ProgressPreference    = "SilentlyContinue"

$routes = @(
  "/",
  "/about",
  "/services",
  "/products",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
  "/favicon.svg",
  "/site.webmanifest",
  "/robots.txt",
  "/sitemap.xml",
  "/opengraph-image",
  "/this-page-does-not-exist"
)

Write-Host ""
Write-Host "  Bluetrace smoke test → $BaseUrl" -ForegroundColor Cyan
Write-Host "  ─────────────────────────────────────────────────────────────" -ForegroundColor DarkGray

$failures = 0
$expectedNotFound = "/this-page-does-not-exist"

foreach ($r in $routes) {
  $url = "$BaseUrl$r"
  $sw  = [System.Diagnostics.Stopwatch]::StartNew()
  try {
    $resp = Invoke-WebRequest -Uri $url -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 15 -ErrorAction Stop
    $sw.Stop()
    $code = [int]$resp.StatusCode
    $len  = $resp.RawContentLength
    $ok   = ($code -ge 200 -and $code -lt 400)
    $tag  = if ($ok) { "OK " } else { "BAD" }
    $col  = if ($ok) { "Green" } else { "Red" }
    if (-not $ok) { $failures++ }
    Write-Host ("    [{0}] {1,3}  {2,7} bytes  {3,5} ms  {4}" -f $tag, $code, $len, $sw.ElapsedMilliseconds, $r) -ForegroundColor $col
  } catch {
    $sw.Stop()
    $code = 0
    if ($_.Exception.Response) {
      $code = [int]$_.Exception.Response.StatusCode
    }
    $isExpected404 = ($r -eq $expectedNotFound -and $code -eq 404)
    $tag = if ($isExpected404) { "OK " } else { "BAD" }
    $col = if ($isExpected404) { "Green" } else { "Red" }
    if (-not $isExpected404) { $failures++ }
    Write-Host ("    [{0}] {1,3}  {2,7}        {3,5} ms  {4}" -f $tag, $code, "-", $sw.ElapsedMilliseconds, $r) -ForegroundColor $col
  }
}

Write-Host ""
if ($failures -eq 0) {
  Write-Host "  ✓ All routes healthy." -ForegroundColor Green
  Write-Host ""
  exit 0
} else {
  Write-Host "  ✗ $failures failing route(s)." -ForegroundColor Red
  Write-Host ""
  exit 1
}
