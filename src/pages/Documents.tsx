import { useNavigate } from "react-router-dom";
import { FileText, CheckCircle } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const sections = [
  {
    title: "Document Preparation",
    items: [
      "Academic transcripts and diplomas (translated and certified if needed)",
      "Language certificates (IELTS, TOEFL, German, Italian, etc.)",
      "Motivation letter tailored to each university and program",
      "CV/Resume formatted for European standards",
      "Letters of recommendation (if required)",
      "Portfolio or work samples (for design, arts, or technical programs)",
    ],
  },
  {
    title: "Application Process",
    items: [
      "Creating a personalized list of universities matching your profile",
      "Reviewing and optimizing your application documents",
      "Ensuring all deadlines are met",
      "Submitting applications through university portals",
      "Following up on application status",
      "Handling any additional requests from universities",
    ],
  },
  {
    title: "What We Check",
    items: [
      "Document completeness and format compliance",
      "Translation accuracy (if translations are needed)",
      "Motivation letter quality and relevance",
      "CV structure and content",
      "Application deadlines and requirements per university",
    ],
  },
];

export default function Documents() {
  const navigate = useNavigate();
  const contentRef = useGsapReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <PageShell
      title="Documents & Applications"
      description="We help you prepare all necessary documents for your university application, ensuring everything is complete, correctly formatted, and submitted on time."
      icon={FileText}
      backTo="/"
    >
      <div ref={contentRef} className="space-y-8 mb-10">
        {sections.map((section) => (
          <div key={section.title} data-reveal className="border-b border-line pb-8 last:border-0">
            <h2 className="font-display font-bold text-subsection-title text-ink mb-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
              {section.title}
            </h2>
            <ul className="space-y-2 text-muted-foreground pl-7">
              {section.items.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <Button variant="warm" onClick={() => navigate("/#contact")}>
          Get Help with Documents
        </Button>
        <Button variant="outline" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </PageShell>
  );
}
