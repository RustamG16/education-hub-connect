import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ViennaUniversitiesGallery } from "@/components/ViennaUniversitiesGallery";
import { getUniversityCityImageUrls } from "@/data/universityImages";
import { UniversityImage } from "@/components/UniversityImage";

export default function Vienna() {
  const viennaCityUrls = getUniversityCityImageUrls("vienna", 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <div className="container py-10 md:py-16">
          <h1 className="text-3xl font-bold mb-2">Vienna universities</h1>
          <p className="text-muted-foreground mb-10">
            University images grouped by institution.
          </p>
          {viennaCityUrls.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Vienna (city)</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {viennaCityUrls.map((url, i) => (
                  <div key={i} className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <UniversityImage src={url} className="w-full h-full object-cover" alt={`Vienna ${i + 1}`} />
                  </div>
                ))}
              </div>
            </section>
          )}
          <ViennaUniversitiesGallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}
