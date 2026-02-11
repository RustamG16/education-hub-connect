import type { Language } from "@/contexts/LanguageContext";

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

// Translations for each university by slug
export const universityTranslations: Record<UniversitySlug, Partial<Record<Language, UniversityTranslations>>> = {
  "university-of-klagenfurt": {
    en: {
      shortDescription: "Modern university known for informatics, AI, data science, and business. Smaller and more personal than big city universities, making it easier for international students to adapt.",
      overview: "The University of Klagenfurt (AAU) is a modern Austrian university in Carinthia, known for informatics, business, education, and technical sciences. It offers several degree programmes taught in English and has a strong international community and close student–supervisor relations. Smaller and more personal than big city universities.",
      keyFacts: [
        "English-taught Master programmes including Informatics, Data Science, Information Management",
        "~€726 per semester for non-EU students (public university standard)",
        "Klagenfurt: smaller city, easier to adapt, close to tech industry",
      ],
      requirements: [
        "Relevant Bachelor's degree for Master programmes",
        "Proof of English (e.g. IELTS, TOEFL) for English-taught programmes",
        "Transcript of records, CV, motivation letter",
        "Check programme-specific admission criteria on the university website",
      ],
      helpfulInfo: [
        "Klagenfurt is a student-friendly city with a lake and outdoor activities",
        "Austria has moderate tuition fees and scholarship options for international students",
        "Good connections to Vienna, Graz, and Italy/Slovenia",
      ],
      tuition: "~€726 per semester for non-EU students (public university standard)",
      livingCosts: "~€850–€1,100/month average (Austria-wide range)",
      livingCostsBreakdown: [
        "Accommodation: dorm €250–€450, shared flat €350–€600",
        "Food: ~€300–€400",
        "Personal/study: ~€200–€350",
      ],
      cityInfo: "Klagenfurt is Austria's southern hub in Carinthia. Smaller than Vienna or Graz, with a lake, outdoor activities, and a more personal campus. Well connected to Slovenia and Italy.",
      whyChoose: [
        "Strong IT and data science programmes",
        "Smaller city → easier to adapt and lower living costs",
        "Close connection with tech industry",
      ],
    },
    az: {
      shortDescription: "İnformatika, AI, verilənlər elmi və biznes sahəsində tanınan müasir universitet. Böyük şəhər universitetlərindən daha kiçik və şəxsi, beynəlxalq tələbələrin uyğunlaşması daha asandır.",
      overview: "Klagenfurt Universiteti (AAU) Karıntiyada yerləşən müasir Avstriya universitetidir, informatika, biznes, təhsil və texniki elmlər ilə tanınır. İngilis dilində bir neçə proqram təklif edir və güclü beynəlxalq icma, yaxın tələbə-müəllim əlaqələri mövcuddur.",
      keyFacts: [
        "İngilis dilində magistr proqramları: İnformatika, Verilənlər Elmi, İnformasiya İdarəetməsi",
        "QHT-dən kənar tələbələr üçün ~€726 semestr başına (dövlət universiteti standartı)",
        "Klagenfurt: kiçik şəhər, uyğunlaşması asan, texnologiya sənayesinə yaxın",
      ],
      requirements: [
        "Magistr proqramları üçün müvafiq bakalavr dərəcəsi",
        "İngilis dilində tədris olunan proqramlar üçün ingilis dili səviyyəsi sübut (məs. IELTS, TOEFL)",
        "Transkrip, CV, motivasiya məktubu",
        "Universitet saytında proqrama xas qəbul kriteriyalarını yoxlayın",
      ],
      helpfulInfo: [
        "Klagenfurt tələbə dostu şəhərdir, göl və açıq hava fəaliyyətləri mövcuddur",
        "Avstriyada orta təhsil haqqı və beynəlxalq tələbələr üçün təqaüd imkanları var",
        "Vyana, Qrats və İtaliya/Sloveniyaya yaxşı əlaqələr",
      ],
      tuition: "QHT-dən kənar tələbələr üçün ~€726 semestr başına (dövlət universiteti standartı)",
      livingCosts: "Orta ~€850–€1,100/ay (Avstriya üzrə)",
      livingCostsBreakdown: [
        "Yaşayış: yataqxana €250–€450, ortaq mənzil €350–€600",
        "Yemək: ~€300–€400",
        "Şəxsi/təhsil: ~€200–€350",
      ],
      cityInfo: "Klagenfurt Karıntiyada Avstriyanın cənub mərkəzidir. Vyana və Gratsdan kiçik, göl, açıq hava fəaliyyətləri və daha şəxsi kampus. Sloveniya və İtaliyaya yaxşı əlaqə.",
      whyChoose: [
        "Güclü IT və verilənlər elmi proqramları",
        "Kiçik şəhər → uyğunlaşması asan və aşağı yaşayış xərcləri",
        "Texnologiya sənayesi ilə yaxın əlaqə",
      ],
    },
    tr: {
      shortDescription: "Bilişim, yapay zeka, veri bilimi ve iş dünyası ile tanınan modern üniversite. Büyük şehir üniversitelerinden daha küçük ve kişisel, uluslararası öğrencilerin uyum sağlaması daha kolay.",
      overview: "Klagenfurt Üniversitesi (AAU), Kärnten'de modern bir Avusturya üniversitesidir ve bilişim, iş, eğitim ve teknik bilimlerle tanınır. İngilizce öğretilen birkaç program sunar ve güçlü uluslararası topluluk, yakın öğrenci-danışman ilişkileri vardır.",
      keyFacts: [
        "İngilizce öğretilen Yüksek Lisans programları: Bilişim, Veri Bilimi, Bilgi Yönetimi",
        "AB dışı öğrenciler için ~€726 dönem başına (kamu üniversitesi standardı)",
        "Klagenfurt: küçük şehir, uyum sağlaması kolay, teknoloji endüstrisine yakın",
      ],
      requirements: [
        "Yüksek Lisans programları için ilgili Lisans derecesi",
        "İngilizce öğretilen programlar için İngilizce yeterlilik belgesi (ör. IELTS, TOEFL)",
        "Transkript, CV, motivasyon mektubu",
        "Üniversite web sitesinde programa özel kabul kriterlerini kontrol edin",
      ],
      helpfulInfo: [
        "Klagenfurt öğrenci dostu bir şehirdir, göl ve açık hava aktiviteleri mevcuttur",
        "Avusturya'da ılımlı öğrenim ücretleri ve uluslararası öğrenciler için burs imkanları var",
        "Viyana, Graz ve İtalya/Slovenya'ya iyi bağlantılar",
      ],
      tuition: "AB dışı öğrenciler için ~€726 dönem başına (kamu üniversitesi standardı)",
      livingCosts: "Ortalama ~€850–€1,100/ay (Avusturya geneli)",
      livingCostsBreakdown: [
        "Konaklama: yurt €250–€450, ortak daire €350–€600",
        "Yemek: ~€300–€400",
        "Kişisel/eğitim: ~€200–€350",
      ],
      cityInfo: "Klagenfurt, Kärnten'de Avusturya'nın güney merkezidir. Viyana ve Graz'dan küçük, göl, açık hava aktiviteleri ve daha kişisel bir kampüs. Slovenya ve İtalya'ya iyi bağlantı.",
      whyChoose: [
        "Güçlü BT ve veri bilimi programları",
        "Küçük şehir → uyum sağlaması kolay ve düşük yaşam maliyetleri",
        "Teknoloji endüstrisi ile yakın bağlantı",
      ],
    },
    ru: {
      shortDescription: "Современный университет, известный информатикой, ИИ, наукой о данных и бизнесом. Меньше и более личный, чем университеты больших городов, что облегчает адаптацию международных студентов.",
      overview: "Университет Клагенфурта (AAU) — это современный австрийский университет в Каринтии, известный информатикой, бизнесом, образованием и техническими науками. Предлагает несколько программ на английском языке с сильным международным сообществом и близкими отношениями студент-преподаватель.",
      keyFacts: [
        "Магистерские программы на английском: Информатика, Наука о данных, Управление информацией",
        "~€726 за семестр для студентов из стран, не входящих в ЕС (стандарт государственного университета)",
        "Клагенфурт: небольшой город, легче адаптироваться, близость к технологической индустрии",
      ],
      requirements: [
        "Соответствующая степень бакалавра для магистерских программ",
        "Подтверждение владения английским (напр. IELTS, TOEFL) для программ на английском",
        "Транскрипт, резюме, мотивационное письмо",
        "Проверьте специфические критерии приема на сайте университета",
      ],
      helpfulInfo: [
        "Клагенфурт — студенческий город с озером и активным отдыхом",
        "В Австрии умеренная плата за обучение и стипендиальные программы для международных студентов",
        "Хорошее сообщение с Веной, Грацем и Италией/Словенией",
      ],
      tuition: "~€726 за семестр для студентов из стран, не входящих в ЕС (стандарт государственного университета)",
      livingCosts: "Средняя ~€850–€1,100/месяц (по Австрии)",
      livingCostsBreakdown: [
        "Проживание: общежитие €250–€450, общая квартира €350–€600",
        "Еда: ~€300–€400",
        "Личное/учеба: ~€200–€350",
      ],
      cityInfo: "Клагенфурт — южный центр Австрии в Каринтии. Меньше Вены или Граца, с озером, активным отдыхом и более личным кампусом. Хорошее сообщение со Словенией и Италией.",
      whyChoose: [
        "Сильные программы по IT и науке о данных",
        "Небольшой город → легче адаптироваться и ниже расходы на жизнь",
        "Тесная связь с технологической индустрией",
      ],
    },
  },
  
  "university-of-vienna": {
    en: {
      shortDescription: "One of Europe's oldest and most prestigious universities with a very large selection of Bachelor's, Master's, and PhD programs across IT, economics, law, social sciences, and humanities.",
    },
    az: {
      shortDescription: "Avropanın ən qədim və prestijli universitetlərindən biri, İT, iqtisadiyyat, hüquq, sosial elmlər və humanitar elmlər üzrə çoxlu bakalavr, magistr və PhD proqramları ilə.",
    },
    tr: {
      shortDescription: "Avrupa'nın en eski ve prestijli üniversitelerinden biri, BT, ekonomi, hukuk, sosyal bilimler ve beşeri bilimler alanlarında çok geniş Lisans, Yüksek Lisans ve Doktora programları seçeneği sunar.",
    },
    ru: {
      shortDescription: "Один из старейших и престижнейших университетов Европы с очень большим выбором программ бакалавриата, магистратуры и PhD по IT, экономике, праву, социальным и гуманитарным наукам.",
    },
  },

  "tu-wien": {
    en: {
      shortDescription: "Top technical university in Austria focused on engineering, computer science, AI, and innovation. Strong research output and industry collaboration.",
    },
    az: {
      shortDescription: "Avstriyanın aparıcı texniki universiteti, mühəndislik, kompüter elmləri, AI və innovasiyalara yönəlmişdir. Güclü tədqiqat nəticələri və sənaye əməkdaşlığı.",
    },
    tr: {
      shortDescription: "Avusturya'nın mühendislik, bilgisayar bilimleri, yapay zeka ve inovasyona odaklanan en iyi teknik üniversitesi. Güçlü araştırma çıktıları ve endüstri işbirliği.",
    },
    ru: {
      shortDescription: "Лучший технический университет Австрии с фокусом на инженерии, компьютерных науках, AI и инновациях. Сильные научные результаты и сотрудничество с индустрией.",
    },
  },

  "graz-university-of-technology": {
    en: {
      shortDescription: "One of the strongest engineering universities in Austria with modern programs in robotics, AI, and IT. Graz is a student-friendly city with lower living costs than Vienna.",
    },
    az: {
      shortDescription: "Avstriyanın ən güclü mühəndislik universitetlərindən biri, robotika, AI və IT sahəsində müasir proqramlarla. Qrats Vyanadan daha aşağı yaşayış xərcləri olan tələbə dostu şəhərdir.",
    },
    tr: {
      shortDescription: "Avusturya'nın robotik, yapay zeka ve BT alanlarında modern programlara sahip en güçlü mühendislik üniversitelerinden biri. Graz, Viyana'dan daha düşük yaşam maliyetlerine sahip öğrenci dostu bir şehirdir.",
    },
    ru: {
      shortDescription: "Один из сильнейших инженерных университетов Австрии с современными программами по робототехнике, AI и IT. Грац — студенческий город с более низкими расходами на жизнь, чем в Вене.",
    },
  },

  "wu-vienna": {
    en: {
      shortDescription: "One of Europe's top business universities with highly ranked programs in finance, business, and management. Strong focus on international careers and global companies.",
    },
    az: {
      shortDescription: "Avropanın ən yaxşı biznes universitetlərindən biri, maliyyə, biznes və idarəetmə üzrə yüksək reytinqli proqramlarla. Beynəlxalq karyera və qlobal şirkətlərə güclü fokus.",
    },
    tr: {
      shortDescription: "Avrupa'nın finans, iş dünyası ve yönetim alanlarında yüksek sıralamaya sahip en iyi işletme üniversitelerinden biri. Uluslararası kariyer ve küresel şirketlere güçlü odaklanma.",
    },
    ru: {
      shortDescription: "Один из лучших бизнес-университетов Европы с высокорейтинговыми программами по финансам, бизнесу и менеджменту. Сильный фокус на международные карьеры и глобальные компании.",
    },
  },

  "university-of-innsbruck": {
    en: {
      shortDescription: "Major university in the Alps with strengths in natural sciences, management, and law.",
    },
    az: {
      shortDescription: "Alp dağlarında təbii elmlər, idarəetmə və hüquq sahələrində güclü böyük universitet.",
    },
    tr: {
      shortDescription: "Alplerde doğa bilimleri, yönetim ve hukuk alanlarında güçlü yönlere sahip büyük bir üniversite.",
    },
    ru: {
      shortDescription: "Крупный университет в Альпах с сильными программами в естественных науках, менеджменте и праве.",
    },
  },

  "johannes-kepler-university-linz": {
    en: {
      shortDescription: "Modern university with strong technical, law, and business programmes in Upper Austria.",
    },
    az: {
      shortDescription: "Yuxarı Avstriyada güclü texniki, hüquq və biznes proqramları olan müasir universitet.",
    },
    tr: {
      shortDescription: "Yukarı Avusturya'da güçlü teknik, hukuk ve işletme programlarına sahip modern üniversite.",
    },
    ru: {
      shortDescription: "Современный университет с сильными техническими, юридическими и бизнес-программами в Верхней Австрии.",
    },
  },

  "university-of-bonn": {
    en: {
      shortDescription: "Research-oriented German university with strong economics, mathematics, and political science.",
    },
    az: {
      shortDescription: "İqtisadiyyat, riyaziyyat və siyasi elmlər sahələrində güclü tədqiqat yönümlü Alman universiteti.",
    },
    tr: {
      shortDescription: "Güçlü ekonomi, matematik ve siyaset bilimi alanlarına sahip araştırma odaklı Alman üniversitesi.",
    },
    ru: {
      shortDescription: "Исследовательский немецкий университет с сильной экономикой, математикой и политологией.",
    },
  },

  "ludwig-maximilians-university-munich": {
    en: {
      shortDescription: "One of Germany's top universities with a wide range of programmes in a major European city.",
    },
    az: {
      shortDescription: "Böyük Avropa şəhərində geniş proqram çeşidi ilə Almaniyanın ən yaxşı universitetlərindən biri.",
    },
    tr: {
      shortDescription: "Büyük bir Avrupa şehrinde geniş program yelpazesine sahip Almanya'nın en iyi üniversitelerinden biri.",
    },
    ru: {
      shortDescription: "Один из лучших университетов Германии с широким спектром программ в крупном европейском городе.",
    },
  },

  "technical-university-of-munich": {
    en: {
      shortDescription: "Top technical university in Germany with strong engineering, informatics, and natural sciences.",
    },
    az: {
      shortDescription: "Güclü mühəndislik, informatika və təbii elmlər sahələrində Almaniyanın ən yaxşı texniki universiteti.",
    },
    tr: {
      shortDescription: "Güçlü mühendislik, bilişim ve doğa bilimleri ile Almanya'nın en iyi teknik üniversitesi.",
    },
    ru: {
      shortDescription: "Лучший технический университет Германии с сильной инженерией, информатикой и естественными науками.",
    },
  },

  "humboldt-university-berlin": {
    en: {
      shortDescription: "Historic university in Berlin with strong humanities, sciences, and economics.",
    },
    az: {
      shortDescription: "Berlində güclü humanitar elmlər, təbii elmlər və iqtisadiyyat sahələrində tarixi universitet.",
    },
    tr: {
      shortDescription: "Berlin'de güçlü beşeri bilimler, bilimler ve ekonomi alanlarına sahip tarihi üniversite.",
    },
    ru: {
      shortDescription: "Исторический университет в Берлине с сильными гуманитарными науками, науками и экономикой.",
    },
  },

  "university-of-pavia": {
    en: {
      shortDescription: "Historic Italian university with strong engineering, medicine, and economics near Milan.",
    },
    az: {
      shortDescription: "Milanoya yaxın mühəndislik, tibb və iqtisadiyyat sahələrində güclü tarixi İtalyan universiteti.",
    },
    tr: {
      shortDescription: "Milano yakınlarında güçlü mühendislik, tıp ve ekonomi alanlarına sahip tarihi İtalyan üniversitesi.",
    },
    ru: {
      shortDescription: "Исторический итальянский университет с сильной инженерией, медициной и экономикой рядом с Миланом.",
    },
  },

  "sapienza-university-of-rome": {
    en: {
      shortDescription: "One of Europe's largest universities in the capital, with many English-taught programmes.",
    },
    az: {
      shortDescription: "Paytaxtda çoxlu ingilis dilində proqramlarla Avropanın ən böyük universitetlərindən biri.",
    },
    tr: {
      shortDescription: "Başkentte birçok İngilizce öğretilen programla Avrupa'nın en büyük üniversitelerinden biri.",
    },
    ru: {
      shortDescription: "Один из крупнейших университетов Европы в столице, с множеством англоязычных программ.",
    },
  },

  "charles-university-prague": {
    en: {
      shortDescription: "Central Europe's oldest university with a wide range of programmes in the heart of Prague.",
    },
    az: {
      shortDescription: "Praqanın mərkəzində geniş proqram çeşidi ilə Mərkəzi Avropanın ən qədim universiteti.",
    },
    tr: {
      shortDescription: "Prag'ın kalbinde geniş program yelpazesi ile Orta Avrupa'nın en eski üniversitesi.",
    },
    ru: {
      shortDescription: "Старейший университет Центральной Европы с широким спектром программ в сердце Праги.",
    },
  },

  "university-of-warsaw": {
    en: {
      shortDescription: "Poland's largest university with a broad range of programmes in the capital.",
    },
    az: {
      shortDescription: "Paytaxtda geniş proqram çeşidi ilə Polşanın ən böyük universiteti.",
    },
    tr: {
      shortDescription: "Başkentte geniş program yelpazesi ile Polonya'nın en büyük üniversitesi.",
    },
    ru: {
      shortDescription: "Крупнейший университет Польши с широким спектром программ в столице.",
    },
  },
  // Add more universities as needed
};

// Helper function to get translated content for a university
export function getUniversityTranslation(
  slug: string,
  language: Language,
  field: keyof UniversityTranslations
): any {
  const uniTranslations = universityTranslations[slug];
  if (!uniTranslations) return null;
  
  const langTranslations = uniTranslations[language];
  if (!langTranslations) {
    // Fallback to English if translation not available
    const enTranslations = uniTranslations.en;
    return enTranslations?.[field] || null;
  }
  
  return langTranslations[field] || null;
}
