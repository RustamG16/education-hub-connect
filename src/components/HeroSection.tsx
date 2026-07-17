import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { gsap, prefersReducedMotion, scrollToElement } from "@/lib/scroll";
import heroPoster from "@/assets/hero-austria-poster.jpg";
import heroVideo from "@/assets/Hero_video.mp4";

export function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const ctaRef = useMagneticButton<HTMLDivElement>();
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const scrollToContact = () => scrollToElement("#contact");

  const headlineLines = [t.hero.headlineLine1, t.hero.headlineLine2];

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(section.querySelector(".hero-eyebrow"), { opacity: 0, y: 20, duration: 0.7 })
        .from(
          section.querySelectorAll(".hero-line-inner"),
          { opacity: 0, y: 48, duration: 0.9, stagger: 0.12 },
          "-=0.3",
        )
        .from(section.querySelector(".hero-sub"), { opacity: 0, y: 30, duration: 0.7 }, "-=0.45")
        .from(section.querySelector(".hero-cta"), { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
        .from(section.querySelector(".hero-float-card"), { opacity: 0, y: 24, duration: 0.7 }, "-=0.4");

      if (mediaRef.current) {
        gsap.to(mediaRef.current, {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh flex items-end overflow-hidden gradient-hero"
    >
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <img
          src={heroPoster}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        {!videoFailed && !prefersReducedMotion() && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroPoster}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
        <div className="absolute inset-0 noise-overlay" aria-hidden />
      </div>

      <div className="page-shell relative z-10 w-full pb-12 md:pb-16 lg:pb-20 pt-28 md:pt-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
          <div className="flex-1 min-w-0">
            <p className="hero-eyebrow section-eyebrow text-white/70 mb-6 md:mb-8">{t.hero.eyebrow}</p>
            <h1 className="font-display font-bold text-hero leading-none text-white mb-8 md:mb-10 max-w-[18ch]">
              {headlineLines.map((line, i) => (
                <span key={i} className="hero-line block overflow-hidden">
                  <span
                    className={`hero-line-inner ${i === headlineLines.length - 1 ? "text-white/45" : ""}`}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>
            <p className="hero-sub text-lead text-white/80 mb-10 md:mb-12 max-w-xl leading-relaxed">
              {t.hero.subheadline}
            </p>
            <div ref={ctaRef} className="hero-cta inline-block">
              <Button variant="pill-light" size="xl" onClick={scrollToContact}>
                {t.hero.cta}
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToElement("#universities")}
            className="hero-float-card hidden lg:flex flex-col items-start gap-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 w-[min(100%,320px)] text-left hover:bg-white/15 transition-colors duration-300"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
              Austria
            </span>
            <span className="font-display font-bold text-2xl text-white leading-tight">
              22 partner universities
            </span>
            <span className="text-sm text-white/70 flex items-center gap-1">
              Explore programmes <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
