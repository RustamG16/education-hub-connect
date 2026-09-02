import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { UniversitiesSection } from "@/components/UniversitiesSection";
import { FounderSection } from "@/components/FounderSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-canvas overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <UniversitiesSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
