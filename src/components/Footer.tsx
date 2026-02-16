import { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import loadingAnimation from "@/assets/loading.json";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

export function Footer() {
  const { t } = useLanguage();
  const [logoHover, setLogoHover] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const isMobile = useIsMobile();
  const showLottie = isMobile || logoHover;

  return (
    <footer className="relative bg-background">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left - Brand */}
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="relative inline-flex h-16 md:h-20 w-20 md:w-24 items-center justify-center shrink-0"
              onMouseEnter={() => {
                setLogoHover(true);
                lottieRef.current?.play();
              }}
              onMouseLeave={() => {
                setLogoHover(false);
                lottieRef.current?.stop();
              }}
            >
              <img
                src={logo}
                alt="Education4Students"
                className={`h-16 md:h-20 w-auto max-w-[260px] object-contain object-left transition-opacity duration-200 ${showLottie ? "opacity-0 absolute left-0" : "opacity-100"}`}
              />
              <span
                className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${showLottie ? "opacity-100" : "opacity-0"}`}
                aria-hidden
              >
                <Lottie
                  lottieRef={lottieRef}
                  animationData={loadingAnimation}
                  loop
                  autoplay={isMobile}
                  className="h-14 w-14 md:h-[4.5rem] md:w-[4.5rem]"
                />
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Right - Contact info */}
          <div className="flex flex-col items-start md:items-end gap-3 text-sm text-muted-foreground">
            <a
              href="tel:+436763492193"
              className="hover:text-foreground transition-colors"
              aria-label="Phone"
            >
              {t.footer.phone}: +43 676 349 2193
            </a>
            <a
              href="mailto:education4students@outlook.com"
              className="hover:text-foreground transition-colors"
              aria-label="Email"
            >
              {t.footer.email}: education4students@outlook.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Education4Students. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
