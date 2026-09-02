import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import { initSmoothScroll, onScrollReady, scrollToTop, scrollToElement, ScrollTrigger } from "@/lib/scroll";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UniversityPage from "./pages/UniversityPage";
import About from "./pages/About";
import Documents from "./pages/Documents";
import Visa from "./pages/Visa";
import Vienna from "./pages/Vienna";

const queryClient = new QueryClient();
const routerBase = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL;

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let handled = false;

    const applyRouteScroll = () => {
      if (handled) return;
      handled = true;
      ScrollTrigger.refresh();

      if (hash) {
        scrollToElement(hash, -80);
      } else {
        scrollToTop(true);
      }
    };

    const unsubscribe = onScrollReady(applyRouteScroll);
    const fallbackId = window.setTimeout(applyRouteScroll, 250);

    return () => {
      unsubscribe();
      window.clearTimeout(fallbackId);
    };
  }, [pathname, hash]);

  return null;
}

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initSmoothScroll();
    return () => {};
  }, []);

  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          basename={routerBase}
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <SmoothScrollProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/visa" element={<Visa />} />
              <Route path="/vienna" element={<Vienna />} />
              <Route path="/universities/:slug" element={<UniversityPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppButton />
          </SmoothScrollProvider>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
