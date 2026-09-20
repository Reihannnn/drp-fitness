import Image from "next/image";
import { waLink } from "./WhatsAppCTA";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Halo DRP Fitness! Saya mau tanya-tanya dulu.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp DRP Fitness"
      title="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 transition hover:scale-105"
    >
      <Image
        src="/image/whatsapp-logo.png"
        alt="Chat WhatsApp DRP Fitness"
        width={56}
        height={56}
        className="h-14 w-14 drop-shadow-xl"
      />
    </a>
  );
}
