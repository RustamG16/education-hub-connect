import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
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
    <footer className="bg-depth text-white">
      <div className="page-shell section-fluid-y !pb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-20 mb-16 md:mb-20">
          <div>
            <Link
              to="/"
              className="relative inline-flex h-16 w-20 items-center justify-center mb-8"
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
                className={`h-16 w-auto transition-opacity duration-200 ${showLottie ? "opacity-0 absolute" : "opacity-100"}`}
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
                  className="h-14 w-14"
                />
              </span>
            </Link>
            <p className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-tight max-w-lg">
              Education4Students
            </p>
            <p className="text-lead text-white/55 mt-6 max-w-md">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-4 text-lead text-white/65">
            <a href="tel:+436763492193" className="hover:text-white transition-colors">
              {t.footer.phone}: +43 676 349 2193
            </a>
            <a href="mailto:education4students@outlook.com" className="hover:text-white transition-colors">
              {t.footer.email}: education4students@outlook.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-sm text-white/40">
          &copy; {new Date().getFullYear()} Education4Students. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
