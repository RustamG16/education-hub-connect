import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;
let scrollInitialized = false;
const readyCallbacks = new Set<() => void>();

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function notifyScrollReady() {
  readyCallbacks.forEach((cb) => cb());
}

export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}

export function onScrollReady(callback: () => void): () => void {
  readyCallbacks.add(callback);
  if (scrollInitialized) {
    requestAnimationFrame(callback);
  }
  return () => readyCallbacks.delete(callback);
}

export function initSmoothScroll(): () => void {
  if (scrollInitialized) {
    return () => {};
  }

  if (prefersReducedMotion()) {
    scrollInitialized = true;
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      notifyScrollReady();
    });
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenisInstance = lenis;
  scrollInitialized = true;

  lenis.on("scroll", ScrollTrigger.update);

  const tick = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value) {
      if (arguments.length && value !== undefined) {
        lenis.scrollTo(value, { immediate: true });
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.defaults({ scroller: document.documentElement });

  const refresh = (notifyReady = false) => {
    ScrollTrigger.refresh();
    if (notifyReady) notifyScrollReady();
  };

  requestAnimationFrame(() => {
    refresh(true);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  });

  window.addEventListener("load", () => ScrollTrigger.refresh());

  return () => {
    window.removeEventListener("load", refresh);
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenisInstance = null;
    scrollInitialized = false;
    ScrollTrigger.scrollerProxy(document.documentElement, {});
    ScrollTrigger.refresh();
  };
}

export function scrollToTop(immediate = true): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
  }
}

export function scrollToElement(selector: string, offset = -80): void {
  const el = document.querySelector(selector);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el as HTMLElement, { offset });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export { gsap, ScrollTrigger };
