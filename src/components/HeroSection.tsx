import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-student.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      <div className="gradient-hero pt-16 md:pt-20">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left -mt-12 lg:-mt-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in-left">
                {t.hero.headline}
              </h1>
              <p 
                className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-in-left" 
                style={{ animationDelay: "0.15s" }}
              >
                {t.hero.subheadline}
              </p>
              <div 
                className="opacity-0 animate-fade-in-left" 
                style={{ animationDelay: "0.3s" }}
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="shadow-button"
                  onClick={scrollToContact}
                >
                  {t.hero.cta}
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative opacity-0 animate-fade-in-right -mt-6 lg:-mt-8" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
                <img
                  src={heroImage}
                  alt="International student exploring a modern European city"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-light rounded-2xl -z-10 animate-float" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-foreground/20 rounded-xl -z-10 animate-float" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1140 0 720 0C300 0 0 30 0 30L0 60Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </div>
    </section>
  );
}
