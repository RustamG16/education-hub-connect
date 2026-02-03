import { useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t, languageNames } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.destinations, href: "#destinations" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Education4Students" className="h-12 md:h-16 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
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
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-secondary py-2"
                onClick={() => setMobileOpen(false)}
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
