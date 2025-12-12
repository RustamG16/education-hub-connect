import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    desiredCountry: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", country: "", desiredCountry: "", contact: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 gradient-subtle">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get a free, personalized consultation with our education experts. We'll help you understand your options and create a clear path to studying abroad.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                No hidden fees or obligations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Personalized university recommendations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Support in your language
              </li>
            </ul>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-2">
                  Your Country
                </label>
                <Input
                  id="country"
                  placeholder="e.g., Azerbaijan, Kazakhstan"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="desiredCountry" className="block text-sm font-medium mb-2">
                  Desired Study Country
                </label>
                <Input
                  id="desiredCountry"
                  placeholder="e.g., Austria, Germany"
                  value={formData.desiredCountry}
                  onChange={(e) => setFormData({ ...formData, desiredCountry: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium mb-2">
                  WhatsApp or Email
                </label>
                <Input
                  id="contact"
                  placeholder="Your contact information"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full shadow-button" size="lg">
                Get Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
