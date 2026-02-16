import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { UniversitiesSection } from "@/components/UniversitiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const SectionDivider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <SectionDivider />
        <UniversitiesSection />
        <TestimonialsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
