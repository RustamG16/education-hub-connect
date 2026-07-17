import { InfiniteFloatingCarousel } from "@/components/InfiniteFloatingCarousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import AZ from "country-flag-icons/react/3x2/AZ";

interface Testimonial {
  name: string;
  country?: string;
  university: string;
  program: string;
}

const testimonials: Testimonial[] = [
  { name: "Murad Qurbanov", country: "Azerbaijan", university: "University of Vienna", program: "MSc Data Science" },
  { name: "Gülya Qurbanova", country: "Azerbaijan", university: "TU Wien", program: "MSc Software Engineering" },
  { name: "Fərid Axundov", country: "Azerbaijan", university: "University of Graz", program: "MSc Urban Planning" },
  { name: "Nərmin İsgəndərli", country: "Azerbaijan", university: "University of Klagenfurt", program: "MSc European Studies" },
  { name: "Aydan Soltanlı", country: "Azerbaijan", university: "University of Innsbruck", program: "MSc Management" },
  { name: "Nərmin Əliyeva", country: "Azerbaijan", university: "University of Linz", program: "MSc Business Administration" },
  { name: "Stella Ağaşirinli", country: "Azerbaijan", university: "MODUL University Vienna", program: "MSc International Management" },
  { name: "Ülkər Abdullayeva", country: "Azerbaijan", university: "University of Salzburg", program: "BSc Political Science" },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  const { t } = useLanguage();
  const firstRow = testimonials.filter((_, index) => index % 2 === 0);
  const secondRow = testimonials.filter((_, index) => index % 2 === 1);

  const renderCard = (item: Testimonial) => (
    <div
      key={item.name}
      className="relative bg-surface rounded-2xl px-6 py-5 w-[min(85vw,380px)] md:w-[400px] shadow-card border border-line"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <span className="text-sm font-bold text-primary">{getInitials(item.name)}</span>
        </div>
        <div className="min-w-0">
          <p className="text-base font-bold text-ink truncate">{item.name}</p>
          {item.country && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <AZ className="w-4 h-3 rounded-sm shrink-0" title={item.country} />
              <span className="text-xs text-muted-foreground">{item.country}</span>
            </div>
          )}
        </div>
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.university}</p>
      <p className="text-sm text-ink leading-snug font-medium">{item.program}</p>
    </div>
  );

  return (
    <SectionShell id="students" variant="light" className="bg-accent/40">
      <section className="section-fluid-y">
        <SectionHeader
          eyebrow="Students"
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="space-y-6 overflow-hidden">
          <InfiniteFloatingCarousel items={firstRow.map(renderCard)} speedPxPerSec={45} />
          <InfiniteFloatingCarousel items={secondRow.map(renderCard)} speedPxPerSec={55} />
        </div>
      </section>
    </SectionShell>
  );
}
