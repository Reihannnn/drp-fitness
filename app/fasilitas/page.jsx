import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { facilities } from "@/data/site";

export const metadata = {
  title: "Fasilitas Gym Lengkap",
  description:
    "Fasilitas DRP Fitness Cibitung: smith machine bench press, machine zone, cardio zone treadmill, leg machine, back machine, chest area, dan dumbbell.",
};

export default function FasilitasPage() {
  return (
    <section className="bg-zinc-950 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          as="h1"
          eyebrow="Fasilitas"
          title="Fasilitas Gym"
          description="Tujuh zona latihan untuk semua target: strength, hypertrophy, dan cardio."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {facilities.map((f) => (
            <article
              key={f.title}
              className={`relative overflow-hidden rounded-2xl ${
                f.span ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={f.src}
                alt={`${f.title} di DRP Fitness Gym Cibitung — ${f.desc}`}
                width={f.span ? 800 : 400}
                height={f.span ? 600 : 300}
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className={`w-full object-cover ${f.span ? "h-80 lg:h-full lg:min-h-[420px]" : "h-52"}`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                <h2 className="font-semibold text-white md:text-lg">{f.title}</h2>
                <p className="mt-1 text-sm text-zinc-300">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-zinc-300">
            Mau coba alatnya langsung? Kunjungan pertama dibantu instruktur.
          </p>
          <div className="mt-4">
            <WhatsAppCTA
              message="Halo DRP Fitness! Saya mau coba visit dan lihat fasilitasnya."
              label="Coba Visit Rp30rb"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
