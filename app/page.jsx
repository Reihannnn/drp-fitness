import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dumbbell, Users, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PriceCard from "@/components/PriceCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { membershipPlans, facilities, trainers, memberPhotos } from "@/data/site";

export const metadata = {
  title: "Gym & Personal Trainer di Cibitung, Bekasi",
  description:
    "DRP Fitness Cibitung: gym lengkap, personal trainer, kelas senam, boxing & muaythai. Lihat harga member mulai Rp30rb, fasilitas, dan lokasi.",
};

const highlights = [
  {
    icon: Dumbbell,
    title: "Alat Lengkap",
    desc: "Smith machine, dumbbell, cardio, hingga machine zone.",
  },
  {
    icon: Users,
    title: "Mentor Siap Dampingi",
    desc: "Program terarah untuk pemula sampai atlet.",
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    desc: "Cibitung, Bekasi — buka setiap hari 07:00–22:00.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center justify-center">
        <Image
          src="/image/background.webp"
          alt="Suasana latihan di DRP Fitness Gym Cibitung"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-yellow-400">
            Gym · Personal Trainer · Kelas
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
            Bangun Kekuatan, Disiplin & Percaya Diri
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-200">
            Program latihan yang terarah, dukungan nyata, dan hasil yang bisa
            kamu banggakan — DRP ada buat kamu sepanjang perjalanan.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <WhatsAppCTA />
            <Link
              href="/harga"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/10"
            >
              Lihat Harga <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-zinc-950 px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl bg-zinc-900 p-6 ring-1 ring-white/10"
            >
              <h.icon size={28} className="text-yellow-400" />
              <h2 className="mt-4 text-lg font-bold text-white">{h.title}</h2>
              <p className="mt-2 text-sm text-zinc-300">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HARGA RINGKAS */}
      <section className="bg-zinc-950 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Harga"
            title="Pilih Paket Latihanmu"
            description="Mulai dari Rp30.000 per kunjungan. Semua harga transparan, tanpa biaya tersembunyi."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {membershipPlans.map((p) => (
              <PriceCard key={p.name} {...p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/harga"
              className="inline-flex items-center gap-2 font-semibold text-yellow-400 hover:text-yellow-300"
            >
              Lihat semua harga: kelas & PT <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FASILITAS RINGKAS */}
      <section className="bg-zinc-900 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Fasilitas"
            title="Gym Lengkap, Siap Pakai"
            description="Zona latihan terpisah: beban, machine, cardio, dan dumbbell."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {facilities.slice(0, 4).map((f) => (
              <article
                key={f.title}
                className="relative overflow-hidden rounded-2xl"
              >
                <Image
                  src={f.src}
                  alt={`${f.title} di DRP Fitness Gym Cibitung`}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="font-semibold text-white">{f.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/fasilitas"
              className="inline-flex items-center gap-2 font-semibold text-yellow-400 hover:text-yellow-300"
            >
              Jelajahi semua fasilitas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* PELATIH RINGKAS */}
      <section className="bg-zinc-950 px-4 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pelatih"
              title="Progress Bersama Mentor"
              description="Kita nggak cuma angkat beban — kita angkat kepercayaan diri, konsistensi, dan standar hidup ke level baru."
            />
            <div className="mt-8">
              <Link
                href="/pelatih"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-yellow-300"
              >
                Kenalan dengan Pelatih <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {trainers.map((t) => (
              <article
                key={t.name}
                className="overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10"
              >
                <Image
                  src={t.photo}
                  alt={`Pelatih ${t.name} DRP Fitness Cibitung`}
                  width={300}
                  height={320}
                  loading="lazy"
                  className="h-64 w-full object-cover object-top"
                />
                <div className="p-4 text-center">
                  <h3 className="font-display text-xl font-bold text-white">
                    {t.name}
                  </h3>
                  <p className="text-sm text-zinc-400">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBER */}
      <section className="bg-zinc-900 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Komunitas"
            title="Para Member Kami"
            description="Latihan bareng komunitas yang solid dan saling support."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {memberPhotos.map((src, i) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl ring-1 ring-white/10"
              >
                <Image
                  src={src}
                  alt={`Member DRP Fitness Cibitung ${i + 1}`}
                  width={300}
                  height={220}
                  loading="lazy"
                  className={`h-48 w-full object-cover ${i === 3 ? "object-top" : "object-center"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 px-4 py-16 text-zinc-950">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">
            Siap Mulai Hari Ini?
          </h2>
          <p className="mt-3 text-lg">
            Chat admin sekarang — kunjungan pertama dibantu instruktur, gratis
            konsultasi ringan.
          </p>
          <div className="mt-6">
            <WhatsAppCTA
              message="Halo DRP Fitness! Saya mau tanya-tanya dulu sebelum join."
              label="Chat Admin"
              variant="secondary"
            />
          </div>
        </div>
      </section>
    </>
  );
}
