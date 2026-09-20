import { MessageCircle } from "lucide-react";

export const WA_NUMBER = "6281384334250";

export function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

const variants = {
  primary: "bg-white text-zinc-950 hover:bg-zinc-200",
  dark: "bg-zinc-950 text-white hover:bg-zinc-800",
  ghost: "text-white ring-1 ring-white/30 hover:bg-white/10",
};

export default function WhatsAppCTA({
  message = "Halo DRP Fitness! Saya mau mulai latihan.",
  label = "Mulai Sekarang",
  variant = "primary",
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${variants[variant]}`}
    >
      <MessageCircle size={20} />
      {label}
    </a>
  );
}
