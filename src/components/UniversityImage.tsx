import { useState } from "react";

interface UniversityImageProps {
  src: string;
  alt?: string;
  className?: string;
}

/** Renders university/city image with gradient placeholder fallback if load fails. */
export function UniversityImage({ src, alt = "", className = "" }: UniversityImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ${className}`}
        aria-hidden
      >
        <span className="text-4xl opacity-50">🏛️</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
