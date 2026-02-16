/**
 * University/city images from src/assets/universities/{country}/{city}/.
 * Structure: universities/austria/vienna/photo.jpg, universities/germany/berlin/photo.jpg, etc.
 * Vienna: city*, boku-wien-*, tu-wien-*, uni-wien-*, med-wien-*, vet-*, uaa_*, uaav-*, ufav-*. Graz: ug-*, gut-*, medg-*, umpg-*, city*. Innsbruck: uoi-*, meduoi-*, city*. Klagenfurt: aau-*, city*. Leoben: leo-*. Linz: jku-*, uoa-*, abu-*, uofe-*, city*. Salzburg: uos-* (University of Salzburg), city*. Other: e.g. feldkirch/vue-*.
 */
const glob = import.meta.glob<string>(
  "../assets/universities/*/*/*.{svg,jpg,jpeg,png,webp,avif,jfif}",
  { eager: true, as: "url" }
);

/** Get city name from path: .../Country/City/file.ext → city (lowercase). */
function cityKeyFromPath(path: string): string {
  const segments = path.split(/[/\\]/).filter(Boolean);
  const cityFolder = segments[segments.length - 2];
  return (cityFolder ?? "").toLowerCase().trim();
}

/** Get filename (no ext) from path for Vienna sub-keys. */
function fileNameFromPath(path: string): string {
  const segments = path.split(/[/\\]/).filter(Boolean);
  const file = segments[segments.length - 1] ?? "";
  return file.replace(/\.[^.]+$/, "").toLowerCase();
}

/** Allowed Vienna filename prefixes => imageKey. uaav before uaa so uaav-* matches first. */
const VIENNA_PREFIX_TO_KEY: Record<string, string> = {
  "boku-wien": "vienna-boku",
  "tu-wien": "vienna-tu",
  "uni-wien": "vienna-uni",
  "med-wien": "vienna-med",
  "vet": "vienna-vet",
  "uaav": "vienna-uaav",
  "uaa": "vienna-uaa",
  "ufav": "vienna-ufav",
};

/**
 * For Vienna: map filename prefix to imageKey only for allowed prefixes.
 * For Graz: umpg-*, medg-*, gut-*, ug-*. For Innsbruck: uoi-* (University of Innsbruck), meduoi-* (Medical Univ. Innsbruck), city* (all Innsbruck unis). Other non-city in Graz/Innsbruck not used as main image.
 */
function viennaKey(cityKey: string, fileName: string): string | null {
  if (cityKey === "vienna") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("boku-00")) return "vienna-boku";
    if (fileName.startsWith("tu-00")) return "vienna-tu";
    if (fileName.startsWith("uni-00")) return "vienna-uni";
    if (fileName.startsWith("med-00")) return "vienna-med";
    for (const [prefix, key] of Object.entries(VIENNA_PREFIX_TO_KEY)) {
      if (fileName.startsWith(prefix)) return key;
    }
    return null;
  }
  if (cityKey === "graz") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("umpg")) return "graz-umpg";
    if (fileName.startsWith("medg")) return "graz-medg";
    if (fileName.startsWith("gut")) return "graz-gut";
    if (fileName.startsWith("ug")) return "graz-ug";
    return null;
  }
  if (cityKey === "innsbruck") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("meduoi")) return "innsbruck-meduoi";
    if (fileName.startsWith("uoi")) return "innsbruck-uoi";
    return null;
  }
  if (cityKey === "klagenfurt") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("aau")) return "klagenfurt-aau";
    return null;
  }
  if (cityKey === "leoben") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("leo")) return "leoben";
    return null;
  }
  if (cityKey === "linz") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("jku")) return "linz-jku";
    if (fileName.startsWith("uoa")) return "linz-uoa";
    if (fileName.startsWith("abu")) return "linz-abu";
    if (fileName.startsWith("uofe")) return "linz-uofe";
    return null;
  }
  if (cityKey === "salzburg") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("uos")) return "salzburg-uos";
    return null;
  }
  if (cityKey === "aach") {
    if (fileName.startsWith("city")) return null;
    return "aachen";
  }
  if (cityKey === "berlin") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("freib")) return "berlin-freib";
    if (fileName.startsWith("tu")) return "berlin-tu";
    return null;
  }
  if (cityKey === "bonn") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("bonn")) return "bonn";
    return null;
  }
  if (cityKey === "dotmund") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("tud")) return "dortmund";
    return null;
  }
  if (cityKey === "dusseldorf") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("hhu")) return "dsseldorf";
    return null;
  }
  if (cityKey === "hambourg") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("hu")) return "hamburg";
    return null;
  }
  if (cityKey === "marbourg") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("marb")) return "marburg";
    return null;
  }
  if (cityKey === "munich") {
    if (fileName.startsWith("city")) return null;
    if (fileName.startsWith("ml")) return "munich";
    return null;
  }
  return cityKey;
}

