import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { gsap, prefersReducedMotion } from "@/lib/scroll";

export function HowItWorksSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  useSplitTextReveal<HTMLElement>({ selector: "[data-split-lines]" });

  const steps = t.howItWorks.steps.map((step, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: step.title,
    description: step.description,
  }));

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      let ctx: gsap.Context | null = null;

      const setup = () => {
        ctx?.revert();

        ctx = gsap.context(() => {
          const cards = section.querySelectorAll(".hiw-card");
          const numbers = section.querySelectorAll(".hiw-step-number");

          if (prefersReducedMotion()) return;

          gsap.set(cards, { opacity: 0, y: 40 });
          gsap.set(numbers, { opacity: 0 });

          gsap.timeline({
            scrollTrigger: { trigger: section, start: "top 70%", once: true },
          })
            .to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: "power3.out",
            })
            .to(
              numbers,
              { opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
              "-=0.5",
            );
        }, section);
      };

      setup();
      return () => ctx?.revert();
    },
    { scope: sectionRef },
  );

  return (
    <SectionShell
      id="how-it-works"
      variant="canvas"
      roundedStack
      className="relative mt-[-2rem] z-10"
      innerClassName="!max-w-none"
    >
      <section ref={sectionRef} className="py-8 md:py-12">
        <SectionHeader
          eyebrow="Process"
          title={t.howItWorks.title}
          subtitle={t.howItWorks.subtitle}
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 xl:gap-6">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </section>
    </SectionShell>
  );
}

function StepCard({
  step,
}: {
  step: { number: string; title: string; description: string };
}) {
  return (
    <div className="hiw-card group flex gap-6 md:gap-10 items-start p-6 md:p-8 min-h-[140px] bg-surface rounded-2xl border border-line shadow-card border-l-2 border-l-primary/40 hover:border-l-primary transition-colors duration-300">
      <span className="hiw-step-number font-display font-bold text-[clamp(2.5rem,5vw,4rem)] text-primary/25 leading-none shrink-0 tabular-nums">
        {step.number}
      </span>
      <div className="pt-1 md:pt-2 min-w-0">
        <h3 className="font-display font-bold text-subsection-title text-ink mb-2 md:mb-3">
          {step.title}
        </h3>
        <p className="text-lead text-muted-foreground leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}
