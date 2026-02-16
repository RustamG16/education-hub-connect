import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { universities, COUNTRY_ORDER } from "@/data/universities";
import type { UniversityCategory } from "@/data/universities";
import { getUniversityImageUrl, getUniversityCityImageUrls } from "@/data/universityImages";
import { UniversityImage } from "@/components/UniversityImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { getUniversityTranslation } from "@/data/universityTranslations";
import { ScrollReveal } from "@/components/ScrollReveal";

type FilterValue = "Our picks" | UniversityCategory;

const FILTER_OPTIONS: FilterValue[] = ["Our picks", ...COUNTRY_ORDER];
const PER_PAGE = 12;

function getFilteredUniversities(filter: FilterValue) {
  if (filter === "Our picks") return universities;
  return universities.filter((u) => u.country === filter);
}

const STORAGE_KEY = "universities-filter";

function getFilterFromSearchParams(searchParams: URLSearchParams): FilterValue {
  const country = searchParams.get("country");
  if (country && (FILTER_OPTIONS as string[]).includes(country)) return country as FilterValue;
  if (typeof window !== "undefined") {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored && (FILTER_OPTIONS as string[]).includes(stored)) return stored as FilterValue;
  }
  return "Our picks";
}

export function UniversitiesSection() {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = getFilterFromSearchParams(searchParams);
  const [page, setPage] = useState(1);
  const filtered = getFilteredUniversities(activeFilter);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const setActiveFilter = (option: FilterValue) => {
    if (option === "Our picks") {
      searchParams.delete("country");
      setSearchParams(searchParams, { replace: true });
      sessionStorage.removeItem(STORAGE_KEY);
    } else {
      setSearchParams({ country: option }, { replace: true });
      sessionStorage.setItem(STORAGE_KEY, option);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  useEffect(() => {
    if (activeFilter !== "Our picks" && !searchParams.get("country")) {
      setSearchParams({ country: activeFilter }, { replace: true });
    }
  }, []);

  const getFilterLabel = (option: FilterValue) => {
    if (option === "Our picks") return t.universities.ourPicks;
    return option;
  };

  return (
    <section id="universities" className="py-20 md:py-28 gradient-subtle">
      <div className="container">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#41e0eb]">{t.universities.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.universities.subtitle}
          </p>
        </ScrollReveal>

        {/* Country navbar / tabs */}
        <ScrollReveal delay={0.1}>
          <nav
            className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-3 border-b-2 border-[#41e0eb]"
            aria-label="Filter by country"
          >
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === option
                    ? "bg-[#41e0eb] text-zinc-900 shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:bg-[#41e0eb]/20 hover:text-[#2eb8c4]"
                }`}
              >
                {getFilterLabel(option)}
              </button>
            ))}
          </nav>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {paginated.map((uni, index) => {
            const shortDescription = getUniversityTranslation(uni.slug, language, "shortDescription") || uni.shortDescription;

            return (
              <ScrollReveal key={uni.slug} delay={Math.min(index * 0.06, 0.35)}>
                <Link
                  to={`/universities/${uni.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover hover:border-[#41e0eb] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  {getUniversityImageUrl(uni.imageKey) && (
                    <div className="aspect-[16/10] overflow-hidden bg-muted will-change-transform">
                      <UniversityImage
                        src={getUniversityImageUrl(uni.imageKey)!}
                        className="w-full h-full object-cover scale-[0.95] transition-transform duration-500 group-hover:scale-100"
                      />
                    </div>
                  )}
                  {(uni.city === "Vienna" || uni.city === "Graz" || uni.city === "Innsbruck" || uni.city === "Klagenfurt" || uni.city === "Leoben" || uni.city === "Feldkirch" || uni.city === "Linz" || uni.city === "Salzburg") && (() => {
                    const cityUrls = getUniversityCityImageUrls(uni.imageKey, 6);
                    return cityUrls.length > 0 ? (
                      <div className="flex gap-1 p-2 overflow-x-auto bg-muted/50" aria-hidden>
                        {cityUrls.map((url, i) => (
                          <div key={i} className="flex-shrink-0 w-12 h-8 rounded overflow-hidden">
                            <UniversityImage src={url} className="w-full h-full object-cover" alt="" />
                          </div>
                        ))}
                      </div>
                    ) : null;
                  })()}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-[#41e0eb] transition-colors">
                      {uni.name}
                    </h3>
                    {uni.city && (
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                        {uni.city}, {uni.country}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1 leading-relaxed">
                      {shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {uni.programs.slice(0, 2).map((program) => (
                        <span
                          key={program.name}
                          className="inline-flex items-center rounded-full border border-[#41e0eb]/50 px-2.5 py-1 text-xs text-[#0e7c87] bg-[#41e0eb]/15"
                        >
                          {program.level} · {program.field}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 text-xs font-medium text-[#41e0eb] group-hover:text-[#2eb8c4] group-hover:underline inline-block">
                      {t.universities.viewProfile}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Pagination - only when more than one page */}
        {totalPages > 1 && (
          <nav
            className="mt-10 flex items-center justify-center gap-2"
            aria-label="Universities pagination"
          >
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 disabled:opacity-50 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="px-4 py-2 text-sm text-muted-foreground">
              Page {page} of {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 disabled:opacity-50 disabled:pointer-events-none transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-8">No universities in this category yet.</p>
        )}
      </div>
    </section>
  );
}
