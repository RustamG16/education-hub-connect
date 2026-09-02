import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "en" | "az" | "tr" | "ru";

interface Translations {
  nav: {
    home: string;
    howItWorks: string;
    destinations: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    subheadline: string;
    cta: string;
    statLabel: string;
    statValue: string;
    statCta: string;
  };
  services: {
    title: string;
    subtitle: string;
    university: { title: string; description: string };
    documents: { title: string; description: string };
    visa: { title: string; description: string };
    planning: { title: string; description: string };
  };
  destinations: {
    title: string;
    subtitle: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    country: string;
    desiredCountry: string;
    desiredCity: string;
    contactMethod: string;
    whatsapp: string;
    email: string;
    submit: string;
    support: string;
    noHiddenFees: string;
    personalizedRecommendations: string;
    supportInYourLanguage: string;
  };
  footer: {
    tagline: string;
    rights: string;
    phone: string;
    email: string;
  };
  universities: {
    title: string;
    subtitle: string;
    ourPicks: string;
    viewProfile: string;
    university: string;
    universities: string;
    filterByCity: string;
  };
  universityPage: {
    notFound: string;
    notFoundDescription: string;
    backToHomepage: string;
    back: string;
    programs: string;
    tuition: string;
    livingCost: string;
    city: string;
    officialWebsite: string;
    whyChoose: string;
    moreProgrammes: string;
    realityNumbers: string;
    averageLivingCosts: string;
    accommodation: string;
    keyFacts: string;
    entryRequirements: string;
    programmes: string;
    usefulInformation: string;
    visitWebsite: string;
    askAboutUniversity: string;
    dorm: string;
    sharedFlat: string;
    tuitionPublic: string;
  };
  documents: {
    title: string;
    description: string;
    preparation: string;
    application: string;
    translation: string;
  };
  visa: {
    title: string;
    description: string;
    support: string;
  };
  founder: {
    eyebrow: string;
    title: string;
    paragraphs: [string, string, string];
    facts: [string, string, string];
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      destinations: "Universities",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Study in Austria",
      headlineLine1: "Get your degree for free.",
      headlineLine2: "In Austria.",
      subheadline:
        "We guide international students through university choice, applications, residence permits, and arrival — in your language.",
      cta: "Get Free Consultation",
      statLabel: "Austria",
      statValue: "34 universities we advise on",
      statCta: "Explore programmes",
    },
    services: {
      title: "What We Help With",
      subtitle: "Full support for every step of studying at an Austrian university.",
      university: {
        title: "University & Program Selection",
        description: "Find the right Austrian university and program for your goals and qualifications.",
      },
      documents: {
        title: "Documents & Applications",
        description: "Professional assistance with all paperwork, from transcripts to motivation letters.",
      },
      visa: {
        title: "Residence Permit Guidance",
        description: "Step-by-step support for your Austrian student residence permit application.",
      },
      planning: {
        title: "Pre-Arrival Planning",
        description: "Housing, insurance, and everything you need before your journey begins.",
      },
    },
    destinations: {
      title: "Study in Austria",
      subtitle: "Affordable tuition, English-taught programmes, and a clear path from application to arrival.",
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Your path to an Austrian university in four clear steps.",
      steps: [
        { title: "Free Consultation", description: "Share your goals and we'll guide you through your options." },
        { title: "Personal Study Plan", description: "Get a customized roadmap tailored to your aspirations." },
        { title: "Application & Documents", description: "We handle the paperwork while you focus on preparing." },
        { title: "Admission & Arrival", description: "Celebrate your acceptance and prepare for life in Austria." },
      ],
    },
    contact: {
      title: "Ready to Start Your Journey?",
      subtitle: "Get personalized guidance from our expert consultants.",
      formTitle: "Get Free Consultation",
      name: "Your Name",
      country: "Your Country",
      desiredCountry: "Preferred city in Austria",
      desiredCity: "Preferred city in Austria",
      contactMethod: "Preferred Contact Method",
      whatsapp: "WhatsApp",
      email: "Email",
      submit: "Get Consultation",
      support: "Our team provides personal support at every step. We'll help you navigate the entire process with clarity and confidence.",
      noHiddenFees: "No hidden fees or obligations",
      personalizedRecommendations: "Personalized Austrian university recommendations",
      supportInYourLanguage: "Support in your language",
    },
    footer: {
      tagline: "Your trusted partner for studying in Austria",
      rights: "All rights reserved.",
      phone: "Phone",
      email: "Email",
    },
    universities: {
      title: "Austrian Universities & Programmes",
      subtitle: "Explore Austrian universities we advise on. Each profile includes programmes, requirements, and practical information.",
      ourPicks: "Our picks",
      viewProfile: "View university profile →",
      university: "university",
      universities: "universities",
      filterByCity: "Filter by city",
    },
    universityPage: {
      notFound: "University not found",
      notFoundDescription: "The university profile you are looking for does not exist or has been moved. Please return to the main page to browse available options.",
      backToHomepage: "Back to homepage",
      back: "← Back",
      programs: "Programs",
      tuition: "Tuition",
      livingCost: "Living cost",
      city: "City",
      officialWebsite: "Official website",
      whyChoose: "Why choose this uni",
      moreProgrammes: "more programmes",
      realityNumbers: "Reality numbers – studying in Austria",
      averageLivingCosts: "Average student living costs:",
      accommodation: "Accommodation:",
      keyFacts: "Key facts",
      entryRequirements: "Typical entry requirements",
      programmes: "Programmes",
      usefulInformation: "Useful information",
      visitWebsite: "Visit official university website →",
      askAboutUniversity: "Ask us about this university",
      dorm: "Dorm",
      sharedFlat: "shared flat",
      tuitionPublic: "Tuition (public universities):",
    },
    documents: {
      title: "Documents & Applications",
      description: "We help you prepare all necessary documents for your university application, ensuring everything is complete, correctly formatted, and submitted on time.",
      preparation: "Document Preparation",
      application: "Application Process",
      translation: "Translation & Certification",
    },
    visa: {
      title: "Visa Guidance",
      description: "Navigating visa requirements can be complex. We guide you through the entire visa application process, from understanding requirements to preparing for your interview.",
      support: "Visa Application Support",
    },
    founder: {
      eyebrow: "About",
      title: "A clearer way to study in Austria.",
      paragraphs: [
        "Education4Students helps applicants from Azerbaijan and the region find realistic study options in Austria.",
        "We turn admission rules, document requirements, and deadlines into a practical plan you can follow.",
        "From your first questions to arrival, you get personal guidance in a language you understand.",
      ],
      facts: ["Austria-focused guidance", "Clear next steps", "Support through arrival"],
    },
  },
  az: {
    nav: {
      home: "Ana Səhifə",
      howItWorks: "Necə İşləyir",
      destinations: "Universitetlər",
      about: "Haqqımızda",
      contact: "Əlaqə",
    },
    hero: {
      eyebrow: "Avstriyada təhsil",
      headlineLine1: "Avstriyada pulsuz təhsil,",
      headlineLine2: "Əldə edin.",
      subheadline:
        "Tələbələrə universitet seçimi, müraciət, yaşayış icazəsi və gəliş prosesində hər cür köməklik edirik.",
      cta: "Pulsuz Məsləhət Alın",
      statLabel: "Avstriya",
      statValue: "Məsləhət verdiyimiz 34 universitet",
      statCta: "Proqramlara baxın",
    },
    services: {
      title: "Nə ilə Kömək Edirik",
      subtitle: "Avstriya universitetində təhsil üçün hər addımda tam dəstək.",
      university: {
        title: "Universitet və Proqram Seçimi",
        description: "Hədəflərinizə və keyfiyyətlərinizə uyğun Avstriya universiteti və proqramı tapın.",
      },
      documents: {
        title: "Sənədlər və Müraciətlər",
        description: "Transkriptlərdən motivasiya məktublarına qədər bütün sənədləşmədə peşəkar yardım.",
      },
      visa: {
        title: "Yaşayış İcazəsi Dəstəyi",
        description: "Avstriya tələbə yaşayış icazəsi müraciətində addım-addım dəstək.",
      },
      planning: {
        title: "Gəlmədən Əvvəl Planlaşdırma",
        description: "Səyahətiniz başlamazdan əvvəl yaşayış, sığorta və lazım olan hər şey.",
      },
    },
    destinations: {
      title: "Avstriyada təhsil",
      subtitle: "Sərfəli təhsil haqqı, ingilisdilli proqramlar və müraciətdən gəlişə qədər aydın yol.",
    },
    howItWorks: {
      title: "Necə İşləyir",
      subtitle: "Avstriya universitetinə aparan dörd aydın addım.",
      steps: [
        { title: "Pulsuz Məsləhət", description: "Hədəflərinizi paylaşın, biz seçimləriniz üzrə rəhbərlik edəcəyik." },
        { title: "Fərdi Təhsil Planı", description: "Arzularınıza uyğunlaşdırılmış fərdi yol xəritəsi alın." },
        { title: "Müraciət və Sənədlər", description: "Siz hazırlaşarkən biz sənədləşmə ilə məşğul oluruq." },
        { title: "Qəbul və Gəliş", description: "Qəbulunuzu qeyd edin və Avstriyada həyata hazırlaşın." },
      ],
    },
    contact: {
      title: "Səyahətinizə Başlamağa Hazırsınız?",
      subtitle: "Ekspert məsləhətçilərimizdən fərdi rəhbərlik alın.",
      formTitle: "Pulsuz Məsləhət Alın",
      name: "Adınız",
      country: "Ölkəniz",
      desiredCountry: "Avstriyada üstünlük verilən şəhər",
      desiredCity: "Avstriyada üstünlük verilən şəhər",
      contactMethod: "Üstünlük Verilən Əlaqə Üsulu",
      whatsapp: "WhatsApp",
      email: "E-poçt",
      submit: "Məsləhət Alın",
      support: "Komandamız hər addımda fərdi dəstək təqdim edir. Bütün prosesdə aydınlıq və inamla hərəkət etməyinizə kömək edəcəyik.",
      noHiddenFees: "Gizli ödəniş və öhdəliklər yoxdur",
      personalizedRecommendations: "Fərdi Avstriya universitet tövsiyələri",
      supportInYourLanguage: "Dilinizdə dəstək",
    },
    footer: {
      tagline: "Avstriyada təhsil üçün etibarlı tərəfdaşınız",
      rights: "Bütün hüquqlar qorunur.",
      phone: "Telefon",
      email: "E-poçt",
    },
    universities: {
      title: "Avstriya Universitetləri və Proqramları",
      subtitle: "Məsləhət verdiyimiz Avstriya universitetlərini araşdırın. Hər profil proqramlar, tələblər və praktiki məlumatları əhatə edir.",
      ourPicks: "Seçimlərimiz",
      viewProfile: "Universitet profilini göstər →",
      university: "universitet",
      universities: "universitet",
      filterByCity: "Şəhərə görə filtr",
    },
    universityPage: {
      notFound: "Universitet tapılmadı",
      notFoundDescription: "Axtardığınız universitet profili mövcud deyil və ya köçürülüb. Zəhmət olmasa mövcud seçimləri araşdırmaq üçün əsas səhifəyə qayıdın.",
      backToHomepage: "Ana səhifəyə qayıt",
      back: "← Geri",
      programs: "Proqramlar",
      tuition: "Təhsil haqqı",
      livingCost: "Yaşayış xərcləri",
      city: "Şəhər",
      officialWebsite: "Rəsmi veb sayt",
      whyChoose: "Nə üçün seçməli",
      moreProgrammes: "daha çox proqram",
      realityNumbers: "Real rəqəmlər – Avstriyada təhsil",
      averageLivingCosts: "Orta tələbə yaşayış xərcləri:",
      accommodation: "Yaşayış:",
      keyFacts: "Əsas faktlar",
      entryRequirements: "Tipik qəbul tələbləri",
      programmes: "Proqramlar",
      usefulInformation: "Faydalı məlumat",
      visitWebsite: "Rəsmi universitet veb saytına baxın →",
      askAboutUniversity: "Bu universitet haqqında bizə soruşun",
      dorm: "Yataqxana",
      sharedFlat: "ortaq mənzil",
      tuitionPublic: "Təhsil haqqı (dövlət universitetləri):",
    },
    documents: {
      title: "Sənədlər və Müraciətlər",
      description: "Universitet müraciətiniz üçün lazım olan bütün sənədləri hazırlamaqda sizə kömək edirik, hər şeyin tam, düzgün formatda və vaxtında təqdim olunmasını təmin edirik.",
      preparation: "Sənəd Hazırlığı",
      application: "Müraciət Prosesi",
      translation: "Tərcümə və Təsdiqləmə",
    },
    visa: {
      title: "Viza Dəstəyi",
      description: "Viza tələbləri mürəkkəb ola bilər. Biz tələbləri başa düşməkdən müsahibəyə hazırlaşmağa qədər bütün viza müraciət prosesində sizə rəhbərlik edirik.",
      support: "Viza Müraciət Dəstəyi",
    },
    founder: {
      eyebrow: "Haqqımızda",
      title: "Avstriyada təhsil üçün daha aydın yol.",
      paragraphs: [
        "Education4Students Azərbaycandan və regiondan olan müraciətçilərə Avstriyada real təhsil seçimləri tapmağa kömək edir.",
        "Qəbul qaydalarını, sənəd tələblərini və son tarixləri izləyə biləcəyiniz praktik plana çeviririk.",
        "İlk suallarınızdan Avstriyaya gəlişinizədək başa düşdüyünüz dildə fərdi dəstək alırsınız.",
      ],
      facts: ["Avstriya üzrə ixtisaslaşma", "Aydın növbəti addımlar", "Gəlişədək dəstək"],
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      howItWorks: "Nasıl Çalışır",
      destinations: "Üniversiteler",
      about: "Hakkımızda",
      contact: "İletişim",
    },
    hero: {
      eyebrow: "Avusturya'da eğitim",
      headlineLine1: "Avusturya'da ücretsiz",
      headlineLine2: "Eğitim alın.",
      subheadline:
        "Uluslararası öğrencilere üniversite seçimi, başvuru, oturma izni ve varış sürecinde — kendi dilinizde — rehberlik ediyoruz.",
      cta: "Ücretsiz Danışmanlık Alın",
      statLabel: "Avusturya",
      statValue: "Danışmanlık verdiğimiz 34 üniversite",
      statCta: "Programları inceleyin",
    },
    services: {
      title: "Nelerle Yardımcı Oluyoruz",
      subtitle: "Avusturya'da üniversite eğitimi için her adımda tam destek.",
      university: {
        title: "Üniversite ve Program Seçimi",
        description: "Hedeflerinize ve niteliklerinize uygun Avusturya üniversitesi ve programını bulun.",
      },
      documents: {
        title: "Belgeler ve Başvurular",
        description: "Transkriptlerden motivasyon mektuplarına kadar tüm evrak işlerinde profesyonel yardım.",
      },
      visa: {
        title: "Oturma İzni Rehberliği",
        description: "Avusturya öğrenci oturma izni başvurusunda adım adım destek.",
      },
      planning: {
        title: "Varış Öncesi Planlama",
        description: "Yolculuğunuz başlamadan önce konut, sigorta ve ihtiyacınız olan her şey.",
      },
    },
    destinations: {
      title: "Avusturya'da eğitim",
      subtitle: "Uygun öğrenim ücretleri, İngilizce programlar ve başvurudan varışa net bir yol.",
    },
    howItWorks: {
      title: "Nasıl Çalışır",
      subtitle: "Avusturya üniversitesine giden dört net adım.",
      steps: [
        { title: "Ücretsiz Danışmanlık", description: "Hedeflerinizi paylaşın, seçenekleriniz konusunda size rehberlik edelim." },
        { title: "Kişisel Eğitim Planı", description: "Hedeflerinize özel hazırlanmış bir yol haritası alın." },
        { title: "Başvuru ve Belgeler", description: "Siz hazırlanırken biz evrak işlerini hallediyoruz." },
        { title: "Kabul ve Varış", description: "Kabulünüzü kutlayın ve Avusturya'daki hayata hazırlanın." },
      ],
    },
    contact: {
      title: "Yolculuğunuza Başlamaya Hazır mısınız?",
      subtitle: "Uzman danışmanlarımızdan kişiselleştirilmiş rehberlik alın.",
      formTitle: "Ücretsiz Danışmanlık Alın",
      name: "Adınız",
      country: "Ülkeniz",
      desiredCountry: "Avusturya'da tercih edilen şehir",
      desiredCity: "Avusturya'da tercih edilen şehir",
      contactMethod: "Tercih Edilen İletişim Yöntemi",
      whatsapp: "WhatsApp",
      email: "E-posta",
      submit: "Danışmanlık Alın",
      support: "Ekibimiz her adımda kişisel destek sağlar. Tüm süreçte netlik ve güvenle ilerlemenize yardımcı olacağız.",
      noHiddenFees: "Gizli ücret veya yükümlülük yok",
      personalizedRecommendations: "Kişiselleştirilmiş Avusturya üniversite önerileri",
      supportInYourLanguage: "Dilinizde destek",
    },
    footer: {
      tagline: "Avusturya'da eğitim için güvenilir ortağınız",
      rights: "Tüm hakları saklıdır.",
      phone: "Telefon",
      email: "E-posta",
    },
    universities: {
      title: "Avusturya Üniversiteleri ve Programları",
      subtitle: "Danışmanlık verdiğimiz Avusturya üniversitelerini keşfedin. Her profil programları, gereksinimleri ve pratik bilgileri içerir.",
      ourPicks: "Seçimlerimiz",
      viewProfile: "Üniversite profilini görüntüle →",
      university: "üniversite",
      universities: "üniversite",
      filterByCity: "Şehre göre filtrele",
    },
    universityPage: {
      notFound: "Üniversite bulunamadı",
      notFoundDescription: "Aradığınız üniversite profili mevcut değil veya taşındı. Lütfen mevcut seçenekleri görmek için ana sayfaya dönün.",
      backToHomepage: "Ana sayfaya dön",
      back: "← Geri",
      programs: "Programlar",
      tuition: "Eğitim ücreti",
      livingCost: "Yaşam maliyeti",
      city: "Şehir",
      officialWebsite: "Resmi web sitesi",
      whyChoose: "Neden seçmeli",
      moreProgrammes: "daha fazla program",
      realityNumbers: "Gerçek rakamlar – Avusturya'da eğitim",
      averageLivingCosts: "Ortalama öğrenci yaşam maliyetleri:",
      accommodation: "Konaklama:",
      keyFacts: "Ana gerçekler",
      entryRequirements: "Tipik giriş gereksinimleri",
      programmes: "Programlar",
      usefulInformation: "Yararlı bilgiler",
      visitWebsite: "Resmi üniversite web sitesini ziyaret edin →",
      askAboutUniversity: "Bu üniversite hakkında bize sorun",
      dorm: "Yurt",
      sharedFlat: "ortak daire",
      tuitionPublic: "Eğitim ücreti (devlet üniversiteleri):",
    },
    documents: {
      title: "Belgeler ve Başvurular",
      description: "Üniversite başvurunuz için gerekli tüm belgeleri hazırlamanıza yardımcı oluyoruz, her şeyin tam, doğru biçimde ve zamanında sunulmasını sağlıyoruz.",
      preparation: "Belge Hazırlama",
      application: "Başvuru Süreci",
      translation: "Çeviri ve Onaylama",
    },
    visa: {
      title: "Vize Rehberliği",
      description: "Vize gereksinimleri karmaşık olabilir. Gereksinimleri anlamaktan mülakatınıza hazırlanmaya kadar tüm vize başvuru sürecinde size rehberlik ediyoruz.",
      support: "Vize Başvuru Desteği",
    },
    founder: {
      eyebrow: "Hakkımızda",
      title: "Avusturya'da eğitim için daha net bir yol.",
      paragraphs: [
        "Education4Students, Azerbaycan ve bölgeden başvuran öğrencilerin Avusturya'da gerçekçi eğitim seçenekleri bulmasına yardımcı olur.",
        "Kabul kurallarını, belge gereksinimlerini ve son tarihleri takip edilebilir pratik bir plana dönüştürüyoruz.",
        "İlk sorularınızdan Avusturya'ya varışınıza kadar, anladığınız dilde kişisel destek alırsınız.",
      ],
      facts: ["Avusturya odaklı rehberlik", "Net sonraki adımlar", "Varışa kadar destek"],
    },
  },
  ru: {
    nav: {
      home: "Главная",
      howItWorks: "Как это работает",
      destinations: "Университеты",
      about: "О нас",
      contact: "Контакты",
    },
    hero: {
      eyebrow: "Учёба в Австрии",
      headlineLine1: "Получите бесплатное образование.",
      headlineLine2: "В Австрии.",
      subheadline:
        "Мы помогаем иностранным студентам с выбором университета, подачей документов, видом на жительство и переездом — на вашем языке.",
      cta: "Бесплатная консультация",
      statLabel: "Австрия",
      statValue: "34 университета, по которым консультируем",
      statCta: "Смотреть программы",
    },
    services: {
      title: "Чем мы помогаем",
      subtitle: "Полная поддержка на каждом этапе обучения в австрийском университете.",
      university: {
        title: "Выбор университета и программы",
        description: "Найдите подходящий австрийский университет и программу под ваши цели и квалификацию.",
      },
      documents: {
        title: "Документы и заявления",
        description: "Профессиональная помощь со всеми документами, от выписок до мотивационных писем.",
      },
      visa: {
        title: "Вид на жительство",
        description: "Пошаговая поддержка при оформлении студенческого вида на жительство в Австрии.",
      },
      planning: {
        title: "Подготовка к отъезду",
        description: "Жилье, страховка и все необходимое перед началом вашего путешествия.",
      },
    },
    destinations: {
      title: "Учёба в Австрии",
      subtitle: "Доступная плата за обучение, программы на английском и понятный путь от заявки до переезда.",
    },
    howItWorks: {
      title: "Как это работает",
      subtitle: "Четыре шага к австрийскому университету.",
      steps: [
        { title: "Бесплатная консультация", description: "Поделитесь своими целями, и мы поможем вам разобраться в вариантах." },
        { title: "Личный план обучения", description: "Получите индивидуальную дорожную карту, адаптированную к вашим стремлениям." },
        { title: "Заявление и документы", description: "Мы занимаемся документами, пока вы готовитесь." },
        { title: "Зачисление и переезд", description: "Отпразднуйте зачисление и подготовьтесь к жизни в Австрии." },
      ],
    },
    contact: {
      title: "Готовы начать свой путь?",
      subtitle: "Получите персональное руководство от наших экспертов-консультантов.",
      formTitle: "Бесплатная консультация",
      name: "Ваше имя",
      country: "Ваша страна",
      desiredCountry: "Предпочитаемый город в Австрии",
      desiredCity: "Предпочитаемый город в Австрии",
      contactMethod: "Предпочтительный способ связи",
      whatsapp: "WhatsApp",
      email: "Эл. почта",
      submit: "Получить консультацию",
      support: "Наша команда обеспечивает личную поддержку на каждом этапе. Мы поможем вам пройти весь процесс с ясностью и уверенностью.",
      noHiddenFees: "Без скрытых платежей и обязательств",
      personalizedRecommendations: "Персональные рекомендации австрийских университетов",
      supportInYourLanguage: "Поддержка на вашем языке",
    },
    footer: {
      tagline: "Ваш надёжный партнёр для учёбы в Австрии",
      rights: "Все права защищены.",
      phone: "Телефон",
      email: "Эл. почта",
    },
    universities: {
      title: "Австрийские университеты и программы",
      subtitle: "Университеты Австрии, по которым мы консультируем. Каждый профиль включает программы, требования и практическую информацию.",
      ourPicks: "Наш выбор",
      viewProfile: "Посмотреть профиль университета →",
      university: "университет",
      universities: "университетов",
      filterByCity: "Фильтр по городу",
    },
    universityPage: {
      notFound: "Университет не найден",
      notFoundDescription: "Профиль университета, который вы ищете, не существует или был перемещен. Пожалуйста, вернитесь на главную страницу для просмотра доступных вариантов.",
      backToHomepage: "Вернуться на главную",
      back: "← Назад",
      programs: "Программы",
      tuition: "Стоимость обучения",
      livingCost: "Стоимость жизни",
      city: "Город",
      officialWebsite: "Официальный сайт",
      whyChoose: "Почему выбрать",
      moreProgrammes: "еще программ",
      realityNumbers: "Реальные цифры – обучение в Австрии",
      averageLivingCosts: "Средние расходы студента на проживание:",
      accommodation: "Проживание:",
      keyFacts: "Ключевые факты",
      entryRequirements: "Типичные требования для поступления",
      programmes: "Программы",
      usefulInformation: "Полезная информация",
      visitWebsite: "Посетить официальный сайт университета →",
      askAboutUniversity: "Спросите нас об этом университете",
      dorm: "Общежитие",
      sharedFlat: "общая квартира",
      tuitionPublic: "Стоимость обучения (государственные университеты):",
    },
    documents: {
      title: "Документы и заявления",
      description: "Мы помогаем подготовить все необходимые документы для вашего университетского заявления, обеспечивая полноту, правильный формат и своевременную подачу.",
      preparation: "Подготовка документов",
      application: "Процесс подачи заявления",
      translation: "Перевод и заверение",
    },
    visa: {
      title: "Визовая поддержка",
      description: "Визовые требования могут быть сложными. Мы проводим вас через весь процесс подачи визы, от понимания требований до подготовки к собеседованию.",
      support: "Поддержка визового заявления",
    },
    founder: {
      eyebrow: "О нас",
      title: "Понятный путь к учёбе в Австрии.",
      paragraphs: [
        "Education4Students помогает абитуриентам из Азербайджана и региона находить реалистичные варианты учёбы в Австрии.",
        "Мы превращаем правила приёма, требования к документам и сроки в практичный пошаговый план.",
        "От первых вопросов до приезда в Австрию вы получаете персональную поддержку на понятном вам языке.",
      ],
      facts: ["Фокус на Австрии", "Понятные следующие шаги", "Поддержка до приезда"],
    },
  },
};

const languageNames: Record<Language, string> = {
  en: "English",
  az: "Azərbaycan",
  tr: "Türkçe",
  ru: "Русский",
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  languageNames: Record<Language, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Get saved language from localStorage or default to "en"
    const savedLanguage = localStorage.getItem("language") as Language | null;
    return savedLanguage && ["en", "az", "tr", "ru"].includes(savedLanguage) ? savedLanguage : "en";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language], languageNames }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
