export type UniversityCategory = "Austria" | "Germany" | "Italy" | "Czech Republic";

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

/** Display order for countries: Austria (focus), then Germany, Italy, Czech Republic. */
export const COUNTRY_ORDER: UniversityCategory[] = [
  "Austria",
  "Germany",
  "Italy",
  "Czech Republic",
];

export const universities: University[] = [
  {
    "slug": "vorarlberg-university-of-education",
    "name": "Vorarlberg University of Education",
    "country": "Austria",
    "city": "Feldkirch",
    "imageKey": "feldkirch",
    "shortDescription": "Public teacher training in Feldkirch; low fees, scenic location near Lake Constance and the Alps.",
    "overview": "Feldkirch is a smaller town in Vorarlberg (~35,000), near Lake Constance and the Alps—relaxed and nature-oriented. Living costs ~€800–1,100/month (accommodation €300–500). The university offers teacher education with standard public fees and a practical teaching focus.",
    "keyFacts": [
      "Tuition: ~€726.72/semester + ÖH €25 (standard public).",
      "Living: ~€800–1,100/month.",
      "Teacher education; mostly German-taught; English limited.",
      "Official website: www.ph-vorarlberg.ac.at (English limited)."
    ],
    "programs": [
      {
        "name": "Teacher education (mostly German-taught; few English options)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification; standard admission process.",
      "Tuition: ~€726.72/semester + ÖH €25. Non-EU: visa requires proof of funds (~€12,000–15,000/year)."
    ],
    "helpfulInfo": [
      "Address: Liechtensteiner Strasse 33-37, 6800 Feldkirch, Austria.",
      "Contact: +43 5522 31199-0; office@ph-vorarlberg.ac.at.",
      "Official website: www.ph-vorarlberg.ac.at"
    ],
    "website": "https://www.ph-vorarlberg.ac.at",
    "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
    "livingCosts": "€800–1,100/month",
    "cityInfo": "Smaller town in Vorarlberg (~35,000); near Lake Constance, Alps; relaxed, nature-oriented (~€800–1,100/month; accommodation €300–500).",
    "whyChoose": [
      "Teacher education",
      "public with low fees"
    ]
  },
  {
    "slug": "university-of-graz",
    "name": "University of Graz",
    "country": "Austria",
    "city": "Graz",
    "imageKey": "graz-ug",
    "shortDescription": "Focus on humanities, social sciences, law; relaxed, cultural hub with sunny southern vibe; 30,000+ students; international flair; affordable living; strong employability; UNESCO heritage site for vibrant student life.",
    "overview": "Styria's capital (~290,000 people). UNESCO old town (largest preserved in Central Europe), Mediterranean feel (sunny, hilly), arts/film festivals (Diagonale), Mur River island, affordable/student-friendly (~€1,000–1,300/month in 2026; accommodation from €300, food €300, transport €50). Why Choose This University?: Focus on humanities, social sciences, law; relaxed, cultural hub with sunny southern vibe; 30,000+ students; international flair; affordable living; strong employability; UNESCO heritage site for vibrant student life.",
    "keyFacts": [
      "~30,000 students; focus on humanities, social sciences, law; UNESCO old town.",
      "Tuition: ~€726.72/semester + ÖH €25. Living: ~€1,000–1,300/month.",
      "English: limited Bachelor's; several English Master's (e.g. English and American Studies, European Studies, Southeast European Studies)."
    ],
    "programs": [
      {
        "name": "English and American Studies (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Arqus Joint Master's Programme European Studies",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Southeast European Studies (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Joint Master's Programme in Translation (Slovene/German/English)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification; English proficiency where needed; direct application.",
      "Tuition: ~€726.72/semester + ÖH €25. Proof of funds ~€11,904/year for visa (no on-campus housing)."
    ],
    "helpfulInfo": [
      "Address: Universitätsplatz 3, 8010 Graz, Austria.",
      "Contact: +43 316 380-0; studienabteilung@uni-graz.at (admissions); welcome@uni-graz.at (international).",
      "Official website: www.uni-graz.at (English available)."
    ],
    "website": "https://www.uni-graz.at",
    "tuition": "~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,000–1,300/month",
    "cityInfo": "Styria's capital (~290,000). UNESCO old town, Mediterranean feel, arts/film festivals (Diagonale), Mur River; affordable and student-friendly.",
    "whyChoose": [
      "Focus on humanities, social sciences, law; relaxed cultural hub; 30,000+ students.",
      "UNESCO heritage site; affordable living; strong employability."
    ]
  },
  {
    "slug": "graz-university-of-technology",
    "name": "Graz University of Technology",
    "country": "Austria",
    "city": "Graz",
    "imageKey": "graz-gut",
    "shortDescription": "Renowned for engineering and architecture in Graz; innovative programmes; student-friendly city.",
    "overview": "Graz offers the same living costs (~€1,000–1,300/month). TU Graz is known for engineering and architecture, with strong Master's in tech, biomedical, software, and environmental fields; limited full English Bachelor's.",
    "keyFacts": [
      "Tuition: ~€726.72/semester + ÖH €25. Living: ~€1,000–1,300/month (Graz).",
      "Strong English Master's in engineering/architecture; limited full English Bachelor's.",
      "Official website: www.tugraz.at (English available)."
    ],
    "programs": [
      {
        "name": "Engineering and architecture Master's (e.g. biomedical, software, environmental; see website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification; standard admission. Tuition: ~€726.72/semester + ÖH €25."
    ],
    "helpfulInfo": [
      "Address: Rechbauerstraße 12, 8010 Graz, Austria.",
      "Contact: +43 316 873-0; info@tugraz.at. Official website: www.tugraz.at"
    ],
    "website": "https://www.tugraz.at",
    "tuition": "~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,000–1,300/month",
    "cityInfo": "Graz: same living costs (~€1,000–1,300/month); student-friendly city.",
    "whyChoose": [
      "Renowned for engineering and architecture; innovative; research-oriented.",
      "Student-friendly city with strong employability."
    ]
  },
  {
    "slug": "medical-university-of-graz",
    "name": "Medical University of Graz",
    "country": "Austria",
    "city": "Graz",
    "imageKey": "graz-medg",
    "shortDescription": "Medicine, dentistry, biomedical; top research; competitive with high employability.",
    "overview": "As above (~€1,000–1,300/month). Why Choose This University?: Medicine, dentistry, biomedical; top research; competitive with high employability.",
    "keyFacts": [
      "Standard ~€726.72/semester + ÖH €25.",
      "Living: ~€1,000–1,300/month",
      "Medicine, dentistry, biomedical; top research; competitive with high employability."
    ],
    "programs": [
      {
        "name": "Medicine and biomedical programmes (mostly German, MedAT; some Master's/PhD in English)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Competitive."
    ],
    "helpfulInfo": [
      "Address: Neue Stiftingtalstraße 6, 8010 Graz, Austria.",
      "Research-oriented health.",
      "Phone: +43 316 385-0; Email: studium@medunigraz.at."
    ],
    "website": "https://www.medunigraz.at",
    "tuition": "Standard ~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,000–1,300/month",
    "cityInfo": "As above (~€1,000–1,300/month).",
    "whyChoose": [
      "Medicine, dentistry, biomedical",
      "competitive with high employability"
    ]
  },
  {
    "slug": "university-of-music-and-performing-arts-graz",
    "name": "University of Music and Performing Arts Graz",
    "country": "Austria",
    "city": "Graz",
    "imageKey": "graz-umpg",
    "shortDescription": "Performing arts and music education; heaven for musical talents; affordable city.",
    "overview": "As above (~€1,000–1,300/month). Why Choose This University?: Performing arts and music education; heaven for musical talents; affordable city.",
    "keyFacts": [
      "Standard/low ~€726.72/semester + ÖH €25.",
      "Living: ~€1,000–1,300/month",
      "Performing arts and music education; heaven for musical talents; affordable city."
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Highly selective (auditions/portfolios)."
    ],
    "helpfulInfo": [
      "Address: Leonhardstraße 15, 8010 Graz, Austria.",
      "Programs for instruments, jazz, chamber music.",
      "Phone: +43 316 389-0; Email: info@kug.ac.at."
    ],
    "website": "https://www.kug.ac.at",
    "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,000–1,300/month",
    "cityInfo": "As above (~€1,000–1,300/month).",
    "whyChoose": [
      "Performing arts and music education",
      "heaven for musical talents"
    ]
  },
  {
    "slug": "university-of-innsbruck",
    "name": "University of Innsbruck",
    "country": "Austria",
    "city": "Innsbruck",
    "imageKey": "innsbruck-uoi",
    "shortDescription": "Founded 1669; strong in physics (quantum research), law, alpine studies. 28,000 students in the heart of the Alps; affordable housing and outdoor lifestyle.",
    "overview": "Innsbruck is an alpine gem in Tyrol (~130,000). Mountains (Nordkette), skiing and hiking, historic old town (Golden Roof), river Inn, and a lively student vibe (~30,000 students). Living ~€900–1,400/month (more affordable than Vienna). The university is strong in physics, law, and alpine/mountain studies, with good English Master's options (e.g. English and American Studies, Ancient Worlds, History).",
    "keyFacts": [
      "Founded 1669; ~28,000 students. Tuition: ~€726.72/semester + ÖH €25. Living: ~€900–1,400/month.",
      "Strong in physics (quantum research), law, alpine/mountain studies; ~10–15 English Master's.",
      "Proof of funds ~€11,904/year for visa; scholarships available."
    ],
    "programs": [
      {
        "name": "English and American Studies (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Ancient Worlds (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "History (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Relevant prior degree, English B2+ (proof at application for English programs), apply online. Deadlines: e.g., Jul–Oct for winter; Jan–Mar for summer."
    ],
    "helpfulInfo": [
      "Address: Innrain 52, 6020 Innsbruck, Austria.",
      "Great for outdoor enthusiasts; financial support options like scholarships; proof of funds ~€11,904/year for visa.",
      "Phone: +43 512 507-0; Email: studienabteilung@uibk.ac.at (admissions); studienberatung@uibk.ac.at (advisory)."
    ],
    "website": "https://www.uibk.ac.at",
    "tuition": "Standard ~€726.72/semester + ÖH €25.",
    "livingCosts": "€900–1,400/month in 2026",
    "cityInfo": "Alpine gem in Tyrol (~130,000 people). Surrounded by mountains (Nordkette range), skiing/hiking year-round, historic old town (Golden Roof, Imperial Palace), river Inn, lively student vibe (~30,000 students), festivals, outdoor sports culture, cozy cafes. Nature-focused, adventurous, more affordable than Vienna (~€900–1,400/month in 2026; accommodation €450–700, food €300, transport €50).",
    "whyChoose": [
      "Founded 1669, strong in physics (quantum research), law, alpine/mountain studies",
      "located in heart of Alps for outdoor activities",
      "28,000 students (international focus)",
      "excellent conditions for research/education",
      "short distances, affordable housing"
    ]
  },
  {
    "slug": "medical-university-of-innsbruck",
    "name": "Medical University of Innsbruck",
    "country": "Austria",
    "city": "Innsbruck",
    "imageKey": "innsbruck-meduoi",
    "shortDescription": "Health/biomedical research; alpine location for balanced life.",
    "overview": "As above (~€900–1,400/month). Why Choose This University?: Health/biomedical research; alpine location for balanced life.",
    "keyFacts": [
      "Standard ~€726.72/semester + ÖH €25.",
      "Living: ~€900–1,400/month",
      "Health/biomedical research; alpine location for balanced life."
    ],
    "programs": [
      {
        "name": "Medicine and biomedical programmes (mostly German, MedAT; some Master's/PhD in English)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Competitive."
    ],
    "helpfulInfo": [
      "Address: Innrain 52, 6020 Innsbruck, Austria.",
      "Strong in medical fields.",
      "Phone: +43 512 9003-0; Email: studienangelegenheiten@i-med.ac.at."
    ],
    "website": "https://www.i-med.ac.at",
    "tuition": "Standard ~€726.72/semester + ÖH €25.",
    "livingCosts": "€900–1,400/month",
    "cityInfo": "As above (~€900–1,400/month).",
    "whyChoose": [
      "Health/biomedical research",
      "alpine location for balanced life"
    ]
  },
  {
    "slug": "university-of-klagenfurt",
    "name": "University of Klagenfurt",
    "country": "Austria",
    "city": "Klagenfurt",
    "imageKey": "klagenfurt-aau",
    "shortDescription": "Interdisciplinary in education, cultural studies; smaller/intimate setting; nature/lake-focused; good for informatics/management.",
    "overview": "Lakeside in Carinthia (~100,000 people). Warm summers, Lake Wörthersee (beaches/sailing), southern relaxed vibe, mountains/outdoors (~€900–1,200/month inferred; accommodation €350–500). Why Choose This University?: Interdisciplinary in education, cultural studies; smaller/intimate setting; nature/lake-focused; good for informatics/management.",
    "keyFacts": [
      "Standard ~€726.72/semester + ÖH €25.",
      "Living: ~€900–1,200/month inferred",
      "Interdisciplinary in education, cultural studies; smaller/intimate setting; nature/lake-focused; good for informatics/ma…"
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Standard process."
    ],
    "helpfulInfo": [
      "Address: Universitätsstraße 65-67, 9020 Klagenfurt, Austria.",
      "Relaxed environment.",
      "Phone: +43 463 2700; Email: welcome@aau.at."
    ],
    "website": "https://www.aau.at",
    "tuition": "Standard ~€726.72/semester + ÖH €25.",
    "livingCosts": "€900–1,200/month inferred",
    "cityInfo": "Lakeside in Carinthia (~100,000 people). Warm summers, Lake Wörthersee (beaches/sailing), southern relaxed vibe, mountains/outdoors (~€900–1,200/month inferred; accommodation €350–500).",
    "whyChoose": [
      "Interdisciplinary in education, cultural studies",
      "smaller/intimate setting",
      "nature/lake-focused",
      "good for informatics/management"
    ]
  },
  {
    "slug": "university-of-leoben",
    "name": "University of Leoben",
    "country": "Austria",
    "city": "Leoben",
    "imageKey": "leoben",
    "shortDescription": "Specialized mining, materials, metallurgy; niche for raw materials/energy; affordable small-town living.",
    "overview": "Smaller Styrian town (~25,000), mountains/industrial (~€700–1,000/month; rooms from €350). Why Choose This University?: Specialized mining, materials, metallurgy; niche for raw materials/energy; affordable small-town living.",
    "keyFacts": [
      "Standard ~€726.72/semester + ÖH €25.",
      "Living: ~€700–1,000/month",
      "Specialized mining, materials, metallurgy; niche for raw materials/energy; affordable small-town living."
    ],
    "programs": [
      {
        "name": "Resources engineering, mining, materials, metallurgy (Master's; see website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Field-specific."
    ],
    "helpfulInfo": [
      "Address: Franz-Josef-Straße 18, 8700 Leoben, Austria.",
      "Grant for new residents (€250 vouchers).",
      "Phone: +43 3842 402-0; Email: info@unileoben.ac.at."
    ],
    "website": "https://www.unileoben.ac.at",
    "tuition": "Standard ~€726.72/semester + ÖH €25.",
    "livingCosts": "€700–1,000/month",
    "cityInfo": "Smaller Styrian town (~25,000), mountains/industrial (~€700–1,000/month; rooms from €350).",
    "whyChoose": [
      "Specialized mining, materials, metallurgy",
      "niche for raw materials/energy",
      "affordable small-town living"
    ]
  },
  {
    "slug": "johannes-kepler-university-linz",
    "name": "Johannes Kepler University Linz",
    "country": "Austria",
    "city": "Linz",
    "imageKey": "linz-jku",
    "shortDescription": "Business, engineering, social sciences; 23,000 students; strong in AI and chemistry. Innovative, industry-linked; affordable Linz with good tech/startup prospects.",
    "overview": "Linz is a modern Danube city (~200,000) with Ars Electronica Center, museums, and a growing startup/tech scene. Living ~€800–1,200/month (accommodation €350–550). JKU offers ~20+ English Master's (e.g. AI, Computer Science, Economics, Management, Data Science) and several English Bachelor's (AI, Biological Chemistry, International Business Administration). Tuition ~€726.72/semester + ÖH €25.",
    "keyFacts": [
      "~23,000 students; emphasis on business, engineering, social sciences, AI, bio-chemistry.",
      "Tuition: ~€726.72/semester + ÖH €25. Living: ~€800–1,200/month. Dorms available.",
      "~20+ English Master's; few English Bachelor's (e.g. AI, Biological Chemistry, International Business)."
    ],
    "programs": [
      {
        "name": "Artificial Intelligence (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Biological Chemistry (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Chemistry and Chemical Technology (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Comparative Social Policy and Welfare (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computational Mathematics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computer Science (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Economic and Business Analytics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Economics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Industrial Mathematics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Leadership and Innovation in Organizations (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Management (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Management in Chemical Technologies (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Management in Polymer Technologies (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Molecular Biology (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Physics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Polymer Engineering and Science (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Statistics and Data Science (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Sustainability and Plastics Management (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "International qualifications check, English proof for relevant programs, register via portal. Deadlines flexible (e.g., extended to Mar in cases)."
    ],
    "helpfulInfo": [
      "Address: Altenberger Straße 69, 4040 Linz, Austria.",
      "Contact: +43 732 2468 0; studium@jku.at (admissions). Official website: www.jku.at (English available)."
    ],
    "website": "https://www.jku.at",
    "tuition": "Standard ~€726.72/semester + ÖH €25.",
    "livingCosts": "€800–1,200/month",
    "cityInfo": "Linz: modern Danube city (~200,000); Ars Electronica, museums, startup/tech scene; affordable living.",
    "whyChoose": [
      "Business, engineering, social sciences; 23,000 students; strong in AI, bio-chemistry.",
      "Innovative, industry-linked; affordable city with good tech/startup job prospects; dorms available."
    ]
  },
  {
    "slug": "university-of-art-and-design-linz",
    "name": "University of Art and Design Linz",
    "country": "Austria",
    "city": "Linz",
    "imageKey": "linz-uoa",
    "shortDescription": "Contemporary art and media design; artistic/technical/cultural studies; short distances in city.",
    "overview": "As above (~€800–1,200/month). Why Choose This University?: Contemporary art and media design; artistic/technical/cultural studies; short distances in city.",
    "keyFacts": [
      "Standard/low ~€726.72/semester + ÖH €25.",
      "Living: ~€800–1,200/month",
      "Contemporary art and media design; artistic/technical/cultural studies; short distances in city."
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Highly selective (auditions/portfolios)."
    ],
    "helpfulInfo": [
      "Address: Hauptplatz 6, 4020 Linz, Austria.",
      "Vibrant student life; sports/classes available.",
      "Phone: +43 732 7898-0; Email: info@kunstuni-linz.at."
    ],
    "website": "https://www.kunstuni-linz.at",
    "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
    "livingCosts": "€800–1,200/month",
    "cityInfo": "As above (~€800–1,200/month).",
    "whyChoose": [
      "Contemporary art and media design",
      "artistic/technical/cultural studies",
      "short distances in city"
    ]
  },
  {
    "slug": "anton-bruckner-private-university",
    "name": "Anton Bruckner Private University",
    "country": "Austria",
    "city": "Linz",
    "imageKey": "linz-abu",
    "shortDescription": "Music and drama; low fees; one of five unis in Linz; moderate tuition compared to similar.",
    "overview": "As above (~€800–1,200/month). Why Choose This University?: Music and drama; low fees; one of five unis in Linz; moderate tuition compared to similar.",
    "keyFacts": [
      "~€300–1,000/semester (semi-private; additional for multiple majors €150).",
      "Living: ~€800–1,200/month",
      "Music and drama; low fees; one of five unis in Linz; moderate tuition compared to similar."
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Highly selective (auditions/portfolios)."
    ],
    "helpfulInfo": [
      "Address: Alice-Harnoncourt-Platz 1, 4040 Linz, Austria.",
      "Follows public model; music-focused.",
      "Phone: +43 732 701000-0; Email: studium@bruckneruni.ac.at."
    ],
    "website": "https://www.bruckneruni.at",
    "tuition": "~€300–1,000/semester (semi-private; additional for multiple majors €150).",
    "livingCosts": "€800–1,200/month",
    "cityInfo": "As above (~€800–1,200/month).",
    "whyChoose": [
      "one of five unis in Linz",
      "moderate tuition compared to similar"
    ]
  },
  {
    "slug": "university-of-education-upper-austria",
    "name": "University of Education Upper Austria",
    "country": "Austria",
    "city": "Linz",
    "imageKey": "linz-uofe",
    "shortDescription": "Teacher training; one of largest in Austria; central location.",
    "overview": "As above (~€800–1,200/month). Why Choose This University?: Teacher training; one of largest in Austria; central location.",
    "keyFacts": [
      "Standard/low ~€726.72/semester + ÖH €25.",
      "Living: ~€800–1,200/month",
      "Teacher training; one of largest in Austria; central location."
    ],
    "programs": [
      {
        "name": "Teacher training (mostly German-taught; see website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification; standard admission. Tuition: ~€726.72/semester + ÖH €25.",
      "Mostly German-taught; rare English options. Proof of funds for visa."
    ],
    "helpfulInfo": [
      "Address: Kaplanhofstrasse 40, 4020 Linz, Austria.",
      "Contact: +43 732 7470-0; office@ph-ooe.at. Official website: www.ph-ooe.at (English available)."
    ],
    "website": "https://www.ph-ooe.at",
    "tuition": "~€726.72/semester + ÖH €25.",
    "livingCosts": "€800–1,200/month",
    "cityInfo": "Linz: ~€800–1,200/month; central location.",
    "whyChoose": [
      "Teacher training; one of the largest in Austria; central Linz location."
    ]
  },
  {
    "slug": "university-of-salzburg",
    "name": "University of Salzburg",
    "country": "Austria",
    "city": "Salzburg",
    "imageKey": "salzburg-uos",
    "shortDescription": "Known for law, psychology, geosciences; cultural/music hub; 18,000 students; strong interdisciplinary English options; high quality of life in scenic location.",
    "overview": "Mozart's city (~155,000 people). Baroque architecture, Sound of Music sites, Alps/Salzburg Festival (world-famous classical music/theater), lakes/rivers, charming/touristy yet student-vibrant (~€900–1,400/month in 2026; accommodation €400–600, food €300). Why Choose This University?: Known for law, psychology, geosciences; cultural/music hub; 18,000 students; strong interdisciplinary English options; high quality of life in scenic location.",
    "keyFacts": [
      "~18,000 students; law, psychology, geosciences; cultural/music hub (Salzburg Festival).",
      "Tuition: ~€726.72/semester + ÖH €25. Living: ~€900–1,400/month.",
      "~35% of programmes in English (~15–20+ Master's); limited English Bachelor's."
    ],
    "programs": [
      {
        "name": "English Language Sciences (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "European Union Studies (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Applied Geoinformatics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Applied Image and Signal Processing (MSc, joint)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Communication, Culture & Participation (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computer Science (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Copernicus Master in Digital Earth (MSc, joint)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Human Computer Interaction (MSc, joint)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Literary and Cultural Studies in English/American Studies (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Philosophy (MA, partial)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Political Science – Integration and Government (MA, joint)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Relevant Bachelor's; English proficiency; direct application.",
      "Tuition: ~€726.72/semester + ÖH €25. Funding options available."
    ],
    "helpfulInfo": [
      "Address: Kapitelgasse 4, 5020 Salzburg, Austria.",
      "Contact: +43 662 8044-0; studium@sbg.ac.at (admissions). Official website: www.plus.ac.at (English available)."
    ],
    "website": "https://www.plus.ac.at",
    "tuition": "~€726.72/semester + ÖH €25.",
    "livingCosts": "€900–1,400/month in 2026",
    "cityInfo": "Mozart's city (~155,000 people). Baroque architecture, Sound of Music sites, Alps/Salzburg Festival (world-famous classical music/theater), lakes/rivers, charming/touristy yet student-vibrant (~€900–1,400/month in 2026; accommodation €400–600, food €300).",
    "whyChoose": [
      "Known for law, psychology, geosciences",
      "cultural/music hub",
      "strong interdisciplinary English options",
      "high quality of life in scenic location"
    ]
  },
  {
    "slug": "university-of-vienna",
    "name": "University of Vienna",
    "country": "Austria",
    "city": "Vienna",
    "imageKey": "vienna-uni",
    "shortDescription": "Oldest German-speaking university (1365), top-ranked globally (~top 150–200 QS). Over 180 programs; strong in humanities, sciences, law, social sciences. 85,000+ students (20% international); tuition waivers for developing countries/Ukrainians.",
    "overview": "Vienna is Austria's capital and cultural powerhouse (~2 million). Imperial grandeur, world-class museums, opera, coffeehouses, and a vibrant student scene (~200,000 citywide). Living costs ~€1,200–1,600/month (accommodation €450–900, food €350–380). The University of Vienna, founded 1365, is top-ranked (~top 150–200 QS), with over 180 degree programs and strengths in humanities, sciences, law, and social sciences. It attracts 85,000+ students (20% international) and offers affordable tuition with waivers for eligible applicants.",
    "keyFacts": [
      "Founded 1365; ~85,000 students (20% international); over 180 degree programs.",
      "Tuition: ~€726.72/semester + ÖH €25 (waivers for Ukrainians/developing countries).",
      "Living: ~€1,200–1,600/month. Strong in humanities, sciences, law, social sciences.",
      "English: limited Bachelor's; ~35+ English Master's (e.g. Anglophone Literatures, Data Science, Economics)."
    ],
    "programs": [
      {
        "name": "Anglophone Literatures and Cultures (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Applied Economics",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Applied Linguistics",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Arabic Linguistics",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Astronomy",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Banking and Finance",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Molecular Biology",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Quantitative Finance",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Astrophysics",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Data Science",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "International Relations variants",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification (high school/Bachelor's equivalence); English IELTS 6.5–7.0/TOEFL 90–100+ for English programs; motivation letter/CV for some Master's.",
      "Deadlines: e.g. Nov–Jan for summer; June–Sep for winter. Apply via u:find portal.",
      "Tuition: ~€726.72/semester + ÖH €25. Proof of funds required for visa."
    ],
    "helpfulInfo": [
      "Address: Universitätsring 1, 1010 Vienna, Austria.",
      "Contact: +43 1 4277-0; info@univie.ac.at (general); studienabteilung@univie.ac.at (admissions).",
      "Official website: www.univie.ac.at (English available)."
    ],
    "website": "https://www.univie.ac.at",
    "tuition": "~€726.72/semester + ÖH €25 (waivers for Ukrainians/developing countries).",
    "livingCosts": "€1,200–1,600/month",
    "cityInfo": "Austria's capital (~2 million). Imperial grandeur, world-class museums, opera, coffeehouses; vibrant student scene (~200,000 citywide); high quality of life.",
    "whyChoose": [
      "Oldest German-speaking university (1365); top-ranked globally (~top 150–200 QS); over 180 programs.",
      "Strong in humanities, sciences, law, social sciences; 85,000+ students (20% international).",
      "Alumni include Nobel laureates; tuition waivers for developing countries/Ukrainians."
    ]
  },
  {
    "slug": "medical-university-of-vienna",
    "name": "Medical University of Vienna",
    "country": "Austria",
    "city": "Vienna",
    "imageKey": "vienna-med",
    "shortDescription": "Specialized in medicine/health sciences; top research hospital; competitive programs; high employability in healthcare.",
    "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Specialized in medicine/health sciences; top research hospital; competitive programs; high employability in healthcare.",
    "keyFacts": [
      "Standard for available programs ~€726.72/semester + ÖH €25.",
      "Living: ~€1,200–1,600/month",
      "Specialized in medicine/health sciences; top research hospital; competitive programs; high employability in healthcare."
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Competitive exams/quotas for core programs; direct for Master's/PhD."
    ],
    "helpfulInfo": [
      "Address: Spitalgasse 23, 1090 Vienna, Austria.",
      "Highly selective for clinical fields.",
      "Phone: +43 1 40160-0; Email: studium@meduniwien.ac.at."
    ],
    "website": "https://www.meduniwien.ac.at",
    "tuition": "Standard for available programs ~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,200–1,600/month",
    "cityInfo": "As above (~€1,200–1,600/month).",
    "whyChoose": [
      "Specialized in medicine/health sciences",
      "top research hospital",
      "competitive programs",
      "high employability in healthcare"
    ]
  },
  {
    "slug": "tu-wien",
    "name": "TU Wien",
    "country": "Austria",
    "city": "Vienna",
    "imageKey": "vienna-tu",
    "shortDescription": "Leading engineering/tech uni; strong industry ties; innovative research; unmatched quality of living in Vienna.",
    "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Leading engineering/tech uni; strong industry ties; innovative research; unmatched quality of living in Vienna.",
    "keyFacts": [
      "~€726.72/semester + ÖH €25.",
      "Living: ~€1,200–1,600/month",
      "Leading engineering/tech uni; strong industry ties; innovative research; unmatched quality of living in Vienna."
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Often restricted/grades-based."
    ],
    "helpfulInfo": [
      "Address: Karlsplatz 13, 1040 Vienna, Austria.",
      "Strong STEM focus.",
      "Phone: +43 1 58801-0; Email: info@tuwien.ac.at."
    ],
    "website": "https://www.tuwien.ac.at",
    "tuition": "~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,200–1,600/month",
    "cityInfo": "As above (~€1,200–1,600/month).",
    "whyChoose": [
      "Leading engineering/tech uni",
      "strong industry ties",
      "innovative research",
      "unmatched quality of living in Vienna"
    ]
  },
  {
    "slug": "university-of-natural-resources-and-life-sciences-vienna",
    "name": "University of Natural Resources and Life Sciences, Vienna",
    "country": "Austria",
    "city": "Vienna",
    "imageKey": "vienna-boku",
    "shortDescription": "Agriculture/forestry/environmental; sustainability/green focus; leading in life sciences; graduates highly employable.",
    "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Agriculture/forestry/environmental; sustainability/green focus; leading in life sciences; graduates highly employable.",
    "keyFacts": [
      "Standard ~€726.72/semester + ÖH €25.",
      "Living: ~€1,200–1,600/month",
      "Agriculture/forestry/environmental; sustainability/green focus; leading in life sciences; graduates highly employable."
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Check official website for admission requirements."
    ],
    "helpfulInfo": [
      "Address: Gregor-Mendel-Straße 33, 1180 Vienna, Austria.",
      "Green campus.",
      "Phone: +43 1 47654-0; Email: info@boku.ac.at."
    ],
    "website": "https://www.boku.ac.at",
    "tuition": "Standard ~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,200–1,600/month",
    "cityInfo": "As above (~€1,200–1,600/month).",
    "whyChoose": [
      "Agriculture/forestry/environmental",
      "sustainability/green focus",
      "leading in life sciences",
      "graduates highly employable"
    ]
  },
  {
    "slug": "university-of-veterinary-medicine-vienna",
    "name": "University of Veterinary Medicine, Vienna",
    "country": "Austria",
    "city": "Vienna",
    "imageKey": "vienna-vet",
    "shortDescription": "Animal health/veterinary specialist; research excellence.",
    "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Animal health/veterinary specialist; research excellence.",
    "keyFacts": [
      "Standard ~€726.72/semester + ÖH €25.",
      "Living: ~€1,200–1,600/month",
      "Animal health/veterinary specialist; research excellence."
    ],
    "programs": [
      {
        "name": "Mostly German; some courses in English for veterinary/animal health.",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Entrance exam."
    ],
    "helpfulInfo": [
      "Address: Veterinärplatz 1, 1210 Vienna, Austria.",
      "Specialized.",
      "Phone: +43 1 25077-0; Email: info@vetmeduni.ac.at."
    ],
    "website": "https://www.vetmeduni.ac.at",
    "tuition": "Standard ~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,200–1,600/month",
    "cityInfo": "As above (~€1,200–1,600/month).",
    "whyChoose": [
      "Animal health/veterinary specialist",
      "research excellence"
    ]
  },
  {
    "slug": "university-of-applied-arts-vienna",
    "name": "University of Applied Arts Vienna",
    "country": "Austria",
    "city": "Vienna",
    "imageKey": "vienna-uaa",
    "shortDescription": "Art, design, architecture; innovative; selective with portfolio focus.",
    "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Art, design, architecture; innovative; selective with portfolio focus.",
    "keyFacts": [
      "Standard/low ~€726.72/semester + ÖH €25.",
      "Living: ~€1,200–1,600/month",
      "Art, design, architecture; innovative; selective with portfolio focus."
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Highly selective (auditions/portfolios)."
    ],
    "helpfulInfo": [
      "Address: Oskar-Kokoschka-Platz 2, 1010 Vienna, Austria.",
      "Prestigious creative education.",
      "Phone: +43 1 71133-0; Email: info@uni-ak.ac.at."
    ],
    "website": "https://www.dieangewandte.at",
    "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,200–1,600/month",
    "cityInfo": "As above (~€1,200–1,600/month).",
    "whyChoose": [
      "Art, design, architecture",
      "selective with portfolio focus"
    ]
  },
  {
    "slug": "university-of-music-and-performing-arts-vienna",
    "name": "University of Music and Performing Arts Vienna",
    "country": "Austria",
    "city": "Vienna",
    "imageKey": "vienna-uaav",
    "shortDescription": "Music, theater, film; world-class performing arts.",
    "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Music, theater, film; world-class performing arts.",
    "keyFacts": [
      "Standard/low ~€726.72/semester + ÖH €25.",
      "Living: ~€1,200–1,600/month",
      "Music, theater, film; world-class performing arts."
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Highly selective (auditions/portfolios)."
    ],
    "helpfulInfo": [
      "Address: Anton-von-Webern-Platz 1, 1030 Vienna, Austria.",
      "Renowned for music education.",
      "Phone: +43 1 71155-0; Email: info@mdw.ac.at."
    ],
    "website": "https://www.mdw.ac.at",
    "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,200–1,600/month",
    "cityInfo": "As above (~€1,200–1,600/month).",
    "whyChoose": [
      "Music, theater, film",
      "world-class performing arts"
    ]
  },
  {
    "slug": "academy-of-fine-arts-vienna",
    "name": "Academy of Fine Arts Vienna",
    "country": "Austria",
    "city": "Vienna",
    "imageKey": "vienna-ufav",
    "shortDescription": "Fine arts and visual studies; innovative approach; ranked ~top 5000 globally.",
    "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Fine arts and visual studies; innovative approach; ranked ~top 5000 globally.",
    "keyFacts": [
      "Standard/low ~€726.72/semester + ÖH €25.",
      "Living: ~€1,200–1,600/month",
      "Fine arts and visual studies; innovative approach; ranked ~top 5000 globally."
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Highly selective (auditions/portfolios)."
    ],
    "helpfulInfo": [
      "Address: Schillerplatz 3, 1010 Vienna, Austria.",
      "Focus on creativity/interdisciplinary.",
      "Phone: +43 1 58816-0; Email: info@akbild.ac.at."
    ],
    "website": "https://www.akbild.ac.at",
    "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
    "livingCosts": "€1,200–1,600/month",
    "cityInfo": "As above (~€1,200–1,600/month).",
    "whyChoose": [
      "Fine arts and visual studies",
      "innovative approach",
      "ranked ~top 5000 globally"
    ]
  },
  {
    "slug": "rwth-aachen-university",
    "name": "RWTH Aachen University",
    "country": "Germany",
    "city": "Aachen",
    "imageKey": "aachen",
    "shortDescription": "One of Germany's top technical universities (TU9 member, Excellence University), ~47,000 students (high international share), ranked top in engineering/sciences globally (~top 100–150 QS/THE). Renowned for engineering (mechanical, electrical, automotive, materials), computer science, physics, and interdisciplinary r...",
    "overview": "A historic border city in western Germany (~250,000 people), right at the triangle with Belgium and Netherlands. Known as \"City of Emperors\" (Charlemagne's capital), with stunning Aachen Cathedral (UNESCO World Heritage), medieval old town, thermal springs (Carolinus Thermen), and modern vibe. Lively student scene (~50,000 students across unis), international (many from Benelux), green parks/hiking in nearby Eifel hills, famous Christmas market, and easy travel (high-speed trains to Cologne/Brussels). Relaxed yet energetic, affordable compared to big cities, with strong tech/engineering culture (close to industry hubs like Jülich research center). Why Choose This University?: One of Germany's top technical universities (TU9 member, Excellence University), ~47,000 students (high international share), ranked top in engineering/sciences globally (~top 100–150 QS/THE). Renowned for engineering (mechanical, electrical, automotive, materials), computer science, physics, and interdisciplinary research (e.g., Industry 4.0, sustainable tech). Strong industry ties (nearby clusters in automotive, energy), no tuition fees (public uni), modern facilities/labs, and Aachen's central European location for cross-border opportunities. Ideal for STEM-focused students wanting practical, research-driven education in a welcoming, historic-yet-innovative city.",
    "keyFacts": [
      "One of Germany's top technical universities (TU9 member, Excellence University), ~47,000 students (high international sh…"
    ],
    "programs": [
      {
        "name": "Applied Geophysics (M.Sc., joint with Delft/ETH Zurich)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Automotive Engineering (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Battery Science and Technology in Engineering (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Biomedical Engineering (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Biomedical Systems Engineering (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Cognitive, Digital and Empirical English Studies (M.A.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Communications Engineering (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computer Engineering (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computer Science (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Data Science (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Materials Engineering (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Micro- and Nanoelectronics (variants)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Transforming City Regions (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification (high school/Bachelor's equivalence via uni-assist VPD for many).",
      "English proficiency: IELTS 6.5+/TOEFL 90+ (or equivalent) for English programs (exemptions for degrees from UK/US/etc.).",
      "Motivation letter/CV sometimes; aptitude tests/points for restricted programs.",
      "Apply via RWTHonline portal (international applicants: uni-assist often required). Deadlines: Non-EU/EEA for open Master's: March 1 (winter), September 1 (summer) for some; earlier for restricted (check per program). Winter 2026/27 applications ongoing/open.",
      "No tuition fees; semester fee ~€300–350 (includes public transport ticket NRW-wide, student services). Non-EU: Proof of funds €11,904/year (blocked account) for visa."
    ],
    "helpfulInfo": [
      "Address: Templergraben 55, 52062 Aachen, Germany (main historic campus in city center; modern extensions in Melaten/Horbach areas for engineering/sciences). International Office: SuperC building, Templergraben 57.",
      "International Office/Admissions: Phone: +49 241 80-1 (general) or specific via portal; Email: international@rwth-aachen.de or studienberatung@rwth-aachen.de. International Admissions: Check rwth-aachen.de/go/id/rcx for contacts."
    ],
    "website": "https://www.rwth-aachen.de",
    "cityInfo": "A historic border city in western Germany (~250,000 people), right at the triangle with Belgium and Netherlands. Known as \"City of Emperors\" (Charlemagne's capital), with stunning Aachen Cathedral (UNESCO World Heritage), medieval old town, thermal springs (Carolinus Thermen), and modern vibe. Lively student scene (~50,000 students across unis), international (many from Benelux), green parks/hiking in nearby Eifel hills, famous Christmas market, and easy travel (high-speed trains to Cologne/Brussels).",
    "whyChoose": [
      "One of Germany's top technical universities (TU9 member, Excellence University), ~47,000 students (high international share), ranked top in engineering/sciences globally (~top 100–150 QS/THE)",
      "Renowned for engineering (mechanical, electrical, automotive, materials), computer science, physics, and interdisciplinary research (e",
      "0, sustainable tech)",
      "Strong industry ties (nearby clusters in automotive, energy), no tuition fees (public uni), modern facilities/labs, and Aachen's central European location for cross-border opportunities",
      "Ideal for STEM-focused students wanting practical, research-driven education in a welcoming, historic-yet-innovative city"
    ]
  },
  {
    "slug": "freie-universitaet-berlin",
    "name": "Freie Universität Berlin",
    "country": "Germany",
    "city": "Berlin",
    "imageKey": "berlin-freib",
    "shortDescription": "Founded 1948 in West Berlin (with U.S. support during Cold War), it's one of Germany's top research universities (Excellence Initiative/Cluster status), highly international (~20% foreign students from 130+ countries), strong global outlook (part of Berlin University Alliance).",
    "overview": "Germany's capital and one of Europe's most dynamic, international cities (~3.8 million people). Iconic landmarks (Brandenburg Gate, Berlin Wall remnants, Reichstag), world-class museums (Museum Island UNESCO site, Pergamon), diverse neighborhoods (Kreuzberg for street art/alternative scene, Prenzlauer Berg for cafes/family vibe, Mitte for history/nightlife), legendary clubs (Berghain), festivals (Berlinale film, Carnival of Cultures), parks (Tiergarten), and endless cultural events. Extremely international (~20% foreign students), English widely spoken in student/academic circles, vibrant startup/tech/creative scene, excellent public transport (U-Bahn/S-Bahn), bike-friendly. Safe, progressive, with rich history and endless opportunities—but higher living costs than smaller German cities. Why Choose This University?: Founded 1948 in West Berlin (with U.S. support during Cold War), it's one of Germany's top research universities (Excellence Initiative/Cluster status), highly international (~20% foreign students from 130+ countries), strong global outlook (part of Berlin University Alliance). Ranked top in Germany for humanities/social sciences, sciences, and international reputation. Large campus (Dahlem: green, historic buildings), excellent libraries (e.g., Philological Library), research facilities. No tuition fees (public uni), vibrant Berlin location for internships/jobs (tech, NGOs, media), and strong support for internationals (orientation, language courses). Ideal for h",
    "keyFacts": [
      "Founded 1948 in West Berlin (with U.S. support during Cold War), it's one of Germany's top research universities (Excell…"
    ],
    "programs": [
      {
        "name": "Pharmaceutical Research (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Data Science (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "International Relations (various, e.g., Global History or related)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "English Studies: Literature, Language, Culture (M.A.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computational Sciences",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "International Health",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "North American Studies",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Polymer Science (joint with HU/TU/Potsdam)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized high school diploma (Bachelor's) or Bachelor's degree (Master's) — equivalence via uni-assist (VPD/preliminary review, fee ~€75–200).",
      "English proficiency: IELTS 6.5+/TOEFL 90+ (or equivalent) for English programs.",
      "Motivation letter, CV, sometimes references/interview for Master's.",
      "Apply via uni-assist (for most internationals) or direct portal; deadlines: Winter semester (Oct start) often May–July; Summer (Apr start) Jan–March; Master's often Dec 1–Jan 15 or program-specific.",
      "No tuition, but semester fee ~€300–400 (includes public transport ticket, admin, student services). Non-EU: Proof of funds ~€11,904/year (blocked account) for visa."
    ],
    "helpfulInfo": [
      "Address: Kaiserswerther Str. 16-18, 14195 Berlin, Germany (main campus in Dahlem, green suburban south-west Berlin). Admissions/Student Services: Iltisstr. 1 & 4, 14195 Berlin.",
      "Phone: +49 30 838-70000; Email: info-service@fu-berlin.de (general/Info-Service Studium); studienberatung@fu-berlin.de or specific admissions emails via portal. Admissions Office for internationals: +49 30 838-70000 (international applicants)."
    ],
    "website": "https://www.fu-berlin.de",
    "cityInfo": "Germany's capital and one of Europe's most dynamic, international cities (~3.8 million people). Iconic landmarks (Brandenburg Gate, Berlin Wall remnants, Reichstag), world-class museums (Museum Island UNESCO site, Pergamon), diverse neighborhoods (Kreuzberg for street art/alternative scene, Prenzlauer Berg for cafes/family vibe, Mitte for history/nightlife), legendary clubs (Berghain), festivals (Berlinale film, Carnival of Cultures), parks (Tiergarten), and endless cultural events.",
    "whyChoose": [
      "Founded 1948 in West Berlin (with U",
      "support during Cold War), it's one of Germany's top research universities (Excellence Initiative/Cluster status), highly international (~20% foreign students from 130+ countries), strong global outlook (part of Berlin University Alliance)",
      "Ranked top in Germany for humanities/social sciences, sciences, and international reputation",
      "Large campus (Dahlem: green, historic buildings), excellent libraries (e",
      ", Philological Library), research facilities"
    ]
  },
  {
    "slug": "technische-universitaet-berlin",
    "name": "Technische Universität Berlin",
    "country": "Germany",
    "city": "Berlin",
    "imageKey": "berlin-tu",
    "shortDescription": "One of Germany's leading technical universities (TU9 member, University of Excellence), ~35,000 students (diverse/international), strong industry ties (startups, Siemens, BMW, tech hubs). Unique for a tech uni: combines engineering/tech with planning sciences, economics, social sciences, humanities.",
    "overview": "Germany's capital and one of Europe's most exciting, international cities (~3.8 million people). Iconic landmarks (Brandenburg Gate, Berlin Wall remnants, Reichstag), world-class museums (Museum Island UNESCO site), diverse neighborhoods (Kreuzberg for street art/alternative scene, Prenzlauer Berg for cafes, Mitte for history/nightlife), legendary clubs (Berghain), festivals (Berlinale film, Carnival of Cultures), parks (Tiergarten), and endless cultural events. Extremely international (~20–30% foreign students at TU Berlin), English widely spoken in student/academic circles, vibrant startup/tech/creative scene, excellent public transport (U-Bahn/S-Bahn), bike-friendly. Safe, progressive, with rich history and endless opportunities—but higher living costs than smaller cities. Why Choose This University?: One of Germany's leading technical universities (TU9 member, University of Excellence), ~35,000 students (diverse/international), strong industry ties (startups, Siemens, BMW, tech hubs). Unique for a tech uni: combines engineering/tech with planning sciences, economics, social sciences, humanities. Top in mechanical/electrical engineering, computer science, urban planning, sustainability. No tuition fees (public uni), vibrant Berlin location for internships/jobs (tech/media/NGOs), excellent facilities/research. Ideal for STEM/engineering with practical focus, innovative programs, and Berlin's dynamic energy—great career prospects in Europe.",
    "keyFacts": [
      "One of Germany's leading technical universities (TU9 member, University of Excellence), ~35,000 students (diverse/intern…"
    ],
    "programs": [
      {
        "name": "Architecture Typology (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computational Mechanics of Materials and Structures (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computer Science (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Global Production Engineering (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Information Systems Management (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Innovation Management and Entrepreneurship (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Polymer Science (M.Sc., joint)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Scientific Computing (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Urban Management (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification (high school for Bachelor's—uni-assist VPD/equivalence; Bachelor's degree for Master's).",
      "English proficiency: IELTS 6.5+/TOEFL 90+ (or equivalent) for English programs.",
      "Motivation letter/CV sometimes; aptitude tests/points system for restricted programs.",
      "Apply via TU Berlin portal (e.g., for Master's: often Dec 1–Feb/May deadlines depending on restricted/open; uni-assist for many internationals). Winter 2026/27 deadlines: e.g., restricted English Master's April–May 2025 (check exact).",
      "No tuition fees; semester fee ~€360 (includes public transport ticket, admin, student services; rising slightly in 2026). Non-EU: Proof of funds €11,904/year (blocked account) for visa."
    ],
    "helpfulInfo": [
      "Address: Straße des 17. Juni 135, 10623 Berlin, Germany (main campus in Charlottenburg, central-west Berlin near Tiergarten; urban, accessible location).",
      "International Office/Student Mobility & International Students: Phone: +49 30 314-24067 or +49 30 314-25648; Email: studentmobility@international.tu-berlin.de or international@tu-berlin.de. General info: +49 30 314-0. Office in main building H (ground floor). Admissions/Student Services: Campus Center H 0030."
    ],
    "website": "https://www.tu.berlin",
    "cityInfo": "Germany's capital and one of Europe's most exciting, international cities (~3.8 million people). Iconic landmarks (Brandenburg Gate, Berlin Wall remnants, Reichstag), world-class museums (Museum Island UNESCO site), diverse neighborhoods (Kreuzberg for street art/alternative scene, Prenzlauer Berg for cafes, Mitte for history/nightlife), legendary clubs (Berghain), festivals (Berlinale film, Carnival of Cultures), parks (Tiergarten), and endless cultural events.",
    "whyChoose": [
      "One of Germany's leading technical universities (TU9 member, University of Excellence), ~35,000 students (diverse/international), strong industry ties (startups, Siemens, BMW, tech hubs)",
      "Unique for a tech uni: combines engineering/tech with planning sciences, economics, social sciences, humanities",
      "Top in mechanical/electrical engineering, computer science, urban planning, sustainability",
      "No tuition fees (public uni), vibrant Berlin location for internships/jobs (tech/media/NGOs), excellent facilities/research",
      "Ideal for STEM/engineering with practical focus, innovative programs, and Berlin's dynamic energy—great career prospects in Europe"
    ]
  },
  {
    "slug": "rheinische-friedrich-wilhelms-universitaet-bonn",
    "name": "Rheinische Friedrich-Wilhelms-Universität Bonn",
    "country": "Germany",
    "city": "Bonn",
    "imageKey": "bonn",
    "shortDescription": "Founded 1818, one of Germany's top research universities (Excellence Initiative, strong clusters in mathematics, life sciences, humanities), ~38,000 students (international focus), highly ranked globally (~top 100–200 QS/THE). Renowned for research (e.g.",
    "overview": "Former capital of West Germany (1949–1990), now a UN city with 19+ UN agencies (e.g., UN Climate Change Secretariat, UN Volunteers) and ~150 international organizations, giving it a strong global, diplomatic vibe. Picturesque on the Rhine River, historic old town (Beethoven's birthplace—annual Beethovenfest), museums (Haus der Geschichte, Beethoven House), botanical gardens, Poppelsdorfer Palace (university campus), and nearby Siebengebirge hills for hiking. Relaxed, green, family-friendly, multicultural (large expat/UN community), excellent public transport (train hub to Cologne/Frankfurt). Smaller than Berlin/Munich (~330,000 people), safer/quieter, with a mix of historic charm and modern international energy. Student population ~35,000–38,000, making it lively but not overwhelming. Why Choose This University?: Founded 1818, one of Germany's top research universities (Excellence Initiative, strong clusters in mathematics, life sciences, humanities), ~38,000 students (international focus), highly ranked globally (~top 100–200 QS/THE). Renowned for research (e.g., Hausdorff Center for Mathematics, Argelander Institute for Astronomy), Nobel laureates (e.g., in physics/chemistry), and interdisciplinary strengths. No tuition fees (public uni), beautiful historic campuses (Poppelsdorfer Schloss), vibrant international community, proximity to UN/EU institutions for internships/networking (great for IR, economics, sciences). Affordable Rhine location with high quality of life, Beet",
    "keyFacts": [
      "Founded 1818, one of Germany's top research universities (Excellence Initiative, strong clusters in mathematics, life sc…"
    ],
    "programs": [
      {
        "name": "Astrophysics (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "English Literatures and Cultures (M.A.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Applied Linguistics (M.A.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "English (M.A. or M.Ed. variants, e.g., for teaching)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Mathematics (M.Sc., research-oriented, international profile)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Economics (various, e.g., Quantitative Economics M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Molecular Biology/Biochemistry (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computer Science/Informatics variants",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Geography/Environmental Sciences (some)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification (high school for Bachelor's—often uni-assist VPD/equivalence; Bachelor's degree for Master's).",
      "English proficiency: IELTS 6.5+/TOEFL 90+ (or equivalent) for English programs.",
      "Motivation letter/CV sometimes; aptitude tests for restricted fields.",
      "Apply via uni-bonn.de portal or uni-assist (for many); deadlines: Winter (Oct start) often July 15; Summer (Apr start) Jan 15; Master's program-specific (earlier, e.g., Dec–Mar). Non-EU: Special paperwork (e.g., APS for some countries).",
      "No tuition fees; semester fee ~€300–345 (includes public transport ticket, student services, social contribution). Non-EU: Proof of funds €11,904/year (blocked account) for visa."
    ],
    "helpfulInfo": [
      "Address: Main campus: Regina-Pacis-Weg 3, 53113 Bonn (historic center); International Office: Poppelsdorfer Allee 53 & 102, 53115 Bonn (key for internationals).",
      "International Office/International Service Point: Phone: +49 228 73-5544; Email: study@uni-bonn.de or international@uni-bonn.de. Central Study Advisory: +49 228 73-7080; zsb-int@verwaltung.uni-bonn.de. Admissions for internationals: intstud@verwaltung.uni-bonn.de (Student Registry). Office hours: Mon–Fri 08:00–16:00."
    ],
    "website": "https://www.uni-bonn.de",
    "cityInfo": "Former capital of West Germany (1949–1990), now a UN city with 19+ UN agencies (e.g., UN Climate Change Secretariat, UN Volunteers) and ~150 international organizations, giving it a strong global, diplomatic vibe. Picturesque on the Rhine River, historic old town (Beethoven's birthplace—annual Beethovenfest), museums (Haus der Geschichte, Beethoven House), botanical gardens, Poppelsdorfer Palace (university campus), and nearby Siebengebirge hills for hiking.",
    "whyChoose": [
      "Founded 1818, one of Germany's top research universities (Excellence Initiative, strong clusters in mathematics, life sciences, humanities), ~38,000 students (international focus), highly ranked globally (~top 100–200 QS/THE)",
      "Renowned for research (e",
      ", Hausdorff Center for Mathematics, Argelander Institute for Astronomy), Nobel laureates (e",
      ", in physics/chemistry), and interdisciplinary strengths",
      "No tuition fees (public uni), beautiful historic campuses (Poppelsdorfer Schloss), vibrant international community, proximity to UN/EU institutions for internships/networking (great for IR, economics, sciences)"
    ]
  },
  {
    "slug": "technische-universitaet-dortmund",
    "name": "Technische Universität Dortmund",
    "country": "Germany",
    "city": "Dortmund",
    "imageKey": "dortmund",
    "shortDescription": "Founded 1968 (one of Germany's younger technical unis), TU Dortmund has a strong practical/research profile (~30,000 students, 19–20% international from 120+ countries). Excellent in engineering, sciences, IT, automation/robotics, chemistry, and interdisciplinary fields (e.g., Industry 4.0 focus).",
    "overview": "A major city in the Ruhr region (~590,000 people), once an industrial powerhouse (steel/coal) now transformed into a modern, green, and cultural hub. Features include the Signal Iduna Park (famous Borussia Dortmund football stadium), Phoenix See lake (former steelworks turned waterfront with cafes/parks), Zeche Zollern industrial museum, art/culture scene (Theater Dortmund, museums), festivals, and easy access to nature (Emscher Park trails). Student-friendly (~35,000 students at TU Dortmund), multicultural (large international community), affordable living, excellent public transport (trains to Essen/Cologne/Düsseldorf), and vibrant nightlife (pubs, clubs in city center). Less hectic than Berlin/Munich, with a practical, down-to-earth Ruhr vibe—great for sports fans, industrial heritage enthusiasts, and those wanting big-city access without extreme costs. Why Choose This University?: Founded 1968 (one of Germany's younger technical unis), TU Dortmund has a strong practical/research profile (~30,000 students, 19–20% international from 120+ countries). Excellent in engineering, sciences, IT, automation/robotics, chemistry, and interdisciplinary fields (e.g., Industry 4.0 focus). Part of the University Alliance Ruhr (with Bochum/Essen-Duisburg) for broader resources. No tuition fees (public uni), modern campus with good facilities (labs, sports), strong industry links (Ruhr region's economy), and growing English programs for internationals. Affordable city with high quality of ",
    "keyFacts": [
      "Founded 1968 (one of Germany's younger technical unis), TU Dortmund has a strong practical/research profile (~30,000 stu…"
    ],
    "programs": [
      {
        "name": "English-taught programmes (see university website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification (high school for Bachelor's—uni-assist VPD/equivalence; Bachelor's degree for Master's).",
      "English proficiency: IELTS 6.5+/TOEFL 90+ (or equivalent) for English programs.",
      "Motivation letter/CV sometimes; aptitude tests for restricted fields.",
      "Apply via uni-assist (for many internationals) or TU portal; deadlines: Winter (Oct start) often July 15; Summer (Apr start) Jan 15; Master's program-specific (earlier for some). Contact admission.inquiries@tu-dortmund.de for queries (no pre-review of docs).",
      "No tuition fees; semester fee ~€300–350 (includes public transport ticket, student services, theater flat access). Non-EU: Proof of funds €11,904/year (blocked account) for visa."
    ],
    "helpfulInfo": [
      "Address: Emil-Figge-Straße 50, 44227 Dortmund, Germany (main campus in Dortmund-Eichlinghofen, modern/suburban south; International Office at Emil-Figge-Str. 61, 44227 Dortmund).",
      "International Office/Admissions & Enrollment: Phone: +49 231 755-6349 (admissions inquiries) or +49 231 755-6350; Email: admission.inquiries@tu-dortmund.de or international@tu-dortmund.de. Office hours: Phone support Mon–Fri (specific days/times vary; in-person Tuesdays 1–3:30 pm by appointment via terminland.de). General: +49 231 755-1."
    ],
    "website": "https://www.tu-dortmund.de",
    "cityInfo": "A major city in the Ruhr region (~590,000 people), once an industrial powerhouse (steel/coal) now transformed into a modern, green, and cultural hub. Features include the Signal Iduna Park (famous Borussia Dortmund football stadium), Phoenix See lake (former steelworks turned waterfront with cafes/parks), Zeche Zollern industrial museum, art/culture scene (Theater Dortmund, museums), festivals, and easy access to nature (Emscher Park trails).",
    "whyChoose": [
      "Founded 1968 (one of Germany's younger technical unis), TU Dortmund has a strong practical/research profile (~30,000 students, 19–20% international from 120+ countries)",
      "Excellent in engineering, sciences, IT, automation/robotics, chemistry, and interdisciplinary fields (e",
      "Part of the University Alliance Ruhr (with Bochum/Essen-Duisburg) for broader resources",
      "No tuition fees (public uni), modern campus with good facilities (labs, sports), strong industry links (Ruhr region's economy), and growing English programs for internationals",
      "Affordable city with high quality of life, football culture, and easy regional travel"
    ]
  },
  {
    "slug": "heinrich-heine-university-duesseldorf",
    "name": "Heinrich Heine University Düsseldorf",
    "country": "Germany",
    "city": "Düsseldorf",
    "imageKey": "dsseldorf",
    "shortDescription": "Founded 1965, ~35,000 students, strong in life sciences (biology, medicine, chemistry), quantitative fields, and humanities. Growing international focus with several English programs; research-oriented (e.g., AI, data science, biology).",
    "overview": "Fashion and business hub in North Rhine-Westphalia (~620,000 people). Modern, affluent city with luxury shopping (Königsallee), Rhine River promenade, art museums (Kunstsammlung NRW), vibrant nightlife (Altstadt pubs), international vibe (many expats), and easy access to Cologne/Netherlands. Student-friendly (~35,000 students), safe, green parks (Hofgarten), but higher costs than smaller cities. Why Choose This University?: Founded 1965, ~35,000 students, strong in life sciences (biology, medicine, chemistry), quantitative fields, and humanities. Growing international focus with several English programs; research-oriented (e.g., AI, data science, biology). Modern facilities, central location for internships (business/fashion/pharma hubs), and welcoming for internationals.",
    "keyFacts": [
      "No tuition; semester fee ~€300–350.",
      "Founded 1965, ~35,000 students, strong in life sciences (biology, medicine, chemistry), quantitative fields, and humanit…"
    ],
    "programs": [
      {
        "name": "English-taught Master's programmes (e.g. economics, data science; see website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Artificial Intelligence and Data Science (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Comparative Studies in English and American Language, Literature and Culture (M.A.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Translational Neuroscience (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Uni-assist VPD for equivalence, English proof (IELTS 6.5+/TOEFL 90+), motivation/CV sometimes. Deadlines: Winter July 15; Summer Jan 15 (program-specific)."
    ],
    "helpfulInfo": [
      "Address: Universitätsstraße 1, 40225 Düsseldorf, Germany (main campus in southern Düsseldorf).",
      "Many programs restricted (NC/grades); growing English portfolio.",
      "International Office: Phone: +49 211 81-10800; Email: international@hhu.de or admissions-specific."
    ],
    "website": "https://www.hhu.de",
    "tuition": "No tuition; semester fee ~€300–350.",
    "cityInfo": "Fashion and business hub in North Rhine-Westphalia (~620,000 people). Modern, affluent city with luxury shopping (Königsallee), Rhine River promenade, art museums (Kunstsammlung NRW), vibrant nightlife (Altstadt pubs), international vibe (many expats), and easy access to Cologne/Netherlands. Student-friendly (~35,000 students), safe, green parks (Hofgarten), but higher costs than smaller cities.",
    "whyChoose": [
      "Founded 1965, ~35,000 students, strong in life sciences (biology, medicine, chemistry), quantitative fields, and humanities",
      "Growing international focus with several English programs",
      "research-oriented (e",
      ", AI, data science, biology)",
      "Modern facilities, central location for internships (business/fashion/pharma hubs), and welcoming for internationals"
    ]
  },
  {
    "slug": "university-of-hamburg",
    "name": "University of Hamburg",
    "country": "Germany",
    "city": "Hamburg",
    "imageKey": "hamburg",
    "shortDescription": "Founded 1919, ~43,000 students, comprehensive with strengths in social sciences, law, natural sciences, business, and humanities. Highly international, many English Master's (~50+ options), urban location for internships (port/media/NGOs), no tuition, and vibrant city life.",
    "overview": "Germany's second-largest city (~1.85 million), major port with cosmopolitan vibe. Historic Speicherstadt (UNESCO), Elbphilharmonie concert hall, diverse neighborhoods (St. Pauli nightlife, Altona hipster scene), lakes/rivers, international flair, festivals, and strong job market (media, logistics, tech). Very student-oriented (~100,000+ students citywide), English common. Why Choose This University?: Founded 1919, ~43,000 students, comprehensive with strengths in social sciences, law, natural sciences, business, and humanities. Highly international, many English Master's (~50+ options), urban location for internships (port/media/NGOs), no tuition, and vibrant city life.",
    "keyFacts": [
      "No tuition; semester fee ~€300–350.",
      "Founded 1919, ~43,000 students, comprehensive with strengths in social sciences, law, natural sciences, business, and hu…"
    ],
    "programs": [
      {
        "name": "English-taught Master's programmes (diverse; see website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "African Languages & Cultures (M.A.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "International Business Administration (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Peace and Security Studies",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Uni-assist for many, English proof (IELTS/TOEFL), motivation for some. Deadlines: Winter May–June (changing); Summer Dec–Jan."
    ],
    "helpfulInfo": [
      "Address: Mittelweg 177, 20148 Hamburg, Germany (main campus central; multiple sites).",
      "Many consecutive Master's; some non-consecutive.",
      "International Office: Phone: +49 40 42838-0; Email: international@uni-hamburg.de or campuscenter@uni-hamburg.de."
    ],
    "website": "https://www.uni-hamburg.de",
    "tuition": "No tuition; semester fee ~€300–350.",
    "cityInfo": "Germany's second-largest city (~1.85 million), major port with cosmopolitan vibe. Historic Speicherstadt (UNESCO), Elbphilharmonie concert hall, diverse neighborhoods (St. Pauli nightlife, Altona hipster scene), lakes/rivers, international flair, festivals, and strong job market (media, logistics, tech). Very student-oriented (~100,000+ students citywide), English common.",
    "whyChoose": [
      "Founded 1919, ~43,000 students, comprehensive with strengths in social sciences, law, natural sciences, business, and humanities",
      "Highly international, many English Master's (~50+ options), urban location for internships (port/media/NGOs), no tuition, and vibrant city life"
    ]
  },
  {
    "slug": "philipps-universitaet-marburg",
    "name": "Philipps-Universität Marburg",
    "country": "Germany",
    "city": "Marburg",
    "imageKey": "marburg",
    "shortDescription": "Founded 1527 (Germany's oldest Protestant uni), ~22,000 students, strong in humanities (e.g., theology, languages), social sciences, medicine, and economics. Research-focused (e.g., Middle East studies), intimate town atmosphere, no tuition, welcoming for internationals, and scenic location for relaxed studies.",
    "overview": "Charming university town in Hesse (~80,000 people), medieval old town (half-timbered houses, Landgrafenschloss castle), fairy-tale vibe (Brothers Grimm connections), Lahn River, hills for hiking. Very student-dominated (~50% students), relaxed, affordable, safe, with cozy cafes/pubs and cultural events. Smaller/intimate feel, green/nature access. Why Choose This University?: Founded 1527 (Germany's oldest Protestant uni), ~22,000 students, strong in humanities (e.g., theology, languages), social sciences, medicine, and economics. Research-focused (e.g., Middle East studies), intimate town atmosphere, no tuition, welcoming for internationals, and scenic location for relaxed studies.",
    "keyFacts": [
      "No tuition; semester fee ~€300–350.",
      "Founded 1527 (Germany's oldest Protestant uni), ~22,000 students, strong in humanities (e.g., theology, languages), soci…"
    ],
    "programs": [
      {
        "name": "Bachelor's (mostly German-taught; limited English options; see website)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "English-taught Master's programmes (good range; see website)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Economics & Institutions (M.Sc., English)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Economics of the Middle East (M.Sc., English)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "International Political Economy (M.Sc., English; double degree)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "International Business Management (M.Sc., German/English)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computer Science (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Business Informatics (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Uni-assist often, English proof (IELTS/TOEFL), motivation. Deadlines: Winter July 15; Summer Jan 15."
    ],
    "helpfulInfo": [
      "Address: Biegenstraße 10, 35037 Marburg, Germany (historic upper/lower town campuses).",
      "Strong international Master's in economics/political economy.",
      "International Office: Phone: +49 6421 28-27012; Email: international@uni-marburg.de."
    ],
    "website": "https://www.uni-marburg.de",
    "tuition": "No tuition; semester fee ~€300–350.",
    "cityInfo": "Charming university town in Hesse (~80,000 people), medieval old town (half-timbered houses, Landgrafenschloss castle), fairy-tale vibe (Brothers Grimm connections), Lahn River, hills for hiking. Very student-dominated (~50% students), relaxed, affordable, safe, with cozy cafes/pubs and cultural events. Smaller/intimate feel, green/nature access.",
    "whyChoose": [
      "Founded 1527 (Germany's oldest Protestant uni), ~22,000 students, strong in humanities (e",
      ", theology, languages), social sciences, medicine, and economics",
      "Research-focused (e",
      ", Middle East studies), intimate town atmosphere, no tuition, welcoming for internationals, and scenic location for relaxed studies"
    ]
  },
  {
    "slug": "ludwig-maximilians-universitaet-muenchen",
    "name": "Ludwig-Maximilians-Universität München",
    "country": "Germany",
    "city": "Munich",
    "imageKey": "munich",
    "shortDescription": "Founded 1472, one of Germany's oldest/largest (~50,000 students), top-ranked (often top 50–100 globally QS/THE), Excellence University status with strong research (life sciences, physics, humanities, economics). Comprehensive \"universitas\" (all fields except engineering—TU Munich covers that).",
    "overview": "Bavaria's capital and one of Germany's most prosperous, high-quality-of-life cities (~1.6 million people). Iconic sights (Marienplatz, English Garden, Nymphenburg Palace, BMW Welt), world-class museums (Pinakothek trio, Deutsches Museum), beer gardens/Oktoberfest, vibrant cultural scene (theater, opera, film festivals), Alps nearby for day trips (hiking/skiing), tech/startup hub (UnternehmerTUM), and international flair (many expats). Student-heavy (~100,000+ students citywide), safe, clean, efficient public transport (MVV network). Extremely expensive city—highest living costs in Germany. Why Choose This University?: Founded 1472, one of Germany's oldest/largest (~50,000 students), top-ranked (often top 50–100 globally QS/THE), Excellence University status with strong research (life sciences, physics, humanities, economics). Comprehensive \"universitas\" (all fields except engineering—TU Munich covers that). Highly international (many English Master's), vibrant Munich location for culture/jobs (BMW, Siemens, startups), no tuition fees (public uni), excellent libraries/facilities, and alumni network (Nobel winners, thinkers like Habermas). Ideal for research-oriented studies in sciences/humanities/social sciences; competitive admission for popular fields (e.g., medicine/psychology NC-restricted).",
    "keyFacts": [
      "Founded 1472, one of Germany's oldest/largest (~50,000 students), top-ranked (often top 50–100 globally QS/THE), Excelle…"
    ],
    "programs": [
      {
        "name": "American History, Culture and Society (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Ancient Oriental Studies (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Astrophysics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Biochemistry (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Bioinformatics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Chemistry (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Digital Cultural Heritage (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Epidemiology (MSc, winter start)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "History (various MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Informatics/Computer Science variants",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Mathematics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Munich English Studies (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Physics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Quantitative Economics (MSc, winter start)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Sociology (MSc, winter start)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Statistics & Data Science (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification (high school for Bachelor's—often via uni-assist VPD; Bachelor's degree for Master's—equivalence check).",
      "English proficiency: IELTS 6.5+/TOEFL 90+ (or equivalent) for English programs.",
      "Motivation letter/CV/references sometimes; aptitude tests/interviews for some (e.g., restricted Master's).",
      "Apply via International Office (zulassung.international@lmu.de) or portals like MoveIN (for many Master's: Nov 15, 2025–Jan 15, 2026 for winter 2026/27). Deadlines: Winter often July 15; Summer Jan 15; program-specific (earlier for internationals).",
      "No tuition fees (public uni); semester fee ~€85–150 (includes student union, basic transport ticket—rising slightly to ~€97 from summer 2026 in Bavaria). Non-EU: Proof of funds ~€11,904/year (blocked account) for visa."
    ],
    "helpfulInfo": [
      "Address: Geschwister-Scholl-Platz 1, 80539 Munich, Germany (main campus in Maxvorstadt, central near museums/English Garden; multiple sites including HighTechCampus Martinsried for life sciences).",
      "International Office/Admissions: Phone: +49 89 2180-2823 or subject-specific numbers; Email: zulassung.international@lmu.de (admissions internationals) or international@lmu.de (general). International Office for counseling/Zoom hours. Website has subject list for direct contacts."
    ],
    "website": "https://www.lmu.de",
    "cityInfo": "Bavaria's capital and one of Germany's most prosperous, high-quality-of-life cities (~1.6 million people). Iconic sights (Marienplatz, English Garden, Nymphenburg Palace, BMW Welt), world-class museums (Pinakothek trio, Deutsches Museum), beer gardens/Oktoberfest, vibrant cultural scene (theater, opera, film festivals), Alps nearby for day trips (hiking/skiing), tech/startup hub (UnternehmerTUM), and international flair (many expats).",
    "whyChoose": [
      "Founded 1472, one of Germany's oldest/largest (~50,000 students), top-ranked (often top 50–100 globally QS/THE), Excellence University status with strong research (life sciences, physics, humanities, economics)",
      "Comprehensive \"universitas\" (all fields except engineering—TU Munich covers that)",
      "Highly international (many English Master's), vibrant Munich location for culture/jobs (BMW, Siemens, startups), no tuition fees (public uni), excellent libraries/facilities, and alumni network (Nobel winners, thinkers like Habermas)",
      "Ideal for research-oriented studies in sciences/humanities/social sciences",
      "competitive admission for popular fields (e"
    ]
  },
  {
    "slug": "university-of-bologna",
    "name": "University of Bologna",
    "country": "Italy",
    "city": "Bologna",
    "imageKey": "bologna",
    "shortDescription": "World's oldest university in continuous operation (1088); ~90,000 students; top-ranked in Italy (~top 150–200). Strong in humanities, law, sciences, engineering, medicine; many English programmes; income-based tuition.",
    "overview": "Bologna is Italy's culinary and university capital (~390,000), with a historic centre (medieval towers, UNESCO porticoes), lively piazzas, and ~100,000+ students. Living ~€800–1,200/month (affordable vs Rome/Milan). Unibo offers over 260 programmes (200+ in foreign languages), ~10,000 international students, and strong English options in business, AI, engineering, and humanities. Tuition is income-based (from ~€157/year); scholarships and exemptions available.",
    "keyFacts": [
      "Founded 1088; ~90,000 students; top 150–200 globally; over 260 programmes (200+ in foreign languages).",
      "Tuition: income-based (~€157–€3,000/year); scholarships/exemptions for merit and developing countries.",
      "Living: ~€800–1,200/month. Strong English Bachelor's and Master's (e.g. Business, AI, International Relations, Economics)."
    ],
    "programs": [
      {
        "name": "Business and Economics (CLABE, B.Sc.)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Genomics (B.Sc.)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "International Relations and Diplomatic Affairs (B.A.)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "Statistical Sciences (B.Sc.)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "Economics and Finance (B.Sc.)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "Artificial Intelligence (M.Sc.)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Artificial Intelligence and Innovation Management (Professional Master)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Civil Engineering variants",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Automation Engineering",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Communications Engineering",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Offshore Engineering",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "International Management (various)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Economics and Finance",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification (high school for Bachelor's—equivalence via CIMEA or uni check; Bachelor's degree for Master's).",
      "English proficiency: IELTS/TOEFL often required (B2–C1; program-specific; multiple certificates accepted like PTE, Cambridge).",
      "Motivation letter/CV sometimes; entrance exam/interview/test for some (e.g., GRE/GMAT for business).",
      "Non-EU: Apply via uni portal or Universitaly (pre-enrollment for visa); deadlines vary by program (e.g., intakes Nov–May for some Master's; earlier for non-EU visa). Application fee ~€50–100.",
      "Tuition: Income-based (ISEE system): Minimum ~€157 (first installment) + max ~€3,000/year depending on program/income (non-EU often pay full unless exemptions; reduced fixed fee for citizens of developing/non-EU-OECD countries). Scholarships/exemptions available (e.g., merit, low income)."
    ],
    "helpfulInfo": [
      "Address: Via Zamboni 33, 40126 Bologna, Italy (historic centre; campuses also in Cesena, Forlì, Ravenna, Rimini).",
      "Contact: +39 051 208 8111; internationaldesk@unibo.it or info@unibo.it. Official website: www.unibo.it/en"
    ],
    "website": "https://www.unibo.it",
    "cityInfo": "Bologna: Italy's culinary capital (~390,000); historic centre (UNESCO), medieval towers, piazzas, markets; ~100,000+ students; affordable living.",
    "whyChoose": [
      "World's oldest university (1088); ~90,000 students; top-ranked in Italy; strong in humanities, law, sciences, engineering, medicine.",
      "Over 260 programmes, 200+ in foreign languages; ~10,000 international students; research excellence in AI, innovation, classics.",
      "Income-based tuition; scholarships for merit and developing countries; Bologna's vibrant student life and central location."
    ]
  },
  {
    "slug": "sapienza-universita-di-roma",
    "name": "Sapienza Università di Roma",
    "country": "Italy",
    "city": "Rome",
    "imageKey": "rome",
    "shortDescription": "Founded 1303, Europe's largest university (~110,000–120,000 students), top-ranked in Italy/Southern Europe (~top 130–170 QS/THE 2026), strong research (Excellence in classics, archaeology, physics, engineering, medicine).",
    "overview": "Italy's eternal capital (~2.8 million people), a living museum with ancient ruins (Colosseum, Roman Forum, Pantheon), Renaissance/Vatican treasures (Sistine Chapel, St. Peter's), vibrant neighborhoods (Trastevere for nightlife/food, Testaccio for authentic cuisine), endless cafes/gelato, fashion/art scene, and Mediterranean climate. Student-heavy (~150,000+ across unis), international (tourists/expats everywhere), chaotic yet romantic—walkable historic center, excellent public transport (metro/buses/trams), but crowded/expensive housing. Iconic for history/culture lovers; daily life mixes ancient vibes with modern energy (events, festivals like Estate Romana). Why Choose This University?: Founded 1303, Europe's largest university (~110,000–120,000 students), top-ranked in Italy/Southern Europe (~top 130–170 QS/THE 2026), strong research (Excellence in classics, archaeology, physics, engineering, medicine). Vast programs (hundreds in Italian + many English), historic campuses in Rome's heart (immersive cultural experience), international focus (thousands of foreign students), no/low tuition for many, scholarships/regional aid available. Ideal for humanities, classics, sciences, engineering, with Rome's unbeatable location for internships (UN agencies, embassies, tourism/tech). Affordable public uni with high prestige; great for history/art/archaeology lovers.",
    "keyFacts": [
      "Founded 1303; Europe's largest (~110,000–120,000 students); top 130–170 QS/THE; strong in classics, archaeology, physics, engineering, medicine.",
      "Tuition: income-based ~€300–€2,900/year (avg ~€1,000–1,600 for non-EU). ~59 English Bachelor's + Master's.",
      "Living in Rome: ~€900–1,500/month. Pre-selection via MoveIN for non-EU (deadline May 15)."
    ],
    "programs": [
      {
        "name": "Applied Computer Science and Artificial Intelligence (BSc)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "Bioinformatics (BSc)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "Business Sciences (BSc)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "Classics (BA)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "Economics and Finance (BSc)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "Global Humanities (BA)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "Sustainable Building Engineering (BSc)",
        "level": "Bachelor",
        "field": "Various",
        "duration": "3 years",
        "language": "English"
      },
      {
        "name": "Applied Dynamic and Clinical Psychology (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Architecture (Conservation) (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Architecture - Urban Regeneration (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Artificial Intelligence and Robotics (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Astrophysics and Cosmology (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Atmospheric Science and Technology for Meteorology & Climate (MSc, joint)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Biochemistry (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Business Management (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Chemical Engineering (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Cognitive Neuroscience (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Computer Science (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Control Engineering (MSc)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      },
      {
        "name": "Cultural Heritage in the Near and Middle East, and in Africa (MA)",
        "level": "Master",
        "field": "Various",
        "duration": "2 years",
        "language": "English"
      }
    ],
    "requirements": [
      "Recognized qualification (high school for Bachelor's, Bachelor's degree for Master's; equivalence via CIMEA/DiploME or uni check).",
      "English proficiency: IELTS/TOEFL often required (B2–C1 level, program-specific; some no mandatory test).",
      "Pre-selection via MoveIN platform (non-EU visa-seekers: Dec 22, 2025–May 15, 2026; €30 application fee per program, max 2). Then Universitaly registration by June end.",
      "Motivation/CV sometimes; entrance tests for restricted fields.",
      "Deadlines: Pre-selection ends May 15, 2026 for visa non-EU; Italian-taught options later. Apply via uniroma1.it/en/admissions.",
      "Tuition: Income-based ~€300–€2,900/year (average ~€1,000–1,600 for non-EU; lower with scholarships/ISEE if applicable; installments possible). No fixed high fees like private unis."
    ],
    "helpfulInfo": [
      "Address: Piazzale Aldo Moro 5, 00185 Rome, Italy (central, near Termini; multiple campuses, e.g. San Lorenzo for engineering).",
      "Contact: +39 06 49911; international.admissions@uniroma1.it or study@uniroma1.it. Official website: uniroma1.it/en"
    ],
    "website": "https://www.uniroma1.it",
    "cityInfo": "Rome: Italy's eternal capital (~2.8 million); ancient ruins, Vatican, vibrant neighbourhoods; ~150,000+ students citywide; living ~€900–1,500/month.",
    "whyChoose": [
      "Founded 1303, Europe's largest university (~110,000–120,000 students), top-ranked in Italy/Southern Europe (~top 130–170 QS/THE 2026), strong research (Excellence in classics, archaeology, physics, engineering, medicine)",
      "Vast programs (hundreds in Italian + many English), historic campuses in Rome's heart (immersive cultural experience), international focus (thousands of foreign students), no/low tuition for many, scholarships/regional aid available",
      "Ideal for humanities, classics, sciences, engineering, with Rome's unbeatable location for internships (UN agencies, embassies, tourism/tech)",
      "Affordable public uni with high prestige",
      "great for history/art/archaeology lovers"
    ]
  },
  {
    "slug": "university-of-cologne",
    "name": "University of Cologne",
    "country": "Germany",
    "city": "Cologne",
    "imageKey": "cologne-kln",
    "shortDescription": "Founded 1388 (one of Europe's oldest), re-founded 1919, ~50,000 students, comprehensive with strengths in management/economics (WiSo Faculty top-ranked), humanities, law, medicine, natural sciences. Many English Master's, no tuition, central Cologne.",
    "overview": "One of Germany's oldest and most vibrant cities (~1.1 million people), famous for its massive Gothic cathedral (Kölner Dom, UNESCO site), Rhine River views, carnival (world-famous Rosenmontag parades), Kölsch beer culture, museums (Chocolate Museum, Romano-Germanic Museum), and lively neighborhoods (Belgisches Viertel for trendy cafes/bars, Ehrenfeld for street art/alternative scene). Student-heavy (~100,000+ students across unis), international (large expat community), with excellent public transport (trains to Düsseldorf/Cologne airport), festivals, and a fun, open vibe. Historic yet modern, safe, and walkable—great for culture, nightlife, and Rhine cruises. Why Choose This University?: Founded 1388 (one of Europe's oldest), re-founded 1919, ~50,000 students, comprehensive \"universitas\" with strengths in management/economics/social sciences (WiSo Faculty top-ranked), humanities, law, medicine, and natural sciences. Highly international, many English Master's (especially business/economics), research excellence (clusters in economics, AI, health), no tuition fees (public uni), central location for internships (media, finance), and Cologne's fun, welcoming atmosphere. Ideal for social sciences/business with global focus and strong alumni network.",
    "keyFacts": [
      "Founded 1388 (one of Europe's oldest), re-founded 1919; ~50,000 students; WiSo Faculty top-ranked in business/economics",
      "No tuition fees; semester fee ~€300–350; many English Master's (especially business/economics)",
      "Central Cologne for internships (media, finance); strong international focus"
    ],
    "programs": [
      { "name": "Business Administration (M.Sc., various specializations)", "level": "Master", "field": "Various", "duration": "2 years", "language": "English" },
      { "name": "Economics (M.Sc.)", "level": "Master", "field": "Various", "duration": "2 years", "language": "English" },
      { "name": "International Management (CEMS MIM)", "level": "Master", "field": "Various", "duration": "2 years", "language": "English" },
      { "name": "English Studies (M.A.)", "level": "Master", "field": "Various", "duration": "2 years", "language": "English" },
      { "name": "Knowledge and Society (M.A.)", "level": "Master", "field": "Various", "duration": "2 years", "language": "English" }
    ],
    "requirements": [
      "Recognized qualification (high school for Bachelor's—uni-assist VPD/equivalence; Bachelor's degree for Master's).",
      "English proficiency: IELTS 6.5+/TOEFL 90+ (or equivalent) for English programs.",
      "Motivation letter/CV sometimes; aptitude tests for restricted fields.",
      "Apply via uni-koeln.de portal or uni-assist (for many internationals). Deadlines: Winter (Oct start) often July 15; Summer (Apr start) Jan 15; Master's program-specific (earlier for some, e.g., WiSo Feb/Mar).",
      "No tuition fees; semester fee ~€300–350 (includes public transport ticket NRW-wide, student services). Non-EU: Proof of funds €11,904/year (blocked account) for visa."
    ],
    "helpfulInfo": [
      "Address: Albertus-Magnus-Platz, 50923 Cologne, Germany (main campus near cathedral; International Office: SSC, Universitätsstraße 22a).",
      "Contact: +49 221 470-0; international@uni-koeln.de or zulassung@verwaltung.uni-koeln.de. Official website: www.uni-koeln.de/en"
    ],
    "website": "https://www.uni-koeln.de",
    "cityInfo": "Cologne: one of Germany's oldest cities (~1.1 million); cathedral (UNESCO), Rhine, carnival, Kölsch culture, museums; ~100,000+ students; living ~€900–1,200/month.",
    "whyChoose": [
      "Founded 1388 (one of Europe's oldest), re-founded 1919, ~50,000 students, comprehensive with strengths in management/economics (WiSo Faculty top-ranked), humanities, law, medicine, natural sciences",
      "Many English Master's (especially business/economics), no tuition fees, central Cologne for internships (media, finance)",
      "Ideal for social sciences/business with global focus and strong alumni network"
    ]
  },
  {
    "slug": "charles-university-prague",
    "name": "Charles University",
    "country": "Czech Republic",
    "city": "Prague",
    "imageKey": "prague",
    "shortDescription": "Oldest university in Central Europe (founded 1348), ~50,000 students, top-ranked in region. Comprehensive offerings (over 850 programs, 200+ in foreign languages), strong in medicine, humanities, sciences. Highly international (~12,000 foreign students), Prague's cultural immersion, affordable tuition (free in Czech; English programs €1,000–24,000/year).",
    "overview": "Prague (~1.3 million people) is one of Europe's most beautiful capitals: historic old town (UNESCO), Prague Castle, Charles Bridge, Vltava River, vibrant cafes/pubs, art/music scene, affordable yet lively student life (~100,000+ students citywide), safe, walkable, with excellent public transport (metro/trams) and easy European travel. Why Choose This University?: Historic prestige (oldest in Central Europe, alumni include Kafka, Einstein connections), top-ranked in region, comprehensive offerings (over 850 programs, 200+ in foreign languages), strong research (e.g., medicine, humanities, sciences), highly international (~12,000 foreign students from 140+ countries), Prague's unbeatable cultural immersion (history/art/lifestyle), affordable tuition compared to Western Europe, scholarships/reductions available (merit-based after year 1, government for developing countries), and vibrant student life in a safe, beautiful city. Ideal for medicine/humanities/social sciences with English options and no/low fees in Czech (free for all if you learn Czech).",
    "keyFacts": [
      "Founded 1348, oldest in Central Europe; ~50,000 students; 17 faculties; top 200–300 globally (QS/THE)",
      "Free tuition in Czech (all nationalities); English/foreign-language: €1,000–24,000/year (median ~€6,000)",
      "Highly international (~12,000 foreign students from 140+ countries)"
    ],
    "programs": [
      { "name": "Computer Science/Informatics", "level": "Bachelor", "field": "Various", "duration": "3 years", "language": "English" },
      { "name": "Economics and Finance (M.Sc.)", "level": "Master", "field": "Various", "duration": "2 years", "language": "English" },
      { "name": "International Economic and Political Studies", "level": "Master", "field": "Various", "duration": "2 years", "language": "English" },
      { "name": "Anglophone Literatures and Cultures (M.A.)", "level": "Master", "field": "Various", "duration": "2 years", "language": "English" },
      { "name": "Astrophysics/Cosmology", "level": "Master", "field": "Various", "duration": "2 years", "language": "English" },
      { "name": "Biochemistry", "level": "Master", "field": "Various", "duration": "2 years", "language": "English" }
    ],
    "requirements": [
      "Recognized prior qualification (high school for Bachelor's, Bachelor's for Master's; equivalence check via CIMEA or faculty).",
      "English proficiency: Often IELTS/TOEFL (B2–C1 level; program-specific).",
      "Entrance exam/motivation letter/CV for many; some document-based.",
      "Apply via faculty portals or central system; deadlines vary by faculty/program (Feb–June/July for English; earlier for non-EU visa time). Application fee ~€60–150.",
      "Tuition: Free in Czech (for all nationalities); English/foreign-language: €1,000–24,000/year (median ~€6,000; varies by faculty/program). Reductions/scholarships available (merit, developing countries)."
    ],
    "helpfulInfo": [
      "Address: Ovocný trh 560/5, 116 36 Prague 1, Czech Republic (historic centre; faculties across city).",
      "Contact: +420 224 491 850; info@cuni.cz. Official website: www.cuni.cz/UKEN-1.html; studycharles.cz for internationals."
    ],
    "website": "https://www.cuni.cz",
    "cityInfo": "Prague (~1.3 million): historic old town (UNESCO), Prague Castle, Charles Bridge; vibrant, affordable student life (~100,000+ citywide); living ~€550–1,000/month.",
    "whyChoose": [
      "Oldest university in Central Europe (1348), top-ranked in region, comprehensive offerings (over 850 programs, 200+ in foreign languages)",
      "Highly international (~12,000 foreign students), Prague's cultural immersion, affordable tuition (free in Czech; English programs with scholarships)",
      "Ideal for medicine/humanities/social sciences with English options"
    ]
  }
];
