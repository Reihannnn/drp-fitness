import { MessageCircle } from "lucide-react";
import { waLink } from "./WhatsAppCTA";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Halo DRP Fitness! Saya mau tanya-tanya dulu.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp DRP Fitness"
      title="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-white p-4 text-zinc-950 shadow-2xl ring-1 ring-black/10 transition hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
