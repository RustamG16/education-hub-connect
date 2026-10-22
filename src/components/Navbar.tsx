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
import { setScrollLocked } from "@/lib/scroll";
import logo from "@/assets/logo.png";
import loadingAnimation from "@/assets/loading.json";

const SCROLL_ON = 80;
const SCROLL_OFF = 40;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > SCROLL_ON);
  const [logoHover, setLogoHover] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { language, setLanguage, t, languageNames } = useLanguage();
  const showLottie = isMobile ? true : logoHover;
  const usePill = scrolled || !isHome;

  // Hysteresis: a single 60px threshold flipped the bar back and forth while Lenis eased
  // across it. It turns on past 80px and off only below 40px.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled((was) => (was ? y > SCROLL_OFF : y > SCROLL_ON));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Mobile menu: close on navigation, Escape and outside taps; the page underneath stays put.
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => setMobileOpen(false), [location.pathname, location.hash]);
  useEffect(() => {
    if (!mobileOpen) return;
    setScrollLocked(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!menuRef.current?.contains(target) && !toggleRef.current?.contains(target)) setMobileOpen(false);
    };
    const onResize = () => window.innerWidth >= 1024 && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      setScrollLocked(false);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.howItWorks, to: "/#how-it-works" },
    { label: t.nav.destinations, to: "/#universities" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.contact, to: "/#contact" },
  ];

  const linkClass = cn(
    "py-3 text-sm font-medium transition-colors hover:text-white",
    usePill ? "text-white/75" : "text-white/80",
  );

  return (
    <>
      {/* One geometry in both states. The old bar animated width, margin and padding between a
          full-width strip and a pill with transition-all; width, max-width and backdrop-filter
          cannot animate, so it jumped and then morphed. Now only the pill surface fades. */}
      <header className="fixed top-0 left-0 right-0 z-[60] pointer-events-none px-4 pt-3 md:pt-4">
        <div className="pointer-events-auto mx-auto max-w-[1200px]">
          <nav className="relative isolate flex items-center justify-between gap-4 rounded-full px-4 md:px-6 py-2.5 md:py-3">
            <span
              aria-hidden
              className={cn(
                "absolute inset-0 -z-10 rounded-full border bg-depth/85 shadow-lg backdrop-blur-xl transition-[opacity,border-color] duration-300 ease-out",
                usePill ? "opacity-100 border-white/15" : "opacity-0 border-transparent",
              )}
            />
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
                    loop={!isMobile}
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
              <div className="hidden lg:block">
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
                ref={toggleRef}
                type="button"
                className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>

        {mobileOpen && (
          <div ref={menuRef} id="mobile-menu" className="pointer-events-auto lg:hidden mx-auto max-w-[1200px] mt-2 max-h-[calc(100svh-6rem)] overflow-y-auto bg-depth/95 backdrop-blur-xl border border-white/15 rounded-2xl animate-fade-in overflow-hidden">
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
