/**
 * Reads universitiesParsed.json and writes the universities array into universities.ts
 * Run after parse-universities.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const jsonPath = path.join(root, "src", "data", "universitiesParsed.json");
const tsPath = path.join(root, "src", "data", "universities.ts");

const header = `export type UniversityCategory = "Austria" | "Germany" | "Italy" | "Czech Republic" | "Poland";

export interface UniversityProgram {
  name: string;
  level: "Bachelor" | "Master" | "PhD";
  field: string;
  duration?: string;
  language?: string;
}

/** Reusable block for Austria: average student living costs. */
export const AUSTRIA_LIVING_COSTS = {
  range: "€850–€1,200/month typical range",
  noteVienna: "Vienna slightly more expensive",
  noteSmaller: "Smaller cities (Graz, Klagenfurt, Linz) cheaper",
  accommodation: { dorm: "€250–€450", sharedFlat: "€350–€600" },
  tuitionPublic: "~€726 per semester for non-EU students (public universities)",
};

export interface University {
  slug: string;
  name: string;
  country: UniversityCategory;
  city?: string;
  /** Key for local asset (city name lowercase). Resolved via getUniversityImageUrl(). */
  imageKey?: string;
  shortDescription: string;
  overview: string;
  keyFacts: string[];
  programs: UniversityProgram[];
  requirements: string[];
  helpfulInfo: string[];
  website?: string;
  /** e.g. "~€726.72 per semester for non-EU students" */
  tuition?: string;
  /** e.g. "~€900–€1,300/month average" */
  livingCosts?: string;
  /** Optional breakdown: accommodation, food, etc. */
  livingCostsBreakdown?: string[];
  /** Short city/location info for the card. */
  cityInfo?: string;
  /** "Why students choose this university" bullets. */
  whyChoose?: string[];
}

/** Display order for countries: Austria (focus), then Germany, Italy, Czech Republic, Poland. */
export const COUNTRY_ORDER: UniversityCategory[] = [
  "Austria",
  "Germany",
  "Italy",
  "Czech Republic",
  "Poland",
];

`;

const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
const out = header + "export const universities: University[] = " + JSON.stringify(data, null, 2) + ";\n";
fs.writeFileSync(tsPath, out, "utf-8");
console.log("Written", tsPath, "with", data.length, "universities.");
