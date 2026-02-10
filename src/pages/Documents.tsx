import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle } from "lucide-react";

export default function Documents() {
  const navigate = useNavigate();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 md:pt-24">
          <div className="container max-w-4xl py-10 md:py-16">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1"
            >
              ← Back
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Documents & Applications</h1>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              We help you prepare all necessary documents for your university application, ensuring everything is complete,
              correctly formatted, and submitted on time.
            </p>

            <div className="space-y-6 mb-10">
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Document Preparation
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Academic transcripts and diplomas (translated and certified if needed)</li>
                  <li>• Language certificates (IELTS, TOEFL, German, Italian, etc.)</li>
                  <li>• Motivation letter tailored to each university and program</li>
                  <li>• CV/Resume formatted for European standards</li>
                  <li>• Letters of recommendation (if required)</li>
                  <li>• Portfolio or work samples (for design, arts, or technical programs)</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Application Process
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Creating a personalized list of universities matching your profile</li>
                  <li>• Reviewing and optimizing your application documents</li>
                  <li>• Ensuring all deadlines are met</li>
                  <li>• Submitting applications through university portals</li>
                  <li>• Following up on application status</li>
                  <li>• Handling any additional requests from universities</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  What We Check
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Document completeness and format compliance</li>
                  <li>• Translation accuracy (if translations are needed)</li>
                  <li>• Motivation letter quality and relevance</li>
                  <li>• CV structure and content</li>
                  <li>• Application deadlines and requirements per university</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={() => navigate("/#contact")}>Get Help with Documents</Button>
              <Button variant="outline" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
