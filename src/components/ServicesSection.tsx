import { GraduationCap, FileText, Plane, MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SectionShell } from "@/components/layout/SectionShell";
import { UniversitySlideshow } from "@/components/UniversitySlideshow";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { scrollToElement } from "@/lib/scroll";

export function ServicesSection() {
  const { t } = useLanguage();
  const sectionRef = useGsapReveal<HTMLElement>({ stagger: 0.12, y: 48 });
  useSplitTextReveal<HTMLElement>({ selector: "[data-split-lines]" });

  const services = [
    {
      icon: GraduationCap,
      title: t.services.university.title,
      description: t.services.university.description,
      href: "#universities",
      isExternal: false,
      featured: true,
    },
    {
      icon: FileText,
      title: t.services.documents.title,
      description: t.services.documents.description,
      href: "/documents",
      isExternal: false,
      featured: false,
    },
    {
      icon: Plane,
      title: t.services.visa.title,
      description: t.services.visa.description,
      href: "/visa",
      isExternal: false,
      featured: false,
    },
    {
      icon: MapPin,
      title: t.services.planning.title,
      description: t.services.planning.description,
      href: "https://care4students.netlify.app/",
      isExternal: true,
      featured: false,
    },
  ];

  const handleClick = (href: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href.startsWith("#")) {
      scrollToElement(href);
    } else {
      window.location.href = href;
    }
  };

  const featured = services.find((s) => s.featured)!;
  const others = services.filter((s) => !s.featured);

  return (
    <SectionShell variant="canvas" className="!py-0">
      <section ref={sectionRef} className="section-fluid-y">
        <SectionHeader eyebrow="Austria" title={t.services.title} subtitle={t.services.subtitle} />

        <button
          type="button"
          data-reveal
          onClick={() => handleClick(featured.href, featured.isExternal)}
          className="group relative w-full min-h-[min(60vh,640px)] rounded-3xl overflow-hidden mb-4 text-left cursor-pointer"
        >
          <UniversitySlideshow className="transition-transform duration-700 group-hover:scale-[1.04]" />
          <div className="absolute inset-0 bg-gradient-to-t from-depth/80 via-depth/35 to-depth/15" />
          <div className="relative z-10 flex flex-col justify-end min-h-[min(60vh,640px)] p-8 md:p-12 lg:p-16">
            <featured.icon className="w-8 h-8 text-warm mb-6" />
            <h3 className="font-display font-bold text-section-title text-white mb-4 max-w-2xl">
              {featured.title}
            </h3>
            <p className="text-lead text-white/75 max-w-xl mb-8">{featured.description}</p>
            <span className="inline-flex items-center gap-2 text-base font-semibold text-warm group-hover:gap-3 transition-all">
              Learn more <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
        </button>

        <div className="grid md:grid-cols-3 gap-4">
          {others.map((service, index) => (
            <button
              key={index}
              type="button"
              data-reveal
              onClick={() => handleClick(service.href, service.isExternal)}
              className="group bg-surface rounded-2xl p-8 md:p-10 min-h-[min(30vh,320px)] text-left cursor-pointer hover:bg-primary hover:text-white transition-colors duration-400 flex flex-col justify-between"
            >
              <div>
                <service.icon className="w-7 h-7 text-primary group-hover:text-warm mb-6 transition-colors" />
                <h3 className="font-display font-bold text-subsection-title text-ink group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-warm mt-8 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </section>
    </SectionShell>
  );
}
