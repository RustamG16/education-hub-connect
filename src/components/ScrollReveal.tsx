/**
 * @deprecated Use useGsapReveal from @/hooks/useGsapReveal instead.
 */
import type { ReactNode } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useGsapReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={className} data-reveal>
      {children}
    </div>
  );
}
