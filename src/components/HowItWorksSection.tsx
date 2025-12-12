const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Share your goals and get personalized advice from our experts.",
  },
  {
    number: "02",
    title: "Personal Study Plan",
    description: "Receive a tailored roadmap with university options and timelines.",
  },
  {
    number: "03",
    title: "Application & Documents",
    description: "We handle paperwork, applications, and visa preparation.",
  },
  {
    number: "04",
    title: "Admission & Next Steps",
    description: "Celebrate your acceptance and prepare for your journey abroad.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A simple 4-step process to turn your study abroad dream into reality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 shadow-card text-center">
                <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
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
