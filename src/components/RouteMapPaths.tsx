import type { SVGProps } from "react";

export function RouteMapPaths({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 800 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <path
        className="route-path route-path-draw"
        d="M40 160 Q200 40 400 100 T760 60"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        className="route-path route-path-draw"
        d="M60 140 Q280 20 520 80 T740 100"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <circle cx="40" cy="160" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="400" cy="100" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="760" cy="60" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
