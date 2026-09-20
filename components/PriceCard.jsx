import { Check } from "lucide-react";
import WhatsAppCTA from "./WhatsAppCTA";

export default function PriceCard({ name, price, unit, features, popular }) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl p-8 shadow-lg ${
        popular
          ? "bg-zinc-950 text-white ring-2 ring-yellow-400"
          : "bg-zinc-900 text-white ring-1 ring-white/10"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-zinc-950">
          Terpopuler
        </span>
      )}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-3">
        <span className="text-3xl font-extrabold text-yellow-400">{price}</span>
        <span className="ml-1 text-sm text-zinc-400">{unit}</span>
      </p>
      <ul className="mt-6 flex-1 space-y-3 text-sm text-zinc-200">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check size={18} className="mt-0.5 shrink-0 text-yellow-400" />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <WhatsAppCTA
          message={`Halo DRP Fitness! Saya tertarik dengan paket ${name} (${price}${unit ? " " + unit : ""}).`}
          label="Pilih Paket"
        />
      </div>
    </article>
  );
}
