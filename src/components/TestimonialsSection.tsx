import { InfiniteFloatingCarousel } from "@/components/InfiniteFloatingCarousel";

interface Testimonial {
  name: string;
  country?: string;
  university: string;
  program: string;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Murad Qurbanov",
    country: "Azerbaijan",
    university: "Cardiff University",
    program: "MSc Data Science and Analytics",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=160&h=160&fit=crop&auto=format&q=80&facepad=2",
  },
  {
    name: "Gülya Qurbanova",
    country: "Azerbaijan",
    university: "University of Glasgow",
    program: "MSc Software Development",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=160&h=160&fit=crop&auto=format&q=80&facepad=2",
  },
  {
    name: "Fərid Axundov",
    country: "Azerbaijan",
    university: "University of Sheffield",
    program: "MSc Urban and Regional Planning",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb0b90ccb26?w=160&h=160&fit=crop&auto=format&q=80&facepad=2",
  },
  {
    name: "Nərmin İsgəndərli",
    country: "Azerbaijan",
    university: "University of Bonn",
    program: "MSc European Studies",
    photo:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=160&h=160&fit=crop&auto=format&q=80&facepad=2",
  },
  {
    name: "Aydan Soltanlı",
    country: "Azerbaijan",
    university: "University of Bonn",
    program: "MSc European Studies",
    photo:
      "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?w=160&h=160&fit=crop&auto=format&q=80&facepad=2",
  },
  {
    name: "Nərmin Əliyeva",
    country: "Azerbaijan",
    university: "University of Cologne",
    program: "MSc Business Administration",
    photo:
      "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=160&h=160&fit=crop&auto=format&q=80&facepad=2",
  },
  {
    name: "Stella Ağaşirinli",
    country: "Azerbaijan",
    university: "IU International University of Applied Sciences",
    program: "MSc IT Management",
    photo:
      "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?w=160&h=160&fit=crop&auto=format&q=80&facepad=2",
  },
  {
    name: "Ülkər Abdullayeva",
    country: "Azerbaijan",
    university: "University of Milan",
    program: "BSc Political Science",
    photo:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=160&h=160&fit=crop&auto=format&q=80&facepad=2",
  },
];

export function TestimonialsSection() {
  const firstRow = testimonials.filter((_, index) => index % 2 === 0);
  const secondRow = testimonials.filter((_, index) => index % 2 === 1);

  const renderCard = (t: Testimonial) => (
    <div
      key={t.name}
      className="relative bg-card rounded-2xl px-5 py-4 shadow-card hover:shadow-card-hover transition-all duration-300 w-64 md:w-72"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="relative">
          <img
            src={t.photo}
            alt={t.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shadow-sm"
          />
        </div>
        <div>
          <p className="text-sm font-semibold">
            {t.name}
            {t.country && <span className="text-muted-foreground"> · {t.country}</span>}
          </p>
          <p className="text-[11px] text-muted-foreground">{t.university}</p>
        </div>
      </div>

      <p className="text-xs text-secondary font-medium leading-snug">{t.program}</p>
    </div>
  );

  return (
    <section id="students" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student results & stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real examples of students who received offers from European universities. You can later replace these with
            your own success stories and detailed case studies.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          <InfiniteFloatingCarousel items={firstRow.map(renderCard)} speedPxPerSec={35} />
          <InfiniteFloatingCarousel items={secondRow.map(renderCard)} speedPxPerSec={42} />
        </div>
      </div>
    </section>
  );
}