/** Map imageKey -> single image URL. Vienna: only boku-wien-, tu-wien-, uni-wien-, med-wien-. Other cities: non-city files only. */
function byKeyFromGlob(): Record<string, string> {
  const byKey: Record<string, Array<{ path: string; url: string }>> = {};
  for (const path of Object.keys(glob)) {
    const cityKey = cityKeyFromPath(path);
    if (!cityKey) continue;
    const fileName = fileNameFromPath(path);
    if (fileName.startsWith("city")) continue;
    const key = viennaKey(cityKey, fileName);
    if (key === null) continue;
    const url = glob[path];
    const isSvg = path.toLowerCase().endsWith(".svg");
    if (!byKey[key]) byKey[key] = [];
    byKey[key].push({ path, url });
  }
  const map: Record<string, string> = {};
  for (const [key, entries] of Object.entries(byKey)) {
    entries.sort((a, b) => a.path.localeCompare(b.path));
    const nonSvg = entries.filter((e) => !e.path.toLowerCase().endsWith(".svg"));
    const list = nonSvg.length > 0 ? nonSvg : entries;
    if (list.length === 0) continue;
    let coverIndex = 0;
    const vienna00Covers: Record<string, [string, string]> = {
      "vienna-boku": ["boku-00", "boku-wien-00"],
      "vienna-tu": ["tu-00", "tu-wien-00"],
      "vienna-uni": ["uni-00", "uni-wien-00"],
      "vienna-med": ["med-00", "med-wien-00"],
    };
    if (key in vienna00Covers) {
      const patterns = vienna00Covers[key];
      const cov = list.find((e) => patterns.some((p) => e.path.includes(p)));
      map[key] = cov ? cov.url : list[0].url;
      continue;
    }
    if (key === "vienna-uaav" && list.length > 4) coverIndex = 4;
    else if (key === "feldkirch" && list.length > 4) coverIndex = 4;
    else if (key === "vienna-vet") {
      const vet00 = list.find((e) => e.path.includes("vet-00"));
      if (vet00) map[key] = vet00.url;
      else map[key] = list[0].url;
      continue;
    }
    else if (key === "klagenfurt-aau") {
      const aau0 = list.find((e) => e.path.includes("aau-0"));
      map[key] = aau0 ? aau0.url : list[0].url;
      continue;
    }
    else if (key === "leoben") {
      const leo1 = list.find((e) => e.path.includes("leo-1"));
      map[key] = leo1 ? leo1.url : list[0].url;
      continue;
    }
    const coverWith1 = list.find((e) => /-1\./i.test(e.path));
    map[key] = (coverWith1 ?? list[coverIndex]).url;
  }
  return map;
}

/** Map city key -> list of city gallery image URLs (filename starts with "city"), ordered by filename. */
function cityGalleryFromGlob(): Record<string, string[]> {
  const map: Record<string, Array<{ path: string; url: string }>> = {};
  for (const path of Object.keys(glob)) {
    const cityKey = cityKeyFromPath(path);
    if (!cityKey) continue;
    const fileName = fileNameFromPath(path);
    const url = glob[path];
    if (fileName.startsWith("city")) {
      const galleryKey =
        cityKey === "aach" ? "aachen"
        : cityKey === "dotmund" ? "dortmund"
        : cityKey === "dusseldorf" ? "dsseldorf"
        : cityKey === "hambourg" ? "hamburg"
        : cityKey === "marbourg" ? "marburg"
        : cityKey;
      if (!map[galleryKey]) map[galleryKey] = [];
      map[galleryKey].push({ path, url });
    }
  }
  const out: Record<string, string[]> = {};
  for (const key of Object.keys(map)) {
    map[key].sort((a, b) => a.path.localeCompare(b.path));
    out[key] = map[key].map((x) => x.url);
  }
  return out;
}

/** Vienna imageKey -> filename prefix (inverse of VIENNA_PREFIX_TO_KEY) for gallery grouping. */
const VIENNA_KEY_PREFIX: Record<string, string> = Object.fromEntries(
  Object.entries(VIENNA_PREFIX_TO_KEY).map(([p, k]) => [k, p])
);

