import { PageShell } from "@/components/layout/PageShell";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function AboutSection() {
  const contentRef = useGsapReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <PageShell
      title="About Education4Students"
      description="Education4Students helps motivated applicants from Azerbaijan and the region find the right study programme in Austria. From the first questions to your first day at university, we guide you through every step."
      backTo="/"
    >
      <div ref={contentRef} className="space-y-12">
        <div data-reveal>
          <p className="text-lead text-muted-foreground leading-relaxed max-w-3xl">
            We focus on Austria — affordable tuition at public universities, English-taught programmes, and a high quality
            of life. Our role is to translate complex admission rules into a clear, realistic plan for you.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Personal guidance",
              body: "We look at your grades, language level and budget to suggest realistic university and program options – not generic lists.",
            },
            {
              title: "Trusted university network",
              body: "We work with a focused list of Austrian universities we know well — including Klagenfurt, Vienna, Graz, Linz and more — so you understand what each expects.",
            },
            {
              title: "Clear, transparent process",
              body: "You always know the next step: documents, deadlines, language requirements, visa and arrival planning. No hidden conditions or surprise fees.",
            },
          ].map((card) => (
            <div
              key={card.title}
              data-reveal
              className="bg-surface rounded-2xl p-8 hover:shadow-card-hover transition-shadow duration-300"
            >
              <h3 className="font-display font-bold text-subsection-title text-ink mb-3">{card.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
