import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, CheckCircle } from "lucide-react";

export default function Visa() {
  const navigate = useNavigate();

  return (
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
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Visa Guidance</h1>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Navigating visa requirements can be complex. We guide you through the entire visa application process,
              from understanding requirements to preparing for your interview.
            </p>

            <div className="space-y-6 mb-10">
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Visa Application Support
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Understanding visa requirements for your destination country (Austria, Germany, Italy, etc.)</li>
                  <li>• Preparing all required documents (acceptance letter, financial proof, health insurance, etc.)</li>
                  <li>• Booking visa appointment at the embassy or consulate</li>
                  <li>• Completing visa application forms correctly</li>
                  <li>• Preparing for visa interview (common questions and best practices)</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Required Documents
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Valid passport</li>
                  <li>• University acceptance letter</li>
                  <li>• Proof of financial means (blocked account, scholarship, etc.)</li>
                  <li>• Health insurance certificate</li>
                  <li>• Passport photos meeting specific requirements</li>
                  <li>• Completed visa application form</li>
                  <li>• Proof of accommodation (if required)</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Country-Specific Guidance
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <strong>Austria:</strong> Student residence permit application, financial proof requirements, health
                    insurance options
                  </li>
                  <li>
                    <strong>Germany:</strong> Student visa process, blocked account setup, health insurance requirements
                  </li>
                  <li>
                    <strong>Italy:</strong> Student visa application, financial documentation, accommodation proof
                  </li>
                  <li>
                    <strong>Other countries:</strong> Specific requirements for Czech Republic and other
                    destinations
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={() => navigate("/#contact")}>Get Visa Support</Button>
              <Button variant="outline" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}