/** Vienna cover images: boku-00, tu-00, uni-00, med-00 (also included in gallery). */
const VIENNA_00_PREFIX: Record<string, string> = {
  "vienna-boku": "boku-00",
  "vienna-tu": "tu-00",
  "vienna-uni": "uni-00",
  "vienna-med": "med-00",
};

/** Map imageKey -> list of only that university's image URLs (by filename prefix), ordered. */
function universityGalleryFromGlob(): Record<string, string[]> {
  const map: Record<string, Array<{ path: string; url: string }>> = {};
  for (const path of Object.keys(glob)) {
    const cityKey = cityKeyFromPath(path);
    if (!cityKey) continue;
    const fileName = fileNameFromPath(path);
    if (fileName.startsWith("city")) continue;
    const url = glob[path];
    if (cityKey === "vienna") {
      for (const [key, prefix] of Object.entries(VIENNA_KEY_PREFIX)) {
        const altPrefix = VIENNA_00_PREFIX[key];
        const matches = fileName.startsWith(prefix) || (!!altPrefix && fileName.startsWith(altPrefix));
        if (matches) {
          if (!map[key]) map[key] = [];
          map[key].push({ path, url });
          break;
        }
      }
    } else if (cityKey === "graz") {
      if (fileName.startsWith("umpg")) {
        if (!map["graz-umpg"]) map["graz-umpg"] = [];
        map["graz-umpg"].push({ path, url });
      } else if (fileName.startsWith("medg")) {
        if (!map["graz-medg"]) map["graz-medg"] = [];
        map["graz-medg"].push({ path, url });
      } else if (fileName.startsWith("gut")) {
        if (!map["graz-gut"]) map["graz-gut"] = [];
        map["graz-gut"].push({ path, url });
      } else if (fileName.startsWith("ug")) {
        if (!map["graz-ug"]) map["graz-ug"] = [];
        map["graz-ug"].push({ path, url });
      }
    } else if (cityKey === "innsbruck") {
      if (fileName.startsWith("uoi")) {
        if (!map["innsbruck-uoi"]) map["innsbruck-uoi"] = [];
        map["innsbruck-uoi"].push({ path, url });
      } else if (fileName.startsWith("meduoi")) {
        if (!map["innsbruck-meduoi"]) map["innsbruck-meduoi"] = [];
        map["innsbruck-meduoi"].push({ path, url });
      }
    } else if (cityKey === "klagenfurt" && fileName.startsWith("aau")) {
      if (!map["klagenfurt-aau"]) map["klagenfurt-aau"] = [];
      map["klagenfurt-aau"].push({ path, url });
    } else if (cityKey === "leoben" && fileName.startsWith("leo")) {
      if (!map["leoben"]) map["leoben"] = [];
      map["leoben"].push({ path, url });
    } else if (cityKey === "linz") {
      if (fileName.startsWith("jku")) {
        if (!map["linz-jku"]) map["linz-jku"] = [];
        map["linz-jku"].push({ path, url });
      } else if (fileName.startsWith("uoa")) {
        if (!map["linz-uoa"]) map["linz-uoa"] = [];
        map["linz-uoa"].push({ path, url });
      } else if (fileName.startsWith("abu")) {
        if (!map["linz-abu"]) map["linz-abu"] = [];
        map["linz-abu"].push({ path, url });
      } else if (fileName.startsWith("uofe")) {
        if (!map["linz-uofe"]) map["linz-uofe"] = [];
        map["linz-uofe"].push({ path, url });
      }
    } else if (cityKey === "salzburg" && fileName.startsWith("uos")) {
      if (!map["salzburg-uos"]) map["salzburg-uos"] = [];
      map["salzburg-uos"].push({ path, url });
    } else if (cityKey === "aach") {
      if (!map["aachen"]) map["aachen"] = [];
      map["aachen"].push({ path, url });
    } else if (cityKey === "berlin") {
      if (fileName.startsWith("freib")) {
        if (!map["berlin-freib"]) map["berlin-freib"] = [];
        map["berlin-freib"].push({ path, url });
      } else if (fileName.startsWith("tu")) {
        if (!map["berlin-tu"]) map["berlin-tu"] = [];
        map["berlin-tu"].push({ path, url });
      }
    } else if (cityKey === "bonn" && fileName.startsWith("bonn")) {
      if (!map["bonn"]) map["bonn"] = [];
      map["bonn"].push({ path, url });
    } else if (cityKey === "dotmund" && fileName.startsWith("tud")) {
      if (!map["dortmund"]) map["dortmund"] = [];
      map["dortmund"].push({ path, url });
    } else if (cityKey === "dusseldorf" && fileName.startsWith("hhu")) {
      if (!map["dsseldorf"]) map["dsseldorf"] = [];
      map["dsseldorf"].push({ path, url });
    } else if (cityKey === "hambourg" && fileName.startsWith("hu")) {
      if (!map["hamburg"]) map["hamburg"] = [];
      map["hamburg"].push({ path, url });
    } else if (cityKey === "marbourg" && fileName.startsWith("marb")) {
      if (!map["marburg"]) map["marburg"] = [];
      map["marburg"].push({ path, url });
    } else if (cityKey === "munich" && fileName.startsWith("ml")) {
      if (!map["munich"]) map["munich"] = [];
      map["munich"].push({ path, url });
    } else if (cityKey !== "graz" && cityKey !== "innsbruck" && cityKey !== "klagenfurt" && cityKey !== "leoben" && cityKey !== "linz" && cityKey !== "salzburg") {
      if (!map[cityKey]) map[cityKey] = [];
      map[cityKey].push({ path, url });
    }
  }
  const out: Record<string, string[]> = {};
  for (const key of Object.keys(map)) {
    map[key].sort((a, b) => a.path.localeCompare(b.path));
    out[key] = map[key].map((x) => x.url);
  }
  return out;
}

