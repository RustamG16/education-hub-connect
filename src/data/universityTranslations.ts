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

// Translations for each university by slug (EN from info.txt; az/tr/ru placeholder until translated)
export const universityTranslations: Record<UniversitySlug, Partial<Record<Language, UniversityTranslations>>> =
{
  "vorarlberg-university-of-education": {
    "en": {
      "shortDescription": "Public teacher training in Feldkirch; low fees, scenic location near Lake Constance and the Alps.",
      "overview": "Feldkirch is a smaller town in Vorarlberg (~35,000), near Lake Constance and the Alps—relaxed and nature-oriented. Living costs ~€800–1,100/month (accommodation €300–500). The university offers teacher education with standard public fees and a practical teaching focus.",
      "keyFacts": [
        "Tuition: ~€726.72/semester + ÖH €25 (standard public).",
        "Living: ~€800–1,100/month.",
        "Teacher education; mostly German-taught; English limited.",
        "Official website: www.ph-vorarlberg.ac.at (English limited)."
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
      "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
      "livingCosts": "€800–1,100/month",
      "cityInfo": "Smaller town in Vorarlberg (~35,000); near Lake Constance, Alps; relaxed, nature-oriented (~€800–1,100/month; accommodation €300–500).",
      "whyChoose": [
        "Teacher education",
        "public with low fees"
      ]
    },
    "az": {
      "shortDescription": "Feldkirçdə dövlət müəllim hazırlığı; aşağı ödənişlər, Bodensee və Alplərə yaxın təbiət mənzərəsi.",
      "overview": "Feldkirç Vorarlberqdə kiçik şəhərdir (~35.000 əhali), Bodensee gölü və Alplərə yaxın—rahat və təbiətə yönəlmiş. Yaşayış xərcləri təxminən €800–1.100/ay (yaşayış €300–500). Universitet müəllim hazırlığı təklif edir, standart dövlət haqları və praktik pedaqoji fokus ilə.",
      "keyFacts": [
        "Təhsil haqqı: təxminən €726,72/semestr + ÖH €25 (standart dövlət).",
        "Yaşayış: təxminən €800–1.100/ay.",
        "Müəllim hazırlığı; əsasən almanca; ingilis dili məhdud.",
        "Rəsmi sayt: www.ph-vorarlberg.ac.at (ingilis dili məhdud)."
      ],
      "requirements": [
        "Tanınmış attestat; standart qəbul proseduru.",
        "Təhsil haqqı: ~€726,72/semestr + ÖH €25. AB-dan kənar: viza üçün vəsait sübutu tələb olunur (~€12.000–15.000/il)."
      ],
      "helpfulInfo": [
        "Ünvan: Liechtensteiner Strasse 33-37, 6800 Feldkirch, Avstriya.",
        "Əlaqə: +43 5522 31199-0; office@ph-vorarlberg.ac.at.",
        "Rəsmi sayt: www.ph-vorarlberg.ac.at"
      ],
      "tuition": "Standart/aşağı ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€800–1.100/ay",
      "cityInfo": "Vorarlberqdə kiçik şəhər (~35.000); Bodensee, Alplərə yaxın; rahat, təbiətə yönəlmiş (~€800–1.100/ay; yaşayış €300–500).",
      "whyChoose": [
        "Müəllim hazırlığı",
        "aşağı haqlı dövlət universiteti"
      ]
    },
    "tr": {
      "shortDescription": "Feldkirch'te kamu öğretmen yetiştirme; düşük harç, Bodensee ve Alplere yakın manzara.",
      "overview": "Feldkirch, Vorarlberg'de küçük bir şehirdir (~35.000), Bodensee Gölü ve Alplere yakın—sakin ve doğa odaklı. Yaşam maliyeti aylık ~€800–1.100 (konaklama €300–500). Üniversite standart kamu harçları ve uygulamalı öğretmenlik odağıyla öğretmen eğitimi sunar.",
      "keyFacts": [
        "Harç: dönem başı ~€726,72 + ÖH €25 (standart kamu).",
        "Yaşam: aylık ~€800–1.100.",
        "Öğretmen eğitimi; çoğunlukla Almanca; İngilizce sınırlı.",
        "Resmi site: www.ph-vorarlberg.ac.at (İngilizce sınırlı)."
      ],
      "requirements": [
        "Tanınmış yeterlilik; standart başvuru süreci.",
        "Harç: ~€726,72/dönem + ÖH €25. AB dışı: vize için varlık kanıtı gerekir (~€12.000–15.000/yıl)."
      ],
      "helpfulInfo": [
        "Adres: Liechtensteiner Strasse 33-37, 6800 Feldkirch, Avusturya.",
        "İletişim: +43 5522 31199-0; office@ph-vorarlberg.ac.at.",
        "Resmi site: www.ph-vorarlberg.ac.at"
      ],
      "tuition": "Standart/düşük ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€800–1.100/ay",
      "cityInfo": "Vorarlberg'de küçük şehir (~35.000); Bodensee, Alplere yakın; sakin, doğa odaklı (aylık ~€800–1.100; konaklama €300–500).",
      "whyChoose": [
        "Öğretmen eğitimi",
        "düşük harçlı kamu üniversitesi"
      ]
    },
    "ru": {
      "shortDescription": "Государственная педагогическая подготовка в Фельдкирхе; невысокая плата, живописное место у Боденского озера и Альп.",
      "overview": "Фельдкирх — небольшой город в Форарльберге (~35 000 жителей), у Боденского озера и Альп: спокойная, ориентированная на природу жизнь. Расходы на жизнь ~€800–1 100/мес (жильё €300–500). Университет предлагает педагогическое образование по стандартным госрасценкам с практической направленностью.",
      "keyFacts": [
        "Плата за семестр: ~€726,72 + ÖH €25 (стандартная гос.).",
        "Расходы на жизнь: ~€800–1 100/мес.",
        "Педагогика; в основном на немецком; английский ограничен.",
        "Сайт: www.ph-vorarlberg.ac.at (английский ограничен)."
      ],
      "requirements": [
        "Признанный документ об образовании; стандартная процедура приёма.",
        "Плата: ~€726,72/семестр + ÖH €25. Вне ЕС: для визы нужны доказательства средств (~€12 000–15 000/год)."
      ],
      "helpfulInfo": [
        "Адрес: Liechtensteiner Strasse 33-37, 6800 Feldkirch, Австрия.",
        "Контакт: +43 5522 31199-0; office@ph-vorarlberg.ac.at.",
        "Сайт: www.ph-vorarlberg.ac.at"
      ],
      "tuition": "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€800–1 100/мес",
      "cityInfo": "Небольшой город во Форарльберге (~35 000); у Боденского озера и Альп; спокойная, природа (~€800–1 100/мес; жильё €300–500).",
      "whyChoose": [
        "Педагогическое образование",
        "госуниверситет с невысокой платой"
      ]
    }
  },
  "university-of-graz": {
    "en": {
      "shortDescription": "Focus on humanities, social sciences, law; relaxed, cultural hub with sunny southern vibe; 30,000+ students; international flair; affordable living; strong employability; UNESCO heritage site for vibrant student life.",
      "overview": "Styria's capital (~290,000 people). UNESCO old town (largest preserved in Central Europe), Mediterranean feel (sunny, hilly), arts/film festivals (Diagonale), Mur River island, affordable/student-friendly (~€1,000–1,300/month in 2026; accommodation from €300, food €300, transport €50). Why Choose This University?: Focus on humanities, social sciences, law; relaxed, cultural hub with sunny southern vibe; 30,000+ students; international flair; affordable living; strong employability; UNESCO heritage site for vibrant student life.",
      "keyFacts": [
        "~30,000 students; focus on humanities, social sciences, law; UNESCO old town.",
        "Tuition: ~€726.72/semester + ÖH €25. Living: ~€1,000–1,300/month.",
        "English: limited Bachelor's; several English Master's (e.g. English and American Studies, European Studies, Southeast European Studies)."
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
      "tuition": "~€726.72/semester + ÖH €25.",
      "livingCosts": "€1,000–1,300/month",
      "cityInfo": "Styria's capital (~290,000). UNESCO old town, Mediterranean feel, arts/film festivals (Diagonale), Mur River; affordable and student-friendly.",
      "whyChoose": [
        "Focus on humanities, social sciences, law; relaxed cultural hub; 30,000+ students.",
        "UNESCO heritage site; affordable living; strong employability."
      ]
    },
    "az": {
      "shortDescription": "Humanitar, ictimai elmlər və hüquq; rahat mədəni mərkəz, cənub əhvali; 30.000+ tələbə; beynəlxalq ruh; münasib yaşayış; güclü məşğulluq; UNESCO irsi.",
      "overview": "Ştiriyanın paytaxtı (~290.000). UNESCO köhnə şəhər (Mərkəzi Avropada ən böyük qorunmuş), Aralıq dənizi havası, incəsənət və kino festivalları (Diagonale), Mur çayı, münasib və tələbə dostu (~€1.000–1.300/ay; yaşayış €300-dan, yemək €300, nəqliyyat €50). Humanitar, ictimai elmlər və hüquqa fokus; 30.000+ tələbə; UNESCO irsi; güclü məşğulluq.",
      "keyFacts": [
        "~30.000 tələbə; humanitar, ictimai elmlər, hüquq; UNESCO köhnə şəhər.",
        "Təhsil haqqı: ~€726,72/semestr + ÖH €25. Yaşayış: ~€1.000–1.300/ay.",
        "İngilis dili: bakalavr məhdud; bir neçə ingilis magistr (məs. İngilis və Amerikaşünaslıq, Avropaşünaslıq, Cənub-Şərqi Avropa)."
      ],
      "requirements": [
        "Tanınmış attestat; lazım olanda ingilis dili; birbaşa müraciət.",
        "Təhsil haqqı: ~€726,72/semestr + ÖH €25. Viza üçün vəsait sübutu ~€11.904/il (kampusda yaşayış yoxdur)."
      ],
      "helpfulInfo": [
        "Ünvan: Universitätsplatz 3, 8010 Graz, Avstriya.",
        "Əlaqə: +43 316 380-0; studienabteilung@uni-graz.at (qəbul); welcome@uni-graz.at (beynəlxalq).",
        "Rəsmi sayt: www.uni-graz.at (ingilis dilində mövcuddur)."
      ],
      "tuition": "~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.000–1.300/ay",
      "cityInfo": "Ştiriyanın paytaxtı (~290.000). UNESCO köhnə şəhər, Aralıq dənizi havası, Diagonale festivalları, Mur; münasib və tələbə dostu.",
      "whyChoose": [
        "Humanitar, ictimai elmlər, hüquq; rahat mədəni mərkəz; 30.000+ tələbə.",
        "UNESCO irsi; münasib yaşayış; güclü məşğulluq."
      ]
    },
    "tr": {
      "shortDescription": "Beşeri bilimler, sosyal bilimler, hukuk odağı; sakin, güney havasında kültür merkezi; 30.000+ öğrenci; uluslararası ortam; uygun yaşam; güçlü istihdam; UNESCO mirası.",
      "overview": "Styria'nın başkenti (~290.000). UNESCO eski şehir (Orta Avrupa'da en büyük korunmuş), Akdeniz havası, sanat/sinema festivalleri (Diagonale), Mur Nehri, uygun fiyatlı ve öğrenci dostu (aylık ~€1.000–1.300; konaklama €300, yemek €300, ulaşım €50). Beşeri/sosyal bilimler ve hukuk; 30.000+ öğrenci; UNESCO mirası; güçlü istihdam.",
      "keyFacts": [
        "~30.000 öğrenci; beşeri bilimler, sosyal bilimler, hukuk; UNESCO eski şehir.",
        "Harç: ~€726,72/dönem + ÖH €25. Yaşam: aylık ~€1.000–1.300.",
        "İngilizce: lisans sınırlı; birkaç İngilizce yüksek lisans (örn. İngiliz ve Amerikan Çalışmaları, Avrupa Çalışmaları)."
      ],
      "requirements": [
        "Tanınmış yeterlilik; gerektiğinde İngilizce; doğrudan başvuru.",
        "Harç: ~€726,72/dönem + ÖH €25. Vize için varlık kanıtı ~€11.904/yıl (kampüste konaklama yok)."
      ],
      "helpfulInfo": [
        "Adres: Universitätsplatz 3, 8010 Graz, Avusturya.",
        "İletişim: +43 316 380-0; studienabteilung@uni-graz.at (kabul); welcome@uni-graz.at (uluslararası).",
        "Resmi site: www.uni-graz.at (İngilizce mevcut)."
      ],
      "tuition": "~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.000–1.300/ay",
      "cityInfo": "Styria başkenti (~290.000). UNESCO eski şehir, Akdeniz havası, Diagonale festivalleri, Mur; uygun ve öğrenci dostu.",
      "whyChoose": [
        "Beşeri bilimler, sosyal bilimler, hukuk; sakin kültür merkezi; 30.000+ öğrenci.",
        "UNESCO mirası; uygun yaşam; güçlü istihdam."
      ]
    },
    "ru": {
      "shortDescription": "Гуманитарные, общественные науки, право; спокойный культурный центр с южным колоритом; 30 000+ студентов; международная среда; доступная жизнь; сильная занятость; объект ЮНЕСКО.",
      "overview": "Столица Штирии (~290 000). Старый город ЮНЕСКО (крупнейший сохранившийся в Центральной Европе), средиземноморская атмосфера, фестивали искусств и кино (Диагонале), река Мур, доступно и удобно для студентов (~€1 000–1 300/мес; жильё от €300, еда €300, транспорт €50). Гуманитарии, общественные науки, право; 30 000+ студентов; объект ЮНЕСКО; сильная занятость.",
      "keyFacts": [
        "~30 000 студентов; гуманитарии, общественные науки, право; старый город ЮНЕСКО.",
        "Плата: ~€726,72/семестр + ÖH €25. Расходы на жизнь: ~€1 000–1 300/мес.",
        "Английский: бакалавриат ограничен; несколько магистратур на английском (напр. англистика, европеистика, Юго-Восточная Европа)."
      ],
      "requirements": [
        "Признанный документ; знание английского при необходимости; прямая подача.",
        "Плата: ~€726,72/семестр + ÖH €25. Подтверждение средств ~€11 904/год для визы (общежития нет)."
      ],
      "helpfulInfo": [
        "Адрес: Universitätsplatz 3, 8010 Graz, Австрия.",
        "Контакт: +43 316 380-0; studienabteilung@uni-graz.at (приём); welcome@uni-graz.at (международные).",
        "Сайт: www.uni-graz.at (есть английская версия)."
      ],
      "tuition": "~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 000–1 300/мес",
      "cityInfo": "Столица Штирии (~290 000). Старый город ЮНЕСКО, средиземноморская атмосфера, фестивали Диагонале, Мур; доступно и удобно для студентов.",
      "whyChoose": [
        "Гуманитарии, общественные науки, право; спокойный культурный центр; 30 000+ студентов.",
        "Объект ЮНЕСКО; доступная жизнь; сильная занятость."
      ]
    }
  },
  "graz-university-of-technology": {
    "en": {
      "shortDescription": "Renowned for engineering and architecture in Graz; innovative programmes; student-friendly city.",
      "overview": "Graz offers the same living costs (~€1,000–1,300/month). TU Graz is known for engineering and architecture, with strong Master's in tech, biomedical, software, and environmental fields; limited full English Bachelor's.",
      "keyFacts": [
        "Tuition: ~€726.72/semester + ÖH €25. Living: ~€1,000–1,300/month (Graz).",
        "Strong English Master's in engineering/architecture; limited full English Bachelor's.",
        "Official website: www.tugraz.at (English available)."
      ],
      "requirements": [
        "Recognized qualification; standard admission. Tuition: ~€726.72/semester + ÖH €25."
      ],
      "helpfulInfo": [
        "Address: Rechbauerstraße 12, 8010 Graz, Austria.",
        "Contact: +43 316 873-0; info@tugraz.at. Official website: www.tugraz.at"
      ],
      "tuition": "~€726.72/semester + ÖH €25.",
      "livingCosts": "€1,000–1,300/month",
      "cityInfo": "Graz: same living costs (~€1,000–1,300/month); student-friendly city.",
      "whyChoose": [
        "Renowned for engineering and architecture; innovative; research-oriented.",
        "Student-friendly city with strong employability."
      ]
    },
    "az": {
      "shortDescription": "Qrazda mühəndislik və memarlıqda tanınmış; innovativ proqramlar; tələbə dostu şəhər.",
      "overview": "Qrazda eyni yaşayış xərcləri (~€1.000–1.300/ay). TU Graz mühəndislik və memarlıqla tanınır, texnologiya, biomedikal, proqram təminatı və ətraf mühit sahələrində güclü magistr; tam ingilis bakalavr məhdud.",
      "keyFacts": [
        "Təhsil haqqı: ~€726,72/semestr + ÖH €25. Yaşayış: ~€1.000–1.300/ay (Qraz).",
        "Mühəndislik/memarlıqda güclü ingilis magistr; tam ingilis bakalavr məhdud.",
        "Rəsmi sayt: www.tugraz.at (ingilis dilində mövcuddur)."
      ],
      "requirements": [
        "Tanınmış attestat; standart qəbul. Təhsil haqqı: ~€726,72/semestr + ÖH €25."
      ],
      "helpfulInfo": [
        "Ünvan: Rechbauerstraße 12, 8010 Graz, Avstriya.",
        "Əlaqə: +43 316 873-0; info@tugraz.at. Rəsmi sayt: www.tugraz.at"
      ],
      "tuition": "~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.000–1.300/ay",
      "cityInfo": "Qraz: eyni yaşayış xərcləri (~€1.000–1.300/ay); tələbə dostu şəhər.",
      "whyChoose": [
        "Mühəndislik və memarlıqda tanınmış; innovativ; tədqiqat yönümlü.",
        "Tələbə dostu şəhər, güclü məşğulluq."
      ]
    },
    "tr": {
      "shortDescription": "Graz'da mühendislik ve mimarlıkta ünlü; yenilikçi programlar; öğrenci dostu şehir.",
      "overview": "Graz'da aynı yaşam maliyeti (aylık ~€1.000–1.300). TU Graz mühendislik ve mimarlıkla tanınır; teknoloji, biyomedikal, yazılım ve çevre alanlarında güçlü yüksek lisans; tam İngilizce lisans sınırlı.",
      "keyFacts": [
        "Harç: ~€726,72/dönem + ÖH €25. Yaşam: aylık ~€1.000–1.300 (Graz).",
        "Mühendislik/mimarlıkta güçlü İngilizce yüksek lisans; tam İngilizce lisans sınırlı.",
        "Resmi site: www.tugraz.at (İngilizce mevcut)."
      ],
      "requirements": [
        "Tanınmış yeterlilik; standart kabul. Harç: ~€726,72/dönem + ÖH €25."
      ],
      "helpfulInfo": [
        "Adres: Rechbauerstraße 12, 8010 Graz, Avusturya.",
        "İletişim: +43 316 873-0; info@tugraz.at. Resmi site: www.tugraz.at"
      ],
      "tuition": "~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.000–1.300/ay",
      "cityInfo": "Graz: aynı yaşam maliyeti (aylık ~€1.000–1.300); öğrenci dostu şehir.",
      "whyChoose": [
        "Mühendislik ve mimarlıkta ünlü; yenilikçi; araştırma odaklı.",
        "Öğrenci dostu şehir, güçlü istihdam."
      ]
    },
    "ru": {
      "shortDescription": "Известен инженерией и архитектурой в Граце; инновационные программы; удобный для студентов город.",
      "overview": "В Граце те же расходы на жизнь (~€1 000–1 300/мес). TU Graz известен инженерией и архитектурой, сильные магистратуры в технаправлениях, биомедицине, ПО и экологии; полноценный бакалавриат на английском ограничен.",
      "keyFacts": [
        "Плата: ~€726,72/семестр + ÖH €25. Расходы на жизнь: ~€1 000–1 300/мес (Грац).",
        "Сильные магистратуры на английском по инженерии/архитектуре; бакалавриат на английском ограничен.",
        "Сайт: www.tugraz.at (есть английская версия)."
      ],
      "requirements": [
        "Признанный документ; стандартный приём. Плата: ~€726,72/семестр + ÖH €25."
      ],
      "helpfulInfo": [
        "Адрес: Rechbauerstraße 12, 8010 Graz, Австрия.",
        "Контакт: +43 316 873-0; info@tugraz.at. Сайт: www.tugraz.at"
      ],
      "tuition": "~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 000–1 300/мес",
      "cityInfo": "Грац: те же расходы на жизнь (~€1 000–1 300/мес); удобный для студентов город.",
      "whyChoose": [
        "Известен инженерией и архитектурой; инновационный; исследовательский уклон.",
        "Удобный для студентов город, сильная занятость."
      ]
    }
  },
  "medical-university-of-graz": {
    "en": {
      "shortDescription": "Medicine, dentistry, biomedical; top research; competitive with high employability.",
      "overview": "As above (~€1,000–1,300/month). Why Choose This University?: Medicine, dentistry, biomedical; top research; competitive with high employability.",
      "keyFacts": [
        "Standard ~€726.72/semester + ÖH €25.",
        "Living: ~€1,000–1,300/month",
        "Medicine, dentistry, biomedical; top research; competitive with high employability."
      ],
      "requirements": [
        "Competitive."
      ],
      "helpfulInfo": [
        "Address: Neue Stiftingtalstraße 6, 8010 Graz, Austria.",
        "Research-oriented health.",
        "Phone: +43 316 385-0; Email: studium@medunigraz.at."
      ],
      "tuition": "Standard ~€726.72/semester + ÖH €25.",
      "livingCosts": "€1,000–1,300/month",
      "cityInfo": "As above (~€1,000–1,300/month).",
      "whyChoose": [
        "Medicine, dentistry, biomedical",
        "competitive with high employability"
      ]
    },
    "az": {
      "shortDescription": "Tibb, stomatologiya, biomedikal; yüksək tədqiqat; rəqabətli, güclü məşğulluq.",
      "overview": "Qrazda eyni yaşayış xərcləri (~€1.000–1.300/ay). Tibb, stomatologiya, biomedikal; yüksək tədqiqat; rəqabətli proqramlar, səhiyyədə yüksək məşğulluq.",
      "keyFacts": [
        "Standart ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€1.000–1.300/ay",
        "Tibb, stomatologiya, biomedikal; yüksək tədqiqat; rəqabətli, güclü məşğulluq."
      ],
      "requirements": [
        "Rəqabətlidir (seçmə)."
      ],
      "helpfulInfo": [
        "Ünvan: Neue Stiftingtalstraße 6, 8010 Graz, Avstriya.",
        "Tədqiqat yönümlü səhiyyə.",
        "Əlaqə: +43 316 385-0; studium@medunigraz.at."
      ],
      "tuition": "Standart ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.000–1.300/ay",
      "cityInfo": "Qrazda eyni (~€1.000–1.300/ay).",
      "whyChoose": [
        "Tibb, stomatologiya, biomedikal",
        "rəqabətli, güclü məşğulluq"
      ]
    },
    "tr": {
      "shortDescription": "Tıp, diş hekimliği, biyomedikal; üst düzey araştırma; rekabetçi, yüksek istihdam.",
      "overview": "Graz'da aynı yaşam maliyeti (aylık ~€1.000–1.300). Tıp, diş hekimliği, biyomedikal; üst düzey araştırma; rekabetçi programlar, sağlıkta yüksek istihdam.",
      "keyFacts": [
        "Standart ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€1.000–1.300",
        "Tıp, diş hekimliği, biyomedikal; üst düzey araştırma; rekabetçi, yüksek istihdam."
      ],
      "requirements": [
        "Rekabetçi (seçmeli)."
      ],
      "helpfulInfo": [
        "Adres: Neue Stiftingtalstraße 6, 8010 Graz, Avusturya.",
        "Araştırma odaklı sağlık.",
        "İletişim: +43 316 385-0; studium@medunigraz.at."
      ],
      "tuition": "Standart ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.000–1.300/ay",
      "cityInfo": "Graz'da aynı (aylık ~€1.000–1.300).",
      "whyChoose": [
        "Tıp, diş hekimliği, biyomedikal",
        "rekabetçi, yüksek istihdam"
      ]
    },
    "ru": {
      "shortDescription": "Медицина, стоматология, биомедицина; сильные исследования; конкурсный отбор, высокая занятость.",
      "overview": "В Граце те же расходы на жизнь (~€1 000–1 300/мес). Медицина, стоматология, биомедицина; сильные исследования; конкурсные программы, высокая занятость в здравоохранении.",
      "keyFacts": [
        "Стандартная плата ~€726,72/семестр + ÖH €25.",
        "Расходы на жизнь: ~€1 000–1 300/мес",
        "Медицина, стоматология, биомедицина; сильные исследования; конкурсный отбор, высокая занятость."
      ],
      "requirements": [
        "Конкурсный отбор."
      ],
      "helpfulInfo": [
        "Адрес: Neue Stiftingtalstraße 6, 8010 Graz, Австрия.",
        "Исследовательская медицина.",
        "Контакт: +43 316 385-0; studium@medunigraz.at."
      ],
      "tuition": "Стандартная ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 000–1 300/мес",
      "cityInfo": "В Граце те же (~€1 000–1 300/мес).",
      "whyChoose": [
        "Медицина, стоматология, биомедицина",
        "конкурсный отбор, высокая занятость"
      ]
    }
  },
  "university-of-music-and-performing-arts-graz": {
    "en": {
      "shortDescription": "Performing arts and music education; heaven for musical talents; affordable city.",
      "overview": "As above (~€1,000–1,300/month). Why Choose This University?: Performing arts and music education; heaven for musical talents; affordable city.",
      "keyFacts": [
        "Standard/low ~€726.72/semester + ÖH €25.",
        "Living: ~€1,000–1,300/month",
        "Performing arts and music education; heaven for musical talents; affordable city."
      ],
      "requirements": [
        "Highly selective (auditions/portfolios)."
      ],
      "helpfulInfo": [
        "Address: Leonhardstraße 15, 8010 Graz, Austria.",
        "Programs for instruments, jazz, chamber music.",
        "Phone: +43 316 389-0; Email: info@kug.ac.at."
      ],
      "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
      "livingCosts": "€1,000–1,300/month",
      "cityInfo": "As above (~€1,000–1,300/month).",
      "whyChoose": [
        "Performing arts and music education",
        "heaven for musical talents"
      ]
    },
    "az": {
      "shortDescription": "Səhnə sənəti və musiqi təhsili; musiqi istedadları üçün ideal mühit; münasib şəhər.",
      "overview": "Qrazda eyni yaşayış xərcləri (~€1.000–1.300/ay). Səhnə sənəti və musiqi təhsili; musiqi istedadları üçün ideal mühit; münasib şəhər.",
      "keyFacts": [
        "Standart/aşağı ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€1.000–1.300/ay",
        "Səhnə sənəti və musiqi təhsili; musiqi istedadları üçün ideal; münasib şəhər."
      ],
      "requirements": [
        "Çox seçici (dinləmə/portfolyo)."
      ],
      "helpfulInfo": [
        "Ünvan: Leonhardstraße 15, 8010 Graz, Avstriya.",
        "Proqramlar: alətlər, caz, kamera musiqisi.",
        "Əlaqə: +43 316 389-0; info@kug.ac.at."
      ],
      "tuition": "Standart/aşağı ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.000–1.300/ay",
      "cityInfo": "Qrazda eyni (~€1.000–1.300/ay).",
      "whyChoose": [
        "Səhnə sənəti və musiqi təhsili",
        "musiqi istedadları üçün ideal mühit"
      ]
    },
    "tr": {
      "shortDescription": "Sahne sanatları ve müzik eğitimi; müzikal yetenekler için ideal ortam; uygun fiyatlı şehir.",
      "overview": "Graz'da aynı yaşam maliyeti (aylık ~€1.000–1.300). Sahne sanatları ve müzik eğitimi; müzikal yetenekler için ideal; uygun fiyatlı şehir.",
      "keyFacts": [
        "Standart/düşük ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€1.000–1.300",
        "Sahne sanatları ve müzik eğitimi; müzikal yetenekler için ideal; uygun şehir."
      ],
      "requirements": [
        "Çok seçici (dinleme/portfolyo)."
      ],
      "helpfulInfo": [
        "Adres: Leonhardstraße 15, 8010 Graz, Avusturya.",
        "Programlar: enstrümanlar, caz, oda müziği.",
        "İletişim: +43 316 389-0; info@kug.ac.at."
      ],
      "tuition": "Standart/düşük ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.000–1.300/ay",
      "cityInfo": "Graz'da aynı (aylık ~€1.000–1.300).",
      "whyChoose": [
        "Sahne sanatları ve müzik eğitimi",
        "müzikal yetenekler için ideal ortam"
      ]
    },
    "ru": {
      "shortDescription": "Сценическое искусство и музыкальное образование; идеальная среда для музыкальных талантов; доступный город.",
      "overview": "В Граце те же расходы на жизнь (~€1 000–1 300/мес). Сценическое искусство и музыкальное образование; идеальная среда для талантов; доступный город.",
      "keyFacts": [
        "Стандартная/низкая плата ~€726,72/семестр + ÖH €25.",
        "Расходы на жизнь: ~€1 000–1 300/мес",
        "Сценическое искусство и музыка; идеально для музыкальных талантов; доступный город."
      ],
      "requirements": [
        "Высокий конкурс (прослушивания/портфолио)."
      ],
      "helpfulInfo": [
        "Адрес: Leonhardstraße 15, 8010 Graz, Австрия.",
        "Программы: инструменты, джаз, камерная музыка.",
        "Контакт: +43 316 389-0; info@kug.ac.at."
      ],
      "tuition": "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 000–1 300/мес",
      "cityInfo": "В Граце те же (~€1 000–1 300/мес).",
      "whyChoose": [
        "Сценическое искусство и музыкальное образование",
        "идеальная среда для музыкальных талантов"
      ]
    }
  },
  "university-of-innsbruck": {
    "en": {
      "shortDescription": "Founded 1669; strong in physics (quantum research), law, alpine studies. 28,000 students in the heart of the Alps; affordable housing and outdoor lifestyle.",
      "overview": "Innsbruck is an alpine gem in Tyrol (~130,000). Mountains (Nordkette), skiing and hiking, historic old town (Golden Roof), river Inn, and a lively student vibe (~30,000 students). Living ~€900–1,400/month (more affordable than Vienna). The university is strong in physics, law, and alpine/mountain studies, with good English Master's options (e.g. English and American Studies, Ancient Worlds, History).",
      "keyFacts": [
        "Founded 1669; ~28,000 students. Tuition: ~€726.72/semester + ÖH €25. Living: ~€900–1,400/month.",
        "Strong in physics (quantum research), law, alpine/mountain studies; ~10–15 English Master's.",
        "Proof of funds ~€11,904/year for visa; scholarships available."
      ],
      "requirements": [
        "Relevant prior degree, English B2+ (proof at application for English programs), apply online. Deadlines: e.g., Jul–Oct for winter; Jan–Mar for summer."
      ],
      "helpfulInfo": [
        "Address: Innrain 52, 6020 Innsbruck, Austria.",
        "Great for outdoor enthusiasts; financial support options like scholarships; proof of funds ~€11,904/year for visa.",
        "Phone: +43 512 507-0; Email: studienabteilung@uibk.ac.at (admissions); studienberatung@uibk.ac.at (advisory)."
      ],
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
    "az": {
      "shortDescription": "1669-cu ildə qurulub; fizika (kvant tədqiqatı), hüquq, alpşünaslıqda güclü. Alplərin qəlbində 28.000 tələbə; münasib yaşayış və açıq havada həyat.",
      "overview": "İnsbruk Tirolda alp incisi (~130.000). Dağlar (Nordkette), xizək və piyada gəzinti, tarixi köhnə şəhər (Qızıl Dam), İnn çayı və canlı tələbə mühiti (~30.000 tələbə). Yaşayış ~€900–1.400/ay (Vyanadan ucuz). Universitet fizika, hüquq və alp/dağ tədqiqatlarında güclüdür, yaxşı ingilis magistr seçimləri var (məs. İngilis və Amerikaşünaslıq, Qədim dünyalar, Tarix).",
      "keyFacts": [
        "1669-cu ildə qurulub; ~28.000 tələbə. Təhsil haqqı: ~€726,72/semestr + ÖH €25. Yaşayış: ~€900–1.400/ay.",
        "Fizika (kvant), hüquq, alp/dağ tədqiqatlarında güclü; ~10–15 ingilis magistr.",
        "Viza üçün vəsait sübutu ~€11.904/il; təqaüdlər mövcuddur."
      ],
      "requirements": [
        "Uyğun əvvəlki dərəcə, ingilis B2+ (ingilis proqramlar üçün müraciətdə sübut), onlayn müraciət. Son tarixlər: məs. qış üçün iyul–oktyabr; yay üçün yan–mart."
      ],
      "helpfulInfo": [
        "Ünvan: Innrain 52, 6020 Innsbruck, Avstriya.",
        "Açıq havada fəaliyyət sevənlər üçün ideal; təqaüd kimi maliyyə dəstəyi; viza üçün vəsait sübutu ~€11.904/il.",
        "Əlaqə: +43 512 507-0; studienabteilung@uibk.ac.at (qəbul); studienberatung@uibk.ac.at (məsləhət)."
      ],
      "tuition": "Standart ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€900–1.400/ay",
      "cityInfo": "Tirolda alp incisi (~130.000). Nordkette dağları, xizək və gəzinti, tarixi köhnə şəhər (Qızıl Dam), İnn çayı, canlı tələbə mühiti (~30.000), festivallar, açıq havada idman; Vyanadan ucuz (~€900–1.400/ay).",
      "whyChoose": [
        "1669-cu ildə qurulub; fizika (kvant), hüquq, alp/dağ tədqiqatlarında güclü",
        "Alplərin qəlbində açıq havada fəaliyyət üçün",
        "28.000 tələbə (beynəlxalq fokus)",
        "Tədqiqat/təhsil üçün əla şərait",
        "Qısa məsafələr, münasib yaşayış"
      ]
    },
    "tr": {
      "shortDescription": "1669'da kuruldu; fizik (kuantum araştırması), hukuk, alp çalışmalarında güçlü. Alplerin kalbinde 28.000 öğrenci; uygun konaklama ve açık hava yaşamı.",
      "overview": "Innsbruck, Tirol'da bir alp incisi (~130.000). Nordkette dağları, kayak ve yürüyüş, tarihi eski şehir (Altın Çatı), Inn nehri ve canlı öğrenci ortamı (~30.000 öğrenci). Yaşam aylık ~€900–1.400 (Viyana'dan daha uygun). Üniversite fizik, hukuk ve alp/dağ çalışmalarında güçlü; iyi İngilizce yüksek lisans seçenekleri (örn. İngiliz ve Amerikan Çalışmaları, Antik Dünyalar, Tarih).",
      "keyFacts": [
        "1669'da kuruldu; ~28.000 öğrenci. Harç: ~€726,72/dönem + ÖH €25. Yaşam: aylık ~€900–1.400.",
        "Fizik (kuantum), hukuk, alp/dağ çalışmalarında güçlü; ~10–15 İngilizce yüksek lisans.",
        "Vize için varlık kanıtı ~€11.904/yıl; burslar mevcut."
      ],
      "requirements": [
        "İlgili önceki derece, İngilizce B2+ (İngilizce programlar için başvuruda kanıt), çevrimiçi başvuru. Son tarihler: örn. kış için temmuz–ekim; yaz için ocak–mart."
      ],
      "helpfulInfo": [
        "Adres: Innrain 52, 6020 Innsbruck, Avusturya.",
        "Açık hava meraklıları için ideal; burs gibi mali destek; vize için varlık kanıtı ~€11.904/yıl.",
        "İletişim: +43 512 507-0; studienabteilung@uibk.ac.at (kabul); studienberatung@uibk.ac.at (danışmanlık)."
      ],
      "tuition": "Standart ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€900–1.400/ay",
      "cityInfo": "Tirol'da alp incisi (~130.000). Nordkette dağları, kayak/yürüyüş, tarihi eski şehir (Altın Çatı), Inn nehri, canlı öğrenci ortamı (~30.000); Viyana'dan daha uygun (aylık ~€900–1.400).",
      "whyChoose": [
        "1669'da kuruldu; fizik (kuantum), hukuk, alp/dağ çalışmalarında güçlü",
        "Alplerin kalbinde açık hava etkinlikleri için",
        "28.000 öğrenci (uluslararası odak)",
        "Araştırma/eğitim için mükemmel koşullar",
        "Kısa mesafeler, uygun konaklama"
      ]
    },
    "ru": {
      "shortDescription": "Основан в 1669; силён в физике (квантовые исследования), праве, альпинистике. 28 000 студентов в сердце Альп; доступное жильё и жизнь на природе.",
      "overview": "Инсбрук — альпийский город в Тироле (~130 000). Горы Нордкетте, горные лыжи и походы, исторический старый город (Золотая крыша), река Инн, оживлённая студенческая жизнь (~30 000 студентов). Расходы на жизнь ~€900–1 400/мес (дешевле Вены). Университет силён в физике, праве и альпинистике/горных исследованиях, есть хорошие магистратуры на английском (напр. англистика, античный мир, история).",
      "keyFacts": [
        "Основан 1669; ~28 000 студентов. Плата: ~€726,72/семестр + ÖH €25. Расходы на жизнь: ~€900–1 400/мес.",
        "Силён в физике (кванты), праве, альпинистике; ~10–15 магистратур на английском.",
        "Подтверждение средств ~€11 904/год для визы; есть стипендии."
      ],
      "requirements": [
        "Соответствующая предыдущая степень, английский B2+ (подтверждение при подаче на англоязычные программы), онлайн-подача. Сроки: напр. июль–октябрь на зимний; янв–март на летний."
      ],
      "helpfulInfo": [
        "Адрес: Innrain 52, 6020 Innsbruck, Австрия.",
        "Идеально для любителей природы; стипендии и др. поддержка; подтверждение средств ~€11 904/год для визы.",
        "Контакт: +43 512 507-0; studienabteilung@uibk.ac.at (приём); studienberatung@uibk.ac.at (консультации)."
      ],
      "tuition": "Стандартная ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€900–1 400/мес",
      "cityInfo": "Альпийский город в Тироле (~130 000). Горы Нордкетте, лыжи и походы, старый город (Золотая крыша), река Инн, оживлённая студенческая жизнь (~30 000); дешевле Вены (~€900–1 400/мес).",
      "whyChoose": [
        "Основан 1669; силён в физике (кванты), праве, альпинистике",
        "В сердце Альп для активного отдыха",
        "28 000 студентов (международный фокус)",
        "Отличные условия для исследований и учёбы",
        "Короткие расстояния, доступное жильё"
      ]
    }
  },
  "medical-university-of-innsbruck": {
    "en": {
      "shortDescription": "Health/biomedical research; alpine location for balanced life.",
      "overview": "As above (~€900–1,400/month). Why Choose This University?: Health/biomedical research; alpine location for balanced life.",
      "keyFacts": [
        "Standard ~€726.72/semester + ÖH €25.",
        "Living: ~€900–1,400/month",
        "Health/biomedical research; alpine location for balanced life."
      ],
      "requirements": [
        "Competitive."
      ],
      "helpfulInfo": [
        "Address: Innrain 52, 6020 Innsbruck, Austria.",
        "Strong in medical fields.",
        "Phone: +43 512 9003-0; Email: studienangelegenheiten@i-med.ac.at."
      ],
      "tuition": "Standard ~€726.72/semester + ÖH €25.",
      "livingCosts": "€900–1,400/month",
      "cityInfo": "As above (~€900–1,400/month).",
      "whyChoose": [
        "Health/biomedical research",
        "alpine location for balanced life"
      ]
    },
    "az": {
      "shortDescription": "Səhiyyə/biomedikal tədqiqat; balanslı həyat üçün alp yeri.",
      "overview": "İnsbrukda eyni yaşayış xərcləri (~€900–1.400/ay). Səhiyyə və biomedikal tədqiqat; balanslı həyat üçün alp yeri.",
      "keyFacts": [
        "Standart ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€900–1.400/ay",
        "Səhiyyə/biomedikal tədqiqat; alp yeri, balanslı həyat."
      ],
      "requirements": [
        "Rəqabətlidir."
      ],
      "helpfulInfo": [
        "Ünvan: Innrain 52, 6020 Innsbruck, Avstriya.",
        "Tibb sahələrində güclü.",
        "Əlaqə: +43 512 9003-0; studienangelegenheiten@i-med.ac.at."
      ],
      "tuition": "Standart ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€900–1.400/ay",
      "cityInfo": "İnsbrukda eyni (~€900–1.400/ay).",
      "whyChoose": [
        "Səhiyyə/biomedikal tədqiqat",
        "balanslı həyat üçün alp yeri"
      ]
    },
    "tr": {
      "shortDescription": "Sağlık/biyomedikal araştırma; dengeli yaşam için alp konumu.",
      "overview": "Innsbruck'ta aynı yaşam maliyeti (aylık ~€900–1.400). Sağlık ve biyomedikal araştırma; dengeli yaşam için alp konumu.",
      "keyFacts": [
        "Standart ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€900–1.400",
        "Sağlık/biyomedikal araştırma; alp konumu, dengeli yaşam."
      ],
      "requirements": [
        "Rekabetçi."
      ],
      "helpfulInfo": [
        "Adres: Innrain 52, 6020 Innsbruck, Avusturya.",
        "Tıp alanlarında güçlü.",
        "İletişim: +43 512 9003-0; studienangelegenheiten@i-med.ac.at."
      ],
      "tuition": "Standart ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€900–1.400/ay",
      "cityInfo": "Innsbruck'ta aynı (aylık ~€900–1.400).",
      "whyChoose": [
        "Sağlık/biyomedikal araştırma",
        "dengeli yaşam için alp konumu"
      ]
    },
    "ru": {
      "shortDescription": "Здоровье и биомедицинские исследования; альпийское расположение для сбалансированной жизни.",
      "overview": "В Инсбруке те же расходы на жизнь (~€900–1 400/мес). Здоровье и биомедицинские исследования; альпы для сбалансированной жизни.",
      "keyFacts": [
        "Стандартная плата ~€726,72/семестр + ÖH €25.",
        "Расходы на жизнь: ~€900–1 400/мес",
        "Здоровье и биомедицина; альпийское расположение, сбалансированная жизнь."
      ],
      "requirements": [
        "Конкурсный отбор."
      ],
      "helpfulInfo": [
        "Адрес: Innrain 52, 6020 Innsbruck, Австрия.",
        "Сильны в медицинских направлениях.",
        "Контакт: +43 512 9003-0; studienangelegenheiten@i-med.ac.at."
      ],
      "tuition": "Стандартная ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€900–1 400/мес",
      "cityInfo": "В Инсбруке те же (~€900–1 400/мес).",
      "whyChoose": [
        "Здоровье и биомедицинские исследования",
        "альпийское расположение для сбалансированной жизни"
      ]
    }
  },
  "university-of-klagenfurt": {
    "en": {
      "shortDescription": "Interdisciplinary in education, cultural studies; smaller/intimate setting; nature/lake-focused; good for informatics/management.",
      "overview": "Lakeside in Carinthia (~100,000 people). Warm summers, Lake Wörthersee (beaches/sailing), southern relaxed vibe, mountains/outdoors (~€900–1,200/month inferred; accommodation €350–500). Why Choose This University?: Interdisciplinary in education, cultural studies; smaller/intimate setting; nature/lake-focused; good for informatics/management.",
      "keyFacts": [
        "Standard ~€726.72/semester + ÖH €25.",
        "Living: ~€900–1,200/month inferred",
        "Interdisciplinary in education, cultural studies; smaller/intimate setting; nature/lake-focused; good for informatics/ma…"
      ],
      "requirements": [
        "Standard process."
      ],
      "helpfulInfo": [
        "Address: Universitätsstraße 65-67, 9020 Klagenfurt, Austria.",
        "Relaxed environment.",
        "Phone: +43 463 2700; Email: welcome@aau.at."
      ],
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
    "az": {
      "shortDescription": "Təhsil və mədəniyyətşünaslıqda interdisiplinar; kiçik/rahat mühit; təbiət/göl fokuslu; informatika/idarəetmə üçün uyğun.",
      "overview": "Karintiyada göl sahilində (~100.000). İsti yaylar, Wörthersee gölü (çimərlik/yelkən), cənub rahatlığı, dağlar və təbiət (~€900–1.200/ay təxmini; yaşayış €350–500). Təhsil və mədəniyyətşünaslıqda interdisiplinar; kiçik mühit; informatika/idarəetmə üçün yaxşı.",
      "keyFacts": [
        "Standart ~€726,72/semestr + ÖH €25.",
        "Yaşayış: təxmini ~€900–1.200/ay",
        "Təhsil və mədəniyyətşünaslıqda interdisiplinar; təbiət/göl fokuslu; informatika/idarəetmə."
      ],
      "requirements": [
        "Standart prosedur."
      ],
      "helpfulInfo": [
        "Ünvan: Universitätsstraße 65-67, 9020 Klagenfurt, Avstriya.",
        "Rahat mühit.",
        "Əlaqə: +43 463 2700; welcome@aau.at."
      ],
      "tuition": "Standart ~€726,72/semestr + ÖH €25.",
      "livingCosts": "təxmini €900–1.200/ay",
      "cityInfo": "Karintiyada göl sahilində (~100.000). Wörthersee, isti yaylar, cənub rahatlığı, dağlar (~€900–1.200/ay; yaşayış €350–500).",
      "whyChoose": [
        "Təhsil və mədəniyyətşünaslıqda interdisiplinar",
        "kiçik, rahat mühit",
        "təbiət/göl fokuslu",
        "informatika/idarəetmə üçün yaxşı"
      ]
    },
    "tr": {
      "shortDescription": "Eğitim ve kültür çalışmalarında disiplinler arası; küçük/samimi ortam; doğa/göl odaklı; bilişim/yönetim için uygun.",
      "overview": "Karintiya'da göl kıyısında (~100.000). Sıcak yazlar, Wörthersee Gölü (plaj/yelken), güney rahatlığı, dağlar ve doğa (aylık ~€900–1.200 tahmini; konaklama €350–500). Eğitim ve kültür çalışmalarında disiplinler arası; küçük ortam; bilişim/yönetim için iyi.",
      "keyFacts": [
        "Standart ~€726,72/dönem + ÖH €25.",
        "Yaşam: tahmini aylık ~€900–1.200",
        "Eğitim ve kültür çalışmalarında disiplinler arası; doğa/göl odaklı; bilişim/yönetim."
      ],
      "requirements": [
        "Standart süreç."
      ],
      "helpfulInfo": [
        "Adres: Universitätsstraße 65-67, 9020 Klagenfurt, Avusturya.",
        "Rahat ortam.",
        "İletişim: +43 463 2700; welcome@aau.at."
      ],
      "tuition": "Standart ~€726,72/dönem + ÖH €25.",
      "livingCosts": "tahmini €900–1.200/ay",
      "cityInfo": "Karintiya'da göl kıyısında (~100.000). Wörthersee, sıcak yazlar, güney rahatlığı, dağlar (aylık ~€900–1.200; konaklama €350–500).",
      "whyChoose": [
        "Eğitim ve kültür çalışmalarında disiplinler arası",
        "küçük, samimi ortam",
        "doğa/göl odaklı",
        "bilişim/yönetim için iyi"
      ]
    },
    "ru": {
      "shortDescription": "Междисциплинарность в образовании и культурологии; камерная среда; природа и озеро; подходит для информатики и менеджмента.",
      "overview": "На берегу озера в Каринтии (~100 000). Тёплое лето, озеро Вёртерзе (пляжи, парусный спорт), южная расслабленная атмосфера, горы и природа (~€900–1 200/мес ориентировочно; жильё €350–500). Междисциплинарность в образовании и культурологии; камерная среда; хорошо для информатики и менеджмента.",
      "keyFacts": [
        "Стандартная плата ~€726,72/семестр + ÖH €25.",
        "Расходы на жизнь: ориентировочно ~€900–1 200/мес",
        "Междисциплинарность в образовании и культурологии; природа и озеро; информатика и менеджмент."
      ],
      "requirements": [
        "Стандартная процедура."
      ],
      "helpfulInfo": [
        "Адрес: Universitätsstraße 65-67, 9020 Klagenfurt, Австрия.",
        "Спокойная среда.",
        "Контакт: +43 463 2700; welcome@aau.at."
      ],
      "tuition": "Стандартная ~€726,72/семестр + ÖH €25.",
      "livingCosts": "ориентировочно €900–1 200/мес",
      "cityInfo": "На берегу озера в Каринтии (~100 000). Вёртерзе, тёплое лето, южная атмосфера, горы (~€900–1 200/мес; жильё €350–500).",
      "whyChoose": [
        "Междисциплинарность в образовании и культурологии",
        "камерная среда",
        "природа и озеро",
        "подходит для информатики и менеджмента"
      ]
    }
  },
  "university-of-leoben": {
    "en": {
      "shortDescription": "Specialized mining, materials, metallurgy; niche for raw materials/energy; affordable small-town living.",
      "overview": "Smaller Styrian town (~25,000), mountains/industrial (~€700–1,000/month; rooms from €350). Why Choose This University?: Specialized mining, materials, metallurgy; niche for raw materials/energy; affordable small-town living.",
      "keyFacts": [
        "Standard ~€726.72/semester + ÖH €25.",
        "Living: ~€700–1,000/month",
        "Specialized mining, materials, metallurgy; niche for raw materials/energy; affordable small-town living."
      ],
      "requirements": [
        "Field-specific."
      ],
      "helpfulInfo": [
        "Address: Franz-Josef-Straße 18, 8700 Leoben, Austria.",
        "Grant for new residents (€250 vouchers).",
        "Phone: +43 3842 402-0; Email: info@unileoben.ac.at."
      ],
      "tuition": "Standard ~€726.72/semester + ÖH €25.",
      "livingCosts": "€700–1,000/month",
      "cityInfo": "Smaller Styrian town (~25,000), mountains/industrial (~€700–1,000/month; rooms from €350).",
      "whyChoose": [
        "Specialized mining, materials, metallurgy",
        "niche for raw materials/energy",
        "affordable small-town living"
      ]
    },
    "az": {
      "shortDescription": "Mədənçilik, materialşünaslıq, metallurgiya ixtisası; xammal və enerji üçün niş; münasib kiçik şəhər həyatı.",
      "overview": "Ştiriyada kiçik şəhər (~25.000), dağlıq/sənaye (~€700–1.000/ay; otaq €350-dan). Mədənçilik, material və metallurgiya ixtisası; xammal/enerji nişi; münasib kiçik şəhər.",
      "keyFacts": [
        "Standart ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€700–1.000/ay",
        "Mədənçilik, material, metallurgiya ixtisası; xammal/enerji nişi; münasib kiçik şəhər."
      ],
      "requirements": [
        "Sahəyə görə."
      ],
      "helpfulInfo": [
        "Ünvan: Franz-Josef-Straße 18, 8700 Leoben, Avstriya.",
        "Yeni sakinlər üçün qrant (€250 vauçer).",
        "Əlaqə: +43 3842 402-0; info@unileoben.ac.at."
      ],
      "tuition": "Standart ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€700–1.000/ay",
      "cityInfo": "Ştiriyada kiçik şəhər (~25.000), dağlıq/sənaye (~€700–1.000/ay; otaq €350-dan).",
      "whyChoose": [
        "Mədənçilik, material, metallurgiya ixtisası",
        "xammal və enerji üçün niş",
        "münasib kiçik şəhər həyatı"
      ]
    },
    "tr": {
      "shortDescription": "Madencilik, malzeme, metalurji uzmanlığı; hammadde/enerji nişi; uygun küçük şehir yaşamı.",
      "overview": "Styria'da küçük şehir (~25.000), dağlık/sanayi (aylık ~€700–1.000; oda €350'dan). Madencilik, malzeme, metalurji uzmanlığı; hammadde/enerji nişi; uygun küçük şehir.",
      "keyFacts": [
        "Standart ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€700–1.000",
        "Madencilik, malzeme, metalurji uzmanlığı; hammadde/enerji nişi; uygun küçük şehir."
      ],
      "requirements": [
        "Alana özel."
      ],
      "helpfulInfo": [
        "Adres: Franz-Josef-Straße 18, 8700 Leoben, Avusturya.",
        "Yeni sakinler için hibe (€250 kupon).",
        "İletişim: +43 3842 402-0; info@unileoben.ac.at."
      ],
      "tuition": "Standart ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€700–1.000/ay",
      "cityInfo": "Styria'da küçük şehir (~25.000), dağlık/sanayi (aylık ~€700–1.000; oda €350'dan).",
      "whyChoose": [
        "Madencilik, malzeme, metalurji uzmanlığı",
        "hammadde/enerji nişi",
        "uygun küçük şehir yaşamı"
      ]
    },
    "ru": {
      "shortDescription": "Специализация: горное дело, материалы, металлургия; ниша в сырье и энергетике; доступная жизнь в небольшом городе.",
      "overview": "Небольшой город в Штирии (~25 000), горно-промышленный регион (~€700–1 000/мес; комнаты от €350). Специализация: горное дело, материалы, металлургия; ниша в сырье и энергетике; доступная жизнь в маленьком городе.",
      "keyFacts": [
        "Стандартная плата ~€726,72/семестр + ÖH €25.",
        "Расходы на жизнь: ~€700–1 000/мес",
        "Специализация: горное дело, материалы, металлургия; ниша в сырье и энергетике; доступный маленький город."
      ],
      "requirements": [
        "По направлению."
      ],
      "helpfulInfo": [
        "Адрес: Franz-Josef-Straße 18, 8700 Leoben, Австрия.",
        "Грант для новых жителей (ваучеры €250).",
        "Контакт: +43 3842 402-0; info@unileoben.ac.at."
      ],
      "tuition": "Стандартная ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€700–1 000/мес",
      "cityInfo": "Небольшой город в Штирии (~25 000), горно-промышленный (~€700–1 000/мес; комнаты от €350).",
      "whyChoose": [
        "Специализация: горное дело, материалы, металлургия",
        "ниша в сырье и энергетике",
        "доступная жизнь в небольшом городе"
      ]
    }
  },
  "johannes-kepler-university-linz": {
    "en": {
      "shortDescription": "Business, engineering, social sciences; 23,000 students; strong in AI and chemistry. Innovative, industry-linked; affordable Linz with good tech/startup prospects.",
      "overview": "Linz is a modern Danube city (~200,000) with Ars Electronica Center, museums, and a growing startup/tech scene. Living ~€800–1,200/month (accommodation €350–550). JKU offers ~20+ English Master's (e.g. AI, Computer Science, Economics, Management, Data Science) and several English Bachelor's (AI, Biological Chemistry, International Business Administration). Tuition ~€726.72/semester + ÖH €25.",
      "keyFacts": [
        "~23,000 students; emphasis on business, engineering, social sciences, AI, bio-chemistry.",
        "Tuition: ~€726.72/semester + ÖH €25. Living: ~€800–1,200/month. Dorms available.",
        "~20+ English Master's; few English Bachelor's (e.g. AI, Biological Chemistry, International Business)."
      ],
      "requirements": [
        "International qualifications check, English proof for relevant programs, register via portal. Deadlines flexible (e.g., extended to Mar in cases)."
      ],
      "helpfulInfo": [
        "Address: Altenberger Straße 69, 4040 Linz, Austria.",
        "Contact: +43 732 2468 0; studium@jku.at (admissions). Official website: www.jku.at (English available)."
      ],
      "tuition": "Standard ~€726.72/semester + ÖH €25.",
      "livingCosts": "€800–1,200/month",
      "cityInfo": "Linz: modern Danube city (~200,000); Ars Electronica, museums, startup/tech scene; affordable living.",
      "whyChoose": [
        "Business, engineering, social sciences; 23,000 students; strong in AI, bio-chemistry.",
        "Innovative, industry-linked; affordable city with good tech/startup job prospects; dorms available."
      ]
    },
    "az": {
      "shortDescription": "Biznes, mühəndislik, sosial elmlər; 23.000 tələbə; AI və kimya güclü. Yenilikçi, sənaye ilə əlaqəli; texnologiya/startap imkanları olan münasib Linz.",
      "overview": "Linz Dunayda müasir şəhərdir (~200.000); Ars Electronica Mərkəzi, muzeylər və inkişaf edən startap/texnologiya mühiti. Yaşayış ~€800–1.200/ay (yaşayış €350–550). JKU ~20+ ingilisdilli magistr (məs. AI, informatika, iqtisadiyyat, menecment, data elmi) və bir neçə bakalavr (AI, biokimya, beynəlxalq biznes idarəetməsi) təklif edir. Ödəniş ~€726,72/semestr + ÖH €25.",
      "keyFacts": [
        "~23.000 tələbə; biznes, mühəndislik, sosial elmlər, AI, biokimya.",
        "Ödəniş: ~€726,72/semestr + ÖH €25. Yaşayış: ~€800–1.200/ay. Yataqxana mövcuddur.",
        "~20+ ingilisdilli magistr; az sayda bakalavr (məs. AI, biokimya, beynəlxalq biznes)."
      ],
      "requirements": [
        "Beynəlxalq attestat yoxlaması, uyğun proqramlar üçün ingilis sübutu, portal vasitəsilə qeydiyyat. Müraciət müddətləri elastik (məs. martadək uzadıla bilər)."
      ],
      "helpfulInfo": [
        "Ünvan: Altenberger Straße 69, 4040 Linz, Avstriya.",
        "Əlaqə: +43 732 2468 0; studium@jku.at (qəbul). Rəsmi sayt: www.jku.at (ingilis dilində)."
      ],
      "tuition": "Standart ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€800–1.200/ay",
      "cityInfo": "Linz: Dunayda müasir şəhər (~200.000); Ars Electronica, muzeylər, startap/texnologiya mühiti; münasib yaşayış.",
      "whyChoose": [
        "Biznes, mühəndislik, sosial elmlər; 23.000 tələbə; AI və biokimya güclü.",
        "Yenilikçi, sənaye ilə əlaqəli; texnologiya/startap iş imkanları; yataqxana mövcuddur."
      ]
    },
    "tr": {
      "shortDescription": "İşletme, mühendislik, sosyal bilimler; 23.000 öğrenci; yapay zeka ve kimya güçlü. Yenilikçi, sanayi bağlantılı; iyi teknoloji/startup imkanları olan uygun Linz.",
      "overview": "Linz Tuna'da modern şehir (~200.000); Ars Electronica Merkezi, müzeler ve gelişen startup/teknoloji ortamı. Yaşam aylık ~€800–1.200 (konaklama €350–550). JKU 20+ İngilizce yüksek lisans (örn. yapay zeka, bilgisayar bilimi, ekonomi, yönetim, veri bilimi) ve birkaç lisans (yapay zeka, biyokimya, uluslararası işletme) sunar. Öğrenim ~€726,72/dönem + ÖH €25.",
      "keyFacts": [
        "~23.000 öğrenci; işletme, mühendislik, sosyal bilimler, yapay zeka, biyokimya vurgusu.",
        "Öğrenim: ~€726,72/dönem + ÖH €25. Yaşam: aylık ~€800–1.200. Yurt mevcut.",
        "20+ İngilizce yüksek lisans; az sayıda lisans (örn. yapay zeka, biyokimya, uluslararası işletme)."
      ],
      "requirements": [
        "Uluslararası diploma denkliği, ilgili programlar için İngilizce belgesi, portal üzerinden kayıt. Son başvuru tarihleri esnek (örn. Mart'a uzatılabilir)."
      ],
      "helpfulInfo": [
        "Adres: Altenberger Straße 69, 4040 Linz, Avusturya.",
        "İletişim: +43 732 2468 0; studium@jku.at (kayıt). Resmi site: www.jku.at (İngilizce mevcut)."
      ],
      "tuition": "Standart ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€800–1.200/ay",
      "cityInfo": "Linz: Tuna'da modern şehir (~200.000); Ars Electronica, müzeler, startup/teknoloji ortamı; uygun yaşam.",
      "whyChoose": [
        "İşletme, mühendislik, sosyal bilimler; 23.000 öğrenci; yapay zeka, biyokimya güçlü.",
        "Yenilikçi, sanayi bağlantılı; iyi teknoloji/startup iş imkanları; yurt mevcut."
      ]
    },
    "ru": {
      "shortDescription": "Бизнес, инженерия, общественные науки; 23 000 студентов; сильные направления: ИИ и химия. Инновационный, связан с индустрией; доступный Линц с хорошими перспективами в IT/стартапах.",
      "overview": "Линц — современный город на Дунае (~200 000); центр Ars Electronica, музеи, растущая стартап/IT-среда. Расходы на жизнь ~€800–1 200/мес (жильё €350–550). JKU предлагает 20+ магистерских на английском (напр. ИИ, информатика, экономика, менеджмент, data science) и несколько бакалаврских (ИИ, биологическая химия, международный бизнес). Плата ~€726,72/семестр + ÖH €25.",
      "keyFacts": [
        "~23 000 студентов; акцент на бизнес, инженерию, общественные науки, ИИ, биохимию.",
        "Плата: ~€726,72/семестр + ÖH €25. Жизнь: ~€800–1 200/мес. Общежития есть.",
        "20+ магистерских на английском; несколько бакалаврских (напр. ИИ, биохимия, международный бизнес)."
      ],
      "requirements": [
        "Проверка иностранных документов, подтверждение английского для соответствующих программ, регистрация через портал. Сроки гибкие (напр., продление до марта)."
      ],
      "helpfulInfo": [
        "Адрес: Altenberger Straße 69, 4040 Linz, Австрия.",
        "Контакт: +43 732 2468 0; studium@jku.at (приём). Сайт: www.jku.at (есть английский)."
      ],
      "tuition": "Стандартная ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€800–1 200/мес",
      "cityInfo": "Линц: современный город на Дунае (~200 000); Ars Electronica, музеи, стартап/IT-среда; доступная жизнь.",
      "whyChoose": [
        "Бизнес, инженерия, общественные науки; 23 000 студентов; сильные ИИ и биохимия.",
        "Инновационный, связан с индустрией; хорошие перспективы в IT/стартапах; общежития есть."
      ]
    }
  },
  "university-of-art-and-design-linz": {
    "en": {
      "shortDescription": "Contemporary art and media design; artistic/technical/cultural studies; short distances in city.",
      "overview": "As above (~€800–1,200/month). Why Choose This University?: Contemporary art and media design; artistic/technical/cultural studies; short distances in city.",
      "keyFacts": [
        "Standard/low ~€726.72/semester + ÖH €25.",
        "Living: ~€800–1,200/month",
        "Contemporary art and media design; artistic/technical/cultural studies; short distances in city."
      ],
      "requirements": [
        "Highly selective (auditions/portfolios)."
      ],
      "helpfulInfo": [
        "Address: Hauptplatz 6, 4020 Linz, Austria.",
        "Vibrant student life; sports/classes available.",
        "Phone: +43 732 7898-0; Email: info@kunstuni-linz.at."
      ],
      "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
      "livingCosts": "€800–1,200/month",
      "cityInfo": "As above (~€800–1,200/month).",
      "whyChoose": [
        "Contemporary art and media design",
        "artistic/technical/cultural studies",
        "short distances in city"
      ]
    },
    "az": {
      "shortDescription": "Müasir incəsənət və media dizaynı; bədii/texniki/mədəni təhsil; şəhərdə qısa məsafələr.",
      "overview": "Yuxarıdakı kimi (~€800–1.200/ay). Müasir incəsənət və media dizaynı; bədii/texniki/mədəni təhsil; şəhərdə qısa məsafələr.",
      "keyFacts": [
        "Standart/aşağı ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€800–1.200/ay",
        "Müasir incəsənət və media dizaynı; bədii/texniki/mədəni təhsil; şəhərdə qısa məsafələr."
      ],
      "requirements": [
        "Çox seçici (səsləndirmə/portfoliolar)."
      ],
      "helpfulInfo": [
        "Ünvan: Hauptplatz 6, 4020 Linz, Avstriya.",
        "Canlı tələbə həyatı; idman və dərslər mövcuddur.",
        "Əlaqə: +43 732 7898-0; info@kunstuni-linz.at."
      ],
      "tuition": "Standart/aşağı ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€800–1.200/ay",
      "cityInfo": "Yuxarıdakı kimi (~€800–1.200/ay).",
      "whyChoose": [
        "Müasir incəsənət və media dizaynı",
        "bədii/texniki/mədəni təhsil",
        "şəhərdə qısa məsafələr"
      ]
    },
    "tr": {
      "shortDescription": "Çağdaş sanat ve medya tasarımı; sanatsal/teknik/kültürel çalışmalar; şehirde kısa mesafeler.",
      "overview": "Yukarıdaki gibi (aylık ~€800–1.200). Çağdaş sanat ve medya tasarımı; sanatsal/teknik/kültürel çalışmalar; şehirde kısa mesafeler.",
      "keyFacts": [
        "Standart/düşük ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€800–1.200",
        "Çağdaş sanat ve medya tasarımı; sanatsal/teknik/kültürel çalışmalar; şehirde kısa mesafeler."
      ],
      "requirements": [
        "Çok seçici (seçmeler/portfolyolar)."
      ],
      "helpfulInfo": [
        "Adres: Hauptplatz 6, 4020 Linz, Avusturya.",
        "Canlı öğrenci hayatı; spor ve dersler mevcut.",
        "İletişim: +43 732 7898-0; info@kunstuni-linz.at."
      ],
      "tuition": "Standart/düşük ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€800–1.200/ay",
      "cityInfo": "Yukarıdaki gibi (aylık ~€800–1.200).",
      "whyChoose": [
        "Çağdaş sanat ve medya tasarımı",
        "sanatsal/teknik/kültürel çalışmalar",
        "şehirde kısa mesafeler"
      ]
    },
    "ru": {
      "shortDescription": "Современное искусство и медиадизайн; художественные/технические/культурные направления; компактный город.",
      "overview": "Как выше (~€800–1 200/мес). Современное искусство и медиадизайн; художественные/технические/культурные направления; короткие расстояния в городе.",
      "keyFacts": [
        "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
        "Жизнь: ~€800–1 200/мес",
        "Современное искусство и медиадизайн; художественные/технические/культурные направления; компактный город."
      ],
      "requirements": [
        "Высокий отбор (прослушивания/портфолио)."
      ],
      "helpfulInfo": [
        "Адрес: Hauptplatz 6, 4020 Linz, Австрия.",
        "Активная студенческая жизнь; спорт и занятия доступны.",
        "Контакт: +43 732 7898-0; info@kunstuni-linz.at."
      ],
      "tuition": "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€800–1 200/мес",
      "cityInfo": "Как выше (~€800–1 200/мес).",
      "whyChoose": [
        "Современное искусство и медиадизайн",
        "художественные/технические/культурные направления",
        "короткие расстояния в городе"
      ]
    }
  },
  "anton-bruckner-private-university": {
    "en": {
      "shortDescription": "Music and drama; low fees; one of five unis in Linz; moderate tuition compared to similar.",
      "overview": "As above (~€800–1,200/month). Why Choose This University?: Music and drama; low fees; one of five unis in Linz; moderate tuition compared to similar.",
      "keyFacts": [
        "~€300–1,000/semester (semi-private; additional for multiple majors €150).",
        "Living: ~€800–1,200/month",
        "Music and drama; low fees; one of five unis in Linz; moderate tuition compared to similar."
      ],
      "requirements": [
        "Highly selective (auditions/portfolios)."
      ],
      "helpfulInfo": [
        "Address: Alice-Harnoncourt-Platz 1, 4040 Linz, Austria.",
        "Follows public model; music-focused.",
        "Phone: +43 732 701000-0; Email: studium@bruckneruni.ac.at."
      ],
      "tuition": "~€300–1,000/semester (semi-private; additional for multiple majors €150).",
      "livingCosts": "€800–1,200/month",
      "cityInfo": "As above (~€800–1,200/month).",
      "whyChoose": [
        "one of five unis in Linz",
        "moderate tuition compared to similar"
      ]
    },
    "az": {
      "shortDescription": "Musiqi və dram; aşağı ödənişlər; Linzdəki beş universitetdən biri; oxşarlara nisbətən mülayim ödəniş.",
      "overview": "Yuxarıdakı kimi (~€800–1.200/ay). Musiqi və dram; aşağı ödənişlər; Linzdəki beş universitetdən biri; oxşarlara nisbətən mülayim ödəniş.",
      "keyFacts": [
        "~€300–1.000/semestr (yarımözel; bir neçə ixtisas üçün əlavə €150).",
        "Yaşayış: ~€800–1.200/ay",
        "Musiqi və dram; aşağı ödənişlər; Linzdəki beş universitetdən biri; oxşarlara nisbətən mülayim ödəniş."
      ],
      "requirements": [
        "Çox seçici (səsləndirmə/portfoliolar)."
      ],
      "helpfulInfo": [
        "Ünvan: Alice-Harnoncourt-Platz 1, 4040 Linz, Avstriya.",
        "Dövlət modeli; musiqi əsaslı.",
        "Əlaqə: +43 732 701000-0; studium@bruckneruni.ac.at."
      ],
      "tuition": "~€300–1.000/semestr (yarımözel; bir neçə ixtisas üçün əlavə €150).",
      "livingCosts": "€800–1.200/ay",
      "cityInfo": "Yuxarıdakı kimi (~€800–1.200/ay).",
      "whyChoose": [
        "Linzdəki beş universitetdən biri",
        "oxşarlara nisbətən mülayim ödəniş"
      ]
    },
    "tr": {
      "shortDescription": "Müzik ve drama; düşük ücretler; Linz'deki beş üniversiteden biri; benzerlere göre makul öğrenim.",
      "overview": "Yukarıdaki gibi (aylık ~€800–1.200). Müzik ve drama; düşük ücretler; Linz'deki beş üniversiteden biri; benzerlere göre makul öğrenim.",
      "keyFacts": [
        "~€300–1.000/dönem (yarı-özel; birden fazla ana dal için ek €150).",
        "Yaşam: aylık ~€800–1.200",
        "Müzik ve drama; düşük ücretler; Linz'deki beş üniversiteden biri; benzerlere göre makul öğrenim."
      ],
      "requirements": [
        "Çok seçici (seçmeler/portfolyolar)."
      ],
      "helpfulInfo": [
        "Adres: Alice-Harnoncourt-Platz 1, 4040 Linz, Avusturya.",
        "Kamu modeli; müzik odaklı.",
        "İletişim: +43 732 701000-0; studium@bruckneruni.ac.at."
      ],
      "tuition": "~€300–1.000/dönem (yarı-özel; birden fazla ana dal için ek €150).",
      "livingCosts": "€800–1.200/ay",
      "cityInfo": "Yukarıdaki gibi (aylık ~€800–1.200).",
      "whyChoose": [
        "Linz'deki beş üniversiteden biri",
        "benzerlere göre makul öğrenim"
      ]
    },
    "ru": {
      "shortDescription": "Музыка и драма; невысокая плата; один из пяти вузов Линца; умеренная плата по сравнению с аналогами.",
      "overview": "Как выше (~€800–1 200/мес). Музыка и драма; невысокая плата; один из пяти вузов Линца; умеренная плата по сравнению с аналогами.",
      "keyFacts": [
        "~€300–1 000/семестр (полу-частный; за несколько специальностей доп. €150).",
        "Жизнь: ~€800–1 200/мес",
        "Музыка и драма; невысокая плата; один из пяти вузов Линца; умеренная плата по сравнению с аналогами."
      ],
      "requirements": [
        "Высокий отбор (прослушивания/портфолио)."
      ],
      "helpfulInfo": [
        "Адрес: Alice-Harnoncourt-Platz 1, 4040 Linz, Австрия.",
        "Публичная модель; фокус на музыке.",
        "Контакт: +43 732 701000-0; studium@bruckneruni.ac.at."
      ],
      "tuition": "~€300–1 000/семестр (полу-частный; за несколько специальностей доп. €150).",
      "livingCosts": "€800–1 200/мес",
      "cityInfo": "Как выше (~€800–1 200/мес).",
      "whyChoose": [
        "один из пяти вузов Линца",
        "умеренная плата по сравнению с аналогами"
      ]
    }
  },
  "university-of-education-upper-austria": {
    "en": {
      "shortDescription": "Teacher training; one of largest in Austria; central location.",
      "overview": "As above (~€800–1,200/month). Why Choose This University?: Teacher training; one of largest in Austria; central location.",
      "keyFacts": [
        "Standard/low ~€726.72/semester + ÖH €25.",
        "Living: ~€800–1,200/month",
        "Teacher training; one of largest in Austria; central location."
      ],
      "requirements": [
        "Recognized qualification; standard admission. Tuition: ~€726.72/semester + ÖH €25.",
        "Mostly German-taught; rare English options. Proof of funds for visa."
      ],
      "helpfulInfo": [
        "Address: Kaplanhofstrasse 40, 4020 Linz, Austria.",
        "Contact: +43 732 7470-0; office@ph-ooe.at. Official website: www.ph-ooe.at (English available)."
      ],
      "tuition": "~€726.72/semester + ÖH €25.",
      "livingCosts": "€800–1,200/month",
      "cityInfo": "Linz: ~€800–1,200/month; central location.",
      "whyChoose": [
        "Teacher training; one of the largest in Austria; central Linz location."
      ]
    },
    "az": {
      "shortDescription": "Müəllim hazırlığı; Avstriyada ən böyüklərdən biri; mərkəzi yerləşmə.",
      "overview": "Yuxarıdakı kimi (~€800–1.200/ay). Müəllim hazırlığı; Avstriyada ən böyüklərdən biri; mərkəzi yerləşmə.",
      "keyFacts": [
        "Standart/aşağı ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€800–1.200/ay",
        "Müəllim hazırlığı; Avstriyada ən böyüklərdən biri; mərkəzi yerləşmə."
      ],
      "requirements": [
        "Tanınmış attestat; standart qəbul. Ödəniş: ~€726,72/semestr + ÖH €25.",
        "Əsasən almancadilli; az sayda ingilisdilli proqram. Viza üçün vəsait sübutu."
      ],
      "helpfulInfo": [
        "Ünvan: Kaplanhofstrasse 40, 4020 Linz, Avstriya.",
        "Əlaqə: +43 732 7470-0; office@ph-ooe.at. Rəsmi sayt: www.ph-ooe.at (ingilis dilində)."
      ],
      "tuition": "~€726,72/semestr + ÖH €25.",
      "livingCosts": "€800–1.200/ay",
      "cityInfo": "Linz: ~€800–1.200/ay; mərkəzi yerləşmə.",
      "whyChoose": [
        "Müəllim hazırlığı; Avstriyada ən böyüklərdən biri; Linz mərkəzi."
      ]
    },
    "tr": {
      "shortDescription": "Öğretmen eğitimi; Avusturya'nın en büyüklerinden biri; merkezi konum.",
      "overview": "Yukarıdaki gibi (aylık ~€800–1.200). Öğretmen eğitimi; Avusturya'nın en büyüklerinden biri; merkezi konum.",
      "keyFacts": [
        "Standart/düşük ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€800–1.200",
        "Öğretmen eğitimi; Avusturya'nın en büyüklerinden biri; merkezi konum."
      ],
      "requirements": [
        "Tanınmış diploma; standart başvuru. Öğrenim: ~€726,72/dönem + ÖH €25.",
        "Çoğunlukla Almanca; nadir İngilizce seçenekler. Vize için geçim belgesi."
      ],
      "helpfulInfo": [
        "Adres: Kaplanhofstrasse 40, 4020 Linz, Avusturya.",
        "İletişim: +43 732 7470-0; office@ph-ooe.at. Resmi site: www.ph-ooe.at (İngilizce mevcut)."
      ],
      "tuition": "~€726,72/dönem + ÖH €25.",
      "livingCosts": "€800–1.200/ay",
      "cityInfo": "Linz: aylık ~€800–1.200; merkezi konum.",
      "whyChoose": [
        "Öğretmen eğitimi; Avusturya'nın en büyüklerinden biri; Linz merkezi."
      ]
    },
    "ru": {
      "shortDescription": "Педагогическое образование; один из крупнейших в Австрии; центральное расположение.",
      "overview": "Как выше (~€800–1 200/мес). Педагогическое образование; один из крупнейших в Австрии; центральное расположение.",
      "keyFacts": [
        "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
        "Жизнь: ~€800–1 200/мес",
        "Педагогическое образование; один из крупнейших в Австрии; центральное расположение."
      ],
      "requirements": [
        "Признанный диплом; стандартная подача. Плата: ~€726,72/семестр + ÖH €25.",
        "В основном на немецком; редкие программы на английском. Подтверждение средств для визы."
      ],
      "helpfulInfo": [
        "Адрес: Kaplanhofstrasse 40, 4020 Linz, Австрия.",
        "Контакт: +43 732 7470-0; office@ph-ooe.at. Сайт: www.ph-ooe.at (есть английский)."
      ],
      "tuition": "~€726,72/семестр + ÖH €25.",
      "livingCosts": "€800–1 200/мес",
      "cityInfo": "Линц: ~€800–1 200/мес; центральное расположение.",
      "whyChoose": [
        "Педагогическое образование; один из крупнейших в Австрии; центр Линца."
      ]
    }
  },
  "university-of-salzburg": {
    "en": {
      "shortDescription": "Known for law, psychology, geosciences; cultural/music hub; 18,000 students; strong interdisciplinary English options; high quality of life in scenic location.",
      "overview": "Mozart's city (~155,000 people). Baroque architecture, Sound of Music sites, Alps/Salzburg Festival (world-famous classical music/theater), lakes/rivers, charming/touristy yet student-vibrant (~€900–1,400/month in 2026; accommodation €400–600, food €300). Why Choose This University?: Known for law, psychology, geosciences; cultural/music hub; 18,000 students; strong interdisciplinary English options; high quality of life in scenic location.",
      "keyFacts": [
        "~18,000 students; law, psychology, geosciences; cultural/music hub (Salzburg Festival).",
        "Tuition: ~€726.72/semester + ÖH €25. Living: ~€900–1,400/month.",
        "~35% of programmes in English (~15–20+ Master's); limited English Bachelor's."
      ],
      "requirements": [
        "Relevant Bachelor's; English proficiency; direct application.",
        "Tuition: ~€726.72/semester + ÖH €25. Funding options available."
      ],
      "helpfulInfo": [
        "Address: Kapitelgasse 4, 5020 Salzburg, Austria.",
        "Contact: +43 662 8044-0; studium@sbg.ac.at (admissions). Official website: www.plus.ac.at (English available)."
      ],
      "tuition": "~€726.72/semester + ÖH €25.",
      "livingCosts": "€900–1,400/month",
      "cityInfo": "Mozart's city (~155,000 people). Baroque architecture, Sound of Music sites, Alps/Salzburg Festival (world-famous classical music/theater), lakes/rivers, charming/touristy yet student-vibrant (~€900–1,400/month in 2026; accommodation €400–600, food €300).",
      "whyChoose": [
        "Known for law, psychology, geosciences",
        "cultural/music hub",
        "strong interdisciplinary English options",
        "high quality of life in scenic location"
      ]
    },
    "az": {
      "shortDescription": "Hüquq, psixologiya, geologiya ilə tanınır; mədəniyyət/musiqi mərkəzi; 18.000 tələbə; güclü interdisiplinar ingilisdilli proqramlar; gözəl mənzərədə yüksək həyat keyfiyyəti.",
      "overview": "Motsartın şəhəri (~155.000). Barokko memarlığı, «Səsin səsi» yerləri, Alplər/Salzburg Festivalı (dünyaşöhrətli klassik musiqi/teatr), göllər/çaylar; tələbə həyatı canlı (~€900–1.400/ay 2026-cı ildə; yaşayış €400–600, yemək €300). Hüquq, psixologiya, geologiya; mədəniyyət/musiqi mərkəzi; güclü interdisiplinar ingilisdilli proqramlar; gözəl mənzərədə yüksək həyat keyfiyyəti.",
      "keyFacts": [
        "~18.000 tələbə; hüquq, psixologiya, geologiya; mədəniyyət/musiqi mərkəzi (Salzburg Festivalı).",
        "Ödəniş: ~€726,72/semestr + ÖH €25. Yaşayış: ~€900–1.400/ay.",
        "Proqramların ~35%-i ingilis dilində (~15–20+ magistr); məhdud ingilisdilli bakalavr."
      ],
      "requirements": [
        "Uyğun bakalavr; ingilis dili səviyyəsi; birbaşa müraciət.",
        "Ödəniş: ~€726,72/semestr + ÖH €25. Maliyyə imkanları mövcuddur."
      ],
      "helpfulInfo": [
        "Ünvan: Kapitelgasse 4, 5020 Salzburg, Avstriya.",
        "Əlaqə: +43 662 8044-0; studium@sbg.ac.at (qəbul). Rəsmi sayt: www.plus.ac.at (ingilis dilində)."
      ],
      "tuition": "~€726,72/semestr + ÖH €25.",
      "livingCosts": "€900–1.400/ay",
      "cityInfo": "Motsartın şəhəri (~155.000). Barokko memarlığı, Alplər/Salzburg Festivalı, göllər/çaylar; tələbə həyatı canlı (~€900–1.400/ay; yaşayış €400–600, yemək €300).",
      "whyChoose": [
        "Hüquq, psixologiya, geologiya ilə tanınır",
        "mədəniyyət/musiqi mərkəzi",
        "güclü interdisiplinar ingilisdilli proqramlar",
        "gözəl mənzərədə yüksək həyat keyfiyyəti"
      ]
    },
    "tr": {
      "shortDescription": "Hukuk, psikoloji, yer bilimleri ile tanınır; kültür/müzik merkezi; 18.000 öğrenci; güçlü disiplinler arası İngilizce seçenekler; manzaralı konumda yüksek yaşam kalitesi.",
      "overview": "Mozart'ın şehri (~155.000). Barok mimarisi, Sound of Music mekanları, Alpler/Salzburg Festivali (dünyaca ünlü klasik müzik/tiyatro), göller/nehirler; öğrenci hayatı canlı (2026'da aylık ~€900–1.400; konaklama €400–600, yemek €300). Hukuk, psikoloji, yer bilimleri; kültür/müzik merkezi; güçlü disiplinler arası İngilizce seçenekler; manzaralı konumda yüksek yaşam kalitesi.",
      "keyFacts": [
        "~18.000 öğrenci; hukuk, psikoloji, yer bilimleri; kültür/müzik merkezi (Salzburg Festivali).",
        "Öğrenim: ~€726,72/dönem + ÖH €25. Yaşam: aylık ~€900–1.400.",
        "Programların ~%35'i İngilizce (~15–20+ yüksek lisans); sınırlı İngilizce lisans."
      ],
      "requirements": [
        "İlgili lisans; İngilizce yeterliliği; doğrudan başvuru.",
        "Öğrenim: ~€726,72/dönem + ÖH €25. Burs imkanları mevcut."
      ],
      "helpfulInfo": [
        "Adres: Kapitelgasse 4, 5020 Salzburg, Avusturya.",
        "İletişim: +43 662 8044-0; studium@sbg.ac.at (kayıt). Resmi site: www.plus.ac.at (İngilizce mevcut)."
      ],
      "tuition": "~€726,72/dönem + ÖH €25.",
      "livingCosts": "€900–1.400/ay",
      "cityInfo": "Mozart'ın şehri (~155.000). Barok mimarisi, Alpler/Salzburg Festivali, göller/nehirler; öğrenci hayatı canlı (aylık ~€900–1.400; konaklama €400–600, yemek €300).",
      "whyChoose": [
        "Hukuk, psikoloji, yer bilimleri ile tanınır",
        "kültür/müzik merkezi",
        "güçlü disiplinler arası İngilizce seçenekler",
        "manzaralı konumda yüksek yaşam kalitesi"
      ]
    },
    "ru": {
      "shortDescription": "Известна правом, психологией, науками о Земле; культурный/музыкальный центр; 18 000 студентов; сильные междисциплинарные программы на английском; высокое качество жизни в живописном месте.",
      "overview": "Город Моцарта (~155 000). Барокко, места «Звуков музыки», Альпы/Зальцбургский фестиваль (всемирно известная классическая музыка/театр), озёра/реки; оживлённая студенческая жизнь (~€900–1 400/мес в 2026; жильё €400–600, еда €300). Известна правом, психологией, науками о Земле; культурный/музыкальный центр; сильные междисциплинарные программы на английском; высокое качество жизни в живописном месте.",
      "keyFacts": [
        "~18 000 студентов; право, психология, науки о Земле; культурный/музыкальный центр (Зальцбургский фестиваль).",
        "Плата: ~€726,72/семестр + ÖH €25. Жизнь: ~€900–1 400/мес.",
        "~35% программ на английском (~15–20+ магистерских); ограниченно бакалаврских на английском."
      ],
      "requirements": [
        "Соответствующий бакалавриат; знание английского; прямая подача.",
        "Плата: ~€726,72/семестр + ÖH €25. Есть варианты финансирования."
      ],
      "helpfulInfo": [
        "Адрес: Kapitelgasse 4, 5020 Salzburg, Австрия.",
        "Контакт: +43 662 8044-0; studium@sbg.ac.at (приём). Сайт: www.plus.ac.at (есть английский)."
      ],
      "tuition": "~€726,72/семестр + ÖH €25.",
      "livingCosts": "€900–1 400/мес",
      "cityInfo": "Город Моцарта (~155 000). Барокко, Альпы/Зальцбургский фестиваль, озёра/реки; оживлённая студенческая жизнь (~€900–1 400/мес; жильё €400–600, еда €300).",
      "whyChoose": [
        "Известна правом, психологией, науками о Земле",
        "культурный/музыкальный центр",
        "сильные междисциплинарные программы на английском",
        "высокое качество жизни в живописном месте"
      ]
    }
  },
  "university-of-vienna": {
    "en": {
      "shortDescription": "Oldest German-speaking university (1365), top-ranked globally (~top 150–200 QS). Over 180 programs; strong in humanities, sciences, law, social sciences. 85,000+ students (20% international); tuition waivers for developing countries/Ukrainians.",
      "overview": "Vienna is Austria's capital and cultural powerhouse (~2 million). Imperial grandeur, world-class museums, opera, coffeehouses, and a vibrant student scene (~200,000 citywide). Living costs ~€1,200–1,600/month (accommodation €450–900, food €350–380). The University of Vienna, founded 1365, is top-ranked (~top 150–200 QS), with over 180 degree programs and strengths in humanities, sciences, law, and social sciences. It attracts 85,000+ students (20% international) and offers affordable tuition with waivers for eligible applicants.",
      "keyFacts": [
        "Founded 1365; ~85,000 students (20% international); over 180 degree programs.",
        "Tuition: ~€726.72/semester + ÖH €25 (waivers for Ukrainians/developing countries).",
        "Living: ~€1,200–1,600/month. Strong in humanities, sciences, law, social sciences.",
        "English: limited Bachelor's; ~35+ English Master's (e.g. Anglophone Literatures, Data Science, Economics)."
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
      "tuition": "~€726.72/semester + ÖH €25 (waivers for Ukrainians/developing countries).",
      "livingCosts": "€1,200–1,600/month",
      "cityInfo": "Austria's capital (~2 million). Imperial grandeur, world-class museums, opera, coffeehouses; vibrant student scene (~200,000 citywide); high quality of life.",
      "whyChoose": [
        "Oldest German-speaking university (1365); top-ranked globally (~top 150–200 QS); over 180 programs.",
        "Strong in humanities, sciences, law, social sciences; 85,000+ students (20% international).",
        "Alumni include Nobel laureates; tuition waivers for developing countries/Ukrainians."
      ]
    },
    "az": {
      "shortDescription": "Almandilli ən qədim universitet (1365), dünya reytinqlərində yüksək (~QS 150–200). 180-dən çox proqram; humanitar, elm, hüquq, sosial elmlər güclü. 85.000+ tələbə (20% beynəlxalq); inkişaf edən ölkələr/ukraynalılar üçün ödəniş güzəştləri.",
      "overview": "Vyana Avstriyanın paytaxtı və mədəni mərkəzidir (~2 milyon). İmperiya əzəməti, dünya səviyyəli muzeylər, opera, kafelər və canlı tələbə mühiti (~200.000). Yaşayış ~€1.200–1.600/ay (yaşayış €450–900, yemək €350–380). 1365-ci ildə qurulan Vyana Universiteti yüksək reytinqlidir (~QS 150–200), 180-dən çox proqram və humanitar, elm, hüquq, sosial elmlərdə güclüdür. 85.000+ tələbə cəlb edir (20% beynəlxalq) və uyğun müraciətçilər üçün güzəştlər təklif edir.",
      "keyFacts": [
        "1365-də qurulub; ~85.000 tələbə (20% beynəlxalq); 180-dən çox proqram.",
        "Ödəniş: ~€726,72/semestr + ÖH €25 (ukraynalılar/inkişaf edən ölkələr üçün güzəştlər).",
        "Yaşayış: ~€1.200–1.600/ay. Humanitar, elm, hüquq, sosial elmlər güclü.",
        "İngilis: məhdud bakalavr; ~35+ ingilisdilli magistr (məs. anglofon ədəbiyyat, data elmi, iqtisadiyyat)."
      ],
      "requirements": [
        "Tanınmış attestat (məktəb/bakalavr ekvivalenti); ingilisdilli proqramlar üçün IELTS 6.5–7.0/TOEFL 90–100+; bəzi magistrlar üçün motivasyon məktubu/CV.",
        "Müraciət: məs. yay üçün noyabr–yanvar; qış üçün iyun–sentyabr. u:find portal vasitəsilə.",
        "Ödəniş: ~€726,72/semestr + ÖH €25. Viza üçün vəsait sübutu tələb olunur."
      ],
      "helpfulInfo": [
        "Ünvan: Universitätsring 1, 1010 Vienna, Avstriya.",
        "Əlaqə: +43 1 4277-0; info@univie.ac.at (ümumi); studienabteilung@univie.ac.at (qəbul).",
        "Rəsmi sayt: www.univie.ac.at (ingilis dilində)."
      ],
      "tuition": "~€726,72/semestr + ÖH €25 (ukraynalılar/inkişaf edən ölkələr üçün güzəştlər).",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Avstriyanın paytaxtı (~2 milyon). İmperiya əzəməti, dünya səviyyəli muzeylər, opera, kafelər; canlı tələbə mühiti; yüksək həyat keyfiyyəti.",
      "whyChoose": [
        "Almandilli ən qədim universitet (1365); dünya reytinqlərində yüksək (~QS 150–200); 180-dən çox proqram.",
        "Humanitar, elm, hüquq, sosial elmlər güclü; 85.000+ tələbə (20% beynəlxalq).",
        "Məzunlar arasında Nobel laureatları; inkişaf edən ölkələr/ukraynalılar üçün ödəniş güzəştləri."
      ]
    },
    "tr": {
      "shortDescription": "Almanca konuşulan en eski üniversite (1365), küresel üst sıralarda (~QS 150–200). 180'den fazla program; beşeri bilimler, fen, hukuk, sosyal bilimler güçlü. 85.000+ öğrenci (%20 uluslararası); gelişmekte olan ülkeler/Ukraynalılar için öğrenim muafiyeti.",
      "overview": "Viyana Avusturya'nın başkenti ve kültür merkezidir (~2 milyon). İmparatorluk ihtişamı, dünya standartında müzeler, opera, kahvehaneler ve canlı öğrenci ortamı (~200.000). Yaşam aylık ~€1.200–1.600 (konaklama €450–900, yemek €350–380). 1365'te kurulan Viyana Üniversitesi üst sıralardadır (~QS 150–200), 180'den fazla program; beşeri bilimler, fen, hukuk, sosyal bilimlerde güçlü. 85.000+ öğrenci (%20 uluslararası) çeker; uygun başvuru sahipleri için muafiyet sunar.",
      "keyFacts": [
        "1365'te kuruldu; ~85.000 öğrenci (%20 uluslararası); 180'den fazla program.",
        "Öğrenim: ~€726,72/dönem + ÖH €25 (Ukraynalılar/gelişmekte olan ülkeler için muafiyet).",
        "Yaşam: aylık ~€1.200–1.600. Beşeri bilimler, fen, hukuk, sosyal bilimler güçlü.",
        "İngilizce: sınırlı lisans; 35+ İngilizce yüksek lisans (örn. Anglofon edebiyat, veri bilimi, ekonomi)."
      ],
      "requirements": [
        "Tanınmış diploma (lise/lisans denkliği); İngilizce programlar için IELTS 6.5–7.0/TOEFL 90–100+; bazı yüksek lisanslar için motivasyon mektubu/CV.",
        "Son başvuru: örn. yaz için Kas–Oca; kış için Haz–Eyl. u:find portal üzerinden.",
        "Öğrenim: ~€726,72/dönem + ÖH €25. Vize için geçim belgesi gerekli."
      ],
      "helpfulInfo": [
        "Adres: Universitätsring 1, 1010 Vienna, Avusturya.",
        "İletişim: +43 1 4277-0; info@univie.ac.at (genel); studienabteilung@univie.ac.at (kayıt).",
        "Resmi site: www.univie.ac.at (İngilizce mevcut)."
      ],
      "tuition": "~€726,72/dönem + ÖH €25 (Ukraynalılar/gelişmekte olan ülkeler için muafiyet).",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Avusturya'nın başkenti (~2 milyon). İmparatorluk ihtişamı, dünya standartında müzeler, opera, kahvehaneler; canlı öğrenci ortamı; yüksek yaşam kalitesi.",
      "whyChoose": [
        "Almanca konuşulan en eski üniversite (1365); küresel üst sıralarda (~QS 150–200); 180'den fazla program.",
        "Beşeri bilimler, fen, hukuk, sosyal bilimler güçlü; 85.000+ öğrenci (%20 uluslararası).",
        "Mezunlar arasında Nobel ödüllüler; gelişmekte olan ülkeler/Ukraynalılar için muafiyet."
      ]
    },
    "ru": {
      "shortDescription": "Старейший немецкоязычный университет (1365), высокие мировые рейтинги (~QS 150–200). Более 180 программ; сильные гуманитарные, естественные науки, право, общественные науки. 85 000+ студентов (20% иностранных); льготы по оплате для развивающихся стран/украинцев.",
      "overview": "Вена — столица и культурный центр Австрии (~2 млн). Имперское величие, музеи мирового уровня, опера, кофейни и оживлённая студенческая среда (~200 000). Расходы на жизнь ~€1 200–1 600/мес (жильё €450–900, еда €350–380). Венский университет, основан в 1365, в верхних строчках рейтингов (~QS 150–200), более 180 программ; сильные гуманитарные, естественные науки, право, общественные науки. 85 000+ студентов (20% иностранных); льготы по оплате для подходящих абитуриентов.",
      "keyFacts": [
        "Основан 1365; ~85 000 студентов (20% иностранных); более 180 программ.",
        "Плата: ~€726,72/семестр + ÖH €25 (льготы для украинцев/развивающихся стран).",
        "Жизнь: ~€1 200–1 600/мес. Сильные гуманитарные, естественные науки, право, общественные науки.",
        "Английский: ограниченно бакалавриат; 35+ магистерских на английском (напр. англоязычная литература, data science, экономика)."
      ],
      "requirements": [
        "Признанный аттестат (школа/бакалавриат); для программ на английском IELTS 6.5–7.0/TOEFL 90–100+; для части магистратур мотивационное письмо/CV.",
        "Сроки: напр. нояб–янв на летний; июнь–сен на зимний. Подача через портал u:find.",
        "Плата: ~€726,72/семестр + ÖH €25. Для визы требуется подтверждение средств."
      ],
      "helpfulInfo": [
        "Адрес: Universitätsring 1, 1010 Vienna, Австрия.",
        "Контакт: +43 1 4277-0; info@univie.ac.at (общие); studienabteilung@univie.ac.at (приём).",
        "Сайт: www.univie.ac.at (есть английский)."
      ],
      "tuition": "~€726,72/семестр + ÖH €25 (льготы для украинцев/развивающихся стран).",
      "livingCosts": "€1 200–1 600/мес",
      "cityInfo": "Столица Австрии (~2 млн). Имперское величие, музеи мирового уровня, опера, кофейни; оживлённая студенческая среда; высокое качество жизни.",
      "whyChoose": [
        "Старейший немецкоязычный университет (1365); высокие мировые рейтинги (~QS 150–200); более 180 программ.",
        "Сильные гуманитарные, естественные науки, право, общественные науки; 85 000+ студентов (20% иностранных).",
        "Среди выпускников нобелевские лауреаты; льготы по оплате для развивающихся стран/украинцев."
      ]
    }
  },
  "medical-university-of-vienna": {
    "en": {
      "shortDescription": "Specialized in medicine/health sciences; top research hospital; competitive programs; high employability in healthcare.",
      "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Specialized in medicine/health sciences; top research hospital; competitive programs; high employability in healthcare.",
      "keyFacts": [
        "Standard for available programs ~€726.72/semester + ÖH €25.",
        "Living: ~€1,200–1,600/month",
        "Specialized in medicine/health sciences; top research hospital; competitive programs; high employability in healthcare."
      ],
      "requirements": [
        "Competitive exams/quotas for core programs; direct for Master's/PhD."
      ],
      "helpfulInfo": [
        "Address: Spitalgasse 23, 1090 Vienna, Austria.",
        "Highly selective for clinical fields.",
        "Phone: +43 1 40160-0; Email: studium@meduniwien.ac.at."
      ],
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
    "az": {
      "shortDescription": "Tibb/sağlamlıq elmləri ixtisası; aparıcı tədqiqat xəstəxanası; rəqabətli proqramlar; səhiyyədə yüksək məşğulluq.",
      "overview": "Yuxarıdakı kimi (~€1.200–1.600/ay). Tibb/sağlamlıq elmləri ixtisası; aparıcı tədqiqat xəstəxanası; rəqabətli proqramlar; səhiyyədə yüksək məşğulluq.",
      "keyFacts": [
        "Mövcud proqramlar üçün standart ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€1.200–1.600/ay",
        "Tibb/sağlamlıq elmləri ixtisası; aparıcı tədqiqat xəstəxanası; rəqabətli proqramlar; səhiyyədə yüksək məşğulluq."
      ],
      "requirements": [
        "Əsas proqramlar üçün müsabiqəvi imtahanlar/kvotalar; magistr/doktorantura üçün birbaşa."
      ],
      "helpfulInfo": [
        "Ünvan: Spitalgasse 23, 1090 Vienna, Avstriya.",
        "Klinik sahələr üçün çox seçici.",
        "Əlaqə: +43 1 40160-0; studium@meduniwien.ac.at."
      ],
      "tuition": "Mövcud proqramlar üçün standart ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yuxarıdakı kimi (~€1.200–1.600/ay).",
      "whyChoose": [
        "Tibb/sağlamlıq elmləri ixtisası",
        "aparıcı tədqiqat xəstəxanası",
        "rəqabətli proqramlar",
        "səhiyyədə yüksək məşğulluq"
      ]
    },
    "tr": {
      "shortDescription": "Tıp/sağlık bilimleri uzmanlığı; üst düzey araştırma hastanesi; rekabetçi programlar; sağlıkta yüksek istihdam.",
      "overview": "Yukarıdaki gibi (aylık ~€1.200–1.600). Tıp/sağlık bilimleri uzmanlığı; üst düzey araştırma hastanesi; rekabetçi programlar; sağlıkta yüksek istihdam.",
      "keyFacts": [
        "Mevcut programlar için standart ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€1.200–1.600",
        "Tıp/sağlık bilimleri uzmanlığı; üst düzey araştırma hastanesi; rekabetçi programlar; sağlıkta yüksek istihdam."
      ],
      "requirements": [
        "Temel programlar için rekabetçi sınavlar/kotalar; yüksek lisans/doktora için doğrudan."
      ],
      "helpfulInfo": [
        "Adres: Spitalgasse 23, 1090 Vienna, Avusturya.",
        "Klinik alanlarda çok seçici.",
        "İletişim: +43 1 40160-0; studium@meduniwien.ac.at."
      ],
      "tuition": "Mevcut programlar için standart ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yukarıdaki gibi (aylık ~€1.200–1.600).",
      "whyChoose": [
        "Tıp/sağlık bilimleri uzmanlığı",
        "üst düzey araştırma hastanesi",
        "rekabetçi programlar",
        "sağlıkta yüksek istihdam"
      ]
    },
    "ru": {
      "shortDescription": "Специализация: медицина и науки о здоровье; ведущая научная больница; конкурентные программы; высокая востребованность в здравоохранении.",
      "overview": "Как выше (~€1 200–1 600/мес). Специализация: медицина и науки о здоровье; ведущая научная больница; конкурентные программы; высокая востребованность в здравоохранении.",
      "keyFacts": [
        "Стандартная плата по программам ~€726,72/семестр + ÖH €25.",
        "Жизнь: ~€1 200–1 600/мес",
        "Специализация: медицина и науки о здоровье; ведущая научная больница; конкурентные программы; высокая востребованность в здравоохранении."
      ],
      "requirements": [
        "Конкурсные экзамены/квоты на основные программы; прямая подача в магистратуру/аспирантуру."
      ],
      "helpfulInfo": [
        "Адрес: Spitalgasse 23, 1090 Vienna, Австрия.",
        "Высокий отбор по клиническим направлениям.",
        "Контакт: +43 1 40160-0; studium@meduniwien.ac.at."
      ],
      "tuition": "Стандартная по программам ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 200–1 600/мес",
      "cityInfo": "Как выше (~€1 200–1 600/мес).",
      "whyChoose": [
        "Специализация: медицина и науки о здоровье",
        "ведущая научная больница",
        "конкурентные программы",
        "высокая востребованность в здравоохранении"
      ]
    }
  },
  "tu-wien": {
    "en": {
      "shortDescription": "Leading engineering/tech uni; strong industry ties; innovative research; unmatched quality of living in Vienna.",
      "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Leading engineering/tech uni; strong industry ties; innovative research; unmatched quality of living in Vienna.",
      "keyFacts": [
        "~€726.72/semester + ÖH €25.",
        "Living: ~€1,200–1,600/month",
        "Leading engineering/tech uni; strong industry ties; innovative research; unmatched quality of living in Vienna."
      ],
      "requirements": [
        "Often restricted/grades-based."
      ],
      "helpfulInfo": [
        "Address: Karlsplatz 13, 1040 Vienna, Austria.",
        "Strong STEM focus.",
        "Phone: +43 1 58801-0; Email: info@tuwien.ac.at."
      ],
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
    "az": {
      "shortDescription": "Aparıcı mühəndislik/texnologiya universiteti; güclü sənaye əlaqələri; innovativ tədqiqat; Vyana-da misilsiz həyat keyfiyyəti.",
      "overview": "Yuxarıdakı kimi (~€1.200–1.600/ay). Aparıcı mühəndislik/texnologiya universiteti; güclü sənaye əlaqələri; innovativ tədqiqat; Vyana-da misilsiz həyat keyfiyyəti.",
      "keyFacts": [
        "~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€1.200–1.600/ay",
        "Aparıcı mühəndislik/texnologiya universiteti; güclü sənaye əlaqələri; innovativ tədqiqat; Vyana-da misilsiz həyat keyfiyyəti."
      ],
      "requirements": [
        "Çox vaxt məhdud/qiymət əsaslı."
      ],
      "helpfulInfo": [
        "Ünvan: Karlsplatz 13, 1040 Vienna, Avstriya.",
        "Güclü STEM fokusu.",
        "Əlaqə: +43 1 58801-0; info@tuwien.ac.at."
      ],
      "tuition": "~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yuxarıdakı kimi (~€1.200–1.600/ay).",
      "whyChoose": [
        "Aparıcı mühəndislik/texnologiya universiteti",
        "güclü sənaye əlaqələri",
        "innovativ tədqiqat",
        "Vyana-da misilsiz həyat keyfiyyəti"
      ]
    },
    "tr": {
      "shortDescription": "Önde gelen mühendislik/teknoloji üniversitesi; güçlü sanayi bağlantıları; yenilikçi araştırma; Viyana'da eşsiz yaşam kalitesi.",
      "overview": "Yukarıdaki gibi (aylık ~€1.200–1.600). Önde gelen mühendislik/teknoloji üniversitesi; güçlü sanayi bağlantıları; yenilikçi araştırma; Viyana'da eşsiz yaşam kalitesi.",
      "keyFacts": [
        "~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€1.200–1.600",
        "Önde gelen mühendislik/teknoloji üniversitesi; güçlü sanayi bağlantıları; yenilikçi araştırma; Viyana'da eşsiz yaşam kalitesi."
      ],
      "requirements": [
        "Sıklıkla kontenjan/not bazlı."
      ],
      "helpfulInfo": [
        "Adres: Karlsplatz 13, 1040 Vienna, Avusturya.",
        "Güçlü STEM odağı.",
        "İletişim: +43 1 58801-0; info@tuwien.ac.at."
      ],
      "tuition": "~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yukarıdaki gibi (aylık ~€1.200–1.600).",
      "whyChoose": [
        "Önde gelen mühendislik/teknoloji üniversitesi",
        "güçlü sanayi bağlantıları",
        "yenilikçi araştırma",
        "Viyana'da eşsiz yaşam kalitesi"
      ]
    },
    "ru": {
      "shortDescription": "Ведущий инженерно-технический вуз; тесные связи с индустрией; инновационные исследования; высокое качество жизни в Вене.",
      "overview": "Как выше (~€1 200–1 600/мес). Ведущий инженерно-технический вуз; тесные связи с индустрией; инновационные исследования; высокое качество жизни в Вене.",
      "keyFacts": [
        "~€726,72/семестр + ÖH €25.",
        "Жизнь: ~€1 200–1 600/мес",
        "Ведущий инженерно-технический вуз; тесные связи с индустрией; инновационные исследования; высокое качество жизни в Вене."
      ],
      "requirements": [
        "Часто с ограничением по набору/по оценкам."
      ],
      "helpfulInfo": [
        "Адрес: Karlsplatz 13, 1040 Vienna, Австрия.",
        "Сильный фокус на STEM.",
        "Контакт: +43 1 58801-0; info@tuwien.ac.at."
      ],
      "tuition": "~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 200–1 600/мес",
      "cityInfo": "Как выше (~€1 200–1 600/мес).",
      "whyChoose": [
        "Ведущий инженерно-технический вуз",
        "тесные связи с индустрией",
        "инновационные исследования",
        "высокое качество жизни в Вене"
      ]
    }
  },
  "university-of-natural-resources-and-life-sciences-vienna": {
    "en": {
      "shortDescription": "Agriculture/forestry/environmental; sustainability/green focus; leading in life sciences; graduates highly employable.",
      "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Agriculture/forestry/environmental; sustainability/green focus; leading in life sciences; graduates highly employable.",
      "keyFacts": [
        "Standard ~€726.72/semester + ÖH €25.",
        "Living: ~€1,200–1,600/month",
        "Agriculture/forestry/environmental; sustainability/green focus; leading in life sciences; graduates highly employable."
      ],
      "requirements": [
        "Check official website for admission requirements."
      ],
      "helpfulInfo": [
        "Address: Gregor-Mendel-Straße 33, 1180 Vienna, Austria.",
        "Green campus.",
        "Phone: +43 1 47654-0; Email: info@boku.ac.at."
      ],
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
    "az": {
      "shortDescription": "Kənd təsərrüfatı/meşə/ətraf mühit; davamlılıq/yaşıllıq fokusu; həyat elmlərində aparıcı; məzunlar yüksək məşğulluq.",
      "overview": "Yuxarıdakı kimi (~€1.200–1.600/ay). Kənd təsərrüfatı/meşə/ətraf mühit; davamlılıq/yaşıllıq fokusu; həyat elmlərində aparıcı; məzunlar yüksək məşğulluq.",
      "keyFacts": [
        "Standart ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€1.200–1.600/ay",
        "Kənd təsərrüfatı/meşə/ətraf mühit; davamlılıq/yaşıllıq fokusu; həyat elmlərində aparıcı; məzunlar yüksək məşğulluq."
      ],
      "requirements": [
        "Qəbul tələbləri üçün rəsmi sayta baxın."
      ],
      "helpfulInfo": [
        "Ünvan: Gregor-Mendel-Straße 33, 1180 Vienna, Avstriya.",
        "Yaşıl kampus.",
        "Əlaqə: +43 1 47654-0; info@boku.ac.at."
      ],
      "tuition": "Standart ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yuxarıdakı kimi (~€1.200–1.600/ay).",
      "whyChoose": [
        "Kənd təsərrüfatı/meşə/ətraf mühit",
        "davamlılıq/yaşıllıq fokusu",
        "həyat elmlərində aparıcı",
        "məzunlar yüksək məşğulluq"
      ]
    },
    "tr": {
      "shortDescription": "Tarım/orman/çevre; sürdürülebilirlik/yeşil odağı; yaşam bilimlerinde önde; mezunlar yüksek istihdam.",
      "overview": "Yukarıdaki gibi (aylık ~€1.200–1.600). Tarım/orman/çevre; sürdürülebilirlik/yeşil odağı; yaşam bilimlerinde önde; mezunlar yüksek istihdam.",
      "keyFacts": [
        "Standart ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€1.200–1.600",
        "Tarım/orman/çevre; sürdürülebilirlik/yeşil odağı; yaşam bilimlerinde önde; mezunlar yüksek istihdam."
      ],
      "requirements": [
        "Başvuru koşulları için resmi siteye bakın."
      ],
      "helpfulInfo": [
        "Adres: Gregor-Mendel-Straße 33, 1180 Vienna, Avusturya.",
        "Yeşil kampüs.",
        "İletişim: +43 1 47654-0; info@boku.ac.at."
      ],
      "tuition": "Standart ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yukarıdaki gibi (aylık ~€1.200–1.600).",
      "whyChoose": [
        "Tarım/orman/çevre",
        "sürdürülebilirlik/yeşil odağı",
        "yaşam bilimlerinde önde",
        "mezunlar yüksek istihdam"
      ]
    },
    "ru": {
      "shortDescription": "Сельское хозяйство/лесное хозяйство/окружающая среда; устойчивое развитие/зелёный фокус; ведущие позиции в науках о жизни; выпускники востребованы.",
      "overview": "Как выше (~€1 200–1 600/мес). Сельское хозяйство/лесное хозяйство/окружающая среда; устойчивое развитие/зелёный фокус; ведущие позиции в науках о жизни; выпускники востребованы.",
      "keyFacts": [
        "Стандартная ~€726,72/семестр + ÖH €25.",
        "Жизнь: ~€1 200–1 600/мес",
        "Сельское хозяйство/лесное хозяйство/окружающая среда; устойчивое развитие/зелёный фокус; ведущие позиции в науках о жизни; выпускники востребованы."
      ],
      "requirements": [
        "Условия приёма см. на официальном сайте."
      ],
      "helpfulInfo": [
        "Адрес: Gregor-Mendel-Straße 33, 1180 Vienna, Австрия.",
        "Зелёный кампус.",
        "Контакт: +43 1 47654-0; info@boku.ac.at."
      ],
      "tuition": "Стандартная ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 200–1 600/мес",
      "cityInfo": "Как выше (~€1 200–1 600/мес).",
      "whyChoose": [
        "Сельское хозяйство/лесное хозяйство/окружающая среда",
        "устойчивое развитие/зелёный фокус",
        "ведущие позиции в науках о жизни",
        "выпускники востребованы"
      ]
    }
  },
  "university-of-veterinary-medicine-vienna": {
    "en": {
      "shortDescription": "Animal health/veterinary specialist; research excellence.",
      "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Animal health/veterinary specialist; research excellence.",
      "keyFacts": [
        "Standard ~€726.72/semester + ÖH €25.",
        "Living: ~€1,200–1,600/month",
        "Animal health/veterinary specialist; research excellence."
      ],
      "requirements": [
        "Entrance exam."
      ],
      "helpfulInfo": [
        "Address: Veterinärplatz 1, 1210 Vienna, Austria.",
        "Specialized.",
        "Phone: +43 1 25077-0; Email: info@vetmeduni.ac.at."
      ],
      "tuition": "Standard ~€726.72/semester + ÖH €25.",
      "livingCosts": "€1,200–1,600/month",
      "cityInfo": "As above (~€1,200–1,600/month).",
      "whyChoose": [
        "Animal health/veterinary specialist",
        "research excellence"
      ]
    },
    "az": {
      "shortDescription": "Heyvan sağlamlığı/veterinar ixtisası; tədqiqat əlamətdarı.",
      "overview": "Yuxarıdakı kimi (~€1.200–1.600/ay). Heyvan sağlamlığı/veterinar ixtisası; tədqiqat əlamətdarı.",
      "keyFacts": [
        "Standart ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€1.200–1.600/ay",
        "Heyvan sağlamlığı/veterinar ixtisası; tədqiqat əlamətdarı."
      ],
      "requirements": [
        "Daxilolma imtahanı."
      ],
      "helpfulInfo": [
        "Ünvan: Veterinärplatz 1, 1210 Vienna, Avstriya.",
        "İxtisaslaşmış.",
        "Əlaqə: +43 1 25077-0; info@vetmeduni.ac.at."
      ],
      "tuition": "Standart ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yuxarıdakı kimi (~€1.200–1.600/ay).",
      "whyChoose": [
        "Heyvan sağlamlığı/veterinar ixtisası",
        "tədqiqat əlamətdarı"
      ]
    },
    "tr": {
      "shortDescription": "Hayvan sağlığı/veteriner uzmanlığı; araştırma mükemmelliği.",
      "overview": "Yukarıdaki gibi (aylık ~€1.200–1.600). Hayvan sağlığı/veteriner uzmanlığı; araştırma mükemmelliği.",
      "keyFacts": [
        "Standart ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€1.200–1.600",
        "Hayvan sağlığı/veteriner uzmanlığı; araştırma mükemmelliği."
      ],
      "requirements": [
        "Giriş sınavı."
      ],
      "helpfulInfo": [
        "Adres: Veterinärplatz 1, 1210 Vienna, Avusturya.",
        "Uzmanlaşmış.",
        "İletişim: +43 1 25077-0; info@vetmeduni.ac.at."
      ],
      "tuition": "Standart ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yukarıdaki gibi (aylık ~€1.200–1.600).",
      "whyChoose": [
        "Hayvan sağlığı/veteriner uzmanlığı",
        "araştırma mükemmelliği"
      ]
    },
    "ru": {
      "shortDescription": "Специализация: здоровье животных/ветеринария; высокий уровень исследований.",
      "overview": "Как выше (~€1 200–1 600/мес). Специализация: здоровье животных/ветеринария; высокий уровень исследований.",
      "keyFacts": [
        "Стандартная ~€726,72/семестр + ÖH €25.",
        "Жизнь: ~€1 200–1 600/мес",
        "Специализация: здоровье животных/ветеринария; высокий уровень исследований."
      ],
      "requirements": [
        "Вступительный экзамен."
      ],
      "helpfulInfo": [
        "Адрес: Veterinärplatz 1, 1210 Vienna, Австрия.",
        "Специализированный вуз.",
        "Контакт: +43 1 25077-0; info@vetmeduni.ac.at."
      ],
      "tuition": "Стандартная ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 200–1 600/мес",
      "cityInfo": "Как выше (~€1 200–1 600/мес).",
      "whyChoose": [
        "Специализация: здоровье животных/ветеринария",
        "высокий уровень исследований"
      ]
    }
  },
  "university-of-applied-arts-vienna": {
    "en": {
      "shortDescription": "Art, design, architecture; innovative; selective with portfolio focus.",
      "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Art, design, architecture; innovative; selective with portfolio focus.",
      "keyFacts": [
        "Standard/low ~€726.72/semester + ÖH €25.",
        "Living: ~€1,200–1,600/month",
        "Art, design, architecture; innovative; selective with portfolio focus."
      ],
      "requirements": [
        "Highly selective (auditions/portfolios)."
      ],
      "helpfulInfo": [
        "Address: Oskar-Kokoschka-Platz 2, 1010 Vienna, Austria.",
        "Prestigious creative education.",
        "Phone: +43 1 71133-0; Email: info@uni-ak.ac.at."
      ],
      "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
      "livingCosts": "€1,200–1,600/month",
      "cityInfo": "As above (~€1,200–1,600/month).",
      "whyChoose": [
        "Art, design, architecture",
        "selective with portfolio focus"
      ]
    },
    "az": {
      "shortDescription": "İncəsənət, dizayn, memarlıq; yenilikçi; portfoliolara əsaslanan seçici qəbul.",
      "overview": "Yuxarıdakı kimi (~€1.200–1.600/ay). İncəsənət, dizayn, memarlıq; yenilikçi; portfoliolara əsaslanan seçici qəbul.",
      "keyFacts": [
        "Standart/aşağı ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€1.200–1.600/ay",
        "İncəsənət, dizayn, memarlıq; yenilikçi; portfoliolara əsaslanan seçici qəbul."
      ],
      "requirements": [
        "Çox seçici (səsləndirmə/portfoliolar)."
      ],
      "helpfulInfo": [
        "Ünvan: Oskar-Kokoschka-Platz 2, 1010 Vienna, Avstriya.",
        "Prestijli yaradıcı təhsil.",
        "Əlaqə: +43 1 71133-0; info@uni-ak.ac.at."
      ],
      "tuition": "Standart/aşağı ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yuxarıdakı kimi (~€1.200–1.600/ay).",
      "whyChoose": [
        "İncəsənət, dizayn, memarlıq",
        "portfoliolara əsaslanan seçici qəbul"
      ]
    },
    "tr": {
      "shortDescription": "Sanat, tasarım, mimarlık; yenilikçi; portfolyo odaklı seçici.",
      "overview": "Yukarıdaki gibi (aylık ~€1.200–1.600). Sanat, tasarım, mimarlık; yenilikçi; portfolyo odaklı seçici.",
      "keyFacts": [
        "Standart/düşük ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€1.200–1.600",
        "Sanat, tasarım, mimarlık; yenilikçi; portfolyo odaklı seçici."
      ],
      "requirements": [
        "Çok seçici (seçmeler/portfolyolar)."
      ],
      "helpfulInfo": [
        "Adres: Oskar-Kokoschka-Platz 2, 1010 Vienna, Avusturya.",
        "Prestijli yaratıcı eğitim.",
        "İletişim: +43 1 71133-0; info@uni-ak.ac.at."
      ],
      "tuition": "Standart/düşük ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yukarıdaki gibi (aylık ~€1.200–1.600).",
      "whyChoose": [
        "Sanat, tasarım, mimarlık",
        "portfolyo odaklı seçici"
      ]
    },
    "ru": {
      "shortDescription": "Искусство, дизайн, архитектура; инновационный подход; отбор по портфолио.",
      "overview": "Как выше (~€1 200–1 600/мес). Искусство, дизайн, архитектура; инновационный подход; отбор по портфолио.",
      "keyFacts": [
        "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
        "Жизнь: ~€1 200–1 600/мес",
        "Искусство, дизайн, архитектура; инновационный подход; отбор по портфолио."
      ],
      "requirements": [
        "Высокий отбор (прослушивания/портфолио)."
      ],
      "helpfulInfo": [
        "Адрес: Oskar-Kokoschka-Platz 2, 1010 Vienna, Австрия.",
        "Престижное творческое образование.",
        "Контакт: +43 1 71133-0; info@uni-ak.ac.at."
      ],
      "tuition": "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 200–1 600/мес",
      "cityInfo": "Как выше (~€1 200–1 600/мес).",
      "whyChoose": [
        "Искусство, дизайн, архитектура",
        "отбор по портфолио"
      ]
    }
  },
  "university-of-music-and-performing-arts-vienna": {
    "en": {
      "shortDescription": "Music, theater, film; world-class performing arts.",
      "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Music, theater, film; world-class performing arts.",
      "keyFacts": [
        "Standard/low ~€726.72/semester + ÖH €25.",
        "Living: ~€1,200–1,600/month",
        "Music, theater, film; world-class performing arts."
      ],
      "requirements": [
        "Highly selective (auditions/portfolios)."
      ],
      "helpfulInfo": [
        "Address: Anton-von-Webern-Platz 1, 1030 Vienna, Austria.",
        "Renowned for music education.",
        "Phone: +43 1 71155-0; Email: info@mdw.ac.at."
      ],
      "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
      "livingCosts": "€1,200–1,600/month",
      "cityInfo": "As above (~€1,200–1,600/month).",
      "whyChoose": [
        "Music, theater, film",
        "world-class performing arts"
      ]
    },
    "az": {
      "shortDescription": "Musiqi, teatr, kino; dünya səviyyəli sənət təhsili.",
      "overview": "Yuxarıdakı kimi (~€1.200–1.600/ay). Musiqi, teatr, kino; dünya səviyyəli sənət təhsili.",
      "keyFacts": [
        "Standart/aşağı ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€1.200–1.600/ay",
        "Musiqi, teatr, kino; dünya səviyyəli sənət təhsili."
      ],
      "requirements": [
        "Çox seçici (səsləndirmə/portfoliolar)."
      ],
      "helpfulInfo": [
        "Ünvan: Anton-von-Webern-Platz 1, 1030 Vienna, Avstriya.",
        "Musiqi təhsili ilə məşhurdur.",
        "Əlaqə: +43 1 71155-0; info@mdw.ac.at."
      ],
      "tuition": "Standart/aşağı ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yuxarıdakı kimi (~€1.200–1.600/ay).",
      "whyChoose": [
        "Musiqi, teatr, kino",
        "dünya səviyyəli sənət təhsili"
      ]
    },
    "tr": {
      "shortDescription": "Müzik, tiyatro, film; dünya standartında sahne sanatları.",
      "overview": "Yukarıdaki gibi (aylık ~€1.200–1.600). Müzik, tiyatro, film; dünya standartında sahne sanatları.",
      "keyFacts": [
        "Standart/düşük ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€1.200–1.600",
        "Müzik, tiyatro, film; dünya standartında sahne sanatları."
      ],
      "requirements": [
        "Çok seçici (seçmeler/portfolyolar)."
      ],
      "helpfulInfo": [
        "Adres: Anton-von-Webern-Platz 1, 1030 Vienna, Avusturya.",
        "Müzik eğitimiyle ünlü.",
        "İletişim: +43 1 71155-0; info@mdw.ac.at."
      ],
      "tuition": "Standart/düşük ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yukarıdaki gibi (aylık ~€1.200–1.600).",
      "whyChoose": [
        "Müzik, tiyatro, film",
        "dünya standartında sahne sanatları"
      ]
    },
    "ru": {
      "shortDescription": "Музыка, театр, кино; исполнительские искусства мирового уровня.",
      "overview": "Как выше (~€1 200–1 600/мес). Музыка, театр, кино; исполнительские искусства мирового уровня.",
      "keyFacts": [
        "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
        "Жизнь: ~€1 200–1 600/мес",
        "Музыка, театр, кино; исполнительские искусства мирового уровня."
      ],
      "requirements": [
        "Высокий отбор (прослушивания/портфолио)."
      ],
      "helpfulInfo": [
        "Адрес: Anton-von-Webern-Platz 1, 1030 Vienna, Австрия.",
        "Известна музыкальным образованием.",
        "Контакт: +43 1 71155-0; info@mdw.ac.at."
      ],
      "tuition": "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 200–1 600/мес",
      "cityInfo": "Как выше (~€1 200–1 600/мес).",
      "whyChoose": [
        "Музыка, театр, кино",
        "исполнительские искусства мирового уровня"
      ]
    }
  },
  "academy-of-fine-arts-vienna": {
    "en": {
      "shortDescription": "Fine arts and visual studies; innovative approach; ranked ~top 5000 globally.",
      "overview": "As above (~€1,200–1,600/month). Why Choose This University?: Fine arts and visual studies; innovative approach; ranked ~top 5000 globally.",
      "keyFacts": [
        "Standard/low ~€726.72/semester + ÖH €25.",
        "Living: ~€1,200–1,600/month",
        "Fine arts and visual studies; innovative approach; ranked ~top 5000 globally."
      ],
      "requirements": [
        "Highly selective (auditions/portfolios)."
      ],
      "helpfulInfo": [
        "Address: Schillerplatz 3, 1010 Vienna, Austria.",
        "Focus on creativity/interdisciplinary.",
        "Phone: +43 1 58816-0; Email: info@akbild.ac.at."
      ],
      "tuition": "Standard/low ~€726.72/semester + ÖH €25.",
      "livingCosts": "€1,200–1,600/month",
      "cityInfo": "As above (~€1,200–1,600/month).",
      "whyChoose": [
        "Fine arts and visual studies",
        "innovative approach",
        "ranked ~top 5000 globally"
      ]
    },
    "az": {
      "shortDescription": "Gözel incəsənət və vizual tədqiqatlar; yenilikçi yanaşma; dünya reytinqlərində ~top 5000.",
      "overview": "Yuxarıdakı kimi (~€1.200–1.600/ay). Gözel incəsənət və vizual tədqiqatlar; yenilikçi yanaşma; dünya reytinqlərində ~top 5000.",
      "keyFacts": [
        "Standart/aşağı ~€726,72/semestr + ÖH €25.",
        "Yaşayış: ~€1.200–1.600/ay",
        "Gözel incəsənət və vizual tədqiqatlar; yenilikçi yanaşma; dünya reytinqlərində ~top 5000."
      ],
      "requirements": [
        "Çox seçici (səsləndirmə/portfoliolar)."
      ],
      "helpfulInfo": [
        "Ünvan: Schillerplatz 3, 1010 Vienna, Avstriya.",
        "Yaradıcılıq/interdisiplinar fokus.",
        "Əlaqə: +43 1 58816-0; info@akbild.ac.at."
      ],
      "tuition": "Standart/aşağı ~€726,72/semestr + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yuxarıdakı kimi (~€1.200–1.600/ay).",
      "whyChoose": [
        "Gözel incəsənət və vizual tədqiqatlar",
        "yenilikçi yanaşma",
        "dünya reytinqlərində ~top 5000"
      ]
    },
    "tr": {
      "shortDescription": "Güzel sanatlar ve görsel çalışmalar; yenilikçi yaklaşım; küresel ~top 5000 sıralaması.",
      "overview": "Yukarıdaki gibi (aylık ~€1.200–1.600). Güzel sanatlar ve görsel çalışmalar; yenilikçi yaklaşım; küresel ~top 5000 sıralaması.",
      "keyFacts": [
        "Standart/düşük ~€726,72/dönem + ÖH €25.",
        "Yaşam: aylık ~€1.200–1.600",
        "Güzel sanatlar ve görsel çalışmalar; yenilikçi yaklaşım; küresel ~top 5000 sıralaması."
      ],
      "requirements": [
        "Çok seçici (seçmeler/portfolyolar)."
      ],
      "helpfulInfo": [
        "Adres: Schillerplatz 3, 1010 Vienna, Avusturya.",
        "Yaratıcılık/disiplinler arası odağı.",
        "İletişim: +43 1 58816-0; info@akbild.ac.at."
      ],
      "tuition": "Standart/düşük ~€726,72/dönem + ÖH €25.",
      "livingCosts": "€1.200–1.600/ay",
      "cityInfo": "Yukarıdaki gibi (aylık ~€1.200–1.600).",
      "whyChoose": [
        "Güzel sanatlar ve görsel çalışmalar",
        "yenilikçi yaklaşım",
        "küresel ~top 5000 sıralaması"
      ]
    },
    "ru": {
      "shortDescription": "Изобразительное искусство и визуальные исследования; инновационный подход; в мировом рейтинге ~top 5000.",
      "overview": "Как выше (~€1 200–1 600/мес). Изобразительное искусство и визуальные исследования; инновационный подход; в мировом рейтинге ~top 5000.",
      "keyFacts": [
        "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
        "Жизнь: ~€1 200–1 600/мес",
        "Изобразительное искусство и визуальные исследования; инновационный подход; в мировом рейтинге ~top 5000."
      ],
      "requirements": [
        "Высокий отбор (прослушивания/портфолио)."
      ],
      "helpfulInfo": [
        "Адрес: Schillerplatz 3, 1010 Vienna, Австрия.",
        "Фокус на творчестве и междисциплинарности.",
        "Контакт: +43 1 58816-0; info@akbild.ac.at."
      ],
      "tuition": "Стандартная/низкая ~€726,72/семестр + ÖH €25.",
      "livingCosts": "€1 200–1 600/мес",
      "cityInfo": "Как выше (~€1 200–1 600/мес).",
      "whyChoose": [
        "Изобразительное искусство и визуальные исследования",
        "инновационный подход",
        "в мировом рейтинге ~top 5000"
      ]
    }
  },
  "rwth-aachen-university": {
    "en": {
      "shortDescription": "One of Germany's top technical universities (TU9 member, Excellence University), ~47,000 students (high international share), ranked top in engineering/sciences globally (~top 100–150 QS/THE). Renowned for engineering (mechanical, electrical, automotive, materials), computer science, physics, and interdisciplinary r...",
      "overview": "A historic border city in western Germany (~250,000 people), right at the triangle with Belgium and Netherlands. Known as \"City of Emperors\" (Charlemagne's capital), with stunning Aachen Cathedral (UNESCO World Heritage), medieval old town, thermal springs (Carolinus Thermen), and modern vibe. Lively student scene (~50,000 students across unis), international (many from Benelux), green parks/hiking in nearby Eifel hills, famous Christmas market, and easy travel (high-speed trains to Cologne/Brussels). Relaxed yet energetic, affordable compared to big cities, with strong tech/engineering culture (close to industry hubs like Jülich research center). Why Choose This University?: One of Germany's top technical universities (TU9 member, Excellence University), ~47,000 students (high international share), ranked top in engineering/sciences globally (~top 100–150 QS/THE). Renowned for engineering (mechanical, electrical, automotive, materials), computer science, physics, and interdisciplinary research (e.g., Industry 4.0, sustainable tech). Strong industry ties (nearby clusters in automotive, energy), no tuition fees (public uni), modern facilities/labs, and Aachen's central European location for cross-border opportunities. Ideal for STEM-focused students wanting practical, research-driven education in a welcoming, historic-yet-innovative city.",
      "keyFacts": [
        "One of Germany's top technical universities (TU9 member, Excellence University), ~47,000 students (high international sh…"
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
      "cityInfo": "A historic border city in western Germany (~250,000 people), right at the triangle with Belgium and Netherlands. Known as \"City of Emperors\" (Charlemagne's capital), with stunning Aachen Cathedral (UNESCO World Heritage), medieval old town, thermal springs (Carolinus Thermen), and modern vibe. Lively student scene (~50,000 students across unis), international (many from Benelux), green parks/hiking in nearby Eifel hills, famous Christmas market, and easy travel (high-speed trains to Cologne/Brussels).",
      "whyChoose": [
        "One of Germany's top technical universities (TU9 member, Excellence University), ~47,000 students (high international share), ranked top in engineering/sciences globally (~top 100–150 QS/THE)",
        "Renowned for engineering (mechanical, electrical, automotive, materials), computer science, physics, and interdisciplinary research (e",
        "0, sustainable tech)",
        "Strong industry ties (nearby clusters in automotive, energy), no tuition fees (public uni), modern facilities/labs, and Aachen's central European location for cross-border opportunities",
        "Ideal for STEM-focused students wanting practical, research-driven education in a welcoming, historic-yet-innovative city"
      ]
    },
    "az": {
      "shortDescription": "Almaniyanın ən yaxşı texniki universitetlərindən biri (TU9, Excellence); ~47.000 tələbə; mühəndislik/elm üzrə dünya reytinqlərində yüksək (~QS/THE 100–150). Maşınqayırma, elektrik, avtomobil, materiallar, informatika, fizika və interdisiplinar tədqiqat.",
      "overview": "Qərbi Almaniyada tarixi sərhəd şəhəri (~250.000), Belçika və Niderlandla üçbucaqda. «İmperatorlar şəhəri» (Şarlmanın paytaxtı), Axen kafedralı (UNESCO), orta əsər köhnə şəhər, termal bulaqlar, canlı tələbə mühiti (~50.000), Eifel təbiəti, sərbəst səyahət (Köln/Brüssel). TU9/Excellence; mühəndislik, informatika, fizika güclü; sənaye əlaqələri; ödənişsiz; Axenin Mərkəzi Avropa yerləşməsi.",
      "keyFacts": [
        "Almaniyanın ən yaxşı texniki universitetlərindən biri (TU9, Excellence), ~47.000 tələbə (yüksək beynəlxalq pay), mühəndislik/elm üzrə dünya reytinqlərində yüksək (~QS/THE 100–150)."
      ],
      "requirements": [
        "Tanınmış attestat (məktəb/bakalavr ekvivalenti, çoxları üçün uni-assist VPD).",
        "İngilisdilli proqramlar üçün IELTS 6.5+/TOEFL 90+ (UK/ABŞ və s. diplomları istisnadır).",
        "Bəzən motivasyon məktubu/CV; məhdud proqramlar üçün uyğunluq testi/ballar.",
        "RWTHonline portal vasitəsilə müraciət (beynəlxalq: çox vaxt uni-assist). Qeyri-AB/EAA açıq magistr: 1 mart (qış), 1 sentyabr (yay); məhdudlar üçün daha erkən.",
        "Ödəniş yoxdur; semestr haqqı ~€300–350 (NRW nəqliyyat daxil). Qeyri-AB: viza üçün €11.904/il vəsait sübutu (bloklanmış hesab)."
      ],
      "helpfulInfo": [
        "Ünvan: Templergraben 55, 52062 Aachen, Almaniya (tarixi kampus mərkəzdə; Melaten/Horbachda müasir binalar). Beynəlxalq ofis: SuperC, Templergraben 57.",
        "Əlaqə: +49 241 80-1; international@rwth-aachen.de və ya studienberatung@rwth-aachen.de. Beynəlxalq qəbul: rwth-aachen.de/go/id/rcx."
      ],
      "cityInfo": "Qərbi Almaniyada tarixi sərhəd şəhəri (~250.000), Belçika və Niderlandla üçbucaqda. «İmperatorlar şəhəri», Axen kafedralı (UNESCO), orta əsər köhnə şəhər, termal bulaqlar. Canlı tələbə mühiti (~50.000), Eifel təbiəti, məşhur yeni il bazarı, sürətli qatarlar (Köln/Brüssel).",
      "whyChoose": [
        "Almaniyanın ən yaxşı texniki universitetlərindən biri (TU9, Excellence), ~47.000 tələbə, mühəndislik/elm üzrə dünya reytinqlərində yüksək (~QS/THE 100–150)",
        "Mühəndislik (mexanika, elektrik, avtomobil, materiallar), informatika, fizika və interdisiplinar tədqiqat (məs. Sənaye 4.0, davamlı texnologiya) ilə tanınır",
        "Güclü sənaye əlaqələri (avtomobil, enerji), ödənişsiz (dövlət), müasir laboratoriyalar; Axenin Mərkəzi Avropa yerləşməsi",
        "STEM üzrə tələbələr üçün praktiki, tədqiqat əsaslı təhsil; qonaqpərvər, tarixi-yenilikçi şəhər"
      ]
    },
    "tr": {
      "shortDescription": "Almanya'nın en iyi teknik üniversitelerinden biri (TU9 üyesi, Mükemmellik Üniversitesi), ~47.000 öğrenci (yüksek uluslararası oran), mühendislik/fen alanında küresel üst sıralarda (~QS/THE 100–150). Makine, elektrik, otomotiv, malzeme, bilgisayar bilimi, fizik ve disiplinler arası araştırma.",
      "overview": "Batı Almanya'da tarihi sınır kenti (~250.000), Belçika ve Hollanda ile üçgen noktada. «İmparatorlar şehri» (Şarlman'ın başkenti), Aachen Katedrali (UNESCO), ortaçağ kent, termal kaynaklar; canlı öğrenci ortamı (~50.000), Eifel doğası, ünlü Noel pazarı, hızlı trenler (Köln/Brüksel). TU9/Mükemmellik; mühendislik, bilgisayar bilimi, fizik güçlü; sanayi bağlantıları; ücretsiz; Aachen'in Orta Avrupa konumu.",
      "keyFacts": [
        "Almanya'nın en iyi teknik üniversitelerinden biri (TU9, Mükemmellik), ~47.000 öğrenci (yüksek uluslararası oran), mühendislik/fen alanında küresel üst sıralarda (~QS/THE 100–150)."
      ],
      "requirements": [
        "Tanınmış diploma (lise/lisans denkliği, çoğu için uni-assist VPD).",
        "İngilizce programlar için IELTS 6.5+/TOEFL 90+ (UK/ABD vb. diplomalar muaf).",
        "Bazen motivasyon mektubu/CV; kısıtlı programlar için yetenek testi/puan.",
        "RWTHonline portal üzerinden başvuru (uluslararası: çoğunlukla uni-assist). AB dışı açık yüksek lisans: 1 Mart (kış), 1 Eylül (yaz); kısıtlılar için daha erken.",
        "Öğrenim ücreti yok; dönem katkısı ~€300–350 (NRW ulaşım dahil). AB dışı: vize için €11.904/yıl geçim belgesi (bloke hesap)."
      ],
      "helpfulInfo": [
        "Adres: Templergraben 55, 52062 Aachen, Almanya (tarihi kampüs merkezde; Melaten/Horbach'ta modern binalar). Uluslararası ofis: SuperC, Templergraben 57.",
        "İletişim: +49 241 80-1; international@rwth-aachen.de veya studienberatung@rwth-aachen.de. Uluslararası başvuru: rwth-aachen.de/go/id/rcx."
      ],
      "cityInfo": "Batı Almanya'da tarihi sınır kenti (~250.000), Belçika ve Hollanda ile üçgen noktada. «İmparatorlar şehri», Aachen Katedrali (UNESCO), ortaçağ kent, termal kaynaklar. Canlı öğrenci ortamı (~50.000), Eifel doğası, ünlü Noel pazarı, hızlı trenler (Köln/Brüksel).",
      "whyChoose": [
        "Almanya'nın en iyi teknik üniversitelerinden biri (TU9, Mükemmellik), ~47.000 öğrenci, mühendislik/fen alanında küresel üst sıralarda (~QS/THE 100–150)",
        "Mühendislik (makine, elektrik, otomotiv, malzeme), bilgisayar bilimi, fizik ve disiplinler arası araştırma (örn. Endüstri 4.0, sürdürülebilir teknoloji) ile ünlü",
        "Güçlü sanayi bağlantıları (otomotiv, enerji), ücretsiz (kamu), modern tesisler; Aachen'in Orta Avrupa konumu",
        "STEM odaklı öğrenciler için pratik, araştırma odaklı eğitim; misafirperver, tarihi-yenilikçi kent"
      ]
    },
    "ru": {
      "shortDescription": "Один из ведущих технических вузов Германии (TU9, университет совершенства), ~47 000 студентов (высокая доля иностранных), топ в инженерии/науках в мире (~QS/THE 100–150). Известен инженерией (механика, электротехника, авто, материалы), информатикой, физикой и междисциплинарными исследованиями.",
      "overview": "Исторический приграничный город в западной Германии (~250 000), на стыке с Бельгией и Нидерландами. «Город императоров» (столица Карла Великого), Ахенский собор (ЮНЕСКО), средневековый центр, термальные источники; оживлённая студенческая среда (~50 000), природа Айфеля, знаменитая рождественская ярмарка, скоростные поезда (Кёльн/Брюссель). TU9/университет совершенства; сильные инженерия, информатика, физика; связи с индустрией; бесплатное обучение; центральноевропейское расположение Ахена.",
      "keyFacts": [
        "Один из ведущих технических вузов Германии (TU9, университет совершенства), ~47 000 студентов (высокая доля иностранных), топ в инженерии/науках в мире (~QS/THE 100–150)."
      ],
      "requirements": [
        "Признанный аттестат (школа/бакалавриат через uni-assist VPD для многих).",
        "Для программ на английском: IELTS 6.5+/TOEFL 90+ (дипломы UK/US и т.д. освобождают).",
        "Иногда мотивационное письмо/CV; тесты/баллы для программ с ограничением.",
        "Подача через портал RWTHonline (иностранцы: часто uni-assist). Для граждан не из ЕС: открытая магистратура 1 марта (зима), 1 сентября (лето); для ограниченных раньше.",
        "Обучение бесплатное; семестровый взнос ~€300–350 (включает проезд по NRW). Не из ЕС: подтверждение средств €11 904/год (блокированный счёт) для визы."
      ],
      "helpfulInfo": [
        "Адрес: Templergraben 55, 52062 Aachen, Германия (исторический кампус в центре; современные корпуса в Melaten/Horbach). Международный офис: SuperC, Templergraben 57.",
        "Контакт: +49 241 80-1; international@rwth-aachen.de или studienberatung@rwth-aachen.de. Международная приёмная: rwth-aachen.de/go/id/rcx."
      ],
      "cityInfo": "Исторический приграничный город в западной Германии (~250 000), на стыке с Бельгией и Нидерландами. «Город императоров», Ахенский собор (ЮНЕСКО), средневековый центр, термальные источники. Оживлённая студенческая среда (~50 000), природа Айфеля, рождественская ярмарка, скоростные поезда (Кёльн/Брюссель).",
      "whyChoose": [
        "Один из ведущих технических вузов Германии (TU9, университет совершенства), ~47 000 студентов, топ в инженерии/науках в мире (~QS/THE 100–150)",
        "Известен инженерией (механика, электротехника, авто, материалы), информатикой, физикой и междисциплинарными исследованиями (напр. Индустрия 4.0, устойчивые технологии)",
        "Тесные связи с индустрией (авто, энергетика), бесплатное обучение (гос. вуз), современные лаборатории; центральноевропейское расположение Ахена",
        "Идеально для STEM-ориентированных студентов: практическое, исследовательское образование в гостеприимном историческом и инновационном городе"
      ]
    }
  },
  "freie-universitaet-berlin": {
    "en": {
      "shortDescription": "Founded 1948 in West Berlin (with U.S. support during Cold War), it's one of Germany's top research universities (Excellence Initiative/Cluster status), highly international (~20% foreign students from 130+ countries), strong global outlook (part of Berlin University Alliance).",
      "overview": "Germany's capital and one of Europe's most dynamic, international cities (~3.8 million people). Iconic landmarks (Brandenburg Gate, Berlin Wall remnants, Reichstag), world-class museums (Museum Island UNESCO site, Pergamon), diverse neighborhoods (Kreuzberg for street art/alternative scene, Prenzlauer Berg for cafes/family vibe, Mitte for history/nightlife), legendary clubs (Berghain), festivals (Berlinale film, Carnival of Cultures), parks (Tiergarten), and endless cultural events. Extremely international (~20% foreign students), English widely spoken in student/academic circles, vibrant startup/tech/creative scene, excellent public transport (U-Bahn/S-Bahn), bike-friendly. Safe, progressive, with rich history and endless opportunities—but higher living costs than smaller German cities. Why Choose This University?: Founded 1948 in West Berlin (with U.S. support during Cold War), it's one of Germany's top research universities (Excellence Initiative/Cluster status), highly international (~20% foreign students from 130+ countries), strong global outlook (part of Berlin University Alliance). Ranked top in Germany for humanities/social sciences, sciences, and international reputation. Large campus (Dahlem: green, historic buildings), excellent libraries (e.g., Philological Library), research facilities. No tuition fees (public uni), vibrant Berlin location for internships/jobs (tech, NGOs, media), and strong support for internationals (orientation, language courses). Ideal for h",
      "keyFacts": [
        "Founded 1948 in West Berlin (with U.S. support during Cold War), it's one of Germany's top research universities (Excell…"
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
      "cityInfo": "Germany's capital and one of Europe's most dynamic, international cities (~3.8 million people). Iconic landmarks (Brandenburg Gate, Berlin Wall remnants, Reichstag), world-class museums (Museum Island UNESCO site, Pergamon), diverse neighborhoods (Kreuzberg for street art/alternative scene, Prenzlauer Berg for cafes/family vibe, Mitte for history/nightlife), legendary clubs (Berghain), festivals (Berlinale film, Carnival of Cultures), parks (Tiergarten), and endless cultural events.",
      "whyChoose": [
        "Founded 1948 in West Berlin (with U",
        "support during Cold War), it's one of Germany's top research universities (Excellence Initiative/Cluster status), highly international (~20% foreign students from 130+ countries), strong global outlook (part of Berlin University Alliance)",
        "Ranked top in Germany for humanities/social sciences, sciences, and international reputation",
        "Large campus (Dahlem: green, historic buildings), excellent libraries (e",
        ", Philological Library), research facilities"
      ]
    },
    "az": {
      "shortDescription": "1948-də Qərbi Berlində qurulub (Soyuq müharibə dövründə ABŞ dəstəyi); Almaniyanın ən yaxşı tədqiqat universitetlərindən biri (Excellence/Cluster); çox beynəlxalq (~20% xarici tələbə, 130+ ölkə); Berlin Universitet Alyansının tərkib hissəsi.",
      "overview": "Almaniyanın paytaxtı və Avropanın ən dinamik, beynəlxalq şəhərlərindən biri (~3,8 milyon). Brandenburg qapısı, Berlin divarı, Reyxstaq; Muzey adası (UNESCO), Pergamon; Kreuzberg, Prenzlauer Berg, Mitte; Berghain, Berlinale, Tiergarten. Çox beynəlxalq (~20% xarici tələbə), startap/texnologiya mühiti, U-Bahn/S-Bahn. 1948-də qurulub; Excellence/Cluster; humanitar, sosial və təbiət elmləri, beynəlxalq nüfuzda Almaniyada üst sıralarda; Dahlem kampusu, kitabxanalar; ödənişsiz; Berlin stajlar/iş üçün ideal.",
      "keyFacts": [
        "1948-də Qərbi Berlində qurulub (ABŞ dəstəyi); Almaniyanın ən yaxşı tədqiqat universitetlərindən biri (Excellence/Cluster); ~20% xarici tələbə (130+ ölkə); Berlin Universitet Alyansı."
      ],
      "requirements": [
        "Tanınmış məktəb attestatı (bakalavr) və ya bakalavr (magistr) — uni-assist VPD (~€75–200).",
        "İngilisdilli proqramlar üçün IELTS 6.5+/TOEFL 90+.",
        "Motivasyon məktubu, CV; magistr üçün bəzən məktub/müsahibə.",
        "uni-assist və ya birbaşa portal; qış (oktyabr): çox vaxt may–iyul; yay (aprel): yanvar–mart; magistr tez-tez 1 dek–15 yanvar.",
        "Ödəniş yoxdur; semestr ~€300–400 (nəqliyyat daxil). Qeyri-AB: viza üçün ~€11.904/il (bloklanmış hesab)."
      ],
      "helpfulInfo": [
        "Ünvan: Kaiserswerther Str. 16-18, 14195 Berlin, Almaniya (Dahlem kampusu, cənub-qərb). Qəbul: Iltisstr. 1 & 4, 14195 Berlin.",
        "Əlaqə: +49 30 838-70000; info-service@fu-berlin.de; studienberatung@fu-berlin.de. Beynəlxalq: +49 30 838-70000."
      ],
      "cityInfo": "Almaniyanın paytaxtı və Avropanın ən dinamik, beynəlxalq şəhərlərindən biri (~3,8 milyon). Brandenburg qapısı, Berlin divarı, Reyxstaq; Muzey adası (UNESCO), Pergamon; Kreuzberg, Prenzlauer Berg, Mitte; Berghain, Berlinale, Tiergarten.",
      "whyChoose": [
        "1948-də Qərbi Berlində qurulub (Soyuq müharibə dövründə ABŞ dəstəyi); Almaniyanın ən yaxşı tədqiqat universitetlərindən biri (Excellence/Cluster); ~20% xarici (130+ ölkə); Berlin Universitet Alyansı",
        "Almaniyada humanitar/sosial elmlər, elm və beynəlxalq nüfuzda üst sıralarda",
        "Böyük kampus (Dahlem: yaşıl, tarixi binalar), əla kitabxanalar (məs. Filologiya), tədqiqat imkanları"
      ]
    },
    "tr": {
      "shortDescription": "1948'de Batı Berlin'de kuruldu (Soğuk Savaş'ta ABD desteği); Almanya'nın en iyi araştırma üniversitelerinden biri (Mükemmellik/Küme); çok uluslararası (~%20 yabancı öğrenci, 130+ ülke); Berlin Üniversite İttifakı üyesi.",
      "overview": "Almanya'nın başkenti ve Avrupa'nın en dinamik, uluslararası kentlerinden biri (~3,8 milyon). Brandenburg Kapısı, Berlin Duvarı, Reichstag; Müze Adası (UNESCO), Pergamon; Kreuzberg, Prenzlauer Berg, Mitte; Berghain, Berlinale, Tiergarten. Çok uluslararası (~%20 yabancı), start-up/teknoloji ortamı, U-Bahn/S-Bahn. 1948'de kuruldu; Mükemmellik/Küme; beşeri/sosyal bilimler, fen ve uluslararası itibar açısından Almanya'da üst sıralarda; Dahlem kampüsü, kütüphaneler; ücretsiz; Berlin staj/iş için ideal.",
      "keyFacts": [
        "1948'de Batı Berlin'de kuruldu (ABD desteği); Almanya'nın en iyi araştırma üniversitelerinden biri (Mükemmellik/Küme); ~%20 yabancı (130+ ülke); Berlin Üniversite İttifakı."
      ],
      "requirements": [
        "Tanınmış lise diploması (lisans) veya lisans (yüksek lisans) — uni-assist VPD (~€75–200).",
        "İngilizce programlar için IELTS 6.5+/TOEFL 90+.",
        "Motivasyon mektubu, CV; yüksek lisans için bazen referans/mülakat.",
        "uni-assist veya doğrudan portal; kış (Ekim): çoğunlukla Mayıs–Temmuz; yaz (Nisan): Oca–Mart; yüksek lisans sıklıkla 1 Ara–15 Oca.",
        "Öğrenim yok; dönem katkısı ~€300–400 (ulaşım dahil). AB dışı: vize için ~€11.904/yıl (bloke hesap)."
      ],
      "helpfulInfo": [
        "Adres: Kaiserswerther Str. 16-18, 14195 Berlin, Almanya (Dahlem kampüsü, güneybatı). Kayıt: Iltisstr. 1 & 4, 14195 Berlin.",
        "İletişim: +49 30 838-70000; info-service@fu-berlin.de; studienberatung@fu-berlin.de. Uluslararası: +49 30 838-70000."
      ],
      "cityInfo": "Almanya'nın başkenti ve Avrupa'nın en dinamik, uluslararası kentlerinden biri (~3,8 milyon). Brandenburg Kapısı, Berlin Duvarı, Reichstag; Müze Adası (UNESCO), Pergamon; Kreuzberg, Prenzlauer Berg, Mitte; Berghain, Berlinale, Tiergarten.",
      "whyChoose": [
        "1948'de Batı Berlin'de kuruldu (Soğuk Savaş'ta ABD desteği); Almanya'nın en iyi araştırma üniversitelerinden biri (Mükemmellik/Küme); ~%20 yabancı (130+ ülke); Berlin Üniversite İttifakı",
        "Almanya'da beşeri/sosyal bilimler, fen ve uluslararası itibar açısından üst sıralarda",
        "Geniş kampüs (Dahlem: yeşil, tarihi binalar), mükemmel kütüphaneler (örn. Filoloji), araştırma olanakları"
      ]
    },
    "ru": {
      "shortDescription": "Основан в 1948 в Западном Берлине (при поддержке США в период холодной войны); один из ведущих исследовательских вузов Германии (инициатива совершенства/кластер); очень интернациональный (~20% иностранных студентов из 130+ стран); часть альянса университетов Берлина.",
      "overview": "Столица Германии и один из самых динамичных международных городов Европы (~3,8 млн). Бранденбургские ворота, остатки стены, Рейхстаг; Музейный остров (ЮНЕСКО), Пергамон; Кройцберг, Пренцлауэр-Берг, Митте; Berghain, Берлинале, Тиргартен. Очень интернационально (~20% иностранных), стартап-/IT-среда, U-Bahn/S-Bahn. Основан в 1948; инициатива совершенства/кластер; гуманитарные, общественные и естественные науки, международная репутация — в верхних строчках Германии; кампус Далем, библиотеки; бесплатное обучение; Берлин идеален для стажировок и карьеры.",
      "keyFacts": [
        "Основан в 1948 в Западном Берлине (при поддержке США); один из ведущих исследовательских вузов Германии (инициатива совершенства/кластер); ~20% иностранных (130+ стран); альянс университетов Берлина."
      ],
      "requirements": [
        "Признанный аттестат (бакалавриат) или диплом бакалавра (магистратура) — через uni-assist VPD (~€75–200).",
        "Для программ на английском: IELTS 6.5+/TOEFL 90+.",
        "Мотивационное письмо, CV; для магистратуры иногда рекомендации/собеседование.",
        "Подача через uni-assist или портал; зимний семестр (октябрь): часто май–июль; летний (апрель): янв–март; магистратура часто 1 дек–15 янв.",
        "Обучение бесплатное; семестровый взнос ~€300–400 (проезд включён). Не из ЕС: подтверждение средств ~€11 904/год (блокированный счёт) для визы."
      ],
      "helpfulInfo": [
        "Адрес: Kaiserswerther Str. 16-18, 14195 Berlin, Германия (кампус Далем, юго-запад). Приём: Iltisstr. 1 & 4, 14195 Berlin.",
        "Контакт: +49 30 838-70000; info-service@fu-berlin.de; studienberatung@fu-berlin.de. Международные: +49 30 838-70000."
      ],
      "cityInfo": "Столица Германии и один из самых динамичных международных городов Европы (~3,8 млн). Бранденбургские ворота, остатки стены, Рейхстаг; Музейный остров (ЮНЕСКО), Пергамон; Кройцберг, Пренцлауэр-Берг, Митте; Berghain, Берлинале, Тиргартен.",
      "whyChoose": [
        "Основан в 1948 в Западном Берлине (при поддержке США в холодную войну); один из ведущих исследовательских вузов Германии (инициатива совершенства/кластер); ~20% иностранных (130+ стран); альянс университетов Берлина",
        "В Германии в верхних строчках по гуманитарным/общественным наукам, естественным наукам и международной репутации",
        "Большой кампус (Далем: зелёный, исторические здания), отличные библиотеки (напр. Филологическая), исследовательская база"
      ]
    }
  },
  "technische-universitaet-berlin": {
    "en": {
      "shortDescription": "One of Germany's leading technical universities (TU9 member, University of Excellence), ~35,000 students (diverse/international), strong industry ties (startups, Siemens, BMW, tech hubs). Unique for a tech uni: combines engineering/tech with planning sciences, economics, social sciences, humanities.",
      "overview": "Germany's capital and one of Europe's most exciting, international cities (~3.8 million people). Iconic landmarks (Brandenburg Gate, Berlin Wall remnants, Reichstag), world-class museums (Museum Island UNESCO site), diverse neighborhoods (Kreuzberg for street art/alternative scene, Prenzlauer Berg for cafes, Mitte for history/nightlife), legendary clubs (Berghain), festivals (Berlinale film, Carnival of Cultures), parks (Tiergarten), and endless cultural events. Extremely international (~20–30% foreign students at TU Berlin), English widely spoken in student/academic circles, vibrant startup/tech/creative scene, excellent public transport (U-Bahn/S-Bahn), bike-friendly. Safe, progressive, with rich history and endless opportunities—but higher living costs than smaller cities. Why Choose This University?: One of Germany's leading technical universities (TU9 member, University of Excellence), ~35,000 students (diverse/international), strong industry ties (startups, Siemens, BMW, tech hubs). Unique for a tech uni: combines engineering/tech with planning sciences, economics, social sciences, humanities. Top in mechanical/electrical engineering, computer science, urban planning, sustainability. No tuition fees (public uni), vibrant Berlin location for internships/jobs (tech/media/NGOs), excellent facilities/research. Ideal for STEM/engineering with practical focus, innovative programs, and Berlin's dynamic energy—great career prospects in Europe.",
      "keyFacts": [
        "One of Germany's leading technical universities (TU9 member, University of Excellence), ~35,000 students (diverse/intern…"
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
      "cityInfo": "Germany's capital and one of Europe's most exciting, international cities (~3.8 million people). Iconic landmarks (Brandenburg Gate, Berlin Wall remnants, Reichstag), world-class museums (Museum Island UNESCO site), diverse neighborhoods (Kreuzberg for street art/alternative scene, Prenzlauer Berg for cafes, Mitte for history/nightlife), legendary clubs (Berghain), festivals (Berlinale film, Carnival of Cultures), parks (Tiergarten), and endless cultural events.",
      "whyChoose": [
        "One of Germany's leading technical universities (TU9 member, University of Excellence), ~35,000 students (diverse/international), strong industry ties (startups, Siemens, BMW, tech hubs)",
        "Unique for a tech uni: combines engineering/tech with planning sciences, economics, social sciences, humanities",
        "Top in mechanical/electrical engineering, computer science, urban planning, sustainability",
        "No tuition fees (public uni), vibrant Berlin location for internships/jobs (tech/media/NGOs), excellent facilities/research",
        "Ideal for STEM/engineering with practical focus, innovative programs, and Berlin's dynamic energy—great career prospects in Europe"
      ]
    },
    "az": {
      "shortDescription": "Almaniyanın aparıcı texniki universitetlərindən biri (TU9, Mükəmməllik); ~35.000 tələbə; startaplar, Siemens, BMW ilə güclü sənaye əlaqələri. Texniki universitet üçün unikal: mühəndislik/texnologiya planlaşdırma, iqtisadiyyat, sosial və humanitar elmlərlə birləşir.",
      "overview": "Almaniyanın paytaxtı və Avropanın ən maraqlı, beynəlxalq şəhərlərindən biri (~3,8 milyon). Brandenburg, Berlin divarı, Reyxstaq; Muzey adası; Kreuzberg, Prenzlauer Berg, Mitte; Berghain, Berlinale, Tiergarten. TU Berlində ~20–30% xarici tələbə; startap/texnologiya mühiti; U-Bahn/S-Bahn. TU9/Mükəmməllik; mühəndislik/texnologiya planlaşdırma, iqtisadiyyat, sosial/humanitar elmlərlə birləşir; mexanika/elektrik, informatika, şəhər planlaşdırması, davamlılıq güclü; ödənişsiz; Berlin staj/iş üçün ideal.",
      "keyFacts": [
        "Almaniyanın aparıcı texniki universitetlərindən biri (TU9, Mükəmməllik), ~35.000 tələbə (müxtəlif/beynəlxalq), startaplar, Siemens, BMW, texnologiya mərkəzləri ilə güclü əlaqələr."
      ],
      "requirements": [
        "Tanınmış attestat (bakalavr üçün məktəb — uni-assist VPD; magistr üçün bakalavr).",
        "İngilisdilli proqramlar üçün IELTS 6.5+/TOEFL 90+.",
        "Bəzən motivasyon məktubu/CV; məhdud proqramlar üçün uyğunluq testi/ballar.",
        "TU Berlin portal vasitəsilə (magistr: tez-tez 1 dek–fev/may; bir çox beynəlxalq üçün uni-assist). Qış 2026/27: məhdud ingilisdilli magistr aprel–may 2025 (saytda yoxlayın).",
        "Ödəniş yoxdur; semestr ~€360 (nəqliyyat, inzibati, tələbə xidmətləri; 2026-da bir qədər artım). Qeyri-AB: viza üçün €11.904/il (bloklanmış hesab)."
      ],
      "helpfulInfo": [
        "Ünvan: Straße des 17. Juni 135, 10623 Berlin, Almaniya (Charlottenburg kampusu, mərkəz-qərb, Tiergarten yaxınlığı).",
        "Beynəlxalq ofis: +49 30 314-24067 / 314-25648; studentmobility@international.tu-berlin.de və ya international@tu-berlin.de. Ümumi: +49 30 314-0. Qəbul: Campus Center H 0030."
      ],
      "cityInfo": "Almaniyanın paytaxtı və Avropanın ən maraqlı, beynəlxalq şəhərlərindən biri (~3,8 milyon). Brandenburg, Berlin divarı, Reyxstaq; Muzey adası (UNESCO); Kreuzberg, Prenzlauer Berg, Mitte; Berghain, Berlinale, Tiergarten.",
      "whyChoose": [
        "Almaniyanın aparıcı texniki universitetlərindən biri (TU9, Mükəmməllik), ~35.000 tələbə, startaplar, Siemens, BMW ilə güclü əlaqələr",
        "Texniki universitet üçün unikal: mühəndislik/texnologiya planlaşdırma, iqtisadiyyat, sosial və humanitar elmlərlə birləşir",
        "Mexanika/elektrik mühəndisliyi, informatika, şəhər planlaşdırması, davamlılıq üzrə üst sıralarda",
        "Ödənişsiz (dövlət); Berlin staj/iş (texnologiya/media/NGO) üçün ideal; əla tesislər və tədqiqat",
        "STEM/mühəndislik üçün praktiki fokus, yenilikçi proqramlar; Avropada yaxşı karyera perspektivləri"
      ]
    },
    "tr": {
      "shortDescription": "Almanya'nın önde gelen teknik üniversitelerinden biri (TU9 üyesi, Mükemmellik Üniversitesi), ~35.000 öğrenci (çeşitli/uluslararası), güçlü sanayi bağlantıları (start-up'lar, Siemens, BMW, teknoloji merkezleri). Teknik üniversite için benzersiz: mühendislik/teknoloji planlama bilimleri, ekonomi, sosyal ve beşeri bilimlerle birleştirir.",
      "overview": "Almanya'nın başkenti ve Avrupa'nın en heyecan verici, uluslararası kentlerinden biri (~3,8 milyon). Brandenburg Kapısı, Berlin Duvarı, Reichstag; Müze Adası; Kreuzberg, Prenzlauer Berg, Mitte; Berghain, Berlinale, Tiergarten. TU Berlin'de ~%20–30 yabancı; start-up/teknoloji ortamı; U-Bahn/S-Bahn. TU9/Mükemmellik; mühendislik/teknoloji planlama, ekonomi, sosyal/beşeri bilimlerle birleşik; makine/elektrik, bilgisayar bilimi, kentsel planlama, sürdürülebilirlik güçlü; ücretsiz; Berlin staj/iş için ideal.",
      "keyFacts": [
        "Almanya'nın önde gelen teknik üniversitelerinden biri (TU9, Mükemmellik), ~35.000 öğrenci (çeşitli/uluslararası), start-up'lar, Siemens, BMW, teknoloji merkezleri ile güçlü bağlantılar."
      ],
      "requirements": [
        "Tanınmış diploma (lisans için lise — uni-assist VPD; yüksek lisans için lisans).",
        "İngilizce programlar için IELTS 6.5+/TOEFL 90+.",
        "Bazen motivasyon mektubu/CV; kısıtlı programlar için yetenek testi/puan.",
        "TU Berlin portal üzerinden (yüksek lisans: sıklıkla 1 Ara–Şub/Mayıs; birçok uluslararası için uni-assist). Kış 2026/27: kısıtlı İngilizce yüksek lisans Nisan–Mayıs 2025 (sitede kontrol edin).",
        "Öğrenim yok; dönem ~€360 (ulaşım, idari, öğrenci hizmetleri; 2026'da hafif artış). AB dışı: vize için €11.904/yıl (bloke hesap)."
      ],
      "helpfulInfo": [
        "Adres: Straße des 17. Juni 135, 10623 Berlin, Almanya (Charlottenburg kampüsü, merkez-batı, Tiergarten yakını).",
        "Uluslararası ofis: +49 30 314-24067 / 314-25648; studentmobility@international.tu-berlin.de veya international@tu-berlin.de. Genel: +49 30 314-0. Kayıt: Campus Center H 0030."
      ],
      "cityInfo": "Almanya'nın başkenti ve Avrupa'nın en heyecan verici, uluslararası kentlerinden biri (~3,8 milyon). Brandenburg Kapısı, Berlin Duvarı, Reichstag; Müze Adası (UNESCO); Kreuzberg, Prenzlauer Berg, Mitte; Berghain, Berlinale, Tiergarten.",
      "whyChoose": [
        "Almanya'nın önde gelen teknik üniversitelerinden biri (TU9, Mükemmellik), ~35.000 öğrenci, start-up'lar, Siemens, BMW ile güçlü bağlantılar",
        "Teknik üniversite için benzersiz: mühendislik/teknoloji planlama bilimleri, ekonomi, sosyal ve beşeri bilimlerle birleşik",
        "Makine/elektrik mühendisliği, bilgisayar bilimi, kentsel planlama, sürdürülebilirlikte üst sıralarda",
        "Ücretsiz (kamu); Berlin staj/iş (teknoloji/medya/NGO) için ideal; mükemmel tesisler ve araştırma",
        "STEM/mühendislik için pratik odak, yenilikçi programlar; Avrupa'da güçlü kariyer perspektifleri"
      ]
    },
    "ru": {
      "shortDescription": "Один из ведущих технических вузов Германии (TU9, университет совершенства), ~35 000 студентов (разнообразный/интернациональный состав), тесные связи с индустрией (стартапы, Siemens, BMW, теххабы). Уникально для техвуза: сочетание инженерии/технологий с науками о планировании, экономикой, общественными и гуманитарными науками.",
      "overview": "Столица Германии и один из самых оживлённых международных городов Европы (~3,8 млн). Бранденбургские ворота, остатки стены, Рейхстаг; Музейный остров; Кройцберг, Пренцлауэр-Берг, Митте; Berghain, Берлинале, Тиргартен. В TU Berlin ~20–30% иностранных; стартап-/IT-среда; U-Bahn/S-Bahn. TU9/университет совершенства; инженерия/технологии в связке с планированием, экономикой, общественными и гуманитарными науками; сильные механика/электротехника, информатика, градостроительство, устойчивое развитие; бесплатное обучение; Берлин идеален для стажировок и карьеры.",
      "keyFacts": [
        "Один из ведущих технических вузов Германии (TU9, университет совершенства), ~35 000 студентов (разнообразный/интернациональный), тесные связи со стартапами, Siemens, BMW, теххабами."
      ],
      "requirements": [
        "Признанный аттестат (для бакалавриата школа — uni-assist VPD; для магистратуры — диплом бакалавра).",
        "Для программ на английском: IELTS 6.5+/TOEFL 90+.",
        "Иногда мотивационное письмо/CV; тесты/баллы для программ с ограничением.",
        "Подача через портал TU Berlin (магистратура: часто 1 дек–фев/май; для многих иностранцев uni-assist). Зима 2026/27: ограниченная англоязычная магистратура апр–май 2025 (уточняйте на сайте).",
        "Обучение бесплатное; семестровый взнос ~€360 (проезд, админ., студенческие услуги; в 2026 небольшое повышение). Не из ЕС: подтверждение средств €11 904/год (блокированный счёт) для визы."
      ],
      "helpfulInfo": [
        "Адрес: Straße des 17. Juni 135, 10623 Berlin, Германия (кампус Шарлоттенбург, центр-запад, рядом с Тиргартеном).",
        "Международный офис: +49 30 314-24067 / 314-25648; studentmobility@international.tu-berlin.de или international@tu-berlin.de. Общая инфо: +49 30 314-0. Приём: Campus Center H 0030."
      ],
      "cityInfo": "Столица Германии и один из самых оживлённых международных городов Европы (~3,8 млн). Бранденбургские ворота, остатки стены, Рейхстаг; Музейный остров (ЮНЕСКО); Кройцберг, Пренцлауэр-Берг, Митте; Berghain, Берлинале, Тиргартен.",
      "whyChoose": [
        "Один из ведущих технических вузов Германии (TU9, университет совершенства), ~35 000 студентов, тесные связи со стартапами, Siemens, BMW",
        "Уникально для техвуза: сочетание инженерии/технологий с науками о планировании, экономикой, общественными и гуманитарными науками",
        "Верхние позиции по машиностроению/электротехнике, информатике, градостроительству, устойчивому развитию",
        "Бесплатное обучение (гос. вуз); Берлин идеален для стажировок и работы (IT/медиа/NGO); отличная инфраструктура и исследования",
        "Идеально для STEM/инженерии с практическим уклоном, инновационные программы; отличные карьерные перспективы в Европе"
      ]
    }
  },
  "rheinische-friedrich-wilhelms-universitaet-bonn": {
    "en": {
      "shortDescription": "Founded 1818, one of Germany's top research universities (Excellence Initiative, strong clusters in mathematics, life sciences, humanities), ~38,000 students (international focus), highly ranked globally (~top 100–200 QS/THE). Renowned for research (e.g.",
      "overview": "Former capital of West Germany (1949–1990), now a UN city with 19+ UN agencies (e.g., UN Climate Change Secretariat, UN Volunteers) and ~150 international organizations, giving it a strong global, diplomatic vibe. Picturesque on the Rhine River, historic old town (Beethoven's birthplace—annual Beethovenfest), museums (Haus der Geschichte, Beethoven House), botanical gardens, Poppelsdorfer Palace (university campus), and nearby Siebengebirge hills for hiking. Relaxed, green, family-friendly, multicultural (large expat/UN community), excellent public transport (train hub to Cologne/Frankfurt). Smaller than Berlin/Munich (~330,000 people), safer/quieter, with a mix of historic charm and modern international energy. Student population ~35,000–38,000, making it lively but not overwhelming. Why Choose This University?: Founded 1818, one of Germany's top research universities (Excellence Initiative, strong clusters in mathematics, life sciences, humanities), ~38,000 students (international focus), highly ranked globally (~top 100–200 QS/THE). Renowned for research (e.g., Hausdorff Center for Mathematics, Argelander Institute for Astronomy), Nobel laureates (e.g., in physics/chemistry), and interdisciplinary strengths. No tuition fees (public uni), beautiful historic campuses (Poppelsdorfer Schloss), vibrant international community, proximity to UN/EU institutions for internships/networking (great for IR, economics, sciences). Affordable Rhine location with high quality of life, Beet",
      "keyFacts": [
        "Founded 1818, one of Germany's top research universities (Excellence Initiative, strong clusters in mathematics, life sc…"
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
      "cityInfo": "Former capital of West Germany (1949–1990), now a UN city with 19+ UN agencies (e.g., UN Climate Change Secretariat, UN Volunteers) and ~150 international organizations, giving it a strong global, diplomatic vibe. Picturesque on the Rhine River, historic old town (Beethoven's birthplace—annual Beethovenfest), museums (Haus der Geschichte, Beethoven House), botanical gardens, Poppelsdorfer Palace (university campus), and nearby Siebengebirge hills for hiking.",
      "whyChoose": [
        "Founded 1818, one of Germany's top research universities (Excellence Initiative, strong clusters in mathematics, life sciences, humanities), ~38,000 students (international focus), highly ranked globally (~top 100–200 QS/THE)",
        "Renowned for research (e",
        ", Hausdorff Center for Mathematics, Argelander Institute for Astronomy), Nobel laureates (e",
        ", in physics/chemistry), and interdisciplinary strengths",
        "No tuition fees (public uni), beautiful historic campuses (Poppelsdorfer Schloss), vibrant international community, proximity to UN/EU institutions for internships/networking (great for IR, economics, sciences)"
      ]
    },
    "az": {
      "shortDescription": "1818-də qurulub; Almaniyanın ən yaxşı tədqiqat universitetlərindən biri (Excellence; riyaziyyat, həyat elmləri, humanitar elmlər klasterləri); ~38.000 tələbə (beynəlxalq fokus); dünya reytinqlərində ~100–200 (QS/THE).",
      "overview": "Keçmiş Qərbi Almaniya paytaxtı (1949–1990); indi BMT şəhəri (19+ BMT təşkilatı, ~150 beynəlxalq təşkilat). Reyn üzərində tarixi köhnə şəhər (Betovenin doğum yeri, Beethovenfest), muzeylər, botanika bağı, Poppelsdorfer sarayı (kampus), Siebengebirge. Rahat, yaşıl, ailəyönümlü; ~35.000–38.000 tələbə. 1818-də qurulub; Excellence; riyaziyyat, həyat elmləri, humanitar elmlər; Hausdorff riyaziyyat mərkəzi, Argelander astronomiya; Nobel laureatları; ödənişsiz; BMT/AB qurumlarına yaxınlıq staj üçün ideal.",
      "keyFacts": [
        "1818-də qurulub; Almaniyanın ən yaxşı tədqiqat universitetlərindən biri (Excellence; riyaziyyat, həyat elmləri, humanitar elmlər klasterləri); ~38.000 tələbə; dünya reytinqlərində ~100–200."
      ],
      "requirements": [
        "Tanınmış attestat (bakalavr üçün məktəb — tez-tez uni-assist VPD; magistr üçün bakalavr).",
        "İngilisdilli proqramlar üçün IELTS 6.5+/TOEFL 90+.",
        "Bəzən motivasyon məktubu/CV; məhdud sahələr üçün uyğunluq testi.",
        "uni-bonn.de portal və ya uni-assist; qış (oktyabr): tez-tez 15 iyul; yay (aprel): 15 yanvar; magistr proqrama görə (dek–mart və s.). Qeyri-AB: bəzi ölkələr üçün APS.",
        "Ödəniş yoxdur; semestr ~€300–345 (nəqliyyat, tələbə xidmətləri daxil). Qeyri-AB: viza üçün €11.904/il (bloklanmış hesab)."
      ],
      "helpfulInfo": [
        "Əsas kampus: Regina-Pacis-Weg 3, 53113 Bonn (tarixi mərkəz). Beynəlxalq ofis: Poppelsdorfer Allee 53 & 102, 53115 Bonn.",
        "Əlaqə: +49 228 73-5544; study@uni-bonn.de və ya international@uni-bonn.de. Mərkəzi məsləhət: +49 228 73-7080; zsb-int@verwaltung.uni-bonn.de. Beynəlxalq qəbul: intstud@verwaltung.uni-bonn.de. Qrafik: B.e.–C. 08:00–16:00."
      ],
      "cityInfo": "Keçmiş Qərbi Almaniya paytaxtı; indi BMT şəhəri (19+ BMT təşkilatı, ~150 beynəlxalq təşkilat). Reyn, tarixi köhnə şəhər (Betovenin doğum yeri, Beethovenfest), muzeylər, botanika bağı, Poppelsdorfer sarayı, Siebengebirge.",
      "whyChoose": [
        "1818-də qurulub; Almaniyanın ən yaxşı tədqiqat universitetlərindən biri (Excellence; riyaziyyat, həyat elmləri, humanitar elmlər); ~38.000 tələbə; dünya reytinqlərində ~100–200",
        "Tədqiqatla tanınır (Hausdorff riyaziyyat mərkəzi, Argelander astronomiya); Nobel laureatları (fizika/kimya); interdisiplinar güclü",
        "Ödənişsiz (dövlət); tarixi kampuslar (Poppelsdorfer Schloss); canlı beynəlxalq icma; BMT/AB qurumlarına yaxınlıq (beynəlxalq münasibətlər, iqtisadiyyat, elm üçün ideal)"
      ]
    },
    "tr": {
      "shortDescription": "1818'de kuruldu; Almanya'nın en iyi araştırma üniversitelerinden biri (Mükemmellik; matematik, yaşam bilimleri, beşeri bilimler kümeleri); ~38.000 öğrenci (uluslararası odağı); küresel ~100–200 (QS/THE).",
      "overview": "Eski Batı Almanya başkenti (1949–1990); şimdi BM kenti (19+ BM kurumu, ~150 uluslararası örgüt). Ren üzerinde tarihi kent (Beethoven'ın doğum yeri, Beethovenfest), müzeler, botanik bahçe, Poppelsdorfer sarayı (kampüs), Siebengebirge. Rahat, yeşil, aile dostu; ~35.000–38.000 öğrenci. 1818'de kuruldu; Mükemmellik; matematik, yaşam bilimleri, beşeri bilimler; Hausdorff matematik merkezi, Argelander astronomi; Nobel ödüllüler; ücretsiz; BM/AB kurumlarına yakınlık staj için ideal.",
      "keyFacts": [
        "1818'de kuruldu; Almanya'nın en iyi araştırma üniversitelerinden biri (Mükemmellik; matematik, yaşam bilimleri, beşeri bilimler kümeleri); ~38.000 öğrenci; küresel ~100–200."
      ],
      "requirements": [
        "Tanınmış diploma (lisans için lise — sıklıkla uni-assist VPD; yüksek lisans için lisans).",
        "İngilizce programlar için IELTS 6.5+/TOEFL 90+.",
        "Bazen motivasyon mektubu/CV; kısıtlı alanlar için yetenek testi.",
        "uni-bonn.de portal veya uni-assist; kış (Ekim): sıklıkla 15 Temmuz; yaz (Nisan): 15 Ocak; yüksek lisans programa özel (Ara–Mart vb.). AB dışı: bazı ülkeler için APS.",
        "Öğrenim yok; dönem ~€300–345 (ulaşım, öğrenci hizmetleri dahil). AB dışı: vize için €11.904/yıl (bloke hesap)."
      ],
      "helpfulInfo": [
        "Ana kampüs: Regina-Pacis-Weg 3, 53113 Bonn (tarihi merkez). Uluslararası ofis: Poppelsdorfer Allee 53 & 102, 53115 Bonn.",
        "İletişim: +49 228 73-5544; study@uni-bonn.de veya international@uni-bonn.de. Merkezi danışmanlık: +49 228 73-7080; zsb-int@verwaltung.uni-bonn.de. Uluslararası kayıt: intstud@verwaltung.uni-bonn.de. Saatler: Pzt–Cum 08:00–16:00."
      ],
      "cityInfo": "Eski Batı Almanya başkenti; şimdi BM kenti (19+ BM kurumu, ~150 uluslararası örgüt). Ren, tarihi kent (Beethoven'ın doğum yeri, Beethovenfest), müzeler, botanik bahçe, Poppelsdorfer sarayı, Siebengebirge.",
      "whyChoose": [
        "1818'de kuruldu; Almanya'nın en iyi araştırma üniversitelerinden biri (Mükemmellik; matematik, yaşam bilimleri, beşeri bilimler); ~38.000 öğrenci; küresel ~100–200",
        "Araştırmayla ünlü (Hausdorff matematik merkezi, Argelander astronomi); Nobel ödüllüler (fizik/kimya); disiplinler arası güçlü",
        "Ücretsiz (kamu); tarihi kampüsler (Poppelsdorfer Schloss); canlı uluslararası topluluk; BM/AB kurumlarına yakınlık (uluslararası ilişkiler, ekonomi, fen için ideal)"
      ]
    },
    "ru": {
      "shortDescription": "Основан в 1818; один из ведущих исследовательских вузов Германии (инициатива совершенства; сильные кластеры: математика, науки о жизни, гуманитарные науки); ~38 000 студентов (интернациональный фокус); в мировых рейтингах ~100–200 (QS/THE).",
      "overview": "Бывшая столица ФРГ (1949–1990); сейчас город ООН (19+ учреждений ООН, ~150 международных организаций). Рейн, исторический центр (родина Бетховена, Beethovenfest), музеи, ботанический сад, дворец Поппельсдорфер (кампус), Зибенгебирге. Спокойный, зелёный, семейный; ~35 000–38 000 студентов. Основан в 1818; инициатива совершенства; математика, науки о жизни, гуманитарные науки; центр Хаусдорфа по математике, институт Аргеландера по астрономии; нобелевские лауреаты; бесплатное обучение; близость к учреждениям ООН/ЕС — идеально для стажировок.",
      "keyFacts": [
        "Основан в 1818; один из ведущих исследовательских вузов Германии (инициатива совершенства; кластеры: математика, науки о жизни, гуманитарные науки); ~38 000 студентов; в мировых рейтингах ~100–200."
      ],
      "requirements": [
        "Признанный аттестат (школа для бакалавриата — часто uni-assist VPD; для магистратуры — бакалавриат).",
        "Для программ на английском: IELTS 6.5+/TOEFL 90+.",
        "Иногда мотивационное письмо/CV; тесты для ограниченных направлений.",
        "Подача через портал uni-bonn.de или uni-assist; зимний семестр (октябрь): часто 15 июля; летний (апрель): 15 января; магистратура по программе (дек–март и т.д.). Не из ЕС: для части стран APS.",
        "Обучение бесплатное; семестровый взнос ~€300–345 (проезд, студенческие услуги). Не из ЕС: подтверждение средств €11 904/год (блокированный счёт) для визы."
      ],
      "helpfulInfo": [
        "Главный кампус: Regina-Pacis-Weg 3, 53113 Bonn (исторический центр). Международный офис: Poppelsdorfer Allee 53 & 102, 53115 Bonn.",
        "Контакт: +49 228 73-5544; study@uni-bonn.de или international@uni-bonn.de. Центральная консультация: +49 228 73-7080; zsb-int@verwaltung.uni-bonn.de. Приём иностранцев: intstud@verwaltung.uni-bonn.de. Часы: пн–пт 08:00–16:00."
      ],
      "cityInfo": "Бывшая столица ФРГ; сейчас город ООН (19+ учреждений ООН, ~150 международных организаций). Рейн, исторический центр (родина Бетховена, Beethovenfest), музеи, ботанический сад, дворец Поппельсдорфер, Зибенгебирге.",
      "whyChoose": [
        "Основан в 1818; один из ведущих исследовательских вузов Германии (инициатива совершенства; математика, науки о жизни, гуманитарные науки); ~38 000 студентов; в мировых рейтингах ~100–200",
        "Известен исследованиями (центр Хаусдорфа по математике, институт Аргеландера по астрономии); нобелевские лауреаты (физика/химия); междисциплинарные сильные стороны",
        "Бесплатное обучение (гос. вуз); исторические кампусы (дворец Поппельсдорфер); оживлённое международное сообщество; близость к учреждениям ООН/ЕС (идеально для международных отношений, экономики, наук)"
      ]
    }
  },
  "technische-universitaet-dortmund": {
    "en": {
      "shortDescription": "Founded 1968 (one of Germany's younger technical unis), TU Dortmund has a strong practical/research profile (~30,000 students, 19–20% international from 120+ countries). Excellent in engineering, sciences, IT, automation/robotics, chemistry, and interdisciplinary fields (e.g., Industry 4.0 focus).",
      "overview": "A major city in the Ruhr region (~590,000 people), once an industrial powerhouse (steel/coal) now transformed into a modern, green, and cultural hub. Features include the Signal Iduna Park (famous Borussia Dortmund football stadium), Phoenix See lake (former steelworks turned waterfront with cafes/parks), Zeche Zollern industrial museum, art/culture scene (Theater Dortmund, museums), festivals, and easy access to nature (Emscher Park trails). Student-friendly (~35,000 students at TU Dortmund), multicultural (large international community), affordable living, excellent public transport (trains to Essen/Cologne/Düsseldorf), and vibrant nightlife (pubs, clubs in city center). Less hectic than Berlin/Munich, with a practical, down-to-earth Ruhr vibe—great for sports fans, industrial heritage enthusiasts, and those wanting big-city access without extreme costs. Why Choose This University?: Founded 1968 (one of Germany's younger technical unis), TU Dortmund has a strong practical/research profile (~30,000 students, 19–20% international from 120+ countries). Excellent in engineering, sciences, IT, automation/robotics, chemistry, and interdisciplinary fields (e.g., Industry 4.0 focus). Part of the University Alliance Ruhr (with Bochum/Essen-Duisburg) for broader resources. No tuition fees (public uni), modern campus with good facilities (labs, sports), strong industry links (Ruhr region's economy), and growing English programs for internationals. Affordable city with high quality of ",
      "keyFacts": [
        "Founded 1968 (one of Germany's younger technical unis), TU Dortmund has a strong practical/research profile (~30,000 stu…"
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
      "cityInfo": "A major city in the Ruhr region (~590,000 people), once an industrial powerhouse (steel/coal) now transformed into a modern, green, and cultural hub. Features include the Signal Iduna Park (famous Borussia Dortmund football stadium), Phoenix See lake (former steelworks turned waterfront with cafes/parks), Zeche Zollern industrial museum, art/culture scene (Theater Dortmund, museums), festivals, and easy access to nature (Emscher Park trails).",
      "whyChoose": [
        "Founded 1968 (one of Germany's younger technical unis), TU Dortmund has a strong practical/research profile (~30,000 students, 19–20% international from 120+ countries)",
        "Excellent in engineering, sciences, IT, automation/robotics, chemistry, and interdisciplinary fields (e",
        "Part of the University Alliance Ruhr (with Bochum/Essen-Duisburg) for broader resources",
        "No tuition fees (public uni), modern campus with good facilities (labs, sports), strong industry links (Ruhr region's economy), and growing English programs for internationals",
        "Affordable city with high quality of life, football culture, and easy regional travel"
      ]
    },
    "az": {
      "shortDescription": "1968-də qurulub (Almaniyanın gənc texniki universitetlərindən biri); TU Dortmund güclü praktiki/tədqiqat profili (~30.000 tələbə, 120+ ölkədən 19–20% beynəlxalq). Mühəndislik, elm, IT, avtomatlaşdırma/robototexnika, kimya və interdisiplinar sahələrdə əla (məs. Sənaye 4.0).",
      "overview": "Ruhr regionunun əsas şəhəri (~590.000); keçmiş sənaye nüvəsi (polad/kömür), indi müasir, yaşıl və mədəni mərkəz. Signal Iduna Park (Borussia Dortmund), Phoenix See, Zeche Zollern, teatr/muzeylər, Emscher Park. Tələbəyönümlü (~35.000), çoxmədəniyyətli, münasib yaşayış; Essen/Köln/Düsseldorf qatarları. 1968-də qurulub; praktiki/tədqiqat profili; mühəndislik, elm, IT, avtomatlaşdırma, kimya; Ruhr Universitet Alyansı (Bochum/Essen-Duisburg); ödənişsiz; müasir kampus; Ruhr sənaye əlaqələri; artan ingilisdilli proqramlar.",
      "keyFacts": [
        "1968-də qurulub; TU Dortmund güclü praktiki/tədqiqat profili (~30.000 tələbə, 120+ ölkədən 19–20% beynəlxalq); mühəndislik, elm, IT, avtomatlaşdırma, kimya əla."
      ],
      "requirements": [
        "Tanınmış attestat (bakalavr üçün məktəb — uni-assist VPD; magistr üçün bakalavr).",
        "İngilisdilli proqramlar üçün IELTS 6.5+/TOEFL 90+.",
        "Bəzən motivasyon məktubu/CV; məhdud sahələr üçün uyğunluq testi.",
        "uni-assist və ya TU portal; qış (oktyabr): tez-tez 15 iyul; yay (aprel): 15 yanvar; magistr proqrama görə. Sorğular: admission.inquiries@tu-dortmund.de.",
        "Ödəniş yoxdur; semestr ~€300–350 (nəqliyyat, tələbə xidmətləri, teatr daxil). Qeyri-AB: viza üçün €11.904/il (bloklanmış hesab)."
      ],
      "helpfulInfo": [
        "Ünvan: Emil-Figge-Straße 50, 44227 Dortmund, Almaniya (Eichlinghofen kampusu; Beynəlxalq ofis: Emil-Figge-Str. 61).",
        "Əlaqə: +49 231 755-6349 / 755-6350; admission.inquiries@tu-dortmund.de və ya international@tu-dortmund.de. Ümumi: +49 231 755-1."
      ],
      "cityInfo": "Ruhr regionunun əsas şəhəri (~590.000); keçmiş sənaye nüvəsi, indi müasir, yaşıl və mədəni mərkəz. Signal Iduna Park, Phoenix See, Zeche Zollern, teatr/muzeylər, Emscher Park təbiəti.",
      "whyChoose": [
        "1968-də qurulub; TU Dortmund güclü praktiki/tədqiqat profili (~30.000 tələbə, 120+ ölkədən 19–20% beynəlxalq)",
        "Mühəndislik, elm, IT, avtomatlaşdırma/robototexnika, kimya və interdisiplinar sahələrdə əla (məs. Sənaye 4.0)",
        "Ruhr Universitet Alyansının tərkib hissəsi (Bochum/Essen-Duisburg) — daha geniş resurslar",
        "Ödənişsiz (dövlət); müasir kampus (laboratoriyalar, idman); Ruhr sənaye əlaqələri; beynəlxalq üçün artan ingilisdilli proqramlar",
        "Münasib şəhər, yüksək həyat keyfiyyəti, futbol mədəniyyəti, asan regional səyahət"
      ]
    },
    "tr": {
      "shortDescription": "1968'de kuruldu (Almanya'nın genç teknik üniversitelerinden biri); TU Dortmund güçlü pratik/araştırma profili (~30.000 öğrenci, 120+ ülkeden %19–20 uluslararası). Mühendislik, fen, IT, otomasyon/robotik, kimya ve disiplinler arası alanlarda mükemmel (örn. Endüstri 4.0).",
      "overview": "Ruhr bölgesinin büyük kenti (~590.000); eski sanayi merkezi (çelik/kömür), şimdi modern, yeşil ve kültür merkezi. Signal Iduna Park (Borussia Dortmund), Phoenix See, Zeche Zollern, tiyatro/müzeler, Emscher Park. Öğrenci dostu (~35.000), çok kültürlü, uygun yaşam; Essen/Köln/Düsseldorf trenleri. 1968'de kuruldu; pratik/araştırma profili; mühendislik, fen, IT, otomasyon, kimya; Ruhr Üniversite İttifakı (Bochum/Essen-Duisburg); ücretsiz; modern kampüs; Ruhr sanayi bağlantıları; artan İngilizce programlar.",
      "keyFacts": [
        "1968'de kuruldu; TU Dortmund güçlü pratik/araştırma profili (~30.000 öğrenci, 120+ ülkeden %19–20 uluslararası); mühendislik, fen, IT, otomasyon, kimya mükemmel."
      ],
      "requirements": [
        "Tanınmış diploma (lisans için lise — uni-assist VPD; yüksek lisans için lisans).",
        "İngilizce programlar için IELTS 6.5+/TOEFL 90+.",
        "Bazen motivasyon mektubu/CV; kısıtlı alanlar için yetenek testi.",
        "uni-assist veya TU portal; kış (Ekim): sıklıkla 15 Temmuz; yaz (Nisan): 15 Ocak; yüksek lisans programa özel. Sorular: admission.inquiries@tu-dortmund.de.",
        "Öğrenim yok; dönem ~€300–350 (ulaşım, öğrenci hizmetleri, tiyatro dahil). AB dışı: vize için €11.904/yıl (bloke hesap)."
      ],
      "helpfulInfo": [
        "Adres: Emil-Figge-Straße 50, 44227 Dortmund, Almanya (Eichlinghofen kampüsü; Uluslararası ofis: Emil-Figge-Str. 61).",
        "İletişim: +49 231 755-6349 / 755-6350; admission.inquiries@tu-dortmund.de veya international@tu-dortmund.de. Genel: +49 231 755-1."
      ],
      "cityInfo": "Ruhr bölgesinin büyük kenti (~590.000); eski sanayi merkezi, şimdi modern, yeşil ve kültür merkezi. Signal Iduna Park, Phoenix See, Zeche Zollern, tiyatro/müzeler, Emscher Park doğası.",
      "whyChoose": [
        "1968'de kuruldu; TU Dortmund güçlü pratik/araştırma profili (~30.000 öğrenci, 120+ ülkeden %19–20 uluslararası)",
        "Mühendislik, fen, IT, otomasyon/robotik, kimya ve disiplinler arası alanlarda mükemmel (örn. Endüstri 4.0)",
        "Ruhr Üniversite İttifakı üyesi (Bochum/Essen-Duisburg) — daha geniş kaynaklar",
        "Ücretsiz (kamu); modern kampüs (laboratuvarlar, spor); Ruhr sanayi bağlantıları; uluslararasılar için artan İngilizce programlar",
        "Uygun kent, yüksek yaşam kalitesi, futbol kültürü, kolay bölgesel ulaşım"
      ]
    },
    "ru": {
      "shortDescription": "Основан в 1968 (один из молодых технических вузов Германии); TU Dortmund с сильным практическим/исследовательским профилем (~30 000 студентов, 19–20% иностранных из 120+ стран). Сильные направления: инженерия, науки, IT, автоматизация/робототехника, химия и междисциплинарные области (напр. Индустрия 4.0).",
      "overview": "Крупный город в Руре (~590 000); бывший индустриальный центр (сталь/уголь), теперь современный, зелёный и культурный хаб. Signal Iduna Park (Боруссия Дортмунд), Phoenix See, Zeche Zollern, театры/музеи, Emscher Park. Около 35 000 студентов, мультикультурно, доступная жизнь; поезда в Эссен/Кёльн/Дюссельдорф. Основан в 1968; практический/исследовательский профиль; инженерия, науки, IT, автоматизация, химия; альянс университетов Рура (Бохум/Эссен-Дуйсбург); бесплатное обучение; современный кампус; связи с индустрией Рура; растущие программы на английском.",
      "keyFacts": [
        "Основан в 1968; TU Dortmund с сильным практическим/исследовательским профилем (~30 000 студентов, 19–20% иностранных из 120+ стран); инженерия, науки, IT, автоматизация, химия — сильные направления."
      ],
      "requirements": [
        "Признанный аттестат (школа для бакалавриата — uni-assist VPD; для магистратуры — бакалавриат).",
        "Для программ на английском: IELTS 6.5+/TOEFL 90+.",
        "Иногда мотивационное письмо/CV; тесты для ограниченных направлений.",
        "Подача через uni-assist или портал TU; зимний семестр (октябрь): часто 15 июля; летний (апрель): 15 января; магистратура по программе. Вопросы: admission.inquiries@tu-dortmund.de.",
        "Обучение бесплатное; семестровый взнос ~€300–350 (проезд, студенческие услуги, театр). Не из ЕС: подтверждение средств €11 904/год (блокированный счёт) для визы."
      ],
      "helpfulInfo": [
        "Адрес: Emil-Figge-Straße 50, 44227 Dortmund, Германия (кампус Eichlinghofen; международный офис: Emil-Figge-Str. 61).",
        "Контакт: +49 231 755-6349 / 755-6350; admission.inquiries@tu-dortmund.de или international@tu-dortmund.de. Общий: +49 231 755-1."
      ],
      "cityInfo": "Крупный город в Руре (~590 000); бывший индустриальный центр, теперь современный, зелёный и культурный хаб. Signal Iduna Park, Phoenix See, Zeche Zollern, театры/музеи, природа Emscher Park.",
      "whyChoose": [
        "Основан в 1968; TU Dortmund с сильным практическим/исследовательским профилем (~30 000 студентов, 19–20% иностранных из 120+ стран)",
        "Сильные направления: инженерия, науки, IT, автоматизация/робототехника, химия и междисциплинарные области (напр. Индустрия 4.0)",
        "Часть альянса университетов Рура (Бохум/Эссен-Дуйсбург) — более широкие ресурсы",
        "Бесплатное обучение (гос. вуз); современный кампус (лаборатории, спорт); связи с индустрией Рура; растущие программы на английском для иностранцев",
        "Доступный город, высокое качество жизни, футбольная культура, удобные региональные поездки"
      ]
    }
  },
  "heinrich-heine-university-duesseldorf": {
    "en": {
      "shortDescription": "Founded 1965, ~35,000 students, strong in life sciences (biology, medicine, chemistry), quantitative fields, and humanities. Growing international focus with several English programs; research-oriented (e.g., AI, data science, biology).",
      "overview": "Fashion and business hub in North Rhine-Westphalia (~620,000 people). Modern, affluent city with luxury shopping (Königsallee), Rhine River promenade, art museums (Kunstsammlung NRW), vibrant nightlife (Altstadt pubs), international vibe (many expats), and easy access to Cologne/Netherlands. Student-friendly (~35,000 students), safe, green parks (Hofgarten), but higher costs than smaller cities. Why Choose This University?: Founded 1965, ~35,000 students, strong in life sciences (biology, medicine, chemistry), quantitative fields, and humanities. Growing international focus with several English programs; research-oriented (e.g., AI, data science, biology). Modern facilities, central location for internships (business/fashion/pharma hubs), and welcoming for internationals.",
      "keyFacts": [
        "No tuition; semester fee ~€300–350.",
        "Founded 1965, ~35,000 students, strong in life sciences (biology, medicine, chemistry), quantitative fields, and humanit…"
      ],
      "requirements": [
        "Uni-assist VPD for equivalence, English proof (IELTS 6.5+/TOEFL 90+), motivation/CV sometimes. Deadlines: Winter July 15; Summer Jan 15 (program-specific)."
      ],
      "helpfulInfo": [
        "Address: Universitätsstraße 1, 40225 Düsseldorf, Germany (main campus in southern Düsseldorf).",
        "Many programs restricted (NC/grades); growing English portfolio.",
        "International Office: Phone: +49 211 81-10800; Email: international@hhu.de or admissions-specific."
      ],
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
    "az": {
      "shortDescription": "1965-də qurulub; ~35.000 tələbə; həyat elmləri (biologiya, tibb, kimya), kəmiyyət sahələri və humanitar elmlər güclü. Bir neçə ingilisdilli proqramla artan beynəlxalq fokus; tədqiqat əsaslı (məs. AI, data elmi, biologiya).",
      "overview": "Şimali Reyn-Vestfaliyada moda və biznes mərkəzi (~620.000). Königsallee, Reyn promenadı, Kunstsammlung NRW, Altstadt, Köln/Niderlanda asan çıxış. Tələbəyönümlü (~35.000), təhlükəsiz, Hofgarten; kiçik şəhərlərə nisbətən daha yüksək xərclər. 1965-də qurulub; həyat elmləri, kəmiyyət sahələri, humanitar elmlər; bir neçə ingilisdilli proqram; AI, data elmi, biologiya üzrə tədqiqat; müasir tesislər; biznes/moda/farma stajları üçün mərkəzi yerləşmə.",
      "keyFacts": [
        "Ödəniş yoxdur; semestr ~€300–350.",
        "1965-də qurulub; ~35.000 tələbə; həyat elmləri (biologiya, tibb, kimya), kəmiyyət sahələri və humanitar elmlər güclü."
      ],
      "requirements": [
        "uni-assist VPD ekvivalent üçün; ingilis sübutu (IELTS 6.5+/TOEFL 90+); bəzən motivasyon/CV. Qış 15 iyul; yay 15 yanvar (proqrama görə)."
      ],
      "helpfulInfo": [
        "Ünvan: Universitätsstraße 1, 40225 Düsseldorf, Almaniya (cənub kampusu).",
        "Bir çox proqram məhdud (NC/qiymət); artan ingilisdilli portfoliolar.",
        "Beynəlxalq ofis: +49 211 81-10800; international@hhu.de"
      ],
      "tuition": "Ödəniş yoxdur; semestr ~€300–350.",
      "cityInfo": "Şimali Reyn-Vestfaliyada moda və biznes mərkəzi (~620.000). Königsallee, Reyn promenadı, Kunstsammlung NRW, Altstadt; Köln/Niderlanda asan çıxış. Tələbəyönümlü (~35.000), Hofgarten; kiçik şəhərlərə nisbətən daha yüksək xərclər.",
      "whyChoose": [
        "1965-də qurulub; ~35.000 tələbə; həyat elmləri (biologiya, tibb, kimya), kəmiyyət sahələri və humanitar elmlər güclü",
        "Bir neçə ingilisdilli proqramla artan beynəlxalq fokus",
        "Tədqiqat əsaslı (məs. AI, data elmi, biologiya)",
        "Müasir tesislər; staj üçün mərkəzi yerləşmə (biznes/moda/farma); beynəlxalq üçün qonaqpərvər"
      ]
    },
    "tr": {
      "shortDescription": "1965'te kuruldu; ~35.000 öğrenci; yaşam bilimleri (biyoloji, tıp, kimya), nicelik alanları ve beşeri bilimler güçlü. Birkaç İngilizce programla artan uluslararası odağı; araştırma odaklı (örn. yapay zeka, veri bilimi, biyoloji).",
      "overview": "Kuzey Ren-Vestfalya'da moda ve iş merkezi (~620.000). Königsallee, Ren gezinti yolu, Kunstsammlung NRW, Altstadt, Köln/Hollanda'ya kolay erişim. Öğrenci dostu (~35.000), güvenli, Hofgarten; küçük kentlere göre daha yüksek maliyet. 1965'te kuruldu; yaşam bilimleri, nicelik alanları, beşeri bilimler; birkaç İngilizce program; yapay zeka, veri bilimi, biyoloji araştırması; modern tesisler; işletme/moda/ilaç stajları için merkezi konum.",
      "keyFacts": [
        "Öğrenim yok; dönem ~€300–350.",
        "1965'te kuruldu; ~35.000 öğrenci; yaşam bilimleri (biyoloji, tıp, kimya), nicelik alanları ve beşeri bilimler güçlü."
      ],
      "requirements": [
        "uni-assist VPD denklik için; İngilizce belgesi (IELTS 6.5+/TOEFL 90+); bazen motivasyon/CV. Kış 15 Temmuz; yaz 15 Ocak (programa özel)."
      ],
      "helpfulInfo": [
        "Adres: Universitätsstraße 1, 40225 Düsseldorf, Almanya (güney kampüsü).",
        "Birçok program kısıtlı (NC/not); artan İngilizce portföy.",
        "Uluslararası ofis: +49 211 81-10800; international@hhu.de"
      ],
      "tuition": "Öğrenim yok; dönem ~€300–350.",
      "cityInfo": "Kuzey Ren-Vestfalya'da moda ve iş merkezi (~620.000). Königsallee, Ren gezinti yolu, Kunstsammlung NRW, Altstadt; Köln/Hollanda'ya kolay erişim. Öğrenci dostu (~35.000), Hofgarten; küçük kentlere göre daha yüksek maliyet.",
      "whyChoose": [
        "1965'te kuruldu; ~35.000 öğrenci; yaşam bilimleri (biyoloji, tıp, kimya), nicelik alanları ve beşeri bilimler güçlü",
        "Birkaç İngilizce programla artan uluslararası odağı",
        "Araştırma odaklı (örn. yapay zeka, veri bilimi, biyoloji)",
        "Modern tesisler; staj için merkezi konum (işletme/moda/ilaç); uluslararasılar için misafirperver"
      ]
    },
    "ru": {
      "shortDescription": "Основан в 1965; ~35 000 студентов; сильные направления: науки о жизни (биология, медицина, химия), количественные области и гуманитарные науки. Растущий международный фокус с несколькими программами на английском; исследовательская ориентация (напр. ИИ, data science, биология).",
      "overview": "Мода и бизнес-центр в Северном Рейне — Вестфалии (~620 000). Кёнигсаллея, набережная Рейна, Kunstsammlung NRW, Альтштадт, удобный выезд в Кёльн/Нидерланды. Около 35 000 студентов, безопасно, парк Хофгартен; расходы выше, чем в небольших городах. Основан в 1965; науки о жизни, количественные области, гуманитарные науки; несколько программ на английском; исследования в ИИ, data science, биологии; современная инфраструктура; центральное расположение для стажировок (бизнес/мода/фарма).",
      "keyFacts": [
        "Обучение бесплатное; семестровый взнос ~€300–350.",
        "Основан в 1965; ~35 000 студентов; сильные направления: науки о жизни (биология, медицина, химия), количественные области и гуманитарные науки."
      ],
      "requirements": [
        "uni-assist VPD для эквивалентности; подтверждение английского (IELTS 6.5+/TOEFL 90+); иногда мотивация/CV. Зимний семестр 15 июля; летний 15 января (по программе)."
      ],
      "helpfulInfo": [
        "Адрес: Universitätsstraße 1, 40225 Düsseldorf, Германия (южный кампус).",
        "Многие программы с ограничением (NC/баллы); растущий портфель программ на английском.",
        "Международный офис: +49 211 81-10800; international@hhu.de"
      ],
      "tuition": "Обучение бесплатное; семестровый взнос ~€300–350.",
      "cityInfo": "Мода и бизнес-центр в Северном Рейне — Вестфалии (~620 000). Кёнигсаллея, набережная Рейна, Kunstsammlung NRW, Альтштадт; удобный выезд в Кёльн/Нидерланды. Около 35 000 студентов, Хофгартен; расходы выше, чем в небольших городах.",
      "whyChoose": [
        "Основан в 1965; ~35 000 студентов; сильные направления: науки о жизни (биология, медицина, химия), количественные области и гуманитарные науки",
        "Растущий международный фокус с несколькими программами на английском",
        "Исследовательская ориентация (напр. ИИ, data science, биология)",
        "Современная инфраструктура; центральное расположение для стажировок (бизнес/мода/фарма); гостеприимная среда для иностранцев"
      ]
    }
  },
  "university-of-hamburg": {
    "en": {
      "shortDescription": "Founded 1919, ~43,000 students, comprehensive with strengths in social sciences, law, natural sciences, business, and humanities. Highly international, many English Master's (~50+ options), urban location for internships (port/media/NGOs), no tuition, and vibrant city life.",
      "overview": "Germany's second-largest city (~1.85 million), major port with cosmopolitan vibe. Historic Speicherstadt (UNESCO), Elbphilharmonie concert hall, diverse neighborhoods (St. Pauli nightlife, Altona hipster scene), lakes/rivers, international flair, festivals, and strong job market (media, logistics, tech). Very student-oriented (~100,000+ students citywide), English common. Why Choose This University?: Founded 1919, ~43,000 students, comprehensive with strengths in social sciences, law, natural sciences, business, and humanities. Highly international, many English Master's (~50+ options), urban location for internships (port/media/NGOs), no tuition, and vibrant city life.",
      "keyFacts": [
        "No tuition; semester fee ~€300–350.",
        "Founded 1919, ~43,000 students, comprehensive with strengths in social sciences, law, natural sciences, business, and hu…"
      ],
      "requirements": [
        "Uni-assist for many, English proof (IELTS/TOEFL), motivation for some. Deadlines: Winter May–June (changing); Summer Dec–Jan."
      ],
      "helpfulInfo": [
        "Address: Mittelweg 177, 20148 Hamburg, Germany (main campus central; multiple sites).",
        "Many consecutive Master's; some non-consecutive.",
        "International Office: Phone: +49 40 42838-0; Email: international@uni-hamburg.de or campuscenter@uni-hamburg.de."
      ],
      "tuition": "No tuition; semester fee ~€300–350.",
      "cityInfo": "Germany's second-largest city (~1.85 million), major port with cosmopolitan vibe. Historic Speicherstadt (UNESCO), Elbphilharmonie concert hall, diverse neighborhoods (St. Pauli nightlife, Altona hipster scene), lakes/rivers, international flair, festivals, and strong job market (media, logistics, tech). Very student-oriented (~100,000+ students citywide), English common.",
      "whyChoose": [
        "Founded 1919, ~43,000 students, comprehensive with strengths in social sciences, law, natural sciences, business, and humanities",
        "Highly international, many English Master's (~50+ options), urban location for internships (port/media/NGOs), no tuition, and vibrant city life"
      ]
    },
    "az": {
      "shortDescription": "1919-də qurulub; ~43.000 tələbə; sosial elmlər, hüquq, təbiət elmləri, biznes və humanitar elmlər güclü. Çox beynəlxalq; çox ingilisdilli magistr (~50+ seçim); liman/media/NGO stajları üçün şəhər; ödənişsiz; canlı şəhər həyatı.",
      "overview": "Almaniyanın ikinci ən böyük şəhəri (~1,85 milyon); əsas liman, kosmopolit mühit. Speicherstadt (UNESCO), Elbphilharmonie, St. Pauli, Altona, göllər/çaylar, festivallar, media/logistika/texnologiya iş bazarı. Şəhər üzrə ~100.000+ tələbə; ingilis dilində danışılır. 1919-də qurulub; sosial elmlər, hüquq, təbiət elmləri, biznes, humanitar elmlər; ~50+ ingilisdilli magistr; liman/media/NGO stajları; ödənişsiz.",
      "keyFacts": [
        "Ödəniş yoxdur; semestr ~€300–350.",
        "1919-də qurulub; ~43.000 tələbə; sosial elmlər, hüquq, təbiət elmləri, biznes və humanitar elmlər güclü."
      ],
      "requirements": [
        "Bir çoxu üçün uni-assist; ingilis sübutu (IELTS/TOEFL); bəziləri üçün motivasyon. Qış may–iyun (dəyişir); yay dek–yan."
      ],
      "helpfulInfo": [
        "Ünvan: Mittelweg 177, 20148 Hamburg, Almaniya (mərkəzi kampus; bir neçə yer).",
        "Bir çox ardıcıl magistr; bəziləri qeyri-ardıcıl.",
        "Beynəlxalq ofis: +49 40 42838-0; international@uni-hamburg.de və ya campuscenter@uni-hamburg.de"
      ],
      "tuition": "Ödəniş yoxdur; semestr ~€300–350.",
      "cityInfo": "Almaniyanın ikinci ən böyük şəhəri (~1,85 milyon); əsas liman. Speicherstadt (UNESCO), Elbphilharmonie, St. Pauli, Altona, göllər/çaylar, festivallar, media/logistika/texnologiya. Şəhər üzrə ~100.000+ tələbə; ingilis dilində danışılır.",
      "whyChoose": [
        "1919-də qurulub; ~43.000 tələbə; sosial elmlər, hüquq, təbiət elmləri, biznes və humanitar elmlər güclü",
        "Çox beynəlxalq; ~50+ ingilisdilli magistr; liman/media/NGO stajları üçün şəhər; ödənişsiz; canlı şəhər həyatı"
      ]
    },
    "tr": {
      "shortDescription": "1919'da kuruldu; ~43.000 öğrenci; sosyal bilimler, hukuk, fen, işletme ve beşeri bilimler güçlü. Çok uluslararası; birçok İngilizce yüksek lisans (~50+ seçenek); liman/medya/NGO stajları için kent; ücretsiz; canlı kent hayatı.",
      "overview": "Almanya'nın ikinci büyük kenti (~1,85 milyon); büyük liman, kozmopolit ortam. Speicherstadt (UNESCO), Elbphilharmonie, St. Pauli, Altona, göller/nehirler, festivaller, medya/lojistik/teknoloji iş pazarı. Kent genelinde ~100.000+ öğrenci; İngilizce yaygın. 1919'da kuruldu; sosyal bilimler, hukuk, fen, işletme, beşeri bilimler; ~50+ İngilizce yüksek lisans; liman/medya/NGO stajları; ücretsiz.",
      "keyFacts": [
        "Öğrenim yok; dönem ~€300–350.",
        "1919'da kuruldu; ~43.000 öğrenci; sosyal bilimler, hukuk, fen, işletme ve beşeri bilimler güçlü."
      ],
      "requirements": [
        "Birçokları için uni-assist; İngilizce belgesi (IELTS/TOEFL); bazıları için motivasyon. Kış Mayıs–Haziran (değişiyor); yaz Ara–Oca."
      ],
      "helpfulInfo": [
        "Adres: Mittelweg 177, 20148 Hamburg, Almanya (merkezi kampüs; birden fazla yer).",
        "Birçok ardışık yüksek lisans; bazıları ardışık olmayan.",
        "Uluslararası ofis: +49 40 42838-0; international@uni-hamburg.de veya campuscenter@uni-hamburg.de"
      ],
      "tuition": "Öğrenim yok; dönem ~€300–350.",
      "cityInfo": "Almanya'nın ikinci büyük kenti (~1,85 milyon); büyük liman. Speicherstadt (UNESCO), Elbphilharmonie, St. Pauli, Altona, göller/nehirler, festivaller, medya/lojistik/teknoloji. Kent genelinde ~100.000+ öğrenci; İngilizce yaygın.",
      "whyChoose": [
        "1919'da kuruldu; ~43.000 öğrenci; sosyal bilimler, hukuk, fen, işletme ve beşeri bilimler güçlü",
        "Çok uluslararası; ~50+ İngilizce yüksek lisans; liman/medya/NGO stajları için kent; ücretsiz; canlı kent hayatı"
      ]
    },
    "ru": {
      "shortDescription": "Основан в 1919; ~43 000 студентов; универсальный вуз с сильными направлениями: общественные науки, право, естественные науки, бизнес и гуманитарные науки. Очень интернациональный; много магистерских на английском (~50+ вариантов); город для стажировок (порт/медиа/NGO); бесплатное обучение; оживлённая городская жизнь.",
      "overview": "Второй по величине город Германии (~1,85 млн); крупный порт, космополитичная атмосфера. Speicherstadt (ЮНЕСКО), Эльбская филармония, St. Pauli, Altona, озёра/реки, фестивали, сильный рынок труда (медиа, логистика, IT). По городу ~100 000+ студентов; английский распространён. Основан в 1919; общественные науки, право, естественные науки, бизнес, гуманитарные науки; ~50+ магистерских на английском; стажировки в порту/медиа/NGO; бесплатное обучение.",
      "keyFacts": [
        "Обучение бесплатное; семестровый взнос ~€300–350.",
        "Основан в 1919; ~43 000 студентов; сильные направления: общественные науки, право, естественные науки, бизнес и гуманитарные науки."
      ],
      "requirements": [
        "Для многих uni-assist; подтверждение английского (IELTS/TOEFL); для части программ мотивация. Зимний семестр май–июнь (меняется); летний дек–янв."
      ],
      "helpfulInfo": [
        "Адрес: Mittelweg 177, 20148 Hamburg, Германия (центральный кампус; несколько площадок).",
        "Много последовательных магистерских; часть непоследовательных.",
        "Международный офис: +49 40 42838-0; international@uni-hamburg.de или campuscenter@uni-hamburg.de"
      ],
      "tuition": "Обучение бесплатное; семестровый взнос ~€300–350.",
      "cityInfo": "Второй по величине город Германии (~1,85 млн); крупный порт. Speicherstadt (ЮНЕСКО), Эльбская филармония, St. Pauli, Altona, озёра/реки, фестивали, медиа/логистика/IT. По городу ~100 000+ студентов; английский распространён.",
      "whyChoose": [
        "Основан в 1919; ~43 000 студентов; сильные направления: общественные науки, право, естественные науки, бизнес и гуманитарные науки",
        "Очень интернациональный; ~50+ магистерских на английском; город для стажировок (порт/медиа/NGO); бесплатное обучение; оживлённая городская жизнь"
      ]
    }
  },
  "philipps-universitaet-marburg": {
    "en": {
      "shortDescription": "Founded 1527 (Germany's oldest Protestant uni), ~22,000 students, strong in humanities (e.g., theology, languages), social sciences, medicine, and economics. Research-focused (e.g., Middle East studies), intimate town atmosphere, no tuition, welcoming for internationals, and scenic location for relaxed studies.",
      "overview": "Charming university town in Hesse (~80,000 people), medieval old town (half-timbered houses, Landgrafenschloss castle), fairy-tale vibe (Brothers Grimm connections), Lahn River, hills for hiking. Very student-dominated (~50% students), relaxed, affordable, safe, with cozy cafes/pubs and cultural events. Smaller/intimate feel, green/nature access. Why Choose This University?: Founded 1527 (Germany's oldest Protestant uni), ~22,000 students, strong in humanities (e.g., theology, languages), social sciences, medicine, and economics. Research-focused (e.g., Middle East studies), intimate town atmosphere, no tuition, welcoming for internationals, and scenic location for relaxed studies.",
      "keyFacts": [
        "No tuition; semester fee ~€300–350.",
        "Founded 1527 (Germany's oldest Protestant uni), ~22,000 students, strong in humanities (e.g., theology, languages), soci…"
      ],
      "requirements": [
        "Uni-assist often, English proof (IELTS/TOEFL), motivation. Deadlines: Winter July 15; Summer Jan 15."
      ],
      "helpfulInfo": [
        "Address: Biegenstraße 10, 35037 Marburg, Germany (historic upper/lower town campuses).",
        "Strong international Master's in economics/political economy.",
        "International Office: Phone: +49 6421 28-27012; Email: international@uni-marburg.de."
      ],
      "tuition": "No tuition; semester fee ~€300–350.",
      "cityInfo": "Charming university town in Hesse (~80,000 people), medieval old town (half-timbered houses, Landgrafenschloss castle), fairy-tale vibe (Brothers Grimm connections), Lahn River, hills for hiking. Very student-dominated (~50% students), relaxed, affordable, safe, with cozy cafes/pubs and cultural events. Smaller/intimate feel, green/nature access.",
      "whyChoose": [
        "Founded 1527 (Germany's oldest Protestant uni), ~22,000 students, strong in humanities (e",
        ", theology, languages), social sciences, medicine, and economics",
        "Research-focused (e",
        ", Middle East studies), intimate town atmosphere, no tuition, welcoming for internationals, and scenic location for relaxed studies"
      ]
    },
    "az": {
      "shortDescription": "1527-də qurulub (Almaniyanın ən qədim protestant universiteti); ~22.000 tələbə; humanitar (teologiya, dillər), sosial elmlər, tibb və iqtisadiyyat güclü. Tədqiqat əsaslı (məs. Yaxın Şərq); intim şəhər mühiti; ödənişsiz; beynəlxalq üçün qonaqpərvər; rahat təhsil üçün gözəl yerləşmə.",
      "overview": "Hessendə cazibədar universitet şəhəri (~80.000); orta əsər köhnə şəhər (Landgrafenschloss), Grimm nağılları əlaqəsi, Lahn çayı, təbiət. Tələbələr ~50%; rahat, münasib, təhlükəsiz; kafelər, mədəni tədbirlər. 1527-də qurulub; humanitar (teologiya, dillər), sosial elmlər, tibb, iqtisadiyyat; Yaxın Şərq tədqiqatları; ödənişsiz; intim şəhər.",
      "keyFacts": [
        "Ödəniş yoxdur; semestr ~€300–350.",
        "1527-də qurulub (Almaniyanın ən qədim protestant universiteti); ~22.000 tələbə; humanitar (teologiya, dillər), sosial elmlər, tibb, iqtisadiyyat güclü."
      ],
      "requirements": [
        "Tez-tez uni-assist; ingilis sübutu (IELTS/TOEFL); motivasyon. Qış 15 iyul; yay 15 yanvar."
      ],
      "helpfulInfo": [
        "Ünvan: Biegenstraße 10, 35037 Marburg, Almaniya (tarixi yuxarı/aşağı şəhər kampusları).",
        "İqtisadiyyat/siyasi iqtisadiyyat üzrə güclü beynəlxalq magistr.",
        "Beynəlxalq ofis: +49 6421 28-27012; international@uni-marburg.de"
      ],
      "tuition": "Ödəniş yoxdur; semestr ~€300–350.",
      "cityInfo": "Hessendə cazibədar universitet şəhəri (~80.000); orta əsər köhnə şəhər (Landgrafenschloss), Grimm əlaqəsi, Lahn, təbiət. Tələbələr ~50%; rahat, münasib, təhlükəsiz.",
      "whyChoose": [
        "1527-də qurulub (Almaniyanın ən qədim protestant universiteti); ~22.000 tələbə; humanitar (teologiya, dillər), sosial elmlər, tibb və iqtisadiyyat güclü",
        "Tədqiqat əsaslı (məs. Yaxın Şərq); intim şəhər mühiti; ödənişsiz; beynəlxalq üçün qonaqpərvər; rahat təhsil üçün gözəl yerləşmə"
      ]
    },
    "tr": {
      "shortDescription": "1527'de kuruldu (Almanya'nın en eski Protestan üniversitesi); ~22.000 öğrenci; beşeri bilimler (teoloji, diller), sosyal bilimler, tıp ve ekonomi güçlü. Araştırma odaklı (örn. Orta Doğu çalışmaları); samimi kent atmosferi; ücretsiz; uluslararasılar için misafirperver; rahat eğitim için manzaralı konum.",
      "overview": "Hesse'de çekici üniversite kenti (~80.000); ortaçağ kent (Landgrafenschloss), Grimm masal bağlantısı, Lahn Nehri, doğa. Öğrenciler ~%50; rahat, uygun, güvenli; kafeler, kültürel etkinlikler. 1527'de kuruldu; beşeri bilimler (teoloji, diller), sosyal bilimler, tıp, ekonomi; Orta Doğu araştırmaları; ücretsiz; samimi kent.",
      "keyFacts": [
        "Öğrenim yok; dönem ~€300–350.",
        "1527'de kuruldu (Almanya'nın en eski Protestan üniversitesi); ~22.000 öğrenci; beşeri bilimler (teoloji, diller), sosyal bilimler, tıp, ekonomi güçlü."
      ],
      "requirements": [
        "Sıklıkla uni-assist; İngilizce belgesi (IELTS/TOEFL); motivasyon. Kış 15 Temmuz; yaz 15 Ocak."
      ],
      "helpfulInfo": [
        "Adres: Biegenstraße 10, 35037 Marburg, Almanya (tarihi üst/alt kent kampüsleri).",
        "Ekonomi/siyasi ekonomi alanında güçlü uluslararası yüksek lisans.",
        "Uluslararası ofis: +49 6421 28-27012; international@uni-marburg.de"
      ],
      "tuition": "Öğrenim yok; dönem ~€300–350.",
      "cityInfo": "Hesse'de çekici üniversite kenti (~80.000); ortaçağ kent (Landgrafenschloss), Grimm bağlantısı, Lahn, doğa. Öğrenciler ~%50; rahat, uygun, güvenli.",
      "whyChoose": [
        "1527'de kuruldu (Almanya'nın en eski Protestan üniversitesi); ~22.000 öğrenci; beşeri bilimler (teoloji, diller), sosyal bilimler, tıp ve ekonomi güçlü",
        "Araştırma odaklı (örn. Orta Doğu çalışmaları); samimi kent atmosferi; ücretsiz; uluslararasılar için misafirperver; rahat eğitim için manzaralı konum"
      ]
    },
    "ru": {
      "shortDescription": "Основан в 1527 (старейший протестантский вуз Германии); ~22 000 студентов; сильные направления: гуманитарные науки (теология, языки), общественные науки, медицина и экономика. Исследовательская ориентация (напр. ближневосточные исследования); камерная атмосфера города; бесплатное обучение; гостеприимная среда для иностранцев; живописное расположение для спокойной учёбы.",
      "overview": "Очаровательный университетский город в Гессене (~80 000); средневековый центр (Landgrafenschloss), связь с братьями Гримм, река Лан, природа. Около 50% студентов; спокойно, доступно, безопасно; кафе, культурные события. Основан в 1527; гуманитарные науки (теология, языки), общественные науки, медицина, экономика; ближневосточные исследования; бесплатное обучение; камерный город.",
      "keyFacts": [
        "Обучение бесплатное; семестровый взнос ~€300–350.",
        "Основан в 1527 (старейший протестантский вуз Германии); ~22 000 студентов; сильные направления: гуманитарные науки (теология, языки), общественные науки, медицина и экономика."
      ],
      "requirements": [
        "Часто uni-assist; подтверждение английского (IELTS/TOEFL); мотивация. Зимний семестр 15 июля; летний 15 января."
      ],
      "helpfulInfo": [
        "Адрес: Biegenstraße 10, 35037 Marburg, Германия (исторические кампусы верхнего/нижнего города).",
        "Сильная международная магистратура по экономике/политической экономии.",
        "Международный офис: +49 6421 28-27012; international@uni-marburg.de"
      ],
      "tuition": "Обучение бесплатное; семестровый взнос ~€300–350.",
      "cityInfo": "Очаровательный университетский город в Гессене (~80 000); средневековый центр (Landgrafenschloss), связь с Гримм, река Лан, природа. Около 50% студентов; спокойно, доступно, безопасно.",
      "whyChoose": [
        "Основан в 1527 (старейший протестантский вуз Германии); ~22 000 студентов; сильные направления: гуманитарные науки (теология, языки), общественные науки, медицина и экономика",
        "Исследовательская ориентация (напр. ближневосточные исследования); камерная атмосфера города; бесплатное обучение; гостеприимная среда для иностранцев; живописное расположение для спокойной учёбы"
      ]
    }
  },
  "ludwig-maximilians-universitaet-muenchen": {
    "en": {
      "shortDescription": "Founded 1472, one of Germany's oldest/largest (~50,000 students), top-ranked (often top 50–100 globally QS/THE), Excellence University status with strong research (life sciences, physics, humanities, economics). Comprehensive \"universitas\" (all fields except engineering—TU Munich covers that).",
      "overview": "Bavaria's capital and one of Germany's most prosperous, high-quality-of-life cities (~1.6 million people). Iconic sights (Marienplatz, English Garden, Nymphenburg Palace, BMW Welt), world-class museums (Pinakothek trio, Deutsches Museum), beer gardens/Oktoberfest, vibrant cultural scene (theater, opera, film festivals), Alps nearby for day trips (hiking/skiing), tech/startup hub (UnternehmerTUM), and international flair (many expats). Student-heavy (~100,000+ students citywide), safe, clean, efficient public transport (MVV network). Extremely expensive city—highest living costs in Germany. Why Choose This University?: Founded 1472, one of Germany's oldest/largest (~50,000 students), top-ranked (often top 50–100 globally QS/THE), Excellence University status with strong research (life sciences, physics, humanities, economics). Comprehensive \"universitas\" (all fields except engineering—TU Munich covers that). Highly international (many English Master's), vibrant Munich location for culture/jobs (BMW, Siemens, startups), no tuition fees (public uni), excellent libraries/facilities, and alumni network (Nobel winners, thinkers like Habermas). Ideal for research-oriented studies in sciences/humanities/social sciences; competitive admission for popular fields (e.g., medicine/psychology NC-restricted).",
      "keyFacts": [
        "Founded 1472, one of Germany's oldest/largest (~50,000 students), top-ranked (often top 50–100 globally QS/THE), Excelle…"
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
      "cityInfo": "Bavaria's capital and one of Germany's most prosperous, high-quality-of-life cities (~1.6 million people). Iconic sights (Marienplatz, English Garden, Nymphenburg Palace, BMW Welt), world-class museums (Pinakothek trio, Deutsches Museum), beer gardens/Oktoberfest, vibrant cultural scene (theater, opera, film festivals), Alps nearby for day trips (hiking/skiing), tech/startup hub (UnternehmerTUM), and international flair (many expats).",
      "whyChoose": [
        "Founded 1472, one of Germany's oldest/largest (~50,000 students), top-ranked (often top 50–100 globally QS/THE), Excellence University status with strong research (life sciences, physics, humanities, economics)",
        "Comprehensive \"universitas\" (all fields except engineering—TU Munich covers that)",
        "Highly international (many English Master's), vibrant Munich location for culture/jobs (BMW, Siemens, startups), no tuition fees (public uni), excellent libraries/facilities, and alumni network (Nobel winners, thinkers like Habermas)",
        "Ideal for research-oriented studies in sciences/humanities/social sciences",
        "Competitive admission for popular fields (e.g., medicine/psychology NC-restricted)"
      ]
    },
    "az": {
      "shortDescription": "1472-də qurulub; Almaniyanın ən qədim və ən böyüklərindən biri (~50.000 tələbə); reytinqdə yüksək (QS/THE-da tez-tez top 50–100); Ekselensiya Universiteti statusu; güclü tədqiqat (yaşam elmləri, fizika, humanitar, iqtisadiyyat). Tam \"universitas\" (mühəndislik istisna—onu TU Münhen örtür).",
      "overview": "Bavariyanın paytaxtı və Almaniyanın ən rifahlı şəhərlərindən biri (~1,6 milyon). Marienplatz, English Garden, Nymphenburg, BMW Welt, Pinakothek, Deutsches Museum, pivə bağları/Oktoberfest, teatr/opera/film festivalları, Alpə yaxın, UnternehmerTUM; şəhərdə ~100.000+ tələbə; təhlükəsiz, təmiz, MVV nəqliyyat. Yaşayış Almaniyada ən bahalı. 1472-də qurulub; Ekselensiya; yaşam elmləri, fizika, humanitar, iqtisadiyyat; çox ingilisdilli magistr; Münhen mədəniyyət/iş (BMW, Siemens, startaplar); ödənişsiz; kitabxana/alumni (Nobel, Habermas); tədqiqat üçün ideal; məşhur sahələr üçün rəqabətli qəbul (tibb/psixologiya NC).",
      "keyFacts": [
        "1472-də qurulub; ~50.000 tələbə; QS/THE-da tez-tez top 50–100; Ekselensiya statusu; yaşam elmləri, fizika, humanitar, iqtisadiyyat güclü."
      ],
      "requirements": [
        "Tanınmış attestat (bakalavr üçün—tez-tez uni-assist VPD; magistr üçün bakalavr—ekvivalentlik yoxlaması).",
        "İngilis: IELTS 6.5+/TOEFL 90+ (ingilisdilli proqramlar üçün).",
        "Bəzən motivasiya məktubu/CV/istinadlar; bəzi magistrlar üçün uyğunluq testi/müsahibə.",
        "International Office (zulassung.international@lmu.de) və ya MoveIN: qış üçün tez-tez 15 iyul; yay 15 yanvar; proqrama görə. Qeyri-AB: viza üçün ~€11.904/il sübut (bloklanmış hesab).",
        "Ödəniş yoxdur; semestr ~€85–150 (tələbə ittifaqı, əsas nəqliyyat—2026 yaydan Bavariyada ~€97)."
      ],
      "helpfulInfo": [
        "Ünvan: Geschwister-Scholl-Platz 1, 80539 Münhen, Almaniya (Maxvorstadt mərkəzi kampus; yaşam elmləri üçün Martinsried HighTechCampus daxil bir neçə yer).",
        "Beynəlxalq ofis/Qəbul: +49 89 2180-2823; zulassung.international@lmu.de (qəbul) və ya international@lmu.de (ümumi). Məsləhət/Zoom; saytda fənn üzrə kontaktlar."
      ],
      "tuition": "Ödəniş yoxdur; semestr ~€85–150 (2026 yaydan Bavariyada ~€97).",
      "cityInfo": "Bavariyanın paytaxtı (~1,6 milyon); Marienplatz, English Garden, Nymphenburg, BMW Welt, Pinakothek, Deutsches Museum, pivə bağları/Oktoberfest, teatr/opera/festivallar, Alpə yaxın, UnternehmerTUM; şəhərdə ~100.000+ tələbə; yaşayış Almaniyada ən bahalı.",
      "whyChoose": [
        "1472-də qurulub; Almaniyanın ən qədim/böyüklərindən biri (~50.000 tələbə); QS/THE top 50–100; Ekselensiya; yaşam elmləri, fizika, humanitar, iqtisadiyyat güclü",
        "Tam \"universitas\" (mühəndislik istisna—TU Münhen örtür)",
        "Çox beynəlxalq (çox ingilisdilli magistr); Münhen mədəniyyət/iş (BMW, Siemens, startaplar); ödənişsiz; əla kitabxana/obyektlər; alumni (Nobel, Habermas)",
        "Elm/humanitar/sosial elmlərdə tədqiqat üçün ideal",
        "Məşhur sahələr üçün rəqabətli qəbul (məs. tibb/psixologiya NC məhdud)"
      ]
    },
    "tr": {
      "shortDescription": "1472'de kuruldu; Almanya'nın en eski ve en büyüklerinden biri (~50.000 öğrenci); sıralamada üst sıralarda (QS/THE'da sıklıkla top 50–100); Mükemmellik Üniversitesi statüsü; güçlü araştırma (yaşam bilimleri, fizik, beşeri, ekonomi). Kapsamlı \"universitas\" (mühendislik hariç—TU Münih onu kapsar).",
      "overview": "Bavyera'nın başkenti ve Almanya'nın en refahlı şehirlerinden biri (~1,6 milyon). Marienplatz, English Garden, Nymphenburg, BMW Welt, Pinakothek, Deutsches Museum, bira bahçeleri/Oktoberfest, tiyatro/opera/film festivalleri, Alplere yakın, UnternehmerTUM; kentte ~100.000+ öğrenci; güvenli, temiz, MVV ulaşım. Yaşam maliyeti Almanya'da en yüksek. 1472'de kuruldu; Mükemmellik; yaşam bilimleri, fizik, beşeri, ekonomi; birçok İngilizce yüksek lisans; Münih kültür/iş (BMW, Siemens, startuplar); ücretsiz; kütüphane/alumni (Nobel, Habermas); araştırma için ideal; popüler alanlarda rekabetçi kabul (tıp/psikoloji NC).",
      "keyFacts": [
        "1472'de kuruldu; ~50.000 öğrenci; QS/THE'da sıklıkla top 50–100; Mükemmellik statüsü; yaşam bilimleri, fizik, beşeri, ekonomi güçlü."
      ],
      "requirements": [
        "Tanınmış diploma (lisans için—sıklıkla uni-assist VPD; yüksek lisans için lisans—denklik kontrolü).",
        "İngilizce: IELTS 6.5+/TOEFL 90+ (İngilizce programlar için).",
        "Bazen motivasyon mektubu/CV/referanslar; bazı yüksek lisanslar için yeterlilik testi/mülakat.",
        "International Office (zulassung.international@lmu.de) veya MoveIN: kış için sıklıkla 15 Temmuz; yaz 15 Ocak; programa göre. AB dışı: vize için ~€11.904/yıl kanıt (bloke hesap).",
        "Öğrenim yok; dönem ~€85–150 (öğrenci birliği, temel ulaşım—2026 yazdan Bavyera'da ~€97)."
      ],
      "helpfulInfo": [
        "Adres: Geschwister-Scholl-Platz 1, 80539 Münih, Almanya (Maxvorstadt merkezi kampüs; yaşam bilimleri için Martinsried HighTechCampus dahil birden fazla yer).",
        "Uluslararası ofis/Kabul: +49 89 2180-2823; zulassung.international@lmu.de (kabul) veya international@lmu.de (genel). Danışmanlık/Zoom; sitede ders bazlı iletişim."
      ],
      "tuition": "Öğrenim yok; dönem ~€85–150 (2026 yazdan Bavyera'da ~€97).",
      "cityInfo": "Bavyera'nın başkenti (~1,6 milyon); Marienplatz, English Garden, Nymphenburg, BMW Welt, Pinakothek, Deutsches Museum, bira bahçeleri/Oktoberfest, tiyatro/opera/festivaller, Alplere yakın, UnternehmerTUM; kentte ~100.000+ öğrenci; yaşam Almanya'da en pahalı.",
      "whyChoose": [
        "1472'de kuruldu; Almanya'nın en eski/büyüklerinden biri (~50.000 öğrenci); QS/THE top 50–100; Mükemmellik; yaşam bilimleri, fizik, beşeri, ekonomi güçlü",
        "Kapsamlı \"universitas\" (mühendislik hariç—TU Münih kapsar)",
        "Çok uluslararası (birçok İngilizce yüksek lisans); Münih kültür/iş (BMW, Siemens, startuplar); ücretsiz; mükemmel kütüphane/tesisler; alumni (Nobel, Habermas)",
        "Fen/beşeri/sosyal bilimlerde araştırma odaklı eğitim için ideal",
        "Popüler alanlarda rekabetçi kabul (örn. tıp/psikoloji NC kısıtlı)"
      ]
    },
    "ru": {
      "shortDescription": "Основан в 1472; один из старейших и крупнейших вузов Германии (~50 000 студентов); высокие рейтинги (QS/THE часто top 50–100); статус университета совершенства; сильные исследования (науки о жизни, физика, гуманитарные, экономика). Универсальный «universitas» (кроме инженерии—её покрывает TU München).",
      "overview": "Столица Баварии и один из самых благополучных городов Германии (~1,6 млн). Мариенплац, Английский сад, Нимфенбург, BMW Welt, Пинакотеки, Немецкий музей, пивные сады/Октоберфест, театр/опера/кинофестивали, близость Альп, UnternehmerTUM; в городе ~100 000+ студентов; безопасно, чисто, транспорт MVV. Самые высокие расходы на жизнь в Германии. Основан в 1472; статус совершенства; науки о жизни, физика, гуманитарные, экономика; много магистерских на английском; Мюнхен—культура/работа (BMW, Siemens, стартапы); бесплатное обучение; отличные библиотеки/инфраструктура; alumni (Нобелевские, Хабермас); идеально для исследовательской учёбы; конкурсный приём на популярные направления (медицина/психология NC).",
      "keyFacts": [
        "Основан в 1472; ~50 000 студентов; QS/THE часто top 50–100; статус совершенства; сильные направления: науки о жизни, физика, гуманитарные, экономика."
      ],
      "requirements": [
        "Признанная квалификация (для бакалавриата—часто через uni-assist VPD; для магистратуры—диплом бакалавра, проверка эквивалентности).",
        "Английский: IELTS 6.5+/TOEFL 90+ (для программ на английском).",
        "Иногда мотивационное письмо/CV/рекомендации; для части магистерских—тест/собеседование.",
        "International Office (zulassung.international@lmu.de) или MoveIN: зимний семестр часто 15 июля; летний 15 января; по программе. Не ЕС: подтверждение средств ~€11 904/год (блокированный счёт) для визы.",
        "Обучение бесплатное; семестровый взнос ~€85–150 (студсоюз, базовый проезд—с лета 2026 в Баварии ~€97)."
      ],
      "helpfulInfo": [
        "Адрес: Geschwister-Scholl-Platz 1, 80539 München, Германия (главный кампус в Максфорштадте, центр; несколько площадок, включая HighTechCampus Martinsried для наук о жизни).",
        "Международный офис/Приём: +49 89 2180-2823; zulassung.international@lmu.de (приём) или international@lmu.de (общие). Консультации/Zoom; на сайте контакты по предметам."
      ],
      "tuition": "Обучение бесплатное; семестровый взнос ~€85–150 (с лета 2026 в Баварии ~€97).",
      "cityInfo": "Столица Баварии (~1,6 млн); Мариенплац, Английский сад, Нимфенбург, BMW Welt, Пинакотеки, Немецкий музей, пивные сады/Октоберфест, театр/опера/фестивали, близость Альп, UnternehmerTUM; в городе ~100 000+ студентов; самые высокие расходы на жизнь в Германии.",
      "whyChoose": [
        "Основан в 1472; один из старейших/крупнейших вузов Германии (~50 000 студентов); QS/THE top 50–100; статус совершенства; сильные исследования (науки о жизни, физика, гуманитарные, экономика)",
        "Универсальный «universitas» (все области кроме инженерии—её покрывает TU München)",
        "Очень интернациональный (много магистерских на английском); Мюнхен—культура/работа (BMW, Siemens, стартапы); бесплатное обучение; отличные библиотеки/инфраструктура; сеть выпускников (Нобелевские, Хабермас)",
        "Идеально для исследовательской учёбы в науках/гуманитарных/общественных науках",
        "Конкурсный приём на популярные направления (напр. медицина/психология с NC)"
      ]
    }
  },
  "charles-university-prague": {
    "en": {
      "shortDescription": "Oldest university in Central Europe (founded 1348), ~50,000 students, top-ranked in region. Comprehensive offerings (over 850 programs, 200+ in foreign languages), strong in medicine, humanities, sciences. Highly international (~12,000 foreign students), Prague's cultural immersion, affordable tuition (free in Czech; English programs €1,000–24,000/year).",
      "overview": "Prague (~1.3 million people) is one of Europe's most beautiful capitals: historic old town (UNESCO), Prague Castle, Charles Bridge, Vltava River, vibrant cafes/pubs, art/music scene, affordable yet lively student life (~100,000+ students citywide), safe, walkable, with excellent public transport (metro/trams) and easy European travel. Why Choose This University?: Historic prestige (oldest in Central Europe, alumni include Kafka, Einstein connections), top-ranked in region, comprehensive offerings (over 850 programs, 200+ in foreign languages), strong research (e.g., medicine, humanities, sciences), highly international (~12,000 foreign students from 140+ countries), Prague's unbeatable cultural immersion (history/art/lifestyle), affordable tuition compared to Western Europe, scholarships/reductions available (merit-based after year 1, government for developing countries), and vibrant student life in a safe, beautiful city. Ideal for medicine/humanities/social sciences with English options and no/low fees in Czech (free for all if you learn Czech).",
      "keyFacts": [
        "Founded 1348, oldest in Central Europe; ~50,000 students; 17 faculties; top 200–300 globally (QS/THE)",
        "Free tuition in Czech (all nationalities); English/foreign-language: €1,000–24,000/year (median ~€6,000)",
        "Highly international (~12,000 foreign students from 140+ countries)"
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
      "tuition": "Free in Czech (all nationalities); English/foreign-language: €1,000–24,000/year (median ~€6,000).",
      "cityInfo": "Prague (~1.3 million): historic old town (UNESCO), Prague Castle, Charles Bridge; vibrant, affordable student life (~100,000+ citywide); living ~€550–1,000/month.",
      "whyChoose": [
        "Oldest university in Central Europe (1348), top-ranked in region, comprehensive offerings (over 850 programs, 200+ in foreign languages)",
        "Highly international (~12,000 foreign students), Prague's cultural immersion, affordable tuition (free in Czech; English programs with scholarships)",
        "Ideal for medicine/humanities/social sciences with English options"
      ]
    },
    "az": {
      "shortDescription": "Mərkəzi Avropanın ən qədim universiteti (1348); ~50.000 tələbə; regionda yüksək reytinq. 850-dən çox proqram (200+-ü xarici dillərdə); tibb, humanitar, elm güclü. Çox beynəlxalq (~12.000 xarici tələbə); Praqa mədəni mühiti; münasib ödəniş (çex dilində pulsuz; ingilisdilli proqramlar €1.000–24.000/il).",
      "overview": "Praqa (~1,3 milyon) Avropanın ən gözəl paytaxtlarından biri: tarixi köhnə şəhər (UNESCO), Praqa qəsri, Karl körpüsü, Vltava, kafelər/pablar, incəsənət/musiqi, münasib və canlı tələbə həyatı (~100.000+ şəhərdə), təhlükəsiz, metrotram. Niyə bu universitet?: Tarixi prestij (Mərkəzi Avropada ən qədim; Kafka, Eynşteyn əlaqəsi); regionda yüksək; 850+ proqram (200+ xarici dildə); tibb, humanitar, elm; ~12.000 xarici tələbə (140+ ölkə); Praqa mədəni mühiti; Qərbi Avropaya nisbətən münasib ödəniş; təqaüdlər; təhlükəsiz, gözəl şəhərdə canlı tələbə həyatı. Tibb/humanitar/sosial elmlər üçün ingilis seçimləri və çex dilində pulsuz/aşağı ödənişlə ideal.",
      "keyFacts": [
        "1348-də qurulub, Mərkəzi Avropada ən qədim; ~50.000 tələbə; 17 fakültə; QS/THE-da top 200–300",
        "Çex dilində pulsuz (bütün milliyətlər); ingilis/xarici dil: €1.000–24.000/il (median ~€6.000)",
        "Çox beynəlxalq (~12.000 xarici tələbə, 140+ ölkədən)"
      ],
      "requirements": [
        "Tanınmış əvvəlki attestat (bakalavr üçün məktəb, magistr üçün bakalavr; CIMEA və ya fakültə ilə ekvivalentlik).",
        "İngilis: tez-tez IELTS/TOEFL (B2–C1; proqrama görə).",
        "Bir çoxu üçün qəbul imtahanı/motivasiya məktubu/CV; bəziləri sənəd əsaslı.",
        "Fakültə portalları və ya mərkəzi sistem; son tarixlər fakültə/proqrama görə (ingilisdilli üçün fev–iyun/iyul; qeyri-AB viza üçün daha erkən). Müraciət ~€60–150.",
        "Çex dilində pulsuz (bütün milliyətlər); ingilis/xarici dil: €1.000–24.000/il (median ~€6.000). Endirimi/təqaüdlər (merit, inkişaf edən ölkələr)."
      ],
      "helpfulInfo": [
        "Ünvan: Ovocný trh 560/5, 116 36 Prague 1, Çexiya (tarixi mərkəz; fakültələr şəhər üzrə).",
        "Əlaqə: +420 224 491 850; info@cuni.cz. www.cuni.cz/UKEN-1.html; beynəlxalq üçün studycharles.cz"
      ],
      "tuition": "Çex dilində pulsuz (bütün milliyətlər); ingilis/xarici dil: €1.000–24.000/il (median ~€6.000).",
      "cityInfo": "Praqa (~1,3 milyon): tarixi köhnə şəhər (UNESCO), Praqa qəsri, Karl körpüsü; canlı, münasib tələbə həyatı (~100.000+ şəhərdə); yaşayış ~€550–1.000/ay.",
      "whyChoose": [
        "Mərkəzi Avropanın ən qədim universiteti (1348); regionda yüksək; 850+ proqram (200+ xarici dildə)",
        "Çox beynəlxalq (~12.000 xarici tələbə); Praqa mədəni mühiti; münasib ödəniş (çexdə pulsuz; ingilisdilli proqramlarda təqaüdlər)",
        "Tibb/humanitar/sosial elmlər üçün ingilis seçimləri ilə ideal"
      ]
    },
    "tr": {
      "shortDescription": "Orta Avrupa'nın en eski üniversitesi (1348); ~50.000 öğrenci; bölgede üst sıralarda. 850'den fazla program (200+'ü yabancı dillerde); tıp, beşeri, fen güçlü. Çok uluslararası (~12.000 yabancı öğrenci); Prag kültürel ortamı; uygun öğrenim (Çekçe'de ücretsiz; İngilizce programlar €1.000–24.000/yıl).",
      "overview": "Prag (~1,3 milyon) Avrupa'nın en güzel başkentlerinden biri: tarihi eski kent (UNESCO), Prag Kalesi, Charles Köprüsü, Vltava, kafeler/biralar, sanat/müzik, uygun ve canlı öğrenci hayatı (~100.000+ kentte), güvenli, metro/tramvay. Neden bu üniversite?: Tarihi prestij (Orta Avrupa'nın en eskisi; Kafka, Einstein bağlantısı); bölgede üst sıralarda; 850+ program (200+ yabancı dilde); tıp, beşeri, fen; ~12.000 yabancı öğrenci (140+ ülke); Prag kültürel ortamı; Batı Avrupa'ya göre uygun öğrenim; burslar; güvenli, güzel kentte canlı öğrenci hayatı. Tıp/beşeri/sosyal bilimler için İngilizce seçenekler ve Çekçe'de ücretsiz/düşük ücretle ideal.",
      "keyFacts": [
        "1348'de kuruldu, Orta Avrupa'nın en eskisi; ~50.000 öğrenci; 17 fakülte; QS/THE'da top 200–300",
        "Çekçe'de ücretsiz (tüm uyruklar); İngilizce/yabancı dil: €1.000–24.000/yıl (medyan ~€6.000)",
        "Çok uluslararası (~12.000 yabancı öğrenci, 140+ ülkeden)"
      ],
      "requirements": [
        "Tanınmış önceki diploma (lisans için lise, yüksek lisans için lisans; CIMEA veya fakülte ile denklik).",
        "İngilizce: sıklıkla IELTS/TOEFL (B2–C1; programa göre).",
        "Birçok program için giriş sınavı/motivasyon mektubu/CV; bazıları belgeye dayalı.",
        "Fakülte portalları veya merkezi sistem; son başvuru tarihleri fakülte/programa göre (İngilizce için Şub–Haz/Tem; AB dışı vize için daha erken). Başvuru ~€60–150.",
        "Çekçe'de ücretsiz (tüm uyruklar); İngilizce/yabancı dil: €1.000–24.000/yıl (medyan ~€6.000). İndirimler/burslar (başarı, gelişmekte olan ülkeler)."
      ],
      "helpfulInfo": [
        "Adres: Ovocný trh 560/5, 116 36 Prague 1, Çek Cumhuriyeti (tarihi merkez; fakülteler kent genelinde).",
        "İletişim: +420 224 491 850; info@cuni.cz. www.cuni.cz/UKEN-1.html; uluslararasılar için studycharles.cz"
      ],
      "tuition": "Çekçe'de ücretsiz (tüm uyruklar); İngilizce/yabancı dil: €1.000–24.000/yıl (medyan ~€6.000).",
      "cityInfo": "Prag (~1,3 milyon): tarihi eski kent (UNESCO), Prag Kalesi, Charles Köprüsü; canlı, uygun öğrenci hayatı (~100.000+ kentte); yaşam ~€550–1.000/ay.",
      "whyChoose": [
        "Orta Avrupa'nın en eski üniversitesi (1348); bölgede üst sıralarda; 850+ program (200+ yabancı dilde)",
        "Çok uluslararası (~12.000 yabancı öğrenci); Prag kültürel ortamı; uygun öğrenim (Çekçe'de ücretsiz; İngilizce programlarda burslar)",
        "Tıp/beşeri/sosyal bilimler için İngilizce seçeneklerle ideal"
      ]
    },
    "ru": {
      "shortDescription": "Старейший вуз Центральной Европы (1348); ~50 000 студентов; высокие рейтинги в регионе. Более 850 программ (200+ на иностранных языках); сильные направления: медицина, гуманитарные, естественные науки. Очень интернациональный (~12 000 иностранных студентов); культурная среда Праги; доступная плата (на чешском бесплатно; программы на английском €1 000–24 000/год).",
      "overview": "Прага (~1,3 млн) — одна из красивейших столиц Европы: исторический центр (ЮНЕСКО), Пражский град, Карлов мост, Влтава, кафе/пабы, искусство/музыка, доступная и оживлённая студенческая жизнь (~100 000+ в городе), безопасно, метро/трамвай. Почему этот вуз?: Исторический престиж (старейший в Центральной Европе; связи с Кафкой, Эйнштейном); высокие рейтинги в регионе; 850+ программ (200+ на иностранных языках); медицина, гуманитарные, науки; ~12 000 иностранных студентов (140+ стран); неповторимая культурная среда Праги; по сравнению с Западной Европой доступная плата; стипендии; оживлённая студенческая жизнь в безопасном, красивом городе. Идеально для медицины/гуманитарных/общественных наук с программами на английском и бесплатно/низкой платой на чешском.",
      "keyFacts": [
        "Основан в 1348, старейший в Центральной Европе; ~50 000 студентов; 17 факультетов; топ 200–300 в мире (QS/THE)",
        "Бесплатно на чешском (все национальности); на английском/иностранном: €1 000–24 000/год (медиана ~€6 000)",
        "Очень интернациональный (~12 000 иностранных студентов из 140+ стран)"
      ],
      "requirements": [
        "Признанная предыдущая квалификация (школа для бакалавриата, бакалавр для магистратуры; проверка эквивалентности через CIMEA или факультет).",
        "Английский: часто IELTS/TOEFL (уровень B2–C1; по программе).",
        "Для многих вступительный экзамен/мотивационное письмо/CV; часть — на основе документов.",
        "Через порталы факультетов или центральную систему; сроки по факультету/программе (фев–июнь/июль для английского; раньше для визы не-ЕС). Взнос ~€60–150.",
        "На чешском бесплатно (все национальности); на английском/иностранном: €1 000–24 000/год (медиана ~€6 000). Скидки/стипендии (успеваемость, развивающиеся страны)."
      ],
      "helpfulInfo": [
        "Адрес: Ovocný trh 560/5, 116 36 Prague 1, Чехия (исторический центр; факультеты по городу).",
        "Контакт: +420 224 491 850; info@cuni.cz. www.cuni.cz/UKEN-1.html; для иностранцев studycharles.cz"
      ],
      "tuition": "На чешском бесплатно (все национальности); на английском/иностранном: €1 000–24 000/год (медиана ~€6 000).",
      "cityInfo": "Прага (~1,3 млн): исторический центр (ЮНЕСКО), Пражский град, Карлов мост; оживлённая, доступная студенческая жизнь (~100 000+ в городе); расходы ~€550–1 000/мес.",
      "whyChoose": [
        "Старейший вуз Центральной Европы (1348); высокие рейтинги в регионе; более 850 программ (200+ на иностранных языках)",
        "Очень интернациональный (~12 000 иностранных студентов); культурная среда Праги; доступная плата (на чешском бесплатно; программы на английском со стипендиями)",
        "Идеально для медицины/гуманитарных/общественных наук с программами на английском"
      ]
    }
  },
  "university-of-bologna": {
    "en": {
      "shortDescription": "World's oldest university in continuous operation (1088); ~90,000 students; top-ranked in Italy (~top 150–200). Strong in humanities, law, sciences, engineering, medicine; many English programmes; income-based tuition.",
      "overview": "Bologna is Italy's culinary and university capital (~390,000), with a historic centre (medieval towers, UNESCO porticoes), lively piazzas, and ~100,000+ students. Living ~€800–1,200/month (affordable vs Rome/Milan). Unibo offers over 260 programmes (200+ in foreign languages), ~10,000 international students, and strong English options in business, AI, engineering, and humanities. Tuition is income-based (from ~€157/year); scholarships and exemptions available.",
      "keyFacts": [
        "Founded 1088; ~90,000 students; top 150–200 globally; over 260 programmes (200+ in foreign languages).",
        "Tuition: income-based (~€157–€3,000/year); scholarships/exemptions for merit and developing countries.",
        "Living: ~€800–1,200/month. Strong English Bachelor's and Master's (e.g. Business, AI, International Relations, Economics)."
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
      "cityInfo": "Bologna: Italy's culinary capital (~390,000); historic centre (UNESCO), medieval towers, piazzas, markets; ~100,000+ students; affordable living.",
      "whyChoose": [
        "World's oldest university (1088); ~90,000 students; top-ranked in Italy; strong in humanities, law, sciences, engineering, medicine.",
        "Over 260 programmes, 200+ in foreign languages; ~10,000 international students; research excellence in AI, innovation, classics.",
        "Income-based tuition; scholarships for merit and developing countries; Bologna's vibrant student life and central location."
      ]
    },
    "az": {
      "shortDescription": "Dünyanın ən qədim davam edən universiteti (1088); ~90.000 tələbə; İtaliyada üst sıralarda (~150–200). Humanitar, hüquq, elm, mühəndislik, tibb güclü; çox ingilisdilli proqram; gəlir əsaslı ödəniş.",
      "overview": "Bologna İtaliyanın mətbəx və universitet paytaxtıdır (~390.000); tarixi mərkəz (orta əsər qüllələri, UNESCO portikları), canlı meydanlar, ~100.000+ tələbə. Yaşayış ~€800–1.200/ay (Roma/Milana nisbətən münasib). Unibo 260-dan çox proqram (200+-ı xarici dillərdə), ~10.000 beynəlxalq tələbə, biznes, AI, mühəndislik və humanitar elmlərdə güclü ingilisdilli seçimlər təklif edir. Ödəniş gəlir əsaslıdır (~€157/ildən); təqaüd və güzəştlər mövcuddur.",
      "keyFacts": [
        "1088-də qurulub; ~90.000 tələbə; dünya reytinqlərində 150–200; 260-dan çox proqram (200+-ı xarici dillərdə).",
        "Ödəniş: gəlir əsaslı (~€157–€3.000/il); merit və inkişaf edən ölkələr üçün təqaüd/güzəştlər.",
        "Yaşayış: ~€800–1.200/ay. Güclü ingilisdilli bakalavr və magistr (məs. Biznes, AI, Beynəlxalq münasibətlər, İqtisadiyyat)."
      ],
      "requirements": [
        "Tanınmış attestat (bakalavr üçün məktəb — CIMEA və ya universitet yoxlaması; magistr üçün bakalavr).",
        "İngilis: tez-tez IELTS/TOEFL tələb olunur (B2–C1; proqrama görə; PTE, Cambridge qəbul olunur).",
        "Bəzən motivasyon məktubu/CV; bəziləri üçün daxilolma imtahanı/müsahibə/test (məs. biznes üçün GRE/GMAT).",
        "Qeyri-AB: universitet portalı və ya Universitaly (viza üçün əvvəlcədən qeydiyyat); proqrama görə müraciət müddətləri; müraciət haqqı ~€50–100.",
        "Ödəniş: gəlir əsaslı (ISEE): minimum ~€157 (ilk hissə) + maks ~€3.000/il; təqaüd/güzəştlər mövcuddur."
      ],
      "helpfulInfo": [
        "Ünvan: Via Zamboni 33, 40126 Bologna, İtaliya (tarixi mərkəz; Cesena, Forlì, Ravenna, Rimini kampusları).",
        "Əlaqə: +39 051 208 8111; internationaldesk@unibo.it və ya info@unibo.it. Rəsmi sayt: www.unibo.it/en"
      ],
      "cityInfo": "Bologna: İtaliyanın mətbəx paytaxtı (~390.000); tarixi mərkəz (UNESCO), orta əsər qüllələri, meydanlar, bazarlar; ~100.000+ tələbə; münasib yaşayış.",
      "whyChoose": [
        "Dünyanın ən qədim universiteti (1088); ~90.000 tələbə; İtaliyada üst sıralarda; humanitar, hüquq, elm, mühəndislik, tibb güclü.",
        "260-dan çox proqram, 200+-ı xarici dillərdə; ~10.000 beynəlxalq tələbə; AI, innovasiya, klassikada tədqiqat əlamətdarı.",
        "Gəlir əsaslı ödəniş; merit və inkişaf edən ölkələr üçün təqaüdlər; Bolognanın canlı tələbə həyatı və mərkəzi yerləşməsi."
      ]
    },
    "tr": {
      "shortDescription": "Kesintisiz faaliyette dünyanın en eski üniversitesi (1088); ~90.000 öğrenci; İtalya'da üst sıralarda (~150–200). Beşeri bilimler, hukuk, fen, mühendislik, tıp güçlü; birçok İngilizce program; gelire dayalı öğrenim.",
      "overview": "Bologna İtalya'nın mutfak ve üniversite başkentidir (~390.000); tarihi merkez (ortaçağ kuleleri, UNESCO revakları), canlı meydanlar, ~100.000+ öğrenci. Yaşam aylık ~€800–1.200 (Roma/Milano'ya göre uygun). Unibo 260'tan fazla program (200+'ı yabancı dillerde), ~10.000 uluslararası öğrenci, işletme, yapay zeka, mühendislik ve beşeri bilimlerde güçlü İngilizce seçenekler sunar. Öğrenim gelire dayalı (~€157/yıldan); burs ve muafiyetler mevcut.",
      "keyFacts": [
        "1088'de kuruldu; ~90.000 öğrenci; küresel 150–200; 260'tan fazla program (200+'ı yabancı dillerde).",
        "Öğrenim: gelire dayalı (~€157–€3.000/yıl); liyakat ve gelişmekte olan ülkeler için burs/muafiyet.",
        "Yaşam: aylık ~€800–1.200. Güçlü İngilizce lisans ve yüksek lisans (örn. İşletme, yapay zeka, uluslararası ilişkiler, ekonomi)."
      ],
      "requirements": [
        "Tanınmış diploma (lisans için lise — CIMEA veya üniversite denkliği; yüksek lisans için lisans).",
        "İngilizce: sıklıkla IELTS/TOEFL gerekli (B2–C1; programa özel; PTE, Cambridge kabul).",
        "Bazen motivasyon mektubu/CV; bazıları için giriş sınavı/mülakat/test (örn. işletme için GRE/GMAT).",
        "AB dışı: üniversite portalı veya Universitaly (vize için ön kayıt); programa göre son başvuru; başvuru ücreti ~€50–100.",
        "Öğrenim: gelire dayalı (ISEE): minimum ~€157 (ilk taksit) + maks ~€3.000/yıl; burs/muafiyet mevcut."
      ],
      "helpfulInfo": [
        "Adres: Via Zamboni 33, 40126 Bologna, İtalya (tarihi merkez; Cesena, Forlì, Ravenna, Rimini kampüsleri).",
        "İletişim: +39 051 208 8111; internationaldesk@unibo.it veya info@unibo.it. Resmi site: www.unibo.it/en"
      ],
      "cityInfo": "Bologna: İtalya'nın mutfak başkenti (~390.000); tarihi merkez (UNESCO), ortaçağ kuleleri, meydanlar, pazarlar; ~100.000+ öğrenci; uygun yaşam.",
      "whyChoose": [
        "Dünyanın en eski üniversitesi (1088); ~90.000 öğrenci; İtalya'da üst sıralarda; beşeri bilimler, hukuk, fen, mühendislik, tıp güçlü.",
        "260'tan fazla program, 200+'ı yabancı dillerde; ~10.000 uluslararası öğrenci; yapay zeka, inovasyon, klasiklerde araştırma mükemmelliği.",
        "Gelire dayalı öğrenim; liyakat ve gelişmekte olan ülkeler için burslar; Bologna'nın canlı öğrenci hayatı ve merkezi konumu."
      ]
    },
    "ru": {
      "shortDescription": "Старейший непрерывно действующий университет мира (1088); ~90 000 студентов; в верхних строчках Италии (~150–200). Сильные гуманитарные науки, право, естественные науки, инженерия, медицина; много программ на английском; плата по доходу.",
      "overview": "Болонья — кулинарная и университетская столица Италии (~390 000); исторический центр (средневековые башни, портики ЮНЕСКО), оживлённые площади, ~100 000+ студентов. Расходы на жизнь ~€800–1 200/мес (дешевле Рима/Милана). Unibo предлагает более 260 программ (200+ на иностранных языках), ~10 000 иностранных студентов, сильные англоязычные направления в бизнесе, ИИ, инженерии и гуманитарных науках. Плата по доходу (от ~€157/год); доступны стипендии и льготы.",
      "keyFacts": [
        "Основан 1088; ~90 000 студентов; в мировых рейтингах 150–200; более 260 программ (200+ на иностранных языках).",
        "Плата: по доходу (~€157–€3 000/год); стипендии/льготы по заслугам и для развивающихся стран.",
        "Жизнь: ~€800–1 200/мес. Сильные бакалавриат и магистратура на английском (напр. бизнес, ИИ, международные отношения, экономика)."
      ],
      "requirements": [
        "Признанный аттестат (школа для бакалавриата — эквивалент через CIMEA или проверку вуза; бакалавриат для магистратуры).",
        "Английский: часто требуется IELTS/TOEFL (B2–C1; по программе; принимаются PTE, Cambridge).",
        "Иногда мотивационное письмо/CV; для части программ вступительный экзамен/собеседование/тест (напр. GRE/GMAT для бизнеса).",
        "Не из ЕС: подача через портал вуза или Universitaly (предварительная запись для визы); сроки по программе; сбор ~€50–100.",
        "Плата по доходу (ISEE): минимум ~€157 (первый взнос) + макс ~€3 000/год; доступны стипендии и льготы."
      ],
      "helpfulInfo": [
        "Адрес: Via Zamboni 33, 40126 Bologna, Италия (исторический центр; кампусы в Cesena, Forlì, Ravenna, Rimini).",
        "Контакт: +39 051 208 8111; internationaldesk@unibo.it или info@unibo.it. Сайт: www.unibo.it/en"
      ],
      "cityInfo": "Болонья: кулинарная столица Италии (~390 000); исторический центр (ЮНЕСКО), средневековые башни, площади, рынки; ~100 000+ студентов; доступная жизнь.",
      "whyChoose": [
        "Старейший университет мира (1088); ~90 000 студентов; в верхних строчках Италии; сильные гуманитарные науки, право, естественные науки, инженерия, медицина.",
        "Более 260 программ, 200+ на иностранных языках; ~10 000 иностранных студентов; сильные исследования в ИИ, инновациях, античности.",
        "Плата по доходу; стипендии по заслугам и для развивающихся стран; оживлённая студенческая жизнь и центральное расположение Болоньи."
      ]
    }
  },
  "sapienza-universita-di-roma": {
    "en": {
      "shortDescription": "Founded 1303, Europe's largest university (~110,000–120,000 students), top-ranked in Italy/Southern Europe (~top 130–170 QS/THE 2026), strong research (Excellence in classics, archaeology, physics, engineering, medicine).",
      "overview": "Italy's eternal capital (~2.8 million people), a living museum with ancient ruins (Colosseum, Roman Forum, Pantheon), Renaissance/Vatican treasures (Sistine Chapel, St. Peter's), vibrant neighborhoods (Trastevere for nightlife/food, Testaccio for authentic cuisine), endless cafes/gelato, fashion/art scene, and Mediterranean climate. Student-heavy (~150,000+ across unis), international (tourists/expats everywhere), chaotic yet romantic—walkable historic center, excellent public transport (metro/buses/trams), but crowded/expensive housing. Iconic for history/culture lovers; daily life mixes ancient vibes with modern energy (events, festivals like Estate Romana). Why Choose This University?: Founded 1303, Europe's largest university (~110,000–120,000 students), top-ranked in Italy/Southern Europe (~top 130–170 QS/THE 2026), strong research (Excellence in classics, archaeology, physics, engineering, medicine). Vast programs (hundreds in Italian + many English), historic campuses in Rome's heart (immersive cultural experience), international focus (thousands of foreign students), no/low tuition for many, scholarships/regional aid available. Ideal for humanities, classics, sciences, engineering, with Rome's unbeatable location for internships (UN agencies, embassies, tourism/tech). Affordable public uni with high prestige; great for history/art/archaeology lovers.",
      "keyFacts": [
        "Founded 1303; Europe's largest (~110,000–120,000 students); top 130–170 QS/THE; strong in classics, archaeology, physics, engineering, medicine.",
        "Tuition: income-based ~€300–€2,900/year (avg ~€1,000–1,600 for non-EU). ~59 English Bachelor's + Master's.",
        "Living in Rome: ~€900–1,500/month. Pre-selection via MoveIN for non-EU (deadline May 15)."
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
      "cityInfo": "Rome: Italy's eternal capital (~2.8 million); ancient ruins, Vatican, vibrant neighbourhoods; ~150,000+ students citywide; living ~€900–1,500/month.",
      "whyChoose": [
        "Founded 1303, Europe's largest university (~110,000–120,000 students), top-ranked in Italy/Southern Europe (~top 130–170 QS/THE 2026), strong research (Excellence in classics, archaeology, physics, engineering, medicine)",
        "Vast programs (hundreds in Italian + many English), historic campuses in Rome's heart (immersive cultural experience), international focus (thousands of foreign students), no/low tuition for many, scholarships/regional aid available",
        "Ideal for humanities, classics, sciences, engineering, with Rome's unbeatable location for internships (UN agencies, embassies, tourism/tech)",
        "Affordable public uni with high prestige",
        "great for history/art/archaeology lovers"
      ]
    },
    "az": {
      "shortDescription": "1303-də qurulub; Avropanın ən böyük universiteti (~110.000–120.000 tələbə); İtaliya/Cənubi Avropada üst sıralarda (~QS/THE 130–170 2026); klassika, arxeologiya, fizika, mühəndislik, tibb üzrə güclü tədqiqat.",
      "overview": "İtaliyanın əbədi paytaxtı (~2,8 milyon); Kolizey, Roman Forumu, Panteon; Vatikan/xoruz xəzinələri; Trastevere, Testaccio; ~150.000+ tələbə; metropoliten və ictimai nəqliyyat. 1303-də qurulub; Avropanın ən böyük universiteti; yüzlərlə proqram (italyan + çox ingilisdilli); Romada tarixi kampuslar; minlərlə xarici tələbə; aşağı/ödənişsiz ödəniş; BMT, səfirliklər, turizm/texnologiya üçün staj imkanları.",
      "keyFacts": [
        "1303-də qurulub; Avropanın ən böyüyü (~110.000–120.000 tələbə); QS/THE 130–170; klassika, arxeologiya, fizika, mühəndislik, tibb güclü.",
        "Ödəniş: gəlir əsaslı ~€300–€2.900/il (qeyri-AB ortalama ~€1.000–1.600). ~59 ingilisdilli bakalavr + magistr.",
        "Romada yaşayış: ~€900–1.500/ay. Qeyri-AB üçün MoveIN ilə əvvəlcədən seçim (son tarix 15 may)."
      ],
      "requirements": [
        "Tanınmış attestat (bakalavr üçün məktəb, magistr üçün bakalavr; CIMEA/DiploME və ya universitet yoxlaması).",
        "İngilis: tez-tez IELTS/TOEFL (B2–C1; proqrama görə).",
        "MoveIN platforması ilə əvvəlcədən seçim (qeyri-AB viza: 22 dek 2025–15 may 2026; proqram üçün €30, maks 2). Sonra Universitaly qeydiyyatı iyun sonuna qədər.",
        "Bəzən motivasyon/CV; məhdud sahələr üçün daxilolma testləri. Əvvəlcədən seçim 15 may 2026; uniroma1.it/en/admissions.",
        "Ödəniş: gəlir əsaslı ~€300–€2.900/il (qeyri-AB ortalama ~€1.000–1.600; təqaüd/ISEE ilə aşağı; taksit mümkün)."
      ],
      "helpfulInfo": [
        "Ünvan: Piazzale Aldo Moro 5, 00185 Roma, İtaliya (mərkəz, Termini yaxınlığı; San Lorenzo və s. kampuslar).",
        "Əlaqə: +39 06 49911; international.admissions@uniroma1.it və ya study@uniroma1.it. Rəsmi sayt: uniroma1.it/en"
      ],
      "cityInfo": "Roma: İtaliyanın əbədi paytaxtı (~2,8 milyon); qədim xarabalıqlar, Vatikan, canlı məhəllələr; şəhər üzrə ~150.000+ tələbə; yaşayış ~€900–1.500/ay.",
      "whyChoose": [
        "1303-də qurulub, Avropanın ən böyük universiteti (~110.000–120.000 tələbə), İtaliya/Cənubi Avropada üst sıralarda; klassika, arxeologiya, fizika, mühəndislik, tibb üzrə güclü tədqiqat",
        "Geniş proqramlar (yüzlərlə italyan + çox ingilisdilli), Romada tarixi kampuslar; minlərlə xarici tələbə; aşağı/ödənişsiz; təqaüd/bölgə yardımı",
        "Humanitar, klassika, elm, mühəndislik üçün ideal; BMT, səfirliklər, turizm/texnologiya üçün Romada staj",
        "Yüksək prestijli, münasib dövlət universiteti; tarix/incəsənət/arxeologiya həvəskarları üçün əla"
      ]
    },
    "tr": {
      "shortDescription": "1303'te kuruldu; Avrupa'nın en büyük üniversitesi (~110.000–120.000 öğrenci); İtalya/Güney Avrupa'da üst sıralarda (~QS/THE 130–170 2026); klasikler, arkeoloji, fizik, mühendislik, tıp alanında güçlü araştırma.",
      "overview": "İtalya'nın ebedi başkenti (~2,8 milyon); Kolezyum, Roma Forumu, Pantheon; Vatikan hazineleri; Trastevere, Testaccio; ~150.000+ öğrenci; metro ve toplu taşıma. 1303'te kuruldu; Avrupa'nın en büyük üniversitesi; yüzlerce program (İtalyanca + birçok İngilizce); Roma'nın kalbinde tarihi kampüsler; binlerce yabancı öğrenci; düşük/ücretsiz öğrenim; BM, büyükelçilikler, turizm/teknoloji stajları için ideal.",
      "keyFacts": [
        "1303'te kuruldu; Avrupa'nın en büyüğü (~110.000–120.000 öğrenci); QS/THE 130–170; klasikler, arkeoloji, fizik, mühendislik, tıp güçlü.",
        "Öğrenim: gelire dayalı ~€300–€2.900/yıl (AB dışı ortalama ~€1.000–1.600). ~59 İngilizce lisans + yüksek lisans.",
        "Roma'da yaşam: aylık ~€900–1.500. AB dışı için MoveIN ile ön seçim (son başvuru 15 Mayıs)."
      ],
      "requirements": [
        "Tanınmış diploma (lisans için lise, yüksek lisans için lisans; CIMEA/DiploME veya üniversite denkliği).",
        "İngilizce: sıklıkla IELTS/TOEFL (B2–C1; programa özel).",
        "MoveIN platformu ile ön seçim (AB dışı vize: 22 Ara 2025–15 May 2026; program başı €30, maks 2). Ardından Universitaly kaydı Haziran sonuna kadar.",
        "Bazen motivasyon/CV; kısıtlı alanlar için giriş testleri. Ön seçim 15 Mayıs 2026; uniroma1.it/en/admissions.",
        "Öğrenim: gelire dayalı ~€300–€2.900/yıl (AB dışı ortalama ~€1.000–1.600; burs/ISEE ile düşük; taksit mümkün)."
      ],
      "helpfulInfo": [
        "Adres: Piazzale Aldo Moro 5, 00185 Roma, İtalya (merkez, Termini yakını; San Lorenzo vb. kampüsler).",
        "İletişim: +39 06 49911; international.admissions@uniroma1.it veya study@uniroma1.it. Resmi site: uniroma1.it/en"
      ],
      "cityInfo": "Roma: İtalya'nın ebedi başkenti (~2,8 milyon); antik kalıntılar, Vatikan, canlı mahalleler; kent genelinde ~150.000+ öğrenci; yaşam aylık ~€900–1.500.",
      "whyChoose": [
        "1303'te kuruldu, Avrupa'nın en büyük üniversitesi (~110.000–120.000 öğrenci), İtalya/Güney Avrupa'da üst sıralarda; klasikler, arkeoloji, fizik, mühendislik, tıp alanında güçlü araştırma",
        "Geniş programlar (yüzlerce İtalyanca + birçok İngilizce), Roma'nın kalbinde tarihi kampüsler; binlerce yabancı öğrenci; düşük/ücretsiz; burs/bölgesel yardım",
        "Beşeri bilimler, klasikler, fen, mühendislik için ideal; BM, büyükelçilikler, turizm/teknoloji stajları için Roma konumu",
        "Yüksek prestijli, uygun kamu üniversitesi; tarih/sanat/arkeoloji tutkunları için mükemmel"
      ]
    },
    "ru": {
      "shortDescription": "Основан в 1303; крупнейший университет Европы (~110 000–120 000 студентов); в верхних строчках Италии/Южной Европы (~QS/THE 130–170 2026); сильные исследования в античности, археологии, физике, инженерии, медицине.",
      "overview": "Вечная столица Италии (~2,8 млн); Колизей, Римский форум, Пантеон; сокровища Ватикана; Трастевере, Тестаччо; ~150 000+ студентов; метро и транспорт. Основан в 1303; крупнейший университет Европы; сотни программ (итальянский + много на английском); исторические кампусы в центре Рима; тысячи иностранных студентов; низкая/бесплатная плата; стажировки в ООН, посольствах, туризме/IT.",
      "keyFacts": [
        "Основан 1303; крупнейший в Европе (~110 000–120 000 студентов); QS/THE 130–170; сильные античность, археология, физика, инженерия, медицина.",
        "Плата: по доходу ~€300–€2 900/год (для не из ЕС в среднем ~€1 000–1 600). ~59 программ на английском (бакалавриат + магистратура).",
        "Жизнь в Риме: ~€900–1 500/мес. Для не из ЕС предварительный отбор через MoveIN (срок 15 мая)."
      ],
      "requirements": [
        "Признанный аттестат (школа для бакалавриата, бакалавриат для магистратуры; эквивалент через CIMEA/DiploME или вуз).",
        "Английский: часто IELTS/TOEFL (B2–C1; по программе).",
        "Предварительный отбор через платформу MoveIN (не из ЕС для визы: 22 дек 2025–15 мая 2026; €30 за программу, макс 2). Затем регистрация Universitaly до конца июня.",
        "Иногда мотивация/CV; вступительные тесты для ограниченных направлений. Предотбор до 15 мая 2026; uniroma1.it/en/admissions.",
        "Плата по доходу ~€300–€2 900/год (для не из ЕС в среднем ~€1 000–1 600; ниже при стипендиях/ISEE; возможна рассрочка)."
      ],
      "helpfulInfo": [
        "Адрес: Piazzale Aldo Moro 5, 00185 Roma, Италия (центр, рядом с Термини; кампусы San Lorenzo и др.).",
        "Контакт: +39 06 49911; international.admissions@uniroma1.it или study@uniroma1.it. Сайт: uniroma1.it/en"
      ],
      "cityInfo": "Рим: вечная столица Италии (~2,8 млн); античные руины, Ватикан, оживлённые районы; по городу ~150 000+ студентов; жизнь ~€900–1 500/мес.",
      "whyChoose": [
        "Основан в 1303, крупнейший университет Европы (~110 000–120 000 студентов), в верхних строчках Италии/Южной Европы; сильные исследования в античности, археологии, физике, инженерии, медицине",
        "Широкий выбор программ (сотни на итальянском + много на английском), исторические кампусы в центре Рима; тысячи иностранных студентов; низкая/бесплатная плата; стипендии и региональная поддержка",
        "Идеально для гуманитарных, античности, наук, инженерии; Рим — отличная база для стажировок (ООН, посольства, туризм/IT)",
        "Доступный гос. вуз с высоким престижем; отлично подходит любителям истории, искусства и археологии"
      ]
    }
  },
  "university-of-cologne": {
    "en": {
      "shortDescription": "Founded 1388 (one of Europe's oldest), re-founded 1919, ~50,000 students, comprehensive with strengths in management/economics (WiSo Faculty top-ranked), humanities, law, medicine, natural sciences. Many English Master's, no tuition, central Cologne.",
      "overview": "One of Germany's oldest and most vibrant cities (~1.1 million people), famous for its massive Gothic cathedral (Kölner Dom, UNESCO site), Rhine River views, carnival (world-famous Rosenmontag parades), Kölsch beer culture, museums (Chocolate Museum, Romano-Germanic Museum), and lively neighborhoods (Belgisches Viertel for trendy cafes/bars, Ehrenfeld for street art/alternative scene). Student-heavy (~100,000+ students across unis), international (large expat community), with excellent public transport (trains to Düsseldorf/Cologne airport), festivals, and a fun, open vibe. Why Choose This University?: Founded 1388 (one of Europe's oldest), re-founded 1919, ~50,000 students, comprehensive with strengths in management/economics (WiSo Faculty top-ranked), humanities, law, medicine, natural sciences. Many English Master's (especially business/economics), no tuition fees, central Cologne for internships (media, finance), and Cologne's fun, welcoming atmosphere.",
      "keyFacts": [
        "Founded 1388 (one of Europe's oldest), re-founded 1919; ~50,000 students; WiSo Faculty top-ranked in business/economics",
        "No tuition fees; semester fee ~€300–350; many English Master's (especially business/economics)",
        "Central Cologne for internships (media, finance); strong international focus"
      ],
      "requirements": [
        "Recognized qualification (high school for Bachelor's—uni-assist VPD/equivalence; Bachelor's degree for Master's).",
        "English proficiency: IELTS 6.5+/TOEFL 90+ (or equivalent) for English programs.",
        "Apply via uni-koeln.de portal or uni-assist. Deadlines: Winter often July 15; Summer Jan 15; Master's program-specific (e.g., WiSo Feb/Mar).",
        "No tuition fees; semester fee ~€300–350. Non-EU: Proof of funds €11,904/year (blocked account) for visa."
      ],
      "helpfulInfo": [
        "Address: Albertus-Magnus-Platz, 50923 Cologne, Germany (main campus near cathedral; International Office: SSC, Universitätsstraße 22a).",
        "Contact: +49 221 470-0; international@uni-koeln.de or zulassung@verwaltung.uni-koeln.de. Official website: www.uni-koeln.de/en"
      ],
      "cityInfo": "Cologne: one of Germany's oldest cities (~1.1 million); cathedral (UNESCO), Rhine, carnival, Kölsch culture, museums; ~100,000+ students; living ~€900–1,200/month.",
      "whyChoose": [
        "Founded 1388 (one of Europe's oldest), re-founded 1919, ~50,000 students, comprehensive with strengths in management/economics (WiSo Faculty top-ranked)",
        "Many English Master's (especially business/economics), no tuition fees, central Cologne for internships (media, finance)",
        "Ideal for social sciences/business with global focus and strong alumni network"
      ]
    },
    "az": {
      "shortDescription": "1388-də qurulub (Avropanın ən qədimlərindən biri), 1919-da yenidən; ~50.000 tələbə; idarəetmə/iqtisadiyyat (WiSo fakültəsi üst sıralarda), humanitar, hüquq, tibb, təbiət elmləri. Çox ingilisdilli magistr; ödənişsiz; Köln mərkəzi.",
      "overview": "Almaniyanın ən qədim və canlı şəhərlərindən biri (~1,1 milyon); Kölner Dom (UNESCO), Reyn, karnaval, Kölsch piva mədəniyyəti, muzeylər. 1388-də qurulub, 1919-da yenidən; ~50.000 tələbə; WiSo idarəetmə/iqtisadiyyatda üst sıralarda; çox ingilisdilli magistr; ödənişsiz; Köln staj üçün mərkəzi.",
      "keyFacts": [
        "1388-də qurulub; ~50.000 tələbə; WiSo fakültəsi biznes/iqtisadiyyatda üst sıralarda",
        "Ödəniş yoxdur; semestr ~€300–350; çox ingilisdilli magistr",
        "Köln mərkəzi staj üçün; güclü beynəlxalq fokus"
      ],
      "requirements": [
        "Tanınmış attestat; bir çoxu üçün uni-assist VPD.",
        "İngilisdilli proqramlar üçün IELTS 6.5+/TOEFL 90+.",
        "uni-koeln.de və ya uni-assist vasitəsilə müraciət. Ödəniş yoxdur; semestr ~€300–350. Qeyri-AB: viza üçün €11.904/il vəsait sübutu."
      ],
      "helpfulInfo": [
        "Ünvan: Albertus-Magnus-Platz, 50923 Köln, Almaniya. Beynəlxalq ofis: +49 221 470-0; international@uni-koeln.de"
      ],
      "cityInfo": "Köln: Almaniyanın ən qədim şəhərlərindən biri (~1,1 milyon); kafedral (UNESCO), Reyn, karnaval, Kölsch mədəniyyəti, muzeylər; ~100.000+ tələbə; yaşayış ~€900–1.200/ay.",
      "whyChoose": [
        "1388-də qurulub, ~50.000 tələbə; WiSo biznes/iqtisadiyyatda üst sıralarda",
        "Çox ingilisdilli magistr, ödənişsiz; Köln mərkəzi staj (media, maliyyə) üçün",
        "Sosial elmlər/biznes üçün beynəlxalq fokus və güclü məzun şəbəkəsi ilə ideal"
      ]
    },
    "tr": {
      "shortDescription": "1388'de kuruldu (Avrupa'nın en eskilerinden), 1919'da yeniden; ~50.000 öğrenci; yönetim/ekonomi (WiSo Fakültesi üst sıralarda), beşeri bilimler, hukuk, tıp, fen. Birçok İngilizce yüksek lisans; ücretsiz; Köln merkezi.",
      "overview": "Almanya'nın en eski ve canlı kentlerinden biri (~1,1 milyon); Kölner Dom (UNESCO), Ren, karnaval, Kölsch birası kültürü, müzeler. 1388'de kuruldu, 1919'da yeniden; ~50.000 öğrenci; WiSo yönetim/ekonomide üst sıralarda; birçok İngilizce yüksek lisans; ücretsiz; Köln staj için merkezi.",
      "keyFacts": [
        "1388'de kuruldu; ~50.000 öğrenci; WiSo Fakültesi işletme/ekonomide üst sıralarda",
        "Öğrenim yok; dönem ~€300–350; birçok İngilizce yüksek lisans",
        "Köln merkezi staj için; güçlü uluslararası odağı"
      ],
      "requirements": [
        "Tanınmış diploma; çoğu için uni-assist VPD.",
        "İngilizce programlar için IELTS 6.5+/TOEFL 90+.",
        "uni-koeln.de veya uni-assist üzerinden başvuru. Öğrenim yok; dönem ~€300–350. AB dışı: vize için €11.904/yıl geçim belgesi."
      ],
      "helpfulInfo": [
        "Adres: Albertus-Magnus-Platz, 50923 Köln, Almanya. Uluslararası ofis: +49 221 470-0; international@uni-koeln.de"
      ],
      "cityInfo": "Köln: Almanya'nın en eski kentlerinden biri (~1,1 milyon); katedral (UNESCO), Ren, karnaval, Kölsch kültürü, müzeler; ~100.000+ öğrenci; yaşam aylık ~€900–1.200.",
      "whyChoose": [
        "1388'de kuruldu, ~50.000 öğrenci; WiSo işletme/ekonomide üst sıralarda",
        "Birçok İngilizce yüksek lisans, ücretsiz; Köln merkezi staj (medya, finans) için",
        "Sosyal bilimler/işletme için küresel odak ve güçlü mezun ağı ile ideal"
      ]
    },
    "ru": {
      "shortDescription": "Основан в 1388 (один из старейших в Европе), повторно в 1919; ~50 000 студентов; универсальный вуз с сильными направлениями: менеджмент/экономика (факультет WiSo в верхних строчках), гуманитарные науки, право, медицина, естественные науки. Много магистерских на английском; бесплатное обучение; центр Кёльна.",
      "overview": "Один из старейших и самых оживлённых городов Германии (~1,1 млн); Кёльнский собор (ЮНЕСКО), Рейн, карнавал, культура пива Kölsch, музеи. Основан в 1388, повторно в 1919; ~50 000 студентов; WiSo в менеджменте/экономике в верхних строчках; много магистерских на английском; бесплатное обучение; Кёльн — удобная база для стажировок.",
      "keyFacts": [
        "Основан в 1388; ~50 000 студентов; факультет WiSo в верхних строчках по бизнесу/экономике",
        "Обучение бесплатное; семестровый взнос ~€300–350; много магистерских на английском",
        "Центр Кёльна для стажировок; сильный международный фокус"
      ],
      "requirements": [
        "Признанный аттестат; для многих uni-assist VPD.",
        "Для программ на английском: IELTS 6.5+/TOEFL 90+.",
        "Подача через uni-koeln.de или uni-assist. Обучение бесплатное; семестровый взнос ~€300–350. Не из ЕС: подтверждение средств €11 904/год для визы."
      ],
      "helpfulInfo": [
        "Адрес: Albertus-Magnus-Platz, 50923 Köln, Германия. Международный офис: +49 221 470-0; international@uni-koeln.de"
      ],
      "cityInfo": "Кёльн: один из старейших городов Германии (~1,1 млн); собор (ЮНЕСКО), Рейн, карнавал, культура Kölsch, музеи; ~100 000+ студентов; жизнь ~€900–1 200/мес.",
      "whyChoose": [
        "Основан в 1388, ~50 000 студентов; WiSo в верхних строчках по бизнесу/экономике",
        "Много магистерских на английском, бесплатное обучение; центр Кёльна для стажировок (медиа, финансы)",
        "Идеально для общественных наук/бизнеса с глобальным фокусом и сильной сетью выпускников"
      ]
    }
  }
};

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
