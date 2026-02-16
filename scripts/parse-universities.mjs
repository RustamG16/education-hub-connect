/**
 * Parses src/assets/universities/info.txt into University-shaped objects.
 * Run: node scripts/parse-universities.mjs
 * Output: writes src/data/universitiesParsed.json (for inspection) and does not overwrite .ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const inputPath = path.join(root, "src", "assets", "universities", "info.txt");
const outputPath = path.join(root, "src", "data", "universitiesParsed.json");

// Patterns that indicate the start of a new university block (line must be reasonably short)
const UNIVERSITY_START = /^(University of |TU Wien|TU Graz|Medical University|Johannes Kepler|Graz University|University of Natural|University of Veterinary|University of Applied|University of Music|Academy of Fine|University of Art|Anton Bruckner|Vorarlberg University|University of Education Upper|Freie Universität|Ludwig-Maximilians|Rheinische Friedrich|Sapienza Università|Technische Universität Berlin|Technische Universität Dortmund|Heinrich Heine|University of Hamburg|Philipps-Universität|RWTH Aachen|University of Cologne|Charles University|Université Paris|University of Bologna|University of Oslo)/i;

function slugify(name) {
  return name
    .replace(/\s*\([^)]*\)\s*/g, "")
    .trim()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function inferCountry(address, cityLine) {
  if (!address) {
    if (cityLine) {
      const c = (cityLine.split("—")[0] || "").trim().toLowerCase();
      if (["vienna", "innsbruck", "graz", "linz", "salzburg", "klagenfurt", "leoben", "feldkirch"].includes(c)) return "Austria";
      if (["berlin", "munich", "bonn", "dortmund", "düsseldorf", "hamburg", "marburg", "aachen", "cologne", "köln"].includes(c)) return "Germany";
      if (["rome", "bologna"].includes(c)) return "Italy";
      if (c === "prague") return "Czech Republic";
      if (c.includes("paris") || c.includes("saclay") || c.includes("orsay")) return "France";
      if (c === "oslo") return "Norway";
    }
    return "Austria";
  }
  const a = address.toLowerCase();
  if (a.includes("austria")) return "Austria";
  if (a.includes("germany")) return "Germany";
  if (a.includes("italy")) return "Italy";
  if (a.includes("czech")) return "Czech Republic";
  if (a.includes("france")) return "France";
  if (a.includes("norway")) return "Norway";
  return inferCountry(null, cityLine);
}

function inferCity(cityLine) {
  if (!cityLine) return undefined;
  const match = cityLine.match(/^([^—]+)—/);
  return match ? match[1].trim() : undefined;
}

const SKIP_PROGRAM_PREFIXES = /^(Some in|Many in|Others in|Various in|Full list|○\s*Bachelor|○\s*Master|Bachelor's \(undergraduate|Master's \(graduate|Admission|Visa\/)/i;
const DESCRIPTIVE_PROGRAM = /require (motivation|specific)|prerequisites\.?$/i;
const SECTION_HEADER = /\):\s*$|typically (6|4) semesters\)|typically 3 years|\. Examples:?\s*$|^Bachelor's \(typically/i;

function extractPrograms(text) {
  const programs = [];
  const lines = text.split(/\n/);
  for (const line of lines) {
    const trimmed = line.replace(/^[●○\t]+/, "").trim();
    if (!trimmed || trimmed.length > 95) continue;
    if (SKIP_PROGRAM_PREFIXES.test(trimmed) || DESCRIPTIVE_PROGRAM.test(trimmed) || SECTION_HEADER.test(trimmed)) continue;
    const ma = trimmed.match(/^(.+?)\s*\((M\.?A\.?|M\.?Sc\.?|B\.?A\.?|B\.?Sc\.?)\)/i);
    if (ma) {
      const level = /\b(B\.?A\.?|B\.?Sc\.?)\b/i.test(ma[2]) ? "Bachelor" : "Master";
      const progName = `${ma[1].trim()} (${ma[2]})`;
      if (progName.length <= 95) programs.push({ name: progName, level, field: "Various", duration: level === "Bachelor" ? "3 years" : "2 years", language: "English" });
    } else if (!trimmed.startsWith("Full list") && !trimmed.startsWith("Many ") && !trimmed.startsWith("Admission") && !trimmed.startsWith("Visa/")) {
      const level = /\b(Bachelor|B\.?A\.?|B\.?Sc\.?)\b/i.test(trimmed) ? "Bachelor" : "Master";
      if (programs.length < 25) programs.push({ name: trimmed, level, field: "Various", duration: "2 years", language: "English" });
    }
  }
  return programs.slice(0, 20);
}

function splitIntoBlocks(content) {
  const lines = content.split(/\n/);
  const blocks = [];
  let current = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isStart = UNIVERSITY_START.test(line) && line.length < 150 && !line.startsWith("Address:");
    if (isStart && current.length > 0) {
      blocks.push(current);
      current = [];
    }
    current.push(line);
  }
  if (current.length > 0) blocks.push(current);
  return blocks;
}

