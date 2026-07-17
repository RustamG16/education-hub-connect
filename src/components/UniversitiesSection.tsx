import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAustriaUniversitiesByCity, type University } from "@/data/universities";
import { getUniversityImageUrl } from "@/data/universityImages";
import { UniversityImage } from "@/components/UniversityImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { getUniversityTranslation } from "@/data/universityTranslations";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { cn } from "@/lib/utils";

function UniversityCard({ uni }: { uni: University }) {
  const { t, language } = useLanguage();
  const shortDescription =
    getUniversityTranslation(uni.slug, language, "shortDescription") || uni.shortDescription;

  return (
    <Link
      to={`/universities/${uni.slug}`}
      state={{ returnHash: "#universities" }}
      className="group block bg-surface rounded-2xl overflow-hidden hover:shadow-card-hover transition-shadow duration-300 flex flex-col h-full min-h-[380px]"
    >
      {getUniversityImageUrl(uni.imageKey) && (
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <UniversityImage
            src={getUniversityImageUrl(uni.imageKey)!}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl md:text-2xl text-ink mb-2 group-hover:text-primary transition-colors">
          {uni.name}
        </h3>
        {uni.city && (
          <p className="section-eyebrow text-muted-foreground mb-3">
            {uni.city}, {uni.country}
          </p>
        )}
        <p className="text-base text-muted-foreground mb-6 line-clamp-3 flex-1 leading-relaxed">
          {shortDescription}
        </p>
        <span className="text-sm font-semibold text-ink group-hover:text-warm inline-block transition-colors">
          {t.universities.viewProfile}
        </span>
      </div>
    </Link>
  );
}

export function UniversitiesSection() {
  const { t } = useLanguage();
  const cityGroups = useMemo(() => getAustriaUniversitiesByCity(), []);
  const [selectedCity, setSelectedCity] = useState(() => cityGroups[0]?.city ?? "");

  const activeGroup = cityGroups.find((group) => group.city === selectedCity) ?? cityGroups[0];

  return (
    <SectionShell id="universities" variant="light">
      <section>
        <SectionHeader
          eyebrow="Austria"
          title={t.universities.title}
          subtitle={t.universities.subtitle}
        />

        <div
          className="flex gap-3 overflow-x-auto pb-4 mb-10 md:mb-14 scrollbar-none"
          role="tablist"
          aria-label={t.universities.filterByCity}
        >
          {cityGroups.map(({ city, universities }) => {
            const isActive = selectedCity === city;
            return (
              <button
                key={city}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCity(city)}
                className={cn(
                  "shrink-0 inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-base font-semibold transition-colors duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-canvas text-muted-foreground hover:text-ink hover:bg-canvas/80",
                )}
              >
                {city}
                <span
                  className={cn(
                    "text-sm tabular-nums",
                    isActive ? "text-primary-foreground/75" : "text-muted-foreground",
                  )}
                >
                  {universities.length}
                </span>
              </button>
            );
          })}
        </div>

        {activeGroup && (
          <div role="tabpanel">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-8 md:mb-10 pb-6 border-b border-line">
              <h3 className="font-display font-bold text-section-title text-ink">{activeGroup.city}</h3>
              <span className="text-lead text-muted-foreground">
                {activeGroup.universities.length}{" "}
                {activeGroup.universities.length === 1
                  ? t.universities.university
                  : t.universities.universities}
              </span>
            </div>
            <div
              key={activeGroup.city}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 animate-fade-in"
            >
              {activeGroup.universities.map((uni) => (
                <UniversityCard key={uni.slug} uni={uni} />
              ))}
            </div>
          </div>
        )}
      </section>
    </SectionShell>
  );
}
