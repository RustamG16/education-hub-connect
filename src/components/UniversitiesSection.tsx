import { useState } from "react";
import { Link } from "react-router-dom";
import { universities, COUNTRY_ORDER } from "@/data/universities";
import type { UniversityCategory } from "@/data/universities";
import { getUniversityImageUrl } from "@/data/universityImages";
import { UniversityImage } from "@/components/UniversityImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { getUniversityTranslation } from "@/data/universityTranslations";

type FilterValue = "Our picks" | UniversityCategory;

const FILTER_OPTIONS: FilterValue[] = ["Our picks", ...COUNTRY_ORDER];

function getFilteredUniversities(filter: FilterValue) {
  if (filter === "Our picks") return universities;
  return universities.filter((u) => u.country === filter);
}

export function UniversitiesSection() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterValue>("Our picks");
  const filtered = getFilteredUniversities(activeFilter);

  const getFilterLabel = (option: FilterValue) => {
    if (option === "Our picks") return t.universities.ourPicks;
    return option;
  };

  return (
    <section id="universities" className="py-16 md:py-[22]">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.universities.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.universities.subtitle}
          </p>
        </div>

        {/* Country navbar / tabs */}
        <nav
          className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-2 border-b border-border"
          aria-label="Filter by country"
        >
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setActiveFilter(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === option
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {getFilterLabel(option)}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((uni) => {
            const shortDescription = getUniversityTranslation(uni.slug, language, "shortDescription") || uni.shortDescription;
            
            return (
              <Link
                key={uni.slug}
                to={`/universities/${uni.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {getUniversityImageUrl(uni.imageKey) && (
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <UniversityImage
                      src={getUniversityImageUrl(uni.imageKey)!}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {uni.name}
                  </h3>
                  {uni.city && (
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                      {uni.city}, {uni.country}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {uni.programs.slice(0, 2).map((program) => (
                      <span
                        key={program.name}
                        className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground bg-background/60"
                      >
                        {program.level} · {program.field}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 text-xs font-medium text-primary group-hover:underline inline-block">
                    {t.universities.viewProfile}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-8">No universities in this category yet.</p>
        )}
      </div>
    </section>
  );
}
