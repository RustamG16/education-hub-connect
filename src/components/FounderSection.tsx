import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { gsap, prefersReducedMotion, scrollToElement } from "@/lib/scroll";
import logo from "@/assets/logo.png";

/** Trust section using only claims established elsewhere on the site. */
export function FounderSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useMagneticButton<HTMLDivElement>();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      let ctx: gsap.Context | null = null;

      const setup = () => {
        ctx?.revert();

        ctx = gsap.context(() => {
          const targets = section.querySelectorAll("[data-founder-reveal]");
          if (targets.length === 0) return;

          if (prefersReducedMotion()) {
            gsap.set(targets, { opacity: 1, y: 0 });
            return;
          }

          gsap.set(targets, { opacity: 0, y: 28 });

          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              once: true,
            },
          });
        }, section);
      };

      setup();
      return () => ctx?.revert();
    },
    { scope: sectionRef },
  );

  return (
    <SectionShell id="students" variant="light" className="bg-accent/40">
      <section ref={sectionRef} className="section-fluid-y">
        <SectionHeader eyebrow={t.founder.eyebrow} title={t.founder.title} />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 xl:gap-20 items-start">
          <div
            data-founder-reveal
            className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 w-full overflow-hidden rounded-2xl bg-depth text-white"
          >
            <div className="absolute inset-0 opacity-35 noise-overlay" aria-hidden />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.28),transparent_48%)]" aria-hidden />
            <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Education4Students
              </span>
              <img src={logo} alt="" className="mx-auto w-3/4 max-w-[18rem] opacity-90" aria-hidden />
              <p className="max-w-[16ch] font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                Austria, made clearer.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <div className="space-y-5 md:space-y-6 max-w-2xl">
              {t.founder.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  data-founder-reveal
                  className="text-lead text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul
              data-founder-reveal
              className="flex flex-wrap gap-2.5 md:gap-3"
              aria-label={t.founder.eyebrow}
            >
              {t.founder.facts.map((fact, i) => (
                <li
                  key={i}
                  className="inline-flex items-center px-3.5 py-2 rounded-full bg-canvas text-sm font-medium text-ink border border-line"
                >
                  {fact}
                </li>
              ))}
            </ul>

            <div ref={ctaRef} data-founder-reveal className="inline-block self-start">
              <Button
                variant="pill-dark"
                size="xl"
                onClick={() => scrollToElement("#contact")}
              >
                {t.hero.cta}
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SectionShell>
  );
}
