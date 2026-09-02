import { InfiniteFloatingCarousel } from "@/components/InfiniteFloatingCarousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";

/**
 * Real student stories — ship empty until written consent exists.
 * Real entries require written consent from the person named.
 * Not rendered on the page yet; export only.
 */
export type EarlyStory = {
  name: string;
  consent: true;
  university: string;
  detail: string;
};

const stories: EarlyStory[] = [];

export function EarlyStoriesSection() {
  const { t } = useLanguage();

  if (stories.length === 0) return null;

  const firstRow = stories.filter((_, index) => index % 2 === 0);
  const secondRow = stories.filter((_, index) => index % 2 === 1);

  const renderCard = (item: EarlyStory) => (
    <div
      key={item.name}
      className="relative bg-surface rounded-2xl px-6 py-5 w-[min(85vw,380px)] md:w-[400px] shadow-card border border-line"
    >
      <p className="text-base font-bold text-ink mb-2">{item.name}</p>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
        {item.university}
      </p>
      <p className="text-sm text-ink leading-snug font-medium">{item.detail}</p>
    </div>
  );

  return (
    <SectionShell id="early-stories" variant="light" className="bg-accent/40">
      <section className="section-fluid-y">
        <SectionHeader
          eyebrow={t.founder.eyebrow}
          title={t.founder.title}
        />
        <div className="space-y-6 overflow-hidden">
          <InfiniteFloatingCarousel items={firstRow.map(renderCard)} speedPxPerSec={45} />
          <InfiniteFloatingCarousel items={secondRow.map(renderCard)} speedPxPerSec={55} />
        </div>
      </section>
    </SectionShell>
  );
}
