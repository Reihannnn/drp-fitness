import { MessageCircle } from "lucide-react";

export const WA_NUMBER = "6281384334250";

export function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppCTA({
  message = "Halo DRP Fitness! Saya mau mulai latihan.",
  label = "Mulai Sekarang",
  variant = "primary",
}) {
  const cls =
    variant === "primary"
      ? "bg-yellow-400 text-zinc-950 hover:bg-yellow-300"
      : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${cls}`}
    >
      <MessageCircle size={20} />
      {label}
    </a>
  );
}
