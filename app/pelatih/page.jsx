import Image from "next/image";
import { Instagram } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { trainers } from "@/data/site";

export const metadata = {
  title: "Pelatih & Personal Trainer",
  description:
    "Kenalan dengan pelatih DRP Fitness Cibitung: program terarah untuk pemula sampai lanjutan, didampingi personal trainer berpengalaman.",
};

export default function PelatihPage() {
  return (
    <section className="bg-zinc-950 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          as="h1"
          eyebrow="Pelatih"
          title="Progress Bersama Mentor"
          description="Kita nggak cuma angkat beban — kita angkat kepercayaan diri, konsistensi, dan standar hidup ke level baru."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {trainers.map((t) => (
            <article
              key={t.name}
              className="overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10"
            >
              <Image
                src={t.photo}
                alt={`Foto pelatih ${t.name}, ${t.role} di DRP Fitness Cibitung`}
                width={600}
                height={480}
                loading="lazy"
                className="h-80 w-full object-cover object-top"
              />
              <div className="p-8">
                <h2 className="font-display text-3xl font-bold text-white">
                  {t.name}
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-zinc-300">
                  {t.role}
                </p>
                <p className="mt-3 text-zinc-300">{t.desc}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={t.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10"
                  >
                    <Instagram size={18} /> Instagram {t.name}
                  </a>
                  <WhatsAppCTA
                    message={`Halo DRP Fitness! Saya mau latihan dengan Coach ${t.name}.`}
                    label={`Latihan dengan ${t.name}`}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
