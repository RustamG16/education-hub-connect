import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface InfiniteFloatingCarouselProps {
  items: ReactNode[];
  /** Scrolling speed in pixels per second. Default ~80px/s. */
  speedPxPerSec?: number;
  /** Optional extra classes for the outer wrapper. */
  className?: string;
}

export function InfiniteFloatingCarousel({
  items,
  speedPxPerSec = 80,
  className = "",
}: InfiniteFloatingCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [durationSec, setDurationSec] = useState<number | undefined>(undefined);

  // Duplicate items to make the track seamless.
  const repeatedItems = [...items, ...items, ...items];

  useEffect(() => {
    if (!trackRef.current || items.length === 0 || speedPxPerSec <= 0) return;

    const track = trackRef.current;

    const updateDuration = () => {
      const fullWidth = track.scrollWidth;
      // We scroll from 0 to -50%, so distance is half the track width.
      const distancePx = fullWidth / 2;
      const seconds = distancePx / speedPxPerSec;
      if (Number.isFinite(seconds) && seconds > 0) {
        setDurationSec(seconds);
      }
    };

    updateDuration();

    const resizeObserver = new ResizeObserver(() => {
      updateDuration();
    });

    resizeObserver.observe(track);

    return () => {
      resizeObserver.disconnect();
    };
  }, [items.length, speedPxPerSec]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`infinite-carousel ${className}`}>
      <div className="infinite-carousel__viewport">
        <div
          ref={trackRef}
          className="infinite-carousel__track"
          style={
            durationSec
              ? {
                  animationDuration: `${durationSec}s`,
                }
              : undefined
          }
        >
          {repeatedItems.map((item, index) => {
            const floatDelay = (index % items.length) * 0.35;
            return (
              <div
                key={index}
                className="infinite-carousel__card"
                style={{
                  animationDelay: `${floatDelay}s`,
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