function parseBlock(lines) {
  const text = lines.join("\n");
  const name = (lines[0] || "").trim();
  if (!name) return null;

  const cityLine = lines[1] || "";
  const city = inferCity(cityLine);

  let address = "";
  let contact = "";
  let website = "";
  let whyChoose = "";
  let englishBach = "";
  let englishMaster = "";
  let admission = "";
  let tuition = "";
  let notes = "";

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("Address:")) address = line.replace(/^Address:\s*/, "").trim();
    else if (line.startsWith("Contact:")) contact = line.replace(/^Contact:\s*/, "").trim();
    else if (line.startsWith("Official Website:")) website = line.replace(/^Official Website:\s*/, "").trim();
    else if (line.startsWith("Why Choose This University?:")) whyChoose = line.replace(/^Why Choose This University?:\s*/, "").trim();
    else if (line.startsWith("English-taught Bachelor's:") || line.startsWith("English-taught Bachelor's/Master's:")) {
      englishBach = line.replace(/^English-taught (Bachelor's|Bachelor's\/Master's):\s*/, "").trim();
      i++;
      while (i < lines.length && !lines[i].match(/^(English-taught Master's:|Admission|Tuition|Notes:|Visa\/)/) && !UNIVERSITY_START.test(lines[i])) {
        englishBach += " " + lines[i].trim();
        i++;
      }
      i--;
    } else if (line.startsWith("English-taught Master's:") || line.startsWith("English-taught programs")) {
      englishMaster = line.replace(/^English-taught (Master's|programs).*:\s*/, "").trim();
      const masterLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("Admission") && !lines[i].startsWith("Tuition") && !lines[i].startsWith("Notes:") && !lines[i].startsWith("Visa/") && !UNIVERSITY_START.test(lines[i])) {
        masterLines.push(lines[i]);
        i++;
      }
      englishMaster += "\n" + masterLines.join("\n");
      i--;
    } else if (line.startsWith("Admission (non-EU):") || line.startsWith("Admission Requirements") || line.startsWith("Admission:")) {
      const key = line.match(/^Admission[^:]*:\s*/);
      admission = line.replace(/^Admission[^:]*:\s*/, "").trim();
      i++;
      while (i < lines.length && !lines[i].startsWith("Tuition") && !lines[i].startsWith("Notes:") && !lines[i].startsWith("Visa/") && !UNIVERSITY_START.test(lines[i])) {
        admission += " " + lines[i].trim();
        i++;
      }
      i--;
    } else if (line.startsWith("Tuition (non-EU):") || line.startsWith("Tuition:")) {
      tuition = line.replace(/^Tuition[^:]*:\s*/, "").trim();
    } else if (line.startsWith("Notes:")) {
      notes = line.replace(/^Notes:\s*/, "").trim();
    }
    i++;
  }

  const country = inferCountry(address, cityLine);
  const slug = slugify(name);
  let imageKey = city ? city.toLowerCase().replace(/\s/g, "-").replace(/[^a-z0-9-]/g, "") : undefined;
  if (imageKey === "vienna") {
    if (/Natural Resources|BOKU/i.test(name)) imageKey = "vienna-boku";
    else if (/^TU Wien|Vienna University of Technology/i.test(name)) imageKey = "vienna-tu";
    else if (/^University of Vienna\b/i.test(name)) imageKey = "vienna-uni";
    else if (/Medical University of Vienna|Medizinische Universität Wien/i.test(name)) imageKey = "vienna-med";
    else if (/Veterinary Medicine/i.test(name)) imageKey = "vienna-vet";
    else if (/Applied Arts Vienna|Angewandte/i.test(name)) imageKey = "vienna-uaa";
    else if (/Music and Performing Arts Vienna|mdw/i.test(name)) imageKey = "vienna-uaav";
    else if (/Academy of Fine Arts Vienna|Akademie der bildenden Künste/i.test(name)) imageKey = "vienna-ufav";
  }
  if (imageKey === "graz") {
    if (/^University of Graz\b/i.test(name)) imageKey = "graz-ug";
    else if (/Graz University of Technology|TU Graz|tugraz/i.test(name)) imageKey = "graz-gut";
    else if (/Medical University of Graz|Medizinische Universität Graz/i.test(name)) imageKey = "graz-medg";
    else if (/Music and Performing Arts Graz|Kunstuniversität Graz/i.test(name)) imageKey = "graz-umpg";
  }
  if (imageKey === "innsbruck") {
    if (/^University of Innsbruck\b/i.test(name)) imageKey = "innsbruck-uoi";
    else if (/Medical University of Innsbruck|Medizinische Universität Innsbruck/i.test(name)) imageKey = "innsbruck-meduoi";
  }
  if (imageKey === "klagenfurt" && /^University of Klagenfurt\b|Alpen-Adria-Universität/i.test(name)) imageKey = "klagenfurt-aau";
  if (imageKey === "linz") {
    if (/Johannes Kepler|JKU/i.test(name)) imageKey = "linz-jku";
    else if (/University of Art and Design Linz|Kunstuniversität Linz|Kunstuni/i.test(name)) imageKey = "linz-uoa";
    else if (/Anton Bruckner|Bruckner.*University/i.test(name)) imageKey = "linz-abu";
    else if (/University of Education Upper Austria|Pädagogische Hochschule/i.test(name)) imageKey = "linz-uofe";
  }
  if (imageKey === "salzburg" && /^University of Salzburg\b|Paris-Lodron-Universität/i.test(name)) imageKey = "salzburg-uos";

  const cityPara = cityLine.replace(/^[^—]+—\s*/, "").trim();
  const whyClean = (whyChoose || "").replace(/^Why Choose This University\?\s*:\s*/i, "").trim();
  let shortDesc = whyClean ? whyClean.split(/\.\s+/).slice(0, 2).join(". ").trim().replace(/\.+$/, "") + "." : cityPara.slice(0, 280) + "...";
  const lastPeriod = shortDesc.slice(0, 320).lastIndexOf(".");
  if (lastPeriod > 200) shortDesc = shortDesc.slice(0, lastPeriod + 1);
  else if (shortDesc.length > 320) shortDesc = shortDesc.slice(0, 317).trim() + "...";
  const shortDescription = shortDesc;
  const overview = [cityPara, whyChoose].filter(Boolean).join(" ");
  const keyFacts = [];
  if (tuition) keyFacts.push(tuition);
  if (cityPara.match(/€[0-9,–-]+/)) keyFacts.push("Living: " + (cityPara.match(/~?€[0-9,–-]+[^.;)]*/)?.[0] || cityPara.slice(0, 80)));
  if (whyClean) keyFacts.push(whyClean.slice(0, 120) + (whyClean.length > 120 ? "…" : ""));

  const requirements = admission
    ? admission
        .replace(/\s*●\s*/g, "\n")
        .split(/\n/)
        .map((s) => s.trim())
        .filter((s) => s.length > 10)
        .slice(0, 8)
    : [];

  const helpfulInfo = [notes, contact].filter(Boolean);
  if (address) helpfulInfo.unshift(`Address: ${address}`);

  const whyChooseBullets = whyClean
    ? whyClean
        .split(/[.;]/)
        .map((s) => s.trim())
        .filter((s) => s.length > 15)
        .slice(0, 5)
    : [];

  const programText = englishMaster || englishBach;
  const programs = extractPrograms(programText);
  if (programs.length === 0 && (englishMaster || englishBach)) {
    programs.push({ name: "Various English-taught programmes", level: "Master", field: "Various", duration: "2 years", language: "English" });
  }

  let websiteUrl = website;
  if (websiteUrl) {
    const m = websiteUrl.match(/(https?:\/\/)?(www\.[a-z0-9.-]+)/i);
    websiteUrl = m ? (m[1] || "https://") + m[2] : (websiteUrl.startsWith("http") ? websiteUrl : "https://" + websiteUrl.split(/\s/)[0]);
  }

  let cityInfoTrim = cityPara.slice(0, 520);
  const lastCityPeriod = cityInfoTrim.lastIndexOf(".");
  if (lastCityPeriod > 300) cityInfoTrim = cityInfoTrim.slice(0, lastCityPeriod + 1);
  return {
    slug,
    name: name.replace(/\s*\([^)]*\)\s*$/, "").trim() || name,
    country,
    city,
    imageKey: imageKey || undefined,
    shortDescription,
    overview: overview.slice(0, 1500),
    keyFacts: keyFacts.length ? keyFacts : ["See website for details."],
    programs,
    requirements: requirements.length ? requirements : ["Check official website for admission requirements."],
    helpfulInfo,
    website: websiteUrl,
    tuition: tuition || undefined,
    livingCosts: cityPara.match(/€[0-9,–-]+[^.;)]*/)?.[0] || undefined,
    cityInfo: cityInfoTrim,
    whyChoose: whyChooseBullets.length ? whyChooseBullets : (whyClean ? [whyClean.slice(0, 200)] : []),
  };
}

const content = fs.readFileSync(inputPath, "utf-8");
const blocks = splitIntoBlocks(content);
const universities = blocks.map(parseBlock).filter(Boolean);

// Only Austria, Germany, Italy, Czech Republic for now (app's current countries)
const ALLOWED = ["Austria", "Germany", "Italy", "Czech Republic"];
const filtered = universities
  .filter((u) => ALLOWED.includes(u.country))
  .sort((a, b) => {
    const byCountry = ALLOWED.indexOf(a.country) - ALLOWED.indexOf(b.country);
    if (byCountry !== 0) return byCountry;
    const cityA = (a.city || "").toLowerCase();
    const cityB = (b.city || "").toLowerCase();
    return cityA.localeCompare(cityB);
  });

fs.writeFileSync(outputPath, JSON.stringify(filtered, null, 2), "utf-8");
console.log("Parsed", universities.length, "universities, kept", filtered.length, "for Austria/Germany/Italy/Czech Republic.");
console.log("Written", outputPath);