const byKey = byKeyFromGlob();
const cityGallery = cityGalleryFromGlob();
const universityGallery = universityGalleryFromGlob();

/** City base from imageKey: "vienna-boku" -> "vienna", "graz-ug" -> "graz", "berlin-freib" -> "berlin", etc. */
function cityBaseFromImageKey(imageKey: string | undefined): string | undefined {
  if (!imageKey) return undefined;
  const key = imageKey.toLowerCase().trim();
  if (key.startsWith("vienna-")) return "vienna";
  if (key.startsWith("graz-")) return "graz";
  if (key.startsWith("innsbruck-")) return "innsbruck";
  if (key.startsWith("klagenfurt-")) return "klagenfurt";
  if (key.startsWith("linz-")) return "linz";
  if (key.startsWith("salzburg-")) return "salzburg";
  if (key.startsWith("berlin-")) return "berlin";
  return key;
}

/**
 * Returns the URL for a university image. Pass the imageKey from the university
 * (e.g. "vienna-boku", "vienna-tu", "vienna-uni", "vienna-med" for Vienna; "vienna" uses city images).
 * For imageKey "vienna" (e.g. Medical University of Vienna), returns first Vienna city image.
 */
export function getUniversityImageUrl(imageKey: string | undefined): string | undefined {
  if (!imageKey) return undefined;
  const key = imageKey.toLowerCase().trim();
  const url = byKey[key] ?? (key !== "vienna" && key !== "graz" && key !== "innsbruck" && key !== "klagenfurt" && key !== "linz" && key !== "salzburg" ? byKey[cityBaseFromImageKey(key) ?? ""] : undefined);
  if (url) return url;
  if (key === "vienna") return cityGallery["vienna"]?.length ? cityGallery["vienna"][0] : undefined;
  if (key === "graz") return cityGallery["graz"]?.length ? cityGallery["graz"][0] : undefined;
  if (key === "innsbruck") return cityGallery["innsbruck"]?.length ? cityGallery["innsbruck"][0] : undefined;
  if (key === "klagenfurt") return cityGallery["klagenfurt"]?.length ? cityGallery["klagenfurt"][0] : undefined;
  if (key === "linz") return cityGallery["linz"]?.length ? cityGallery["linz"][0] : undefined;
  if (key === "salzburg") return cityGallery["salzburg"]?.length ? cityGallery["salzburg"][0] : undefined;
  if (key === "berlin") return cityGallery["berlin"]?.length ? cityGallery["berlin"][0] : undefined;
  if (key === "bonn") return cityGallery["bonn"]?.length ? cityGallery["bonn"][0] : undefined;
  if (key === "dortmund") return cityGallery["dortmund"]?.length ? cityGallery["dortmund"][0] : undefined;
  if (key === "dsseldorf") return cityGallery["dsseldorf"]?.length ? cityGallery["dsseldorf"][0] : undefined;
  if (key === "hamburg") return cityGallery["hamburg"]?.length ? cityGallery["hamburg"][0] : undefined;
  if (key === "marburg") return cityGallery["marburg"]?.length ? cityGallery["marburg"][0] : undefined;
  if (key === "munich") return cityGallery["munich"]?.length ? cityGallery["munich"][0] : undefined;
  return undefined;
}

/**
 * Returns URLs for the city gallery. For Vienna (and any city with city* images), returns those images.
 * Otherwise returns the main university image repeated.
 */
