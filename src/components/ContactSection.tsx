import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionShell } from "@/components/layout/SectionShell";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export function ContactSection() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const sectionRef = useGsapReveal<HTMLElement>({ stagger: 0.1 });
  const submitRef = useMagneticButton<HTMLDivElement>();
  useSplitTextReveal<HTMLElement>({ selector: "[data-split-lines]" });
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    desiredCity: "",
    contact: "",
  });

  const CONSULTATION_EMAIL = "education4students@outlook.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Consultation Request - Education4Students");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCountry: ${formData.country}\nPreferred city in Austria: ${formData.desiredCity}\nContact (WhatsApp/Email): ${formData.contact}`,
    );
    window.location.href = `mailto:${CONSULTATION_EMAIL}?subject=${subject}&body=${body}`;
    toast({
      title: "Email draft opened",
      description: "Review and send the request from your email app.",
    });
  };

  return (
    <SectionShell id="contact" variant="canvas" className="!py-0">
      <section ref={sectionRef} className="section-fluid-y">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 min-h-[min(80vh,900px)]">
          <div data-reveal className="flex flex-col justify-center lg:pr-16 xl:pr-24">
            <p className="section-eyebrow mb-5">Contact</p>
            <h2 className="font-display font-bold text-section-title text-ink mb-6 md:mb-8" data-split-lines>
              {t.contact.title}
            </h2>
            <p className="text-lead text-muted-foreground mb-8 leading-relaxed">{t.contact.support}</p>
            <ul className="space-y-5 text-lead text-muted-foreground">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-warm shrink-0" />
                {t.contact.noHiddenFees}
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-warm shrink-0" />
                {t.contact.personalizedRecommendations}
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-warm shrink-0" />
                {t.contact.supportInYourLanguage}
              </li>
            </ul>
          </div>

          <div
            data-reveal
            className="flex flex-col justify-center bg-primary text-white rounded-3xl lg:rounded-none lg:rounded-l-3xl p-8 md:p-12 lg:p-16 xl:p-20"
          >
            <h3 className="font-display font-bold text-subsection-title mb-8 md:mb-10">{t.contact.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {(
                [
                  { id: "name", label: t.contact.name, placeholder: t.contact.name, key: "name" as const },
                  {
                    id: "country",
                    label: t.contact.country,
                    placeholder: "e.g., Azerbaijan, Kazakhstan",
                    key: "country" as const,
                  },
                  {
                    id: "desiredCity",
                    label: t.contact.desiredCity,
                    placeholder: "e.g. Vienna, Graz, Klagenfurt",
                    key: "desiredCity" as const,
                  },
                  {
                    id: "contact",
                    label: t.contact.contactMethod,
                    placeholder: `${t.contact.whatsapp} / ${t.contact.email}`,
                    key: "contact" as const,
                  },
                ] as const
              ).map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-semibold mb-2.5 text-white/80">
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    value={formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    required
                    className="h-14 text-base border-white/15 bg-white/5 text-white placeholder:text-white/40 rounded-xl"
                  />
                </div>
              ))}
              <div ref={submitRef} className="pt-2">
                <Button type="submit" variant="warm" className="w-full" size="xl">
                  {t.contact.submit}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SectionShell>
  );
}
