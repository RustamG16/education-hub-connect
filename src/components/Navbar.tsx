import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import loadingAnimation from "@/assets/loading.json";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { language, setLanguage, t, languageNames } = useLanguage();
  const showLottie = isMobile ? true : logoHover;
  const usePill = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.howItWorks, to: "/#how-it-works" },
    { label: t.nav.destinations, to: "/#universities" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.contact, to: "/#contact" },
  ];

  const linkClass = usePill
    ? "text-white/75 hover:text-white text-sm font-medium transition-colors"
    : "text-white/80 hover:text-white text-sm font-medium transition-colors";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div
          className={cn(
            "pointer-events-auto transition-all duration-500 ease-out",
            usePill
              ? "mx-auto mt-4 md:mt-6 max-w-[min(calc(100%-2rem),1200px)] px-2"
              : "w-full mt-0 px-[var(--pad-inline)]",
          )}
        >
          <nav
            className={cn(
              "flex items-center justify-between gap-4 transition-all duration-500",
              usePill
                ? "bg-depth/85 backdrop-blur-xl border border-white/15 rounded-full px-4 md:px-6 py-2.5 md:py-3 shadow-lg"
                : "py-4 md:py-5 bg-transparent",
            )}
          >
            <Link
              to="/"
              className="flex items-center gap-2.5 shrink-0"
              onMouseEnter={() => {
                setLogoHover(true);
                lottieRef.current?.play();
              }}
              onMouseLeave={() => {
                setLogoHover(false);
                lottieRef.current?.stop();
              }}
            >
              <span className="relative inline-flex h-10 md:h-12 w-10 md:w-12 items-center justify-center">
                <img
                  src={logo}
                  alt="Education4Students"
                  className={cn(
                    "h-10 md:h-12 w-auto transition-opacity duration-200",
                    showLottie ? "opacity-0 absolute" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-200",
                    showLottie ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                >
                  <Lottie
                    lottieRef={lottieRef}
                    animationData={loadingAnimation}
                    loop
                    autoplay={isMobile}
                    className="h-8 w-8 md:h-10 md:w-10"
                  />
                </span>
              </span>
              <span
                className={cn(
                  "font-bold text-sm md:text-base whitespace-nowrap hidden sm:inline",
                  usePill ? "text-white" : "text-white",
                )}
              >
                Education4Students
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "gap-1.5 rounded-full",
                        usePill
                          ? "text-white/80 hover:text-white hover:bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/10",
                      )}
                    >
                      <Globe size={16} />
                      <span className="hidden xl:inline">{languageNames[language]}</span>
                      <ChevronDown size={14} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {(Object.keys(languageNames) as Language[]).map((lang) => (
                      <DropdownMenuItem
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={language === lang ? "bg-accent" : ""}
                      >
                        {languageNames[lang]}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <button
                type="button"
                className={cn("lg:hidden p-2 rounded-full", usePill ? "text-white" : "text-white")}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>

        {mobileOpen && (
          <div className="pointer-events-auto lg:hidden mx-4 mt-2 bg-depth/90 backdrop-blur-xl border border-white/15 rounded-2xl animate-fade-in overflow-hidden">
            <div className="p-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-base font-medium text-white/80 hover:text-white py-3 px-2 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-white/10">
                {(Object.keys(languageNames) as Language[]).map((lang) => (
                  <Button
                    key={lang}
                    variant={language === lang ? "pill-light" : "ghost"}
                    size="sm"
                    className={language !== lang ? "text-white/70 hover:text-white" : ""}
                    onClick={() => {
                      setLanguage(lang);
                      setMobileOpen(false);
                    }}
                  >
                    {languageNames[lang]}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Clears the fixed pill on non-home routes; home keeps nav-over-hero. */}
      {!isHome && <div className="h-20 md:h-24 shrink-0" aria-hidden />}
    </>
  );
}
