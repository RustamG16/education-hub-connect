import { createContext, useContext, useState, ReactNode } from "react";

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
    headline: string;
    subheadline: string;
    cta: string;
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
  testimonials: {
    title: string;
    subtitle: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      destinations: "Destinations",
      about: "About",
      contact: "Contact",
    },
    hero: {
      headline: "Study Abroad. Simplified.",
      subheadline: "We help students apply to universities abroad, prepare documents, and move with confidence.",
      cta: "Get Free Consultation",
    },
    services: {
      title: "What We Help With",
      subtitle: "Comprehensive support for every step of your study abroad journey.",
      university: {
        title: "University & Program Selection",
        description: "Find the perfect university and program that matches your goals and qualifications.",
      },
      documents: {
        title: "Documents & Applications",
        description: "Professional assistance with all paperwork, from transcripts to motivation letters.",
      },
      visa: {
        title: "Visa Guidance",
        description: "Step-by-step support through the visa application process with expert advice.",
      },
      planning: {
        title: "Pre-Arrival Planning",
        description: "Housing, insurance, and everything you need before your journey begins.",
      },
    },
    destinations: {
      title: "Study Destinations",
      subtitle: "Explore top European countries with world-class education and vibrant student communities.",
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Your journey to studying abroad in four simple steps.",
      steps: [
        { title: "Free Consultation", description: "Share your goals and we'll guide you through your options." },
        { title: "Personal Study Plan", description: "Get a customized roadmap tailored to your aspirations." },
        { title: "Application & Documents", description: "We handle the paperwork while you focus on preparing." },
        { title: "Admission & Next Steps", description: "Celebrate your acceptance and prepare for your journey." },
      ],
    },
    contact: {
      title: "Ready to Start Your Journey?",
      subtitle: "Get personalized guidance from our expert consultants.",
      formTitle: "Get Free Consultation",
      name: "Your Name",
      country: "Your Country",
      desiredCountry: "Desired Study Country",
      contactMethod: "Preferred Contact Method",
      whatsapp: "WhatsApp",
      email: "Email",
      submit: "Get Consultation",
      support: "Our team provides personal support at every step. We'll help you navigate the entire process with clarity and confidence.",
      noHiddenFees: "No hidden fees or obligations",
      personalizedRecommendations: "Personalized university recommendations",
      supportInYourLanguage: "Support in your language",
    },
    footer: {
      tagline: "Your trusted partner for studying abroad",
      rights: "All rights reserved.",
      phone: "Phone",
      email: "Email",
    },
    universities: {
      title: "Partner Universities & Programs",
      subtitle: "Explore universities by country. Each profile includes programs, requirements, and practical information.",
      ourPicks: "Our picks",
      viewProfile: "View university profile →",
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
    testimonials: {
      title: "Success Stories",
      subtitle: "Students we've helped achieve their dreams",
    },
  },
  az: {
    nav: {
      home: "Ana Səhifə",
      howItWorks: "Necə İşləyir",
      destinations: "Ölkələr",
      about: "Haqqımızda",
      contact: "Əlaqə",
    },
    hero: {
      headline: "Xaricdə Təhsil. Sadələşdirilmiş.",
      subheadline: "Tələbələrə universitetlərə müraciət etməyə, sənədlər hazırlamağa və əminliklə köçməyə kömək edirik.",
      cta: "Pulsuz Məsləhət Alın",
    },
    services: {
      title: "Nə ilə Kömək Edirik",
      subtitle: "Xaricdə təhsil səyahətinizin hər addımı üçün hərtərəfli dəstək.",
      university: {
        title: "Universitet və Proqram Seçimi",
        description: "Hədəflərinizə və keyfiyyətlərinizə uyğun mükəmməl universitet və proqram tapın.",
      },
      documents: {
        title: "Sənədlər və Müraciətlər",
        description: "Transkriptlərdən motivasiya məktublarına qədər bütün sənədləşmədə peşəkar yardım.",
      },
      visa: {
        title: "Viza Dəstəyi",
        description: "Ekspert məsləhəti ilə viza müraciət prosesində addım-addım dəstək.",
      },
      planning: {
        title: "Gəlmədən Əvvəl Planlaşdırma",
        description: "Səyahətiniz başlamazdan əvvəl yaşayış, sığorta və lazım olan hər şey.",
      },
    },
    destinations: {
      title: "Təhsil Ölkələri",
      subtitle: "Dünya səviyyəli təhsil və canlı tələbə icmaları olan aparıcı Avropa ölkələrini kəşf edin.",
    },
    howItWorks: {
      title: "Necə İşləyir",
      subtitle: "Dörd sadə addımda xaricdə təhsil səyahətiniz.",
      steps: [
        { title: "Pulsuz Məsləhət", description: "Hədəflərinizi paylaşın, biz seçimləriniz üzrə rəhbərlik edəcəyik." },
        { title: "Fərdi Təhsil Planı", description: "Arzularınıza uyğunlaşdırılmış fərdi yol xəritəsi alın." },
        { title: "Müraciət və Sənədlər", description: "Siz hazırlaşarkən biz sənədləşmə ilə məşğul oluruq." },
        { title: "Qəbul və Növbəti Addımlar", description: "Qəbulunuzu qeyd edin və səyahətinizə hazırlaşın." },
      ],
    },
    contact: {
      title: "Səyahətinizə Başlamağa Hazırsınız?",
      subtitle: "Ekspert məsləhətçilərimizdən fərdi rəhbərlik alın.",
      formTitle: "Pulsuz Məsləhət Alın",
      name: "Adınız",
      country: "Ölkəniz",
      desiredCountry: "İstədiyiniz Təhsil Ölkəsi",
      contactMethod: "Üstünlük Verilən Əlaqə Üsulu",
      whatsapp: "WhatsApp",
      email: "E-poçt",
      submit: "Məsləhət Alın",
      support: "Komandamız hər addımda fərdi dəstək təqdim edir. Bütün prosesdə aydınlıq və inamla hərəkət etməyinizə kömək edəcəyik.",
      noHiddenFees: "Gizli ödəniş və öhdəliklər yoxdur",
      personalizedRecommendations: "Fərdi universitet tövsiyələri",
      supportInYourLanguage: "Dilinizdə dəstək",
    },
    footer: {
      tagline: "Xaricdə təhsil üçün etibarlı tərəfdaşınız",
      rights: "Bütün hüquqlar qorunur.",
      phone: "Telefon",
      email: "E-poçt",
    },
    universities: {
      title: "Tərəfdaş Universitetlər və Proqramlar",
      subtitle: "Ölkə üzrə universitetləri araşdırın. Hər profil proqramlar, tələblər və praktiki məlumatları əhatə edir.",
      ourPicks: "Seçimlərimiz",
      viewProfile: "Universitet profilini göstər →",
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
    testimonials: {
      title: "Uğur Hekayələri",
      subtitle: "Arzularına çatmaqda kömək etdiyimiz tələbələr",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      howItWorks: "Nasıl Çalışır",
      destinations: "Ülkeler",
      about: "Hakkımızda",
      contact: "İletişim",
    },
    hero: {
      headline: "Yurtdışında Eğitim. Basitleştirildi.",
      subheadline: "Öğrencilerin yurtdışındaki üniversitelere başvurmasına, belge hazırlamasına ve güvenle taşınmasına yardımcı oluyoruz.",
      cta: "Ücretsiz Danışmanlık Alın",
    },
    services: {
      title: "Nelerle Yardımcı Oluyoruz",
      subtitle: "Yurtdışı eğitim yolculuğunuzun her adımı için kapsamlı destek.",
      university: {
        title: "Üniversite ve Program Seçimi",
        description: "Hedeflerinize ve niteliklerinize uygun mükemmel üniversite ve programı bulun.",
      },
      documents: {
        title: "Belgeler ve Başvurular",
        description: "Transkriptlerden motivasyon mektuplarına kadar tüm evrak işlerinde profesyonel yardım.",
      },
      visa: {
        title: "Vize Rehberliği",
        description: "Uzman tavsiyesiyle vize başvuru sürecinde adım adım destek.",
      },
      planning: {
        title: "Varış Öncesi Planlama",
        description: "Yolculuğunuz başlamadan önce konut, sigorta ve ihtiyacınız olan her şey.",
      },
    },
    destinations: {
      title: "Eğitim Destinasyonları",
      subtitle: "Dünya standartlarında eğitim ve canlı öğrenci topluluklarına sahip önde gelen Avrupa ülkelerini keşfedin.",
    },
    howItWorks: {
      title: "Nasıl Çalışır",
      subtitle: "Dört basit adımda yurtdışında eğitim yolculuğunuz.",
      steps: [
        { title: "Ücretsiz Danışmanlık", description: "Hedeflerinizi paylaşın, seçenekleriniz konusunda size rehberlik edelim." },
        { title: "Kişisel Eğitim Planı", description: "Hedeflerinize özel hazırlanmış bir yol haritası alın." },
        { title: "Başvuru ve Belgeler", description: "Siz hazırlanırken biz evrak işlerini hallediyoruz." },
        { title: "Kabul ve Sonraki Adımlar", description: "Kabulünüzü kutlayın ve yolculuğunuza hazırlanın." },
      ],
    },
    contact: {
      title: "Yolculuğunuza Başlamaya Hazır mısınız?",
      subtitle: "Uzman danışmanlarımızdan kişiselleştirilmiş rehberlik alın.",
      formTitle: "Ücretsiz Danışmanlık Alın",
      name: "Adınız",
      country: "Ülkeniz",
      desiredCountry: "İstediğiniz Eğitim Ülkesi",
      contactMethod: "Tercih Edilen İletişim Yöntemi",
      whatsapp: "WhatsApp",
      email: "E-posta",
      submit: "Danışmanlık Alın",
      support: "Ekibimiz her adımda kişisel destek sağlar. Tüm süreçte netlik ve güvenle ilerlemenize yardımcı olacağız.",
      noHiddenFees: "Gizli ücret veya yükümlülük yok",
      personalizedRecommendations: "Kişiselleştirilmiş üniversite önerileri",
      supportInYourLanguage: "Dilinizde destek",
    },
    footer: {
      tagline: "Yurtdışında eğitim için güvenilir ortağınız",
      rights: "Tüm hakları saklıdır.",
      phone: "Telefon",
      email: "E-posta",
    },
    universities: {
      title: "Partner Üniversiteler ve Programlar",
      subtitle: "Üniversiteleri ülkelere göre keşfedin. Her profil programları, gereksinimleri ve pratik bilgileri içerir.",
      ourPicks: "Seçimlerimiz",
      viewProfile: "Üniversite profilini görüntüle →",
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
    testimonials: {
      title: "Başarı Hikayeleri",
      subtitle: "Hayallerine ulaşmalarına yardımcı olduğumuz öğrenciler",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      howItWorks: "Как это работает",
      destinations: "Направления",
      about: "О нас",
      contact: "Контакты",
    },
    hero: {
      headline: "Обучение за рубежом. Просто.",
      subheadline: "Мы помогаем студентам поступить в университеты за рубежом, подготовить документы и переехать с уверенностью.",
      cta: "Бесплатная консультация",
    },
    services: {
      title: "Чем мы помогаем",
      subtitle: "Комплексная поддержка на каждом этапе вашего пути к обучению за рубежом.",
      university: {
        title: "Выбор университета и программы",
        description: "Найдите идеальный университет и программу, соответствующие вашим целям и квалификации.",
      },
      documents: {
        title: "Документы и заявления",
        description: "Профессиональная помощь со всеми документами, от выписок до мотивационных писем.",
      },
      visa: {
        title: "Визовая поддержка",
        description: "Пошаговая поддержка в процессе подачи визы с экспертными советами.",
      },
      planning: {
        title: "Подготовка к отъезду",
        description: "Жилье, страховка и все необходимое перед началом вашего путешествия.",
      },
    },
    destinations: {
      title: "Направления обучения",
      subtitle: "Откройте для себя ведущие европейские страны с образованием мирового класса и яркими студенческими сообществами.",
    },
    howItWorks: {
      title: "Как это работает",
      subtitle: "Ваш путь к обучению за рубежом в четырех простых шагах.",
      steps: [
        { title: "Бесплатная консультация", description: "Поделитесь своими целями, и мы поможем вам разобраться в вариантах." },
        { title: "Личный план обучения", description: "Получите индивидуальную дорожную карту, адаптированную к вашим стремлениям." },
        { title: "Заявление и документы", description: "Мы занимаемся документами, пока вы готовитесь." },
        { title: "Зачисление и следующие шаги", description: "Отпразднуйте зачисление и подготовьтесь к путешествию." },
      ],
    },
    contact: {
      title: "Готовы начать свой путь?",
      subtitle: "Получите персональное руководство от наших экспертов-консультантов.",
      formTitle: "Бесплатная консультация",
      name: "Ваше имя",
      country: "Ваша страна",
      desiredCountry: "Желаемая страна обучения",
      contactMethod: "Предпочтительный способ связи",
      whatsapp: "WhatsApp",
      email: "Эл. почта",
      submit: "Получить консультацию",
      support: "Наша команда обеспечивает личную поддержку на каждом этапе. Мы поможем вам пройти весь процесс с ясностью и уверенностью.",
      noHiddenFees: "Без скрытых платежей и обязательств",
      personalizedRecommendations: "Персональные рекомендации университетов",
      supportInYourLanguage: "Поддержка на вашем языке",
    },
    footer: {
      tagline: "Ваш надежный партнер для обучения за рубежом",
      rights: "Все права защищены.",
      phone: "Телефон",
      email: "Эл. почта",
    },
    universities: {
      title: "Университеты-партнеры и программы",
      subtitle: "Изучайте университеты по странам. Каждый профиль включает программы, требования и практическую информацию.",
      ourPicks: "Наш выбор",
      viewProfile: "Посмотреть профиль университета →",
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
    testimonials: {
      title: "Истории успеха",
      subtitle: "Студенты, которым мы помогли достичь своей мечты",
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
