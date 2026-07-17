import type { ReactNode } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import type { LucideIcon } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/scroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface PageShellProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  backLabel?: string;
  backTo?: string;
  children: ReactNode;
  headerExtra?: ReactNode;
}

export function PageShell({
  title,
  description,
  icon: Icon,
  backLabel = "Back",
  backTo,
  children,
  headerExtra,
}: PageShellProps) {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header) return;

      const targets = header.querySelectorAll("[data-reveal]");
      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      );
    },
    { scope: headerRef },
  );

  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <header ref={headerRef} className="gradient-hero pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="page-shell w-full">
          <button
            type="button"
            data-reveal
            onClick={handleBack}
            className="text-sm font-medium text-white/60 hover:text-white mb-8 inline-flex items-center gap-1 transition-colors"
          >
            ← {backLabel}
          </button>

          <div className="flex items-start gap-5" data-reveal>
            {Icon && (
              <div className="w-14 h-14 rounded-2xl border border-white/15 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-warm" />
              </div>
            )}
            <div className="min-w-0">
              <h1 className="font-display font-bold text-section-title text-white">{title}</h1>
              {description && (
                <p className="text-lead text-white/70 mt-4 max-w-3xl leading-relaxed">{description}</p>
              )}
            </div>
          </div>

          {headerExtra && <div className="mt-8" data-reveal>{headerExtra}</div>}
        </div>
      </header>

      <main className="page-shell w-full section-fluid-y !pt-0">{children}</main>
      <Footer />
    </div>
  );
}
