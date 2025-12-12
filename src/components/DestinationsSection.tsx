const destinations = [
  "Austria",
  "Germany",
  "Italy",
  "Netherlands",
  "Poland",
  "Czech Republic",
];

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 md:py-28 gradient-subtle">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Study Destinations</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore top European countries with world-class education and vibrant student communities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {destinations.map((destination, index) => (
            <span
              key={destination}
              className="px-6 py-3 bg-card rounded-full text-secondary font-medium shadow-card hover:shadow-card-hover hover:bg-accent transition-all duration-300 cursor-default animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {destination}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
