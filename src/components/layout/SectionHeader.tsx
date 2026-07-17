import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  size?: "section" | "subsection";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  size = "section",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-primary-foreground" : "text-ink";
  const subtitleColor = light ? "text-primary-foreground/75" : "text-muted-foreground";
  const titleSize = size === "section" ? "text-section-title" : "text-subsection-title";

  return (
    <div className={cn("mb-12 md:mb-16 lg:mb-20 max-w-[90%]", alignClass, className)} data-reveal>
      {eyebrow && <p className="section-eyebrow mb-4 md:mb-5">{eyebrow}</p>}
      <h2 className={cn("font-display font-bold mb-5 md:mb-6", titleSize, titleColor)} data-split-lines>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lead max-w-3xl leading-relaxed", subtitleColor, align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
