import WhatsAppCTA from "./WhatsAppCTA";

export default function PersonalTrainerCard({
  category,
  sessions,
  schedule,
  price,
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-zinc-900 p-6 ring-1 ring-white/10 md:p-7">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">
        {category}
      </p>
      <h3 className="mt-3 font-display text-2xl font-bold uppercase text-white">
        {sessions}
      </h3>
      <p className="mt-2 text-sm text-zinc-400">{schedule}</p>
      <p className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
        {price}
      </p>
      <div className="mt-6 flex-1">
        <WhatsAppCTA
          message={`Halo DRP Fitness! Saya tertarik ${category} ${sessions} (${price}).`}
          label="Tanya Paket"
        />
      </div>
    </article>
  );
}
