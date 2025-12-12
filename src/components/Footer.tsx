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
          <p className="text-sm text-muted-foreground text-center md:text-right">
            {t.footer.tagline}
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Education4Students. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
