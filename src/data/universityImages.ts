/**
 * University/city images from src/assets/universities/{country}/{city}/.
 * Structure: universities/Austria/Vienna/photo.jpg, universities/Germany/Berlin/photo.jpg, etc.
 * Each city folder can contain one or more images (jpg, png, webp, svg); one is picked per city.
 */
const glob = import.meta.glob<string>(
  "../assets/universities/*/*/*.{svg,jpg,jpeg,png,webp}",
  { eager: true, as: "url" }
);

/** Get city name from path: .../Country/City/file.ext → city (lowercase). */
function cityKeyFromPath(path: string): string {
  const segments = path.split(/[/\\]/).filter(Boolean);
  const cityFolder = segments[segments.length - 2]; // folder that contains the image file
  return (cityFolder ?? "").toLowerCase().trim();
}

/** Prefer non-SVG when multiple images exist for the same city. */
function byCityFromGlob(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const path of Object.keys(glob)) {
    const cityKey = cityKeyFromPath(path);
    if (!cityKey) continue;
    const url = glob[path];
    const isSvg = path.toLowerCase().endsWith(".svg");
    if (!(cityKey in map)) {
      map[cityKey] = url;
    } else if (!isSvg) {
      map[cityKey] = url;
    }
  }
  return map;
}

const byCity = byCityFromGlob();

const defaultImageUrl = Object.values(byCity)[0];

/**
 * Returns the URL for a university image. Pass the imageKey (city name lowercase) from the university.
 */
export function getUniversityImageUrl(imageKey: string | undefined): string | undefined {
  if (!imageKey) return undefined;
  const key = imageKey.toLowerCase().trim();
  return byCity[key] ?? defaultImageUrl;
}

/**
 * Returns URLs for the city gallery. With country/city folders, could be extended to list all images in that city folder.
 */
export function getUniversityCityImageUrls(imageKey: string | undefined, count = 3): string[] {
  const main = getUniversityImageUrl(imageKey);
  if (!main) return [];
  return Array.from({ length: count }, () => main);
}
