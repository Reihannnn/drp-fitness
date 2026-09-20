import SectionHeading from "@/components/SectionHeading";
import PriceCard from "@/components/PriceCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { membershipPlans, classPlans, ptPlans } from "@/data/site";

export const metadata = {
  title: "Harga Member, Kelas & Personal Trainer",
  description:
    "Daftar harga DRP Fitness Cibitung: visit Rp30rb, member solo Rp155rb/bulan, squad Rp520rb, senam, boxing, muaythai, dan personal trainer solo/duo/trio.",
};

const faqs = [
  {
    q: "Apakah bisa bayar per kunjungan?",
    a: "Bisa. Paket Visit Rp30.000 untuk 1 sesi, bebas pakai semua alat gym plus konsultasi ringan dengan instruktur.",
  },
  {
    q: "Apa bedanya Member Solo dan Squad?",
    a: "Solo untuk 1 orang (Rp155.000/bulan), Squad untuk 4 orang sekaligus (Rp520.000/bulan) — lebih hemat kalau latihan bareng teman.",
  },
  {
    q: "Bagaimana sistem Personal Trainer?",
    a: "Pilih Solo (1 orang), Duo (berdua), atau Trio (bertiga). Makin banyak sesi per bulan, makin hemat per sesinya.",
  },
];

export default function HargaPage() {
  return (
    <>
      <section className="bg-zinc-950 px-4 pb-4 pt-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            as="h1"
            eyebrow="Harga"
            title="Harga Transparan, Tanpa Drama"
            description="Semua paket bisa dipesan via WhatsApp. Tunjukkan halaman ini ke admin saat datang."
          />
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="bg-zinc-950 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
            Membership Gym di Cibitung
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {membershipPlans.map((p) => (
              <PriceCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* KELAS */}
      <section className="bg-zinc-900 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
            Kelas Senam, Boxing & Muaythai
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {classPlans.map((c) => (
              <article
                key={c.name}
                className="rounded-2xl bg-zinc-950 p-8 ring-1 ring-white/10"
              >
                <h3 className="text-xl font-bold text-white">{c.name}</h3>
                <dl className="mt-4 space-y-3">
                  {c.rows.map((r) => (
                    <div
                      key={r.label}
                      className="flex items-center justify-between gap-4 border-b border-white/10 pb-3"
                    >
                      <dt className="text-zinc-300">{r.label}</dt>
                      <dd className="font-bold text-white">{r.price}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6">
                  <WhatsAppCTA
                    message={`Halo DRP Fitness! Saya tertarik ikut kelas ${c.name}.`}
                    label={`Daftar ${c.name}`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PT */}
      <section className="bg-zinc-950 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
            Personal Trainer
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Dampingan 1-on-1 atau bareng teman (duo/trio). Program disesuaikan
            dengan target: fat loss, muscle gain, atau strength.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ptPlans.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl bg-zinc-900 p-6 ring-1 ring-white/10"
              >
                <h3 className="font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.sessions}</p>
                <p className="mt-3 text-2xl font-extrabold text-white">
                  {p.price}
                </p>
                <div className="mt-5">
                  <WhatsAppCTA
                    message={`Halo DRP Fitness! Saya tertarik PT ${p.name} (${p.price}).`}
                    label="Ambil Paket"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-900 px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Sering Ditanyakan" />
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-2xl bg-zinc-950 p-6 ring-1 ring-white/10"
              >
                <summary className="cursor-pointer font-semibold text-white">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
