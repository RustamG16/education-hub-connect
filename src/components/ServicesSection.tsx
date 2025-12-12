import { GraduationCap, FileText, Plane, MapPin } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University & Program Selection",
    description: "Find the perfect university and study program that matches your goals and qualifications.",
  },
  {
    icon: FileText,
    title: "Documents & Applications",
    description: "Complete support with application documents, transcripts, and university submissions.",
  },
  {
    icon: Plane,
    title: "Visa Guidance",
    description: "Step-by-step assistance with student visa applications and embassy appointments.",
  },
  {
    icon: MapPin,
    title: "Pre-Arrival Planning",
    description: "Help with accommodation, travel arrangements, and everything before your move.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Help With</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From choosing the right university to settling in a new country — we guide you every step of the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
