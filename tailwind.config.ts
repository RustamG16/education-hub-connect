import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "clamp(1.25rem, 2.5vw, 3rem)",
        sm: "clamp(1.25rem, 2.5vw, 3rem)",
        lg: "clamp(1.25rem, 2.5vw, 3rem)",
        xl: "clamp(1.25rem, 2.5vw, 3rem)",
        "2xl": "clamp(1.25rem, 2.5vw, 3rem)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1920px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "1", letterSpacing: "-0.05em" }],
        section: ["var(--text-section)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        subsection: ["var(--text-subsection)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        lead: ["var(--text-lead)", { lineHeight: "1.5" }],
        "display-xl": ["var(--text-hero)", { lineHeight: "1", letterSpacing: "-0.05em" }],
        "display-lg": ["var(--text-section)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        "display-md": ["var(--text-subsection)", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        page: "1920px",
      },
      spacing: {
        "section-y": "var(--section-y)",
        "pad-inline": "var(--pad-inline)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        canvas: "hsl(var(--canvas))",
        ink: "hsl(var(--ink))",
        depth: "hsl(var(--depth))",
        warm: "hsl(var(--warm))",
        line: "hsl(var(--line))",
        surface: "hsl(var(--surface))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "1.5rem",
        "4xl": "2rem",
        pill: "9999px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
