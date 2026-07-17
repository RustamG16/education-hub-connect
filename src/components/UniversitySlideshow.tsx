import { useEffect, useMemo, useState } from "react";
import { getAustriaUniversitySlideshowUrls } from "@/data/universityImages";
import { cn } from "@/lib/utils";

function shuffle<T>(items: T[]): T[] {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

const INTERVAL_MS = 4500;
const FADE_MS = 900;

interface UniversitySlideshowProps {
  className?: string;
  imageClassName?: string;
}

export function UniversitySlideshow({ className, imageClassName }: UniversitySlideshowProps) {
  const images = useMemo(() => shuffle(getAustriaUniversitySlideshowUrls()), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    images.slice(0, 4).forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % images.length);
        setVisible(true);
      }, FADE_MS);
    }, INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  if (images.length === 0) return null;

  const src = images[activeIndex];

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      <img
        key={src}
        src={src}
        alt=""
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out",
          visible ? "opacity-100" : "opacity-0",
          imageClassName,
        )}
        decoding="async"
        fetchPriority={activeIndex === 0 ? "high" : "low"}
      />
    </div>
  );
}