export function getUniversityCityImageUrls(imageKey: string | undefined, count = 6): string[] {
  const base = cityBaseFromImageKey(imageKey);
  const gallery = base ? cityGallery[base] : [];
  if (gallery.length > 0) return gallery.slice(0, count);
  const main = getUniversityImageUrl(imageKey);
  if (!main) return [];
  return Array.from({ length: count }, () => main);
}

function isViennaKey(key: string): boolean {
  return key === "vienna" || key.startsWith("vienna-");
}

function isGrazKey(key: string): boolean {
  return key === "graz" || key.startsWith("graz-");
}

function isInnsbruckKey(key: string): boolean {
  return key === "innsbruck" || key.startsWith("innsbruck-");
}

function isKlagenfurtKey(key: string): boolean {
  return key === "klagenfurt" || key.startsWith("klagenfurt-");
}

function isLinzKey(key: string): boolean {
  return key === "linz" || key.startsWith("linz-");
}

function isSalzburgKey(key: string): boolean {
  return key === "salzburg" || key.startsWith("salzburg-");
}

function isBerlinKey(key: string): boolean {
  return key === "berlin" || key.startsWith("berlin-");
}

/**
 * Returns gallery images. Vienna/Graz/Innsbruck/Klagenfurt/Linz/Salzburg: include all city* images; dedicated keys get uni images first then city.
 */
export function getUniversityGalleryUrls(imageKey: string | undefined): string[] {
  if (!imageKey) return [];
  const key = imageKey.toLowerCase().trim();
  const viennaCity = cityGallery["vienna"] ?? [];
  const grazCity = cityGallery["graz"] ?? [];
  const innsbruckCity = cityGallery["innsbruck"] ?? [];
  const klagenfurtCity = cityGallery["klagenfurt"] ?? [];
  const leobenCity = cityGallery["leoben"] ?? [];
  const feldkirchCity = cityGallery["feldkirch"] ?? [];
  const linzCity = cityGallery["linz"] ?? [];
  const salzburgCity = cityGallery["salzburg"] ?? [];
  const berlinCity = cityGallery["berlin"] ?? [];
  const aachenCity = cityGallery["aachen"] ?? [];
  const bonnCity = cityGallery["bonn"] ?? [];
  const dortmundCity = cityGallery["dortmund"] ?? [];
  const dsseldorfCity = cityGallery["dsseldorf"] ?? [];
  const hamburgCity = cityGallery["hamburg"] ?? [];
  const marburgCity = cityGallery["marburg"] ?? [];
  const munichCity = cityGallery["munich"] ?? [];
  const urls = universityGallery[key];
  if (key === "vienna") return viennaCity;
  if (key === "graz") return grazCity;
  if (key === "innsbruck") return innsbruckCity;
  if (key === "klagenfurt") return klagenfurtCity;
  if (key === "leoben") return [...(urls ?? []), ...leobenCity];
  if (key === "feldkirch") return [...(urls ?? []), ...feldkirchCity];
  if (key === "linz") return linzCity;
  if (key === "salzburg") return salzburgCity;
  if (key === "berlin") return berlinCity;
  if (urls && urls.length > 0 && isViennaKey(key)) return [...urls, ...viennaCity];
  if (urls && urls.length > 0 && isGrazKey(key)) return [...urls, ...grazCity];
  if (urls && urls.length > 0 && isInnsbruckKey(key)) return [...urls, ...innsbruckCity];
  if (urls && urls.length > 0 && isKlagenfurtKey(key)) return [...urls, ...klagenfurtCity];
  if (urls && urls.length > 0 && isLinzKey(key)) return [...urls, ...linzCity];
  if (urls && urls.length > 0 && isSalzburgKey(key)) return [...urls, ...salzburgCity];
  if (urls && urls.length > 0 && isBerlinKey(key)) return [...urls, ...berlinCity];
  if (urls && urls.length > 0 && key === "aachen") return [...urls, ...aachenCity];
  if (urls && urls.length > 0 && key === "bonn") return [...urls, ...bonnCity];
  if (urls && urls.length > 0 && key === "dortmund") return [...urls, ...dortmundCity];
  if (urls && urls.length > 0 && key === "dsseldorf") return [...urls, ...dsseldorfCity];
  if (urls && urls.length > 0 && key === "hamburg") return [...urls, ...hamburgCity];
  if (urls && urls.length > 0 && key === "marburg") return [...urls, ...marburgCity];
  if (urls && urls.length > 0 && key === "munich") return [...urls, ...munichCity];
  if (urls && urls.length > 0) return urls;
  const main = getUniversityImageUrl(imageKey);
  return main ? [main] : [];
}
