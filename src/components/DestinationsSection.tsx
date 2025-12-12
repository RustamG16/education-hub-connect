import { useLanguage } from "@/contexts/LanguageContext";

const destinations = [
  {
    name: "Austria",
    flag: "🇦🇹",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&h=250&fit=crop",
    color: "from-red-500/20 to-red-600/30",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop",
    color: "from-yellow-500/20 to-black/30",
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=250&fit=crop",
    color: "from-green-500/20 to-red-500/20",
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=250&fit=crop",
    color: "from-orange-500/20 to-blue-500/20",
  },
  {
    name: "Poland",
    flag: "🇵🇱",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=400&h=250&fit=crop",
    color: "from-red-500/20 to-white/30",
  },
  {
    name: "Czech Republic",
    flag: "🇨🇿",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&h=250&fit=crop",
    color: "from-blue-500/20 to-red-500/20",
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
            <div
              key={destination.name}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer opacity-0 animate-scale-in"
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
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${destination.color} to-secondary/60 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-5xl mb-3 drop-shadow-lg transform transition-transform duration-300 group-hover:scale-125">
                  {destination.flag}
                </span>
                <h3 className="text-xl font-bold tracking-wide drop-shadow-lg">
                  {destination.name}
                </h3>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
