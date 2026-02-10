import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Education4Students" className="h-12 w-auto" />
          </div>
          <div className="flex flex-col items-center md:items-end gap-1 text-sm text-muted-foreground">
            <p>{t.footer.tagline}</p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
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
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Education4Students. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
