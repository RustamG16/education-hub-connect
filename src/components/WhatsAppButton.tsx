import { MessageCircle, Instagram } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number
  const instagramUsername = "yourusername"; // Replace with actual Instagram username
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const instagramUrl = `https://instagram.com/${instagramUsername}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] hover:opacity-90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-6 h-6" />
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Follow us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
