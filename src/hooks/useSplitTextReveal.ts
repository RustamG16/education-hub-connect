import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/scroll";

interface UseSplitTextRevealOptions {
  selector?: string;
  stagger?: number;
  y?: number;
  start?: string;
  trigger?: HTMLElement | null;
}

export function useSplitTextReveal<T extends HTMLElement>(
  options: UseSplitTextRevealOptions = {},
) {
  const ref = useRef<T>(null);
  const { selector = "[data-split-lines]", stagger = 0.08, y = 48, start = "top 85%" } = options;

  useGSAP(
    () => {
      const container = ref.current;
      if (!container) return;

      let ctx: gsap.Context | null = null;

      const setup = () => {
        ctx?.revert();

        ctx = gsap.context(() => {
          const headings = container.querySelectorAll(selector);
          if (!headings.length) return;

          if (prefersReducedMotion()) return;

          headings.forEach((heading) => {
            const text = heading.textContent?.trim() ?? "";
            if (!text) return;

            const lines = text.split(/(?<=[.!?])\s+|\n/).filter(Boolean);
            if (lines.length <= 1) {
              const words = text.split(" ");
              heading.innerHTML = words
                .map(
                  (word) =>
                    `<span class="anim-text-line"><span class="anim-text-line-inner inline-block">${word}</span></span>`,
                )
                .join(" ");
            } else {
              heading.innerHTML = lines
                .map(
                  (line) =>
                    `<span class="anim-text-line block"><span class="anim-text-line-inner inline-block">${line}</span></span>`,
                )
                .join("");
            }

            const inners = heading.querySelectorAll(".anim-text-line-inner");
            gsap.set(inners, { y, opacity: 0 });

            ScrollTrigger.create({
              trigger: heading,
              start,
              once: true,
              onEnter: () => {
                gsap.to(inners, {
                  y: 0,
                  opacity: 1,
                  duration: 0.9,
                  stagger,
                  ease: "power3.out",
                });
              },
            });
          });
        }, container);
      };

      setup();
      return () => ctx?.revert();
    },
    { scope: ref },
  );

  return ref;
}
