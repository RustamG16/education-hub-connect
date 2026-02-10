import { GraduationCap, FileText, Plane, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: GraduationCap,
      title: t.services.university.title,
      description: t.services.university.description,
      href: "#universities",
      isExternal: false,
    },
    {
      icon: FileText,
      title: t.services.documents.title,
      description: t.services.documents.description,
      href: "/documents",
      isExternal: false,
    },
    {
      icon: Plane,
      title: t.services.visa.title,
      description: t.services.visa.description,
      href: "/visa",
      isExternal: false,
    },
    {
      icon: MapPin,
      title: t.services.planning.title,
      description: t.services.planning.description,
      href: "https://care4students.netlify.app/",
      isExternal: true,
    },
  ];

  const handleClick = (href: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(service.href, service.isExternal)}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in text-left cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
              <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
