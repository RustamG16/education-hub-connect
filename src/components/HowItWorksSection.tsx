import { useLanguage } from "@/contexts/LanguageContext";

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = t.howItWorks.steps.map((step, i) => ({
    number: `0${i + 1}`,
    title: step.title,
    description: step.description,
  }));

  return (
    <section id="how-it-works" className="py-16 md:py-[22]">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howItWorks.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
