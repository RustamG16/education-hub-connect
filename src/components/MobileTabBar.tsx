import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ListChecks, GraduationCap, Users, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { scrollToElement, scrollToTop } from "@/lib/scroll";

const PHONE = "(max-width: 767px)";
const SECTIONS = ["how-it-works", "universities", "contact"] as const;

type TabId = "home" | (typeof SECTIONS)[number] | "about";

/** Phone tab bar (mobile-app-shell). Hidden above 767 px by src/mobile.css. */
export function MobileTabBar() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [active, setActive] = useState<TabId | null>(null);

  // Active tab on the home route = the section occupying the middle of the viewport.
  useEffect(() => {
    if (!isHome) {
      setActive(pathname === "/about" ? "about" : pathname.startsWith("/universities") ? "universities" : null);
      return;
    }
    const phone = window.matchMedia(PHONE);
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!phone.matches) return;
      const mid = window.innerHeight * 0.45;
      let best: TabId = "home";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mid) best = id;
      }
      setActive(best);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome, pathname]);

  // Hide under the full-screen menu drawer.
  useEffect(() => {
    const sync = () =>
      document.body.classList.toggle("m-overlay-open", Boolean(document.getElementById("mobile-menu")));
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });
    sync();
    return () => {
      observer.disconnect();
      document.body.classList.remove("m-overlay-open");
    };
  }, []);

  const tabs: { id: TabId; to: string; label: string; icon: typeof Home; primary?: boolean }[] = [
    { id: "home", to: "/", label: t.nav.home, icon: Home },
    { id: "how-it-works", to: "/#how-it-works", label: t.nav.howItWorks, icon: ListChecks },
    { id: "universities", to: "/#universities", label: t.nav.destinations, icon: GraduationCap },
    { id: "about", to: "/about", label: t.nav.about, icon: Users },
    { id: "contact", to: "/#contact", label: t.nav.contact, icon: MessageSquare, primary: true },
  ];

  return (
    <nav className="m-tabbar" aria-label="Quick navigation" data-tabbar>
      {tabs.map(({ id, to, label, icon: Icon, primary }) => (
        <Link
          key={id}
          to={to}
          className={primary ? "m-tab-primary" : undefined}
          aria-current={active === id ? "page" : undefined}
          onClick={() => {
            // Re-tapping a tab on the home route still scrolls; the router ignores a same-URL push.
            if (!isHome || id === "about") return;
            if (id === "home") scrollToTop(false);
            else scrollToElement(`#${id}`, -80);
          }}
        >
          <Icon aria-hidden strokeWidth={2} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
