import { useState, useMemo, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { universities, AUSTRIA_LIVING_COSTS } from "@/data/universities";
import { getUniversityImageUrl, getUniversityGalleryUrls } from "@/data/universityImages";
import { Button } from "@/components/ui/button";
import { UniversityImage } from "@/components/UniversityImage";
import { GraduationCap, Banknote, Home, MapPin, Globe, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getUniversityTranslation } from "@/data/universityTranslations";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/scroll";

function InfoBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof GraduationCap;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-canvas rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-primary shrink-0" />
        <h2 className="text-lg font-bold text-ink">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function UniversityPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);

  const returnHash =
    (location.state as { returnHash?: string } | null)?.returnHash ?? "#universities";

  const goBackHome = () => {
    navigate({ pathname: "/", hash: returnHash.replace(/^#/, "") });
  };

  const university = universities.find((u) => u.slug === slug);

  const mainImageUrl = university ? getUniversityImageUrl(university.imageKey) : undefined;
  const allImageUrls = useMemo(
    () => (university ? getUniversityGalleryUrls(university.imageKey) : []),
    [university?.imageKey],
  );

  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const displayImageUrl = selectedImageUrl ?? mainImageUrl ?? allImageUrls[0];

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header || prefersReducedMotion()) return;

      gsap.from(header.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });
    },
    { scope: headerRef, dependencies: [slug] },
  );

  if (!university || university.country !== "Austria") {
    return (
      <div className="min-h-screen bg-canvas flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center page-shell pt-24">
          <div className="text-center max-w-xl">
            <h1 className="font-display font-bold text-section-title text-ink mb-4">{t.universityPage.notFound}</h1>
            <p className="text-lead text-muted-foreground mb-8">{t.universityPage.notFoundDescription}</p>
            <Button variant="warm" size="lg" onClick={() => navigate("/")}>
              {t.universityPage.backToHomepage}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isAustria = university.country === "Austria";

  const shortDescription =
    getUniversityTranslation(university.slug, language, "shortDescription") || university.shortDescription;
  const overview = getUniversityTranslation(university.slug, language, "overview") || university.overview;
  const keyFacts = getUniversityTranslation(university.slug, language, "keyFacts") || university.keyFacts;
  const requirements =
    getUniversityTranslation(university.slug, language, "requirements") || university.requirements;
  const helpfulInfo =
    getUniversityTranslation(university.slug, language, "helpfulInfo") || university.helpfulInfo;
  const tuition = getUniversityTranslation(university.slug, language, "tuition") || university.tuition;
  const livingCosts =
    getUniversityTranslation(university.slug, language, "livingCosts") || university.livingCosts;
  const livingCostsBreakdown =
    getUniversityTranslation(university.slug, language, "livingCostsBreakdown") ||
    university.livingCostsBreakdown;
  const cityInfo = getUniversityTranslation(university.slug, language, "cityInfo") || university.cityInfo;
  const whyChoose = getUniversityTranslation(university.slug, language, "whyChoose") || university.whyChoose;

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <header ref={headerRef} className="gradient-hero pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="page-shell w-full">
          <button
            type="button"
            data-reveal
            onClick={goBackHome}
            className="text-sm font-medium text-white/60 hover:text-white mb-8 inline-flex items-center gap-1 transition-colors"
          >
            {t.universityPage.back}
          </button>
          <h1 data-reveal className="font-display font-bold text-section-title text-white mb-4 max-w-4xl">
            {university.name}
          </h1>
          <p data-reveal className="section-eyebrow text-white/50 mb-5">
            {university.city && `${university.city}, `}
            {university.country}
          </p>
          <p data-reveal className="text-lead text-white/75 max-w-3xl leading-relaxed">
            {shortDescription}
          </p>
        </div>
      </header>

      <main className="page-shell w-full section-fluid-y !pt-10 md:!pt-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-14">
          <div>
            {displayImageUrl && (
              <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-muted mb-6">
                <UniversityImage src={displayImageUrl} className="w-full h-full object-cover" alt="" />
              </div>
            )}

            {allImageUrls.length > 0 && (
              <div
                className="flex gap-2 overflow-x-auto pb-2 mb-8"
                role="tablist"
                aria-label="Image gallery"
              >
                {allImageUrls.map((url, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImageUrl(url)}
                    className={`flex-shrink-0 w-24 sm:w-28 aspect-video rounded-md overflow-hidden bg-muted border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      url === displayImageUrl
                        ? "border-primary"
                        : "border-line hover:border-primary/40"
                    }`}
                  >
                    <UniversityImage src={url} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            )}

            <p className="text-base text-muted-foreground mb-10 leading-relaxed">{overview}</p>

            {isAustria && (
              <div className="bg-accent/40 rounded-md p-6 mb-10 border border-line">
                <h2 className="font-display text-lg text-ink mb-3">{t.universityPage.realityNumbers}</h2>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">{t.universityPage.averageLivingCosts}</strong>{" "}
                    {AUSTRIA_LIVING_COSTS.range}
                  </li>
                  <li>{AUSTRIA_LIVING_COSTS.noteVienna}</li>
                  <li>{AUSTRIA_LIVING_COSTS.noteSmaller}</li>
                  <li>
                    <strong className="text-foreground">{t.universityPage.accommodation}</strong>{" "}
                    {t.universityPage.dorm} {AUSTRIA_LIVING_COSTS.accommodation.dorm},{" "}
                    {t.universityPage.sharedFlat} {AUSTRIA_LIVING_COSTS.accommodation.sharedFlat}
                  </li>
                  <li>
                    <strong className="text-foreground">{t.universityPage.tuitionPublic}</strong>{" "}
                    {AUSTRIA_LIVING_COSTS.tuitionPublic}
                  </li>
                </ul>
              </div>
            )}

            <div className="grid gap-8 md:grid-cols-2 mb-10">
              <div>
                <h2 className="font-display text-lg text-ink mb-3">{t.universityPage.keyFacts}</h2>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {keyFacts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-lg text-ink mb-3">{t.universityPage.entryRequirements}</h2>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-display text-lg text-ink mb-4">{t.universityPage.programmes}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {university.programs.map((program) => (
                  <div key={program.name} className="bg-canvas rounded-md p-4 border border-line">
                    <p className="section-eyebrow text-muted-foreground mb-1">{program.level}</p>
                    <h3 className="text-base font-semibold text-ink mb-1">{program.name}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{program.field}</p>
                    <p className="text-xs text-muted-foreground">
                      {program.duration && <span>{program.duration}</span>}
                      {program.duration && program.language && <span> · </span>}
                      {program.language && <span>{program.language}</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-display text-lg text-ink mb-3">{t.universityPage.usefulInformation}</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {helpfulInfo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {university.website && (
                <a
                  href={university.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-primary hover:text-warm transition-colors"
                >
                  {t.universityPage.visitWebsite}
                </a>
              )}
              <Button
                variant="warm"
                onClick={() => {
                  const email = "education4students@outlook.com";
                  const subject = encodeURIComponent(`Interest in ${university.name}`);
                  const body = encodeURIComponent(
                    `Hello,\n\nI am interested in studying at ${university.name}.\n\nPlease contact me with more details about suitable programs and next steps.\n\nBest regards,\n`,
                  );
                  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                }}
              >
                {t.universityPage.askAboutUniversity}
              </Button>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">
            <InfoBlock icon={GraduationCap} title={t.universityPage.programs}>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {university.programs.slice(0, 6).map((p) => (
                  <li key={p.name}>
                    <span className="text-xs uppercase text-primary">{p.level}</span> · {p.name} ({p.field})
                  </li>
                ))}
                {university.programs.length > 6 && (
                  <li className="text-xs">
                    +{university.programs.length - 6} {t.universityPage.moreProgrammes}
                  </li>
                )}
              </ul>
            </InfoBlock>

            {tuition && (
              <InfoBlock icon={Banknote} title={t.universityPage.tuition}>
                <p className="text-sm text-muted-foreground">{tuition}</p>
              </InfoBlock>
            )}

            {livingCosts && (
              <InfoBlock icon={Home} title={t.universityPage.livingCost}>
                <p className="text-sm text-muted-foreground mb-2">{livingCosts}</p>
                {livingCostsBreakdown && livingCostsBreakdown.length > 0 && (
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {livingCostsBreakdown.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </InfoBlock>
            )}

            {cityInfo && (
              <InfoBlock icon={MapPin} title={t.universityPage.city}>
                <p className="text-sm text-muted-foreground">{cityInfo}</p>
              </InfoBlock>
            )}

            {university.website && (
              <InfoBlock icon={Globe} title={t.universityPage.officialWebsite}>
                <a
                  href={university.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-primary hover:text-warm break-all transition-colors"
                >
                  {university.website.replace(/^https?:\/\//, "")}
                </a>
              </InfoBlock>
            )}

            {whyChoose && whyChoose.length > 0 && (
              <InfoBlock icon={Star} title={t.universityPage.whyChoose}>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {whyChoose.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-warm">•</span> {item}
                    </li>
                  ))}
                </ul>
              </InfoBlock>
            )}
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
