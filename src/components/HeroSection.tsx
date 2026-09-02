import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { gsap, prefersReducedMotion, scrollToElement } from "@/lib/scroll";
import heroPoster from "@/assets/hero-poster.jpg";
import heroVideo from "@/assets/Hero_video_loop.mp4";

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
        .from(section.querySelector(".hero-stat"), { opacity: 0, y: 24, duration: 0.7 }, "-=0.4");

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
      className="relative min-h-[max(100svh,680px)] overflow-hidden bg-depth text-white"
    >
      <div ref={mediaRef} className="absolute -inset-[4%] will-change-transform bg-depth" aria-hidden>
        <img src={heroPoster} alt="" className="absolute inset-0 h-full w-full object-cover" />
        {!videoFailed && !prefersReducedMotion() && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="hero-scrim absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-black/10" aria-hidden />

      <div className="page-shell relative z-10 flex min-h-[max(100svh,680px)] items-end pb-10 pt-28 sm:pb-14 md:pt-32 lg:items-center lg:py-32">
        <div className="flex w-full max-w-[42rem] flex-col">
          <p className="hero-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 md:mb-7">
            {t.hero.eyebrow}
          </p>

          <h1 className="mb-5 max-w-[13ch] text-balance font-display font-bold text-hero-panel text-white md:mb-7">
            {headlineLines.map((line, i) => (
              <span key={i} className="hero-line block overflow-hidden">
                <span
                  className={`hero-line-inner ${i === headlineLines.length - 1 ? "text-white/72" : ""}`}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-sub mb-7 max-w-[44ch] text-lead leading-relaxed text-white/80 md:mb-9">
            {t.hero.subheadline}
          </p>

          <div ref={ctaRef} className="hero-cta inline-block self-start">
            <Button variant="pill-light" size="xl" onClick={scrollToContact}>
              {t.hero.cta}
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => scrollToElement("#universities")}
            className="hero-stat group mt-8 flex w-full max-w-lg items-center justify-between gap-6 border-t border-white/25 pt-5 pr-20 text-left transition-colors duration-300 hover:border-white/50 sm:pr-0 md:mt-11"
          >
            <span className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                {t.hero.statLabel}
              </span>
              <span className="font-display font-bold text-xl md:text-2xl text-white leading-tight">
                {t.hero.statValue}
              </span>
              <span className="text-sm text-white/70">{t.hero.statCta}</span>
            </span>
            <ArrowUpRight className="w-5 h-5 shrink-0 text-white/70 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
