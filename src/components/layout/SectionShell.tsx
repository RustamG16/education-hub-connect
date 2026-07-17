import { cn } from "@/lib/utils";

type SectionShellVariant = "light" | "dark" | "canvas" | "fullBleed";

interface SectionShellProps {
  id?: string;
  variant?: SectionShellVariant;
  roundedStack?: boolean;
  className?: string;
  innerClassName?: string;
  fullBleed?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<SectionShellVariant, string> = {
  light: "bg-surface text-ink",
  dark: "bg-depth text-primary-foreground",
  canvas: "bg-canvas text-ink",
  fullBleed: "bg-transparent",
};

export function SectionShell({
  id,
  variant = "light",
  roundedStack = false,
  className,
  innerClassName,
  fullBleed = false,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative section-fluid-y overflow-hidden",
        variantClasses[variant],
        roundedStack && "rounded-stack-top min-h-svh",
        className,
      )}
    >
      {fullBleed ? (
        children
      ) : (
        <div className={cn("page-shell w-full", innerClassName)}>{children}</div>
      )}
    </section>
  );
}
