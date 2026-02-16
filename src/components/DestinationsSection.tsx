import { useLanguage } from "@/contexts/LanguageContext";
import AT from "country-flag-icons/react/3x2/AT";
import DE from "country-flag-icons/react/3x2/DE";
import IT from "country-flag-icons/react/3x2/IT";
import NL from "country-flag-icons/react/3x2/NL";
import CZ from "country-flag-icons/react/3x2/CZ";
import type { FlagComponent } from "country-flag-icons/react/3x2";

interface Destination {
  name: string;
  Flag: FlagComponent;
  image: string;
  programsLink: string;
}

const destinations: Destination[] = [
  {
    name: "Austria",
    Flag: AT,
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&h=250&fit=crop",
    programsLink: "#contact",
  },
  {
    name: "Germany",
    Flag: DE,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop",
    programsLink: "#contact",
  },
  {
    name: "Italy",
    Flag: IT,
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=250&fit=crop",
    programsLink: "#contact",
  },
  {
    name: "Netherlands",
    Flag: NL,
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=250&fit=crop",
    programsLink: "#contact",
  },
  {
    name: "Czech Republic",
    Flag: CZ,
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&h=250&fit=crop",
    programsLink: "#contact",
  },
];

export function DestinationsSection() {
  const { t } = useLanguage();

  return (
    <section id="destinations" className="py-20 md:py-28 gradient-subtle">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.destinations.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.destinations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {destinations.map((destination, index) => (
            <a
              key={destination.name}
              href={destination.programsLink}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer opacity-0 animate-scale-in block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
              
              {/* Content - centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <destination.Flag className="w-12 h-8 mb-2 drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110 rounded-sm" />
                <h3 className="text-lg font-bold tracking-wide text-white">
                  {destination.name}
                </h3>
                <span className="text-xs text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Programs →
                </span>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
