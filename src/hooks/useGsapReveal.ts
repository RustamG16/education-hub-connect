import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
} from "@/lib/scroll";

interface UseGsapRevealOptions {
  stagger?: number;
  y?: number;
  delay?: number;
  start?: string;
  childSelector?: string;
}

function revealInView(
  targets: Element[],
  start: string,
  y: number,
  stagger: number,
  delay: number,
) {
  const threshold = parseFloat(start.match(/(\d+)%/)?.[1] ?? "85") / 100;

  targets.forEach((el, index) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * threshold) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.7,
        delay: delay + index * stagger,
        ease: "power3.out",
        overwrite: true,
      });
    }
  });
}

export function useGsapReveal<T extends HTMLElement>(
  options: UseGsapRevealOptions = {},
) {
  const ref = useRef<T>(null);
  const {
    stagger = 0.08,
    y = 32,
    delay = 0,
    start = "top 85%",
    childSelector = "[data-reveal]",
  } = options;

  useGSAP(
    () => {
      const container = ref.current;
      if (!container) return;

      let ctx: gsap.Context | null = null;

      const setup = () => {
        ctx?.revert();

        ctx = gsap.context(() => {
          const targets = container.querySelectorAll(childSelector);
          if (targets.length === 0) return;

          if (prefersReducedMotion()) {
            gsap.set(targets, { opacity: 1, y: 0, x: 0 });
            return;
          }

          gsap.set(targets, { opacity: 0, y });

          ScrollTrigger.batch(targets, {
            start,
            onEnter: (batch) => {
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger,
                delay,
                ease: "power3.out",
                overwrite: true,
              });
            },
            once: true,
          });

          revealInView(Array.from(targets), start, y, stagger, delay);
        }, container);
      };

      setup();
      return () => ctx?.revert();
    },
    { scope: ref },
  );

  return ref;
}

interface UseGsapMountRevealOptions {
  stagger?: number;
  y?: number;
  delay?: number;
}

export function useGsapMountReveal<T extends HTMLElement>(
  options: UseGsapMountRevealOptions = {},
) {
  const ref = useRef<T>(null);
  const { stagger = 0.1, y = 24, delay = 0 } = options;

  useGSAP(
    () => {
      const container = ref.current;
      if (!container) return;

      const targets = container.querySelectorAll("[data-reveal]");
      if (targets.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger,
          delay,
          ease: "power3.out",
        },
      );
    },
    { scope: ref },
  );

  return ref;
}
