import WhatsAppCTA from "./WhatsAppCTA";

export default function PricingCard({ name, options }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-zinc-900 p-6 ring-1 ring-white/10 md:p-8">
      <h2 className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
        {name}
      </h2>
      <div className="mt-6 flex flex-1 flex-col gap-3">
        {options.map((option) => (
          <div
            key={`${name}-${option.label}`}
            className="rounded-xl bg-zinc-950 p-4 ring-1 ring-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              {option.label}
            </p>
            <p className="mt-1 whitespace-nowrap text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {option.price}
              {option.unit && (
                <span className="ml-1 text-sm font-medium text-zinc-400">
                  {option.unit}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <WhatsAppCTA
          message={`Halo DRP Fitness! Saya tertarik dengan kategori ${name}.`}
          label="Tanya Paket"
        />
      </div>
    </article>
  );
}
