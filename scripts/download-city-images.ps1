# Download one image per city into src/assets/universities/{Country}/{City}/
# Run from project root: .\scripts\download-city-images.ps1

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$base = "src/assets/universities"
# Unsplash (w=800). Fallback: Picsum with seed so each city gets a different image.
$cities = @(
    @{ Country = "Austria";   City = "Vienna";     Url = "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80" },
    @{ Country = "Austria";   City = "Klagenfurt"; Url = "https://picsum.photos/seed/klagenfurt/800/500" },
    @{ Country = "Austria";   City = "Graz";       Url = "https://picsum.photos/seed/graz/800/500" },
    @{ Country = "Austria";   City = "Innsbruck"; Url = "https://picsum.photos/seed/innsbruck/800/500" },
    @{ Country = "Austria";   City = "Linz";       Url = "https://picsum.photos/seed/linz/800/500" },
    @{ Country = "Germany";   City = "Berlin";    Url = "https://picsum.photos/seed/berlin/800/500" },
    @{ Country = "Germany";   City = "Bonn";      Url = "https://picsum.photos/seed/bonn/800/500" },
    @{ Country = "Germany";   City = "Munich";    Url = "https://picsum.photos/seed/munich/800/500" },
    @{ Country = "Italy";     City = "Rome";      Url = "https://picsum.photos/seed/rome/800/500" },
    @{ Country = "Italy";     City = "Pavia";     Url = "https://picsum.photos/seed/pavia/800/500" },
    @{ Country = "Czech Republic"; City = "Prague"; Url = "https://picsum.photos/seed/prague/800/500" },
    @{ Country = "Poland";    City = "Warsaw";    Url = "https://picsum.photos/seed/warsaw/800/500" }
)

foreach ($c in $cities) {
    $dir = Join-Path $base (Join-Path $c.Country $c.City)
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    $outFile = Join-Path $dir "city.jpg"
    try {
        $ProgressPreference = "SilentlyContinue"
        Invoke-WebRequest -Uri $c.Url -OutFile $outFile -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 30
        Write-Host "OK: $($c.City)"
    } catch {
        Write-Host "Skip: $($c.City) - $($_.Exception.Message)"
    }
}
Write-Host "Done."
