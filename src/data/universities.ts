export type UniversityCategory = "Austria" | "Germany" | "Italy" | "Czech Republic" | "Poland";

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

export const universities: University[] = [
  // —— Austria (most options, Klagenfurt first) ——
  {
    slug: "university-of-klagenfurt",
    name: "University of Klagenfurt",
    country: "Austria",
    city: "Klagenfurt",
    imageKey: "klagenfurt",
    shortDescription:
      "Modern university known for informatics, AI, data science, and business. Smaller and more personal than big city universities, making it easier for international students to adapt.",
    overview:
      "The University of Klagenfurt (AAU) is a modern Austrian university in Carinthia, known for informatics, business, education, and technical sciences. It offers several degree programmes taught in English and has a strong international community and close student–supervisor relations. Smaller and more personal than big city universities.",
    keyFacts: [
      "English-taught Master programmes including Informatics, Data Science, Information Management",
      "~€726 per semester for non-EU students (public university standard)",
      "Klagenfurt: smaller city, easier to adapt, close to tech industry",
    ],
    programs: [
      { name: "Computer Science", level: "Bachelor", field: "IT", duration: "3 years", language: "German / English" },
      { name: "Business", level: "Bachelor", field: "Business", duration: "3 years", language: "German" },
      { name: "Media & Communication", level: "Bachelor", field: "Media", duration: "3 years", language: "German" },
      { name: "Data Science", level: "Master", field: "Computer Science / Data", duration: "2 years", language: "English" },
      { name: "AI", level: "Master", field: "Computer Science / AI", duration: "2 years", language: "English" },
      { name: "Information Management", level: "Master", field: "Business / IT", duration: "2 years", language: "English" },
      { name: "Informatics & research", level: "PhD", field: "Research", duration: "3+ years", language: "English / German" },
    ],
    requirements: [
      "Relevant Bachelor’s degree for Master programmes",
      "Proof of English (e.g. IELTS, TOEFL) for English-taught programmes",
      "Transcript of records, CV, motivation letter",
      "Check programme-specific admission criteria on the university website",
    ],
    helpfulInfo: [
      "Klagenfurt is a student-friendly city with a lake and outdoor activities",
      "Austria has moderate tuition fees and scholarship options for international students",
      "Good connections to Vienna, Graz, and Italy/Slovenia",
    ],
    website: "https://www.aau.at",
    tuition: "~€726 per semester for non-EU students (public university standard)",
    livingCosts: "~€850–€1,100/month average (Austria-wide range)",
    livingCostsBreakdown: [
      "Accommodation: dorm €250–€450, shared flat €350–€600",
      "Food: ~€300–€400",
      "Personal/study: ~€200–€350",
    ],
    cityInfo: "Klagenfurt is Austria’s southern hub in Carinthia. Smaller than Vienna or Graz, with a lake, outdoor activities, and a more personal campus. Well connected to Slovenia and Italy.",
    whyChoose: [
      "Strong IT and data science programmes",
      "Smaller city → easier to adapt and lower living costs",
      "Close connection with tech industry",
    ],
  },
  {
    slug: "university-of-vienna",
    name: "University of Vienna",
    country: "Austria",
    city: "Vienna",
    imageKey: "vienna",
    shortDescription:
      "One of Europe’s oldest and most prestigious universities with a very large selection of Bachelor’s, Master’s, and PhD programs across IT, economics, law, social sciences, and humanities.",
    overview:
      "The University of Vienna is one of the oldest and largest universities in Europe, offering a broad range of programmes in humanities, natural sciences, social sciences, law, economics, and IT. Highly international and located in the center of Vienna, with strong academic reputation and research opportunities. Many Master programmes are taught in English.",
    keyFacts: [
      "Huge programme selection across all major disciplines",
      "~€726.72 per semester for non-EU students",
      "Vienna regularly ranks among the world’s most livable cities",
    ],
    programs: [
      { name: "Economics", level: "Bachelor", field: "Economics", duration: "3 years", language: "German / English" },
      { name: "Business", level: "Bachelor", field: "Business", duration: "3 years", language: "German" },
      { name: "Computer Science", level: "Bachelor", field: "IT", duration: "3 years", language: "German" },
      { name: "Law", level: "Bachelor", field: "Law", duration: "4+ years", language: "German" },
      { name: "Psychology", level: "Bachelor", field: "Social Sciences", duration: "3 years", language: "German" },
      { name: "Data Science", level: "Master", field: "Computer Science / Data", duration: "2 years", language: "English" },
      { name: "Economics", level: "Master", field: "Economics", duration: "2 years", language: "English" },
      { name: "AI", level: "Master", field: "Computer Science / AI", duration: "2 years", language: "English" },
      { name: "Business Analytics", level: "Master", field: "Business", duration: "2 years", language: "English" },
      { name: "International Relations", level: "Master", field: "Social Sciences", duration: "2 years", language: "English" },
      { name: "Wide research spectrum", level: "PhD", field: "Various", duration: "3+ years", language: "English / German" },
    ],
    requirements: [
      "Relevant Bachelor’s degree for Master programmes",
      "English proficiency for English-taught programmes (e.g. IELTS, TOEFL)",
      "Transcript, CV, motivation letter; some programmes have additional criteria",
    ],
    helpfulInfo: [
      "Vienna offers a rich cultural life and excellent public transport",
      "Tuition fees are moderate; scholarships available for eligible students",
    ],
    website: "https://www.univie.ac.at",
    tuition: "~€726.72 per semester for non-EU students",
    livingCosts: "~€900–€1,300/month average (Vienna)",
    livingCostsBreakdown: [
      "Accommodation: ~€450/month",
      "Food: ~€350",
      "Personal/study: ~€400",
    ],
    cityInfo: "Vienna is Austria’s capital and one of the world’s most livable cities. Central European hub with rich culture, public transport, and a large international student community.",
    whyChoose: [
      "Huge programme selection",
      "Strong reputation and research opportunities",
      "Located in the capital city",
    ],
  },
  {
    slug: "tu-wien",
    name: "TU Wien (Technical University of Vienna)",
    country: "Austria",
    city: "Vienna",
    imageKey: "vienna",
    shortDescription:
      "Top technical university in Austria focused on engineering, computer science, AI, and innovation. Strong research output and industry collaboration.",
    overview:
      "TU Wien is Austria’s leading technical university, focused on engineering, computer science, AI, and innovation. Known for strong research output and industry collaboration. Ideal for tech-focused Bachelor and Master students. Over 27,000 students and 50+ degree programmes.",
    keyFacts: [
      "27,000+ students, 50+ degree programmes",
      "~€726.72 per semester for non-EU students; ÖH student union fee required each semester",
      "High employability and research-focused environment",
    ],
    programs: [
      { name: "Computer Science", level: "Bachelor", field: "IT", duration: "3 years", language: "German" },
      { name: "Software Engineering", level: "Bachelor", field: "IT", duration: "3 years", language: "German" },
      { name: "Mechanical Engineering", level: "Bachelor", field: "Engineering", duration: "3 years", language: "German" },
      { name: "Data Engineering", level: "Master", field: "Computer Science / Data", duration: "2 years", language: "English" },
      { name: "AI", level: "Master", field: "Computer Science / AI", duration: "2 years", language: "English" },
      { name: "Robotics", level: "Master", field: "Engineering", duration: "2 years", language: "English" },
      { name: "Renewable Energy", level: "Master", field: "Engineering", duration: "2 years", language: "English" },
      { name: "Technical research fields", level: "PhD", field: "Research", duration: "3+ years", language: "English / German" },
    ],
    requirements: [
      "Relevant Bachelor’s degree for Master programmes",
      "Proof of English for English-taught programmes",
      "Transcript, CV, motivation letter; some programmes have restricted admission",
    ],
    helpfulInfo: [
      "ÖH (student union) fee is required each semester in addition to tuition",
      "Strong industry links and career services",
    ],
    website: "https://www.tuwien.at",
    tuition: "~€726.72 per semester for non-EU students (ÖH fee required each semester)",
    livingCosts: "~€750–€1,100/month typical student budget (Vienna)",
    cityInfo: "Located in Vienna, Austria’s capital. TU Wien has multiple sites in the city with good public transport links. Vienna offers a high quality of life and a large tech and startup scene.",
    whyChoose: [
      "Strong tech reputation",
      "High employability",
      "Research-focused environment",
    ],
  },
  {
    slug: "graz-university-of-technology",
    name: "TU Graz (Graz University of Technology)",
    country: "Austria",
    city: "Graz",
    imageKey: "graz",
    shortDescription:
      "One of the strongest engineering universities in Austria with modern programs in robotics, AI, and IT. Graz is a student-friendly city with lower living costs than Vienna.",
    overview:
      "TU Graz is one of the strongest engineering universities in Austria, with modern programmes in robotics, AI, and IT. Graz is a student-friendly city with lower living costs than Vienna. Several Master programmes are taught in English.",
    keyFacts: [
      "Strong in engineering, computer science, robotics, and AI",
      "~€730–€750 per semester for non-EU students",
      "Graz: cheaper than Vienna, good student life",
    ],
    programs: [
      { name: "Engineering", level: "Bachelor", field: "Engineering", duration: "3 years", language: "German" },
      { name: "IT", level: "Bachelor", field: "IT", duration: "3 years", language: "German" },
      { name: "Electronics", level: "Bachelor", field: "Engineering", duration: "3 years", language: "German" },
      { name: "Computer Science", level: "Master", field: "Computer Science", duration: "2 years", language: "English" },
      { name: "AI", level: "Master", field: "Computer Science / AI", duration: "2 years", language: "English" },
      { name: "Robotics", level: "Master", field: "Engineering", duration: "2 years", language: "English" },
      { name: "Mechanical Engineering", level: "Master", field: "Engineering", duration: "2 years", language: "English" },
      { name: "Technology & science fields", level: "PhD", field: "Research", duration: "3+ years", language: "English / German" },
    ],
    requirements: [
      "Relevant Bachelor’s degree",
      "Proof of English proficiency for English-taught programmes",
      "Transcript, CV, motivation letter",
    ],
    helpfulInfo: [
      "Graz is compact and student-friendly with a strong tech scene",
      "Reasonable cost of living compared to Vienna",
    ],
    website: "https://www.tugraz.at",
    tuition: "~€730–€750 per semester for non-EU students",
    livingCosts: "~€850–€1,100/month (cheaper than Vienna)",
    cityInfo: "Graz is Austria’s second-largest city: vibrant, student-friendly, and more affordable than Vienna. Strong in tech and innovation with a relaxed quality of life.",
    whyChoose: [
      "Strong technical focus",
      "Lower living costs than Vienna",
      "Good student life",
    ],
  },
  {
    slug: "wu-vienna",
    name: "WU Vienna (Vienna University of Economics & Business)",
    country: "Austria",
    city: "Vienna",
    imageKey: "vienna",
    shortDescription:
      "One of Europe’s top business universities with highly ranked programs in finance, business, and management. Strong focus on international careers and global companies.",
    overview:
      "WU Vienna is one of Europe’s largest and most prestigious business universities. Highly ranked in finance, business, and management with a strong focus on international careers and connections to global companies. Modern campus and diverse student body.",
    keyFacts: [
      "Top business school reputation in Europe",
      "~€726.72 per semester for non-EU students",
      "Strong corporate connections and international environment",
    ],
    programs: [
      { name: "Business Administration", level: "Bachelor", field: "Business", duration: "3 years", language: "German / English" },
      { name: "Economics", level: "Bachelor", field: "Economics", duration: "3 years", language: "German" },
      { name: "Finance", level: "Master", field: "Finance", duration: "2 years", language: "English" },
      { name: "Marketing", level: "Master", field: "Marketing", duration: "2 years", language: "English" },
      { name: "Strategy", level: "Master", field: "Business", duration: "2 years", language: "English" },
      { name: "International Business", level: "Master", field: "Business", duration: "2 years", language: "English" },
      { name: "MBA programmes", level: "Master", field: "Business", duration: "1–2 years", language: "English" },
    ],
    requirements: [
      "Relevant Bachelor’s degree for Master programmes",
      "Proof of English for English-taught programmes",
      "Transcript, CV, motivation letter; some programmes have restricted admission",
    ],
    helpfulInfo: [
      "Strong career services and corporate partnerships",
      "Vienna offers a rich cultural life and excellent transport",
    ],
    website: "https://www.wu.ac.at",
    tuition: "~€726.72 per semester for non-EU students",
    livingCosts: "~€900–€1,300/month (Vienna)",
    cityInfo: "WU is located in Vienna’s 2nd district with a modern campus. Vienna is Austria’s capital and a major business and finance hub in Central Europe.",
    whyChoose: [
      "Top business school reputation",
      "Corporate connections",
      "International environment",
    ],
  },
  {
    slug: "university-of-innsbruck",
    name: "University of Innsbruck",
    country: "Austria",
    city: "Innsbruck",
    imageKey: "innsbruck",
    shortDescription:
      "Major university in the Alps with strengths in natural sciences, management, and law.",
    overview:
      "The University of Innsbruck is a comprehensive university in Tyrol, with strong programmes in natural sciences, business, and humanities. Some Master programmes are offered in English.",
    keyFacts: [
      "Unique alpine setting with outdoor and winter sports",
      "Good mix of German- and English-taught programmes",
      "Smaller, manageable city with a strong student community",
    ],
    programs: [
      {
        name: "MSc Management",
        level: "Master",
        field: "Business & Management",
        duration: "2 years",
        language: "English",
      },
      {
        name: "MSc Physics / Environmental Sciences",
        level: "Master",
        field: "Natural Sciences",
        duration: "2 years",
        language: "English / German",
      },
    ],
    requirements: [
      "Relevant Bachelor’s degree",
      "English or German depending on programme",
      "Transcript, CV, motivation letter",
    ],
    helpfulInfo: [
      "Ideal for students who enjoy mountains and outdoor activities",
      "Innsbruck is well connected to the rest of Austria and Europe",
    ],
    website: "https://www.uibk.ac.at/en/",
    tuition: "~€726 per semester for non-EU students",
    livingCosts: "~€850–€1,100/month (Innsbruck)",
    cityInfo: "Innsbruck is the capital of Tyrol in the Alps. Unique alpine setting with outdoor and winter sports, smaller than Vienna with a strong student community.",
    whyChoose: [
      "Unique alpine setting and quality of life",
      "Good mix of German- and English-taught programmes",
      "Well connected to Austria and Europe",
    ],
  },
  {
    slug: "johannes-kepler-university-linz",
    name: "Johannes Kepler University Linz",
    country: "Austria",
    city: "Linz",
    imageKey: "linz",
    shortDescription:
      "Modern university with strong technical, law, and business programmes in Upper Austria.",
    overview:
      "JKU Linz is a modern Austrian university with a focus on technical sciences, law, business, and social sciences. It offers several English-taught Master programmes.",
    keyFacts: [
      "Strong in computer science, engineering, and business",
      "Modern campus and good industry links",
      "Linz is affordable and well connected",
    ],
    programs: [
      {
        name: "MSc Computer Science",
        level: "Master",
        field: "Computer Science",
        duration: "2 years",
        language: "English",
      },
      {
        name: "MSc Artificial Intelligence",
        level: "Master",
        field: "Computer Science / AI",
        duration: "2 years",
        language: "English",
      },
    ],
    requirements: [
      "Relevant Bachelor’s degree",
      "Proof of English for English-taught programmes",
      "Transcript, CV, motivation letter",
    ],
    helpfulInfo: [
      "Upper Austria has a strong industrial and tech sector",
      "Lower cost of living than Vienna; good quality of life",
    ],
    website: "https://www.jku.at/en/",
    tuition: "~€726 per semester for non-EU students",
    livingCosts: "~€850–€1,100/month (Linz, cheaper than Vienna)",
    cityInfo: "Linz is the capital of Upper Austria. Industrial and tech hub, affordable, and well connected to Vienna and Germany.",
    whyChoose: [
      "Strong in computer science, engineering, and business",
      "Modern campus and industry links",
      "Affordable city with good quality of life",
    ],
  },
  // —— Germany ——
  {
    slug: "university-of-bonn",
    name: "University of Bonn",
    country: "Germany",
    city: "Bonn",
    imageKey: "bonn",
    shortDescription:
      "Research-oriented German university with strong economics, mathematics, and political science.",
    overview:
      "The University of Bonn is a leading public research university in Germany, known for excellence in economics, mathematics, law, and political science. Many Master programmes are taught in English.",
    keyFacts: [
      "Low or no tuition fees (semester contribution only)",
      "Strong international research profile",
      "Student-friendly city on the Rhine",
    ],
    programs: [
      {
        name: "MSc Economics",
        level: "Master",
        field: "Economics & Finance",
        duration: "2 years",
        language: "English",
      },
      {
        name: "MSc Mathematics",
        level: "Master",
        field: "Mathematics",
        duration: "2 years",
        language: "English",
      },
    ],
    requirements: [
      "Relevant Bachelor’s degree with strong grades",
      "Proof of English (and sometimes German, depending on programme)",
      "Motivation letter, CV, academic references for some programmes",
    ],
    helpfulInfo: [
      "No tuition fees for most programmes; only semester contribution",
      "Excellent public transport and student life in the region",
    ],
    website: "https://www.uni-bonn.de/en",
  },
  {
    slug: "ludwig-maximilians-university-munich",
    name: "Ludwig Maximilian University of Munich",
    country: "Germany",
    city: "Munich",
    imageKey: "munich",
    shortDescription:
      "One of Germany’s top universities with a wide range of programmes in a major European city.",
    overview:
      "LMU Munich is one of Europe’s leading research universities, offering programmes across all major disciplines. Many Master programmes are taught in English.",
    keyFacts: [
      "Consistently ranked among the top universities in Germany and Europe",
      "Wide choice of English-taught Master programmes",
      "Munich is a major hub for business, tech, and culture",
    ],
    programs: [
      {
        name: "MSc Data Science / Statistics",
        level: "Master",
        field: "Data / Statistics",
        duration: "2 years",
        language: "English",
      },
      {
        name: "MSc Economics",
        level: "Master",
        field: "Economics",
        duration: "2 years",
        language: "English",
      },
    ],
    requirements: [
      "Relevant Bachelor’s degree with competitive grades",
      "Proof of English (and German where required)",
      "Transcript, CV, motivation letter; some programmes have restricted admission",
    ],
    helpfulInfo: [
      "Munich has a higher cost of living but strong job and internship opportunities",
      "No tuition fees; semester contribution applies",
    ],
    website: "https://www.lmu.de/en/",
  },
  {
    slug: "technical-university-of-munich",
    name: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    imageKey: "munich",
    shortDescription:
      "Top technical university in Germany with strong engineering, informatics, and natural sciences.",
    overview:
      "TUM is one of Europe’s leading technical universities, with strong programmes in engineering, computer science, and natural sciences. Many Master programmes are taught in English.",
    keyFacts: [
      "Among the top technical universities in Europe",
      "Strong industry links and career prospects",
      "Multiple campuses including Munich and Garching",
    ],
    programs: [
      {
        name: "MSc Informatics",
        level: "Master",
        field: "Computer Science",
        duration: "2 years",
        language: "English",
      },
      {
        name: "MSc Management & Technology",
        level: "Master",
        field: "Business & Engineering",
        duration: "2 years",
        language: "English",
      },
    ],
    requirements: [
      "Relevant Bachelor’s degree; admission can be competitive",
      "Proof of English (and sometimes German)",
      "Transcript, CV, motivation letter; some programmes require GRE or interview",
    ],
    helpfulInfo: [
      "Excellent reputation with employers in Germany and internationally",
      "No tuition fees; semester contribution only",
    ],
    website: "https://www.tum.de/en/",
  },
  {
    slug: "humboldt-university-berlin",
    name: "Humboldt University of Berlin",
    country: "Germany",
    city: "Berlin",
    imageKey: "berlin",
    shortDescription:
      "Historic university in Berlin with strong humanities, sciences, and economics.",
    overview:
      "Humboldt-Universität zu Berlin is one of Germany’s most prestigious universities, offering a wide range of programmes in the capital. Many Master programmes are taught in English.",
    keyFacts: [
      "Central Berlin location with rich cultural life",
      "Strong in economics, social sciences, and natural sciences",
      "Diverse, international student body",
    ],
    programs: [
      {
        name: "MSc Economics",
        level: "Master",
        field: "Economics",
        duration: "2 years",
        language: "English",
      },
      {
        name: "MSc Data Science",
        level: "Master",
        field: "Data Science",
        duration: "2 years",
        language: "English",
      },
    ],
    requirements: [
      "Relevant Bachelor’s degree",
      "Proof of English for English-taught programmes",
      "Transcript, CV, motivation letter",
    ],
    helpfulInfo: [
      "Berlin is relatively affordable for a major European capital",
      "No tuition fees; semester contribution only",
    ],
    website: "https://www.hu-berlin.de/en",
  },
  // —— Italy ——
  {
    slug: "university-of-pavia",
    name: "University of Pavia",
    country: "Italy",
    city: "Pavia",
    imageKey: "pavia",
    shortDescription:
      "Historic Italian university with strong engineering, medicine, and economics near Milan.",
    overview:
      "The University of Pavia is one of the oldest universities in Italy, offering a mix of Italian- and English-taught programmes. It is located in a student-friendly city close to Milan.",
    keyFacts: [
      "Affordable tuition; various scholarship options for international students",
      "Many English-taught Master programmes",
      "Lower cost of living than Milan or Rome",
    ],
    programs: [
      {
        name: "MSc Computer Engineering",
        level: "Master",
        field: "Engineering & Technology",
        duration: "2 years",
        language: "English",
      },
      {
        name: "MSc Economics, Finance and International Integration",
        level: "Master",
        field: "Economics & Finance",
        duration: "2 years",
        language: "English",
      },
    ],
    requirements: [
      "Bachelor’s degree in a relevant field",
      "Proof of English (e.g. IELTS, TOEFL) for English-taught programmes",
      "Motivation letter and CV; some programmes may require an interview",
    ],
    helpfulInfo: [
      "Italy offers scholarship schemes for non-EU students",
      "Pavia is well connected to Milan and northern Italy",
    ],
    website: "https://web.unipv.it/",
  },
  {
    slug: "sapienza-university-of-rome",
    name: "Sapienza University of Rome",
    country: "Italy",
    city: "Rome",
    imageKey: "rome",
    shortDescription:
      "One of Europe’s largest universities in the capital, with many English-taught programmes.",
    overview:
      "Sapienza University of Rome is a leading Italian university with a broad range of Bachelor’s and Master’s programmes, including many English-taught options in engineering, economics, and humanities.",
    keyFacts: [
      "Located in Rome with access to rich cultural life",
      "Wide range of English-taught programmes",
      "Tuition can be reduced based on family income",
    ],
    programs: [
      {
        name: "MSc Computer Science",
        level: "Master",
        field: "Computer Science",
        duration: "2 years",
        language: "English",
      },
      {
        name: "MSc Economics",
        level: "Master",
        field: "Economics & Social Sciences",
        duration: "2 years",
        language: "English",
      },
    ],
    requirements: [
      "Relevant Bachelor’s degree",
      "English or Italian proof depending on programme",
      "Motivation letter and CV",
    ],
    helpfulInfo: [
      "Rome offers a unique blend of history, culture, and student life",
      "Multiple accommodation and student support services available",
    ],
    website: "https://www.uniroma1.it/en",
  },
  // —— Czech Republic (fewer options) ——
  {
    slug: "charles-university-prague",
    name: "Charles University",
    country: "Czech Republic",
    city: "Prague",
    imageKey: "prague",
    shortDescription:
      "Central Europe’s oldest university with a wide range of programmes in the heart of Prague.",
    overview:
      "Charles University in Prague is one of the oldest universities in Europe, offering programmes in humanities, natural sciences, medicine, and social sciences. Many programmes are taught in English.",
    keyFacts: [
      "Historic institution with a strong international profile",
      "Affordable tuition and cost of living compared to Western Europe",
      "Prague is a popular destination for international students",
    ],
    programs: [
      {
        name: "MSc Computer Science",
        level: "Master",
        field: "Computer Science",
        duration: "2 years",
        language: "English",
      },
      {
        name: "MA Economics",
        level: "Master",
        field: "Economics",
        duration: "2 years",
        language: "English",
      },
    ],
    requirements: [
      "Relevant Bachelor’s degree",
      "Proof of English for English-taught programmes",
      "Transcript, CV, motivation letter",
    ],
    helpfulInfo: [
      "Prague is relatively affordable with a vibrant student scene",
      "Good connections to the rest of Europe",
    ],
    website: "https://www.cuni.cz/UKEN-1.html",
  },
  // —— Poland (fewer options) ——
  {
    slug: "university-of-warsaw",
    name: "University of Warsaw",
    country: "Poland",
    city: "Warsaw",
    imageKey: "warsaw",
    shortDescription:
      "Poland’s largest university with a broad range of programmes in the capital.",
    overview:
      "The University of Warsaw is Poland’s largest and one of its most prestigious universities, offering programmes in humanities, sciences, and social sciences. Many Master programmes are taught in English.",
    keyFacts: [
      "Leading university in Poland with a growing international offer",
      "Affordable tuition and living costs",
      "Warsaw is a dynamic, growing European capital",
    ],
    programs: [
      {
        name: "MSc Data Science",
        level: "Master",
        field: "Data Science",
        duration: "2 years",
        language: "English",
      },
      {
        name: "MA International Economics",
        level: "Master",
        field: "Economics",
        duration: "2 years",
        language: "English",
      },
    ],
    requirements: [
      "Relevant Bachelor’s degree",
      "Proof of English for English-taught programmes",
      "Transcript, CV, motivation letter",
    ],
    helpfulInfo: [
      "Poland offers competitive tuition fees and lower cost of living",
      "Growing number of English-taught programmes",
    ],
    website: "https://en.uw.edu.pl/",
  },
];
