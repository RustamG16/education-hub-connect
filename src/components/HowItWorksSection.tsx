import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = t.howItWorks.steps.map((step, i) => ({
    number: `0${i + 1}`,
    title: step.title,
    description: step.description,
  }));

  return (
    <section id="how-it-works" className="py-20 md:py-28 gradient-hero">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-primary-foreground">{t.howItWorks.title}</h2>
          <p className="text-primary-foreground/90 max-w-xl mx-auto text-lg">
            {t.howItWorks.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.12}>
              <div className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-foreground/20" />
                )}

                <div className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-5">
                    <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
