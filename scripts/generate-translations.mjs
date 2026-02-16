/**
 * Generates universityTranslations from universitiesParsed.json.
 * EN from parsed data; az/tr/ru get same content as placeholder until translated.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const jsonPath = path.join(root, "src", "data", "universitiesParsed.json");
const outPath = path.join(root, "src", "data", "universityTranslations.ts");

const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

function pickTranslation(u) {
  return {
    shortDescription: u.shortDescription,
    overview: u.overview,
    keyFacts: u.keyFacts,
    requirements: u.requirements,
    helpfulInfo: u.helpfulInfo,
    tuition: u.tuition,
    livingCosts: u.livingCosts,
    livingCostsBreakdown: u.livingCostsBreakdown,
    cityInfo: u.cityInfo,
    whyChoose: u.whyChoose,
  };
}

const translations = {};
for (const u of data) {
  const en = pickTranslation(u);
  translations[u.slug] = { en, az: en, tr: en, ru: en };
}

const header = `import type { Language } from "@/contexts/LanguageContext";

// Translation keys for university content
export interface UniversityTranslations {
  shortDescription: string;
  overview: string;
  keyFacts: string[];
  requirements: string[];
  helpfulInfo: string[];
  tuition?: string;
  livingCosts?: string;
  livingCostsBreakdown?: string[];
  cityInfo?: string;
  whyChoose?: string[];
}

type UniversitySlug = string;

// Translations for each university by slug (EN from info.txt; az/tr/ru placeholder until translated)
export const universityTranslations: Record<UniversitySlug, Partial<Record<Language, UniversityTranslations>>> =
`;

const footer = `
;

export function getUniversityTranslation(
  slug: string,
  language: Language,
  field: keyof UniversityTranslations
): any {
  const uniTranslations = universityTranslations[slug];
  if (!uniTranslations) return null;

  const langTranslations = uniTranslations[language];
  if (!langTranslations) {
    const enTranslations = uniTranslations.en;
    return enTranslations?.[field] ?? null;
  }

  return langTranslations[field] ?? null;
}
`;

const out = header + JSON.stringify(translations, null, 2) + footer;
fs.writeFileSync(outPath, out, "utf-8");
console.log("Written", outPath, "with", Object.keys(translations).length, "universities × 4 languages.");
