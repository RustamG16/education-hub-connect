import { PageShell } from "@/components/layout/PageShell";
import { ViennaUniversitiesGallery } from "@/components/ViennaUniversitiesGallery";
import { getUniversityCityImageUrls } from "@/data/universityImages";
import { UniversityImage } from "@/components/UniversityImage";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Vienna() {
  const viennaCityUrls = getUniversityCityImageUrls("vienna", 6);
  const contentRef = useGsapReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <PageShell
      title="Vienna universities"
      description="University images grouped by institution."
      backTo="/"
    >
      <div ref={contentRef}>
        {viennaCityUrls.length > 0 && (
          <section data-reveal className="mb-12">
            <h2 className="font-display text-xl text-ink mb-4">Vienna (city)</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {viennaCityUrls.map((url, i) => (
                <div key={i} className="aspect-video rounded-md overflow-hidden bg-muted border border-line">
                  <UniversityImage src={url} className="w-full h-full object-cover" alt={`Vienna ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        )}
        <div data-reveal>
          <ViennaUniversitiesGallery />
        </div>
      </div>
    </PageShell>
  );
}
