import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
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
        <div className="container py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 [text-wrap:balance]"
              >
                {t.hero.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-lg mx-auto lg:mx-0"
              >
                {t.hero.subheadline}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="shadow-button hover:scale-105 hover:shadow-lg active:scale-[0.98] transition-all duration-200"
                  onClick={scrollToContact}
                >
                  {t.hero.cta}
                </Button>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
                <img
                  src={heroImage}
                  alt="International student exploring a modern European city"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              {/* Decorative blur circles */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-teal-light/40 blur-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary-foreground/10 blur-xl -z-10" />
            </motion.div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1140 0 720 0C300 0 0 30 0 30L0 60Z" fill="hsl(var(--gradient-hero-start))" />
          </svg>
        </div>
      </div>
    </section>
  );
}
