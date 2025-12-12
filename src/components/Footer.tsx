import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Education4Students" className="h-10 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Your trusted partner for studying abroad in Europe.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Education4Students. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
