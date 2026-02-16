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
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import loadingAnimation from "@/assets/loading.json";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const isMobile = useIsMobile();
  const { language, setLanguage, t, languageNames } = useLanguage();
  const showLottie = isMobile ? true : logoHover;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.destinations, href: "#universities" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border/50"
          : "bg-background/95 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between min-h-[3.5rem] py-1 md:min-h-[4.5rem] md:py-1.5">
        {/* Logo + brand name */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onMouseEnter={() => {
            setLogoHover(true);
            lottieRef.current?.play();
          }}
          onMouseLeave={() => {
            setLogoHover(false);
            lottieRef.current?.stop();
          }}
        >
          <span className="relative inline-flex h-14 md:h-20 w-14 md:w-20 items-center justify-center shrink-0">
            <img
              src={logo}
              alt="Education4Students"
              className={`h-14 md:h-20 w-auto max-w-full transition-opacity duration-200 ${showLottie ? "opacity-0 absolute" : "opacity-100"}`}
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
                className="h-12 w-12 md:h-16 md:w-16"
              />
            </span>
          </span>
          <span className="font-bold text-base md:text-lg whitespace-nowrap" style={{ color: "#2d4563" }}>
            Education4Students
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-secondary transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={(e) => {
                if (link.href.startsWith("/")) {
                  e.preventDefault();
                  window.location.href = link.href;
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Language Selector */}
        <div className="hidden md:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Globe size={18} />
                <span>{languageNames[language]}</span>
                <ChevronDown size={16} />
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

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-secondary py-2 transition-colors"
                onClick={(e) => {
                  setMobileOpen(false);
                  if (link.href.startsWith("/")) {
                    e.preventDefault();
                    window.location.href = link.href;
                  }
                }}
              >
                {link.label}
              </a>
            ))}
            {/* Mobile Language Selector */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
              {(Object.keys(languageNames) as Language[]).map((lang) => (
                <Button
                  key={lang}
                  variant={language === lang ? "default" : "outline"}
                  size="sm"
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
    </nav>
  );
}
