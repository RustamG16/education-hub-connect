import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-canvas flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center page-shell pt-24">
        <div className="text-center max-w-lg">
          <p className="section-eyebrow mb-6">404</p>
          <h1 className="font-display font-bold text-section-title text-ink mb-6">Page not found</h1>
          <p className="text-lead text-muted-foreground mb-10 leading-relaxed">
            This page does not exist or may have moved.
          </p>
          <Button variant="warm" size="lg" onClick={() => navigate("/")}>
            Return to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
