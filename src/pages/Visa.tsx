import { useNavigate } from "react-router-dom";
import { Plane, CheckCircle } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const sections = [
  {
    title: "Student Residence Permit",
    items: [
      "Understanding Austrian residence permit requirements for your nationality",
      "Preparing required documents (acceptance letter, financial proof, health insurance, accommodation)",
      "Booking appointment at the Austrian embassy or consulate",
      "Completing application forms correctly",
      "Preparing for your appointment (common questions and best practices)",
    ],
  },
  {
    title: "Required Documents",
    items: [
      "Valid passport",
      "University acceptance letter from an Austrian institution",
      "Proof of financial means (blocked account, scholarship, or sponsor)",
      "Health insurance valid in Austria",
      "Passport photos meeting Austrian requirements",
      "Completed residence permit application",
      "Proof of accommodation in Austria",
    ],
  },
  {
    title: "After Arrival in Austria",
    items: [
      "Registration with municipal authorities (Meldeamt) within three working days",
      "Collecting your residence permit card",
      "Opening a bank account and arranging health insurance if needed",
      "Understanding work rights as a student in Austria",
    ],
  },
];

export default function Visa() {
  const navigate = useNavigate();
  const contentRef = useGsapReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <PageShell
      title="Residence Permit Guidance"
      description="Navigating Austrian residence permit requirements can be complex. We guide you through the entire process, from understanding requirements to preparing for your appointment."
      icon={Plane}
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
          Get Residence Permit Support
        </Button>
        <Button variant="outline" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </PageShell>
  );
}
