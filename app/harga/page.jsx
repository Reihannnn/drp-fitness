import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import { pricingPlans } from "@/data/site";

export const metadata = {
  title: "Harga Visit, Member, Senam & Boxing",
  description:
    "Daftar harga DRP Fitness Cibitung: Visit pelajar Rp20.000, dewasa Rp30.000, membership 1 bulan Rp155.000 per orang, senam Rp20.000 per visit, dan boxing atau muaythai mulai Rp60.000.",
};

const faqs = [
  {
    q: "Berapa harga Visit DRP Fitness?",
    a: "Visit pelajar Rp20.000 dan visit dewasa Rp30.000.",
  },
  {
    q: "Berapa harga membership 1 bulan?",
    a: "Membership 1 bulan sebesar Rp155.000 per orang.",
  },
  {
    q: "Berapa harga Boxing atau Muaythai?",
    a: "1 sesi Rp60.000, 4 sesi Rp200.000, dan 8 sesi Rp380.000.",
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
            title="Pilih Paket Latihanmu"
            description="Harga transparan untuk mulai latihan di DRP Fitness. Semua kategori dan nominal ditampilkan jelas di bawah ini."
          />
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading dark eyebrow="FAQ" title="Sering Ditanyakan" />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl bg-zinc-100 p-6 ring-1 ring-black/10"
              >
                <summary className="cursor-pointer font-semibold text-zinc-950">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
