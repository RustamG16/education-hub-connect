import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-card text-secondary hover:bg-card/90 hover:-translate-y-0.5 hover:shadow-lg rounded-lg",
        heroOutline:
          "border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-lg",
        warm: "bg-warm text-ink hover:bg-warm/90 hover:-translate-y-0.5 shadow-button rounded-full",
        "pill-light":
          "bg-white text-ink hover:bg-white/90 rounded-full shadow-card hover:-translate-y-0.5 text-base px-8 py-4",
        "pill-dark":
          "bg-depth text-white hover:bg-depth/90 rounded-full shadow-card hover:-translate-y-0.5 text-base px-8 py-4",
      },
      size: {
        default: "h-11 px-5 py-2 rounded-lg",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-full px-10 text-base",
        xl: "h-16 rounded-full px-12 text-lg",
        icon: "h-11 w-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
