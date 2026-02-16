/**
 * Vienna universities gallery: load and group images from austria/vienna by filename prefix.
 * boku-wien-*, tu-wien-*, uni-wien-*, med-wien-*, vet-wien-*. Excludes city*, etc.
 */

const VIENNA_GALLERY_PREFIXES = {
  "boku-wien": {
    title: "University of Natural Resources and Life Sciences, Vienna (BOKU)",
  },
  "tu-wien": {
    title: "TU Wien",
  },
  "uni-wien": {
    title: "University of Vienna",
  },
  "med-wien": {
    title: "Medical University of Vienna",
  },
  "vet": {
    title: "University of Veterinary Medicine, Vienna",
  },
  "uaav": {
    title: "University of Music and Performing Arts Vienna",
  },
  "uaa": {
    title: "University of Applied Arts Vienna",
  },
  "ufav": {
    title: "Academy of Fine Arts Vienna",
  },
} as const;

type PrefixKey = keyof typeof VIENNA_GALLERY_PREFIXES;

const PREFIX_ORDER: PrefixKey[] = ["boku-wien", "tu-wien", "uni-wien", "med-wien", "vet", "uaav", "uaa", "ufav"];

function fileNameFromPath(path: string): string {
  const segments = path.split(/[/\\]/).filter(Boolean);
  return (segments[segments.length - 1] ?? "").toLowerCase();
}

function prefixAndNumber(filename: string): { prefix: PrefixKey; num: number } | null {
  for (const prefix of PREFIX_ORDER) {
    const withDash = prefix + "-";
    const withUnderscore = prefix + "_";
    const starts = filename.startsWith(withDash) || filename.startsWith(withUnderscore);
    if (!starts) continue;
    const rest = filename.startsWith(withDash)
      ? filename.slice(withDash.length)
      : filename.slice(withUnderscore.length);
    const match = rest.match(/^(\d+)/);
    if (match) return { prefix, num: parseInt(match[1], 10) };
  }
  return null;
}

const glob = import.meta.glob<string>(
  "../assets/universities/austria/vienna/*.{png,jpg,jpeg,webp}",
  { eager: true, as: "url" }
);

export interface ViennaUniversityGroup {
  prefix: PrefixKey;
  title: string;
  images: Array<{ url: string; alt: string; index: number }>;
}

const excludedFiles: string[] = [];
const byPrefix: Record<PrefixKey, Array<{ url: string; num: number }>> = {
  "boku-wien": [],
  "tu-wien": [],
  "uni-wien": [],
  "med-wien": [],
  "vet": [],
  "uaav": [],
  "uaa": [],
  "ufav": [],
};

for (const path of Object.keys(glob)) {
  const filename = fileNameFromPath(path);
  const parsed = prefixAndNumber(filename);
  const url = glob[path];
  if (!parsed) {
    excludedFiles.push(filename);
    continue;
  }
  byPrefix[parsed.prefix].push({ url, num: parsed.num });
}

for (const prefix of PREFIX_ORDER) {
  byPrefix[prefix].sort((a, b) => a.num - b.num);
}

if (excludedFiles.length > 0) {
  console.warn(
    "[Vienna gallery] Excluded files (not boku-wien-*, tu-wien-*, uni-wien-*, med-wien-*, vet-*, uaav-*, uaa_*, ufav-*):",
    excludedFiles.sort()
  );
}

export function getViennaGalleryGroups(): ViennaUniversityGroup[] {
  return PREFIX_ORDER.map((prefix) => {
    const entries = byPrefix[prefix];
    const title = VIENNA_GALLERY_PREFIXES[prefix].title;
    const images = entries.map((e, i) => ({
      url: e.url,
      alt: `${title} photo ${i + 1}`,
      index: i + 1,
    }));
    return { prefix, title, images };
  });
}

export { VIENNA_GALLERY_PREFIXES, PREFIX_ORDER };
