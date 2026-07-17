import { MessageCircle, Instagram } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "436763492193";
  const instagramUsername = "education4students";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const instagramUrl = `https://instagram.com/${instagramUsername}`;

  return (
    <div className="fixed right-6 z-50 flex flex-col gap-3 bottom-[max(1.5rem,env(safe-area-inset-bottom))]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl p-3.5 shadow-card hover:-translate-y-0.5 transition-all duration-200 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-depth text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white hover:bg-white/95 rounded-xl p-3.5 shadow-card hover:-translate-y-0.5 transition-all duration-200 group relative border border-line"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-5 h-5 text-[#E4405F]" />
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-depth text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Follow us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
