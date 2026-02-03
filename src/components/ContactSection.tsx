import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    desiredCountry: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", country: "", desiredCountry: "", contact: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 gradient-subtle">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div className="opacity-0 animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t.contact.support}
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {t.contact.noHiddenFees}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {t.contact.personalizedRecommendations}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {t.contact.supportInYourLanguage}
              </li>
            </ul>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card opacity-0 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-6">{t.contact.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.contact.name}
                </label>
                <Input
                  id="name"
                  placeholder={t.contact.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-2">
                  {t.contact.country}
                </label>
                <Input
                  id="country"
                  placeholder="e.g., Azerbaijan, Kazakhstan"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="desiredCountry" className="block text-sm font-medium mb-2">
                  {t.contact.desiredCountry}
                </label>
                <Input
                  id="desiredCountry"
                  placeholder="e.g., Austria, Germany"
                  value={formData.desiredCountry}
                  onChange={(e) => setFormData({ ...formData, desiredCountry: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium mb-2">
                  {t.contact.contactMethod}
                </label>
                <Input
                  id="contact"
                  placeholder={`${t.contact.whatsapp} / ${t.contact.email}`}
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full shadow-button" size="lg">
                {t.contact.submit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
