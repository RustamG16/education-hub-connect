import { useParams, useNavigate } from "react-router-dom";
import { universities, AUSTRIA_LIVING_COSTS } from "@/data/universities";
import { getUniversityImageUrl, getUniversityCityImageUrls } from "@/data/universityImages";
import { Button } from "@/components/ui/button";
import { UniversityImage } from "@/components/UniversityImage";
import { GraduationCap, Banknote, Home, MapPin, Globe, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getUniversityTranslation } from "@/data/universityTranslations";

export default function UniversityPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const university = universities.find((u) => u.slug === slug);

  if (!university) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="container max-w-xl text-center">
          <h1 className="text-2xl font-semibold mb-3">{t.universityPage.notFound}</h1>
          <p className="text-muted-foreground mb-6">
            {t.universityPage.notFoundDescription}
          </p>
          <Button onClick={() => navigate("/")}>{t.universityPage.backToHomepage}</Button>
        </div>
      </div>
    );
  }

  const isAustria = university.country === "Austria";

  // Get translated content or fallback to original
  const shortDescription = getUniversityTranslation(university.slug, language, "shortDescription") || university.shortDescription;
  const overview = getUniversityTranslation(university.slug, language, "overview") || university.overview;
  const keyFacts = getUniversityTranslation(university.slug, language, "keyFacts") || university.keyFacts;
  const requirements = getUniversityTranslation(university.slug, language, "requirements") || university.requirements;
  const helpfulInfo = getUniversityTranslation(university.slug, language, "helpfulInfo") || university.helpfulInfo;
  const tuition = getUniversityTranslation(university.slug, language, "tuition") || university.tuition;
  const livingCosts = getUniversityTranslation(university.slug, language, "livingCosts") || university.livingCosts;
  const livingCostsBreakdown = getUniversityTranslation(university.slug, language, "livingCostsBreakdown") || university.livingCostsBreakdown;
  const cityInfo = getUniversityTranslation(university.slug, language, "cityInfo") || university.cityInfo;
  const whyChoose = getUniversityTranslation(university.slug, language, "whyChoose") || university.whyChoose;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <div className="container max-w-4xl py-10 md:py-16">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-1"
          >
            {t.universityPage.back}
          </button>

        {getUniversityImageUrl(university.imageKey) && (
          <div className="aspect-[21/9] rounded-xl overflow-hidden bg-muted mb-6">
            <UniversityImage src={getUniversityImageUrl(university.imageKey)!} className="w-full h-full object-cover" />
          </div>
        )}

        {getUniversityCityImageUrls(university.imageKey).length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-thin">
            {getUniversityCityImageUrls(university.imageKey).map((url, i) => (
              <div key={i} className="flex-shrink-0 w-48 sm:w-56 aspect-video rounded-lg overflow-hidden bg-muted">
                <UniversityImage src={url} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-bold mb-2">{university.name}</h1>
        <p className="text-sm uppercase tracking-wide text-muted-foreground mb-6">
          {university.city && `${university.city}, `}
          {university.country}
        </p>

        <p className="text-base text-muted-foreground mb-8">{overview}</p>

        {/* Quick info blocks: Programs, Tuition, Living, City, Website, Why choose */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {/* Programs */}
          <div className="bg-card rounded-2xl p-5 shadow-card">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-base font-semibold">{t.universityPage.programs}</h2>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {university.programs.slice(0, 6).map((p) => (
                <li key={p.name}>
                  <span className="text-xs uppercase text-primary">{p.level}</span> · {p.name} ({p.field})
                </li>
              ))}
              {university.programs.length > 6 && (
                <li className="text-xs">+{university.programs.length - 6} {t.universityPage.moreProgrammes}</li>
              )}
            </ul>
          </div>

          {/* Tuition */}
          {tuition && (
            <div className="bg-card rounded-2xl p-5 shadow-card">
              <div className="flex items-center gap-2 mb-3">
                <Banknote className="w-5 h-5 text-primary" />
                <h2 className="text-base font-semibold">{t.universityPage.tuition}</h2>
              </div>
              <p className="text-sm text-muted-foreground">{tuition}</p>
            </div>
          )}

          {/* Living cost */}
          {livingCosts && (
            <div className="bg-card rounded-2xl p-5 shadow-card">
              <div className="flex items-center gap-2 mb-3">
                <Home className="w-5 h-5 text-primary" />
                <h2 className="text-base font-semibold">{t.universityPage.livingCost}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{livingCosts}</p>
              {livingCostsBreakdown && livingCostsBreakdown.length > 0 && (
                <ul className="text-xs text-muted-foreground space-y-1">
                  {livingCostsBreakdown.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* City info */}
          {cityInfo && (
            <div className="bg-card rounded-2xl p-5 shadow-card">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h2 className="text-base font-semibold">{t.universityPage.city}</h2>
              </div>
              <p className="text-sm text-muted-foreground">{cityInfo}</p>
            </div>
          )}

          {/* Official website */}
          {university.website && (
            <div className="bg-card rounded-2xl p-5 shadow-card">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-primary" />
                <h2 className="text-base font-semibold">{t.universityPage.officialWebsite}</h2>
              </div>
              <a
                href={university.website}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-primary hover:underline break-all"
              >
                {university.website.replace(/^https?:\/\//, "")}
              </a>
            </div>
          )}

          {/* Why choose */}
          {whyChoose && whyChoose.length > 0 && (
            <div className="bg-card rounded-2xl p-5 shadow-card sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-primary" />
                <h2 className="text-base font-semibold">{t.universityPage.whyChoose}</h2>
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {whyChoose.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Austria: reality numbers block */}
        {isAustria && (
          <div className="bg-accent/50 rounded-2xl p-6 mb-10 border border-primary/10">
            <h2 className="text-lg font-semibold mb-3">{t.universityPage.realityNumbers}</h2>
            <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">{t.universityPage.averageLivingCosts}</strong> {AUSTRIA_LIVING_COSTS.range}</li>
              <li>{AUSTRIA_LIVING_COSTS.noteVienna}</li>
              <li>{AUSTRIA_LIVING_COSTS.noteSmaller}</li>
              <li><strong className="text-foreground">{t.universityPage.accommodation}</strong> {t.universityPage.dorm} {AUSTRIA_LIVING_COSTS.accommodation.dorm}, {t.universityPage.sharedFlat} {AUSTRIA_LIVING_COSTS.accommodation.sharedFlat}</li>
              <li><strong className="text-foreground">{t.universityPage.tuitionPublic}</strong> {AUSTRIA_LIVING_COSTS.tuitionPublic}</li>
            </ul>
          </div>
        )}

        {/* Key facts & Requirements */}
        <div className="grid gap-8 md:grid-cols-2 mb-10">
          <div>
            <h2 className="text-lg font-semibold mb-3">{t.universityPage.keyFacts}</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {keyFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">{t.universityPage.entryRequirements}</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* All programs (expandable list) */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-3">{t.universityPage.programmes}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {university.programs.map((program) => (
              <div key={program.name} className="bg-card rounded-xl p-4 shadow-card">
                <p className="text-xs uppercase tracking-wide text-primary mb-1">{program.level}</p>
                <h3 className="text-base font-semibold mb-1">{program.name}</h3>
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

        {/* Useful information */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-3">{t.universityPage.usefulInformation}</h2>
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
              className="text-sm font-medium text-primary hover:underline"
            >
              {t.universityPage.visitWebsite}
            </a>
          )}
          <Button
            variant="default"
            onClick={() => {
              const email = "education4students@outlook.com";
              const subject = encodeURIComponent(`Interest in ${university.name}`);
              const body = encodeURIComponent(
                `Hello,\n\nI am interested in studying at ${university.name}.\n\nPlease contact me with more details about suitable programs and next steps.\n\nBest regards,\n`
              );
              window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
            }}
          >
            {t.universityPage.askAboutUniversity}
          </Button>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
