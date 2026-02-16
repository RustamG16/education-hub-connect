import { useMemo } from "react";
import { getViennaGalleryGroups } from "@/data/viennaGalleryImages";
import { UniversityImage } from "@/components/UniversityImage";

export function ViennaUniversitiesGallery() {
  const groups = useMemo(() => getViennaGalleryGroups(), []);

  return (
    <div className="space-y-12">
      {groups.map(
        (group) =>
          group.images.length > 0 && (
            <section key={group.prefix} className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">{group.title}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 list-none p-0 m-0">
                {group.images.map((img, i) => (
                  <li key={i} className="rounded-xl overflow-hidden bg-card shadow-card border border-border">
                    <div className="aspect-[4/3] bg-muted">
                      <UniversityImage
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )
      )}
    </div>
  );
}
