import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  Users,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FacilityCard from "@/components/FacilityCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import {
  facilities,
  trainers,
  memberPhotos,
  siteInfo,
} from "@/data/site";

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

// ponytail: pola span 6 kolom, tiap baris genap 6 (4+2, 2+4, 3+3)
const facilitySpans = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",  
  "sm:col-span-1",  
  "sm:col-span-1",  
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
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-300">
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
      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl bg-zinc-100 p-6 ring-1 ring-black/10"
            >
              <h.icon size={28} className="text-zinc-900" />
              <h2 className="mt-4 text-lg font-bold text-zinc-950">
                {h.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HARGA */}
      <section className="bg-zinc-950 px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Harga"
            title="Mulai Latihan Tanpa Bingung"
            description="Visit, membership, senam, dan boxing atau muaythai dengan harga yang jelas dan mudah dipilih."
          />
          <div className="mt-8">
            <Link
              href="/harga"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Lihat Daftar Harga <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FASILITAS RINGKAS */}
      <section className="flex min-h-screen flex-col justify-center bg-white px-4 py-16">
        <div className="mx-auto w-full max-w-5xl">
          <SectionHeading
            dark
            eyebrow="Fasilitas"
            title="Gym Lengkap, Siap Pakai"
            description="Zona latihan terpisah: beban, machine, cardio, dan dumbbell."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-4">
            {facilities
              .filter((f) => !f.banner)
              .map((f, i) => (
                <FacilityCard
                  key={f.title}
                  facility={f}
                  className={facilitySpans[i]}
                />
              ))}
            {facilities
              .filter((f) => f.banner)
              .map((f) => (
                <FacilityCard
                  key={f.title}
                  facility={f}
                  className="sm:col-span-full"
                />
              ))}
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
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
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

      {/* LOKASI RINGKAS */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              dark
              align="left"
              eyebrow="Lokasi"
              title="Mampir & Rasakan Sendiri"
              description="Strategis di Cibitung, mudah diakses dan dekat pusat kota."
            />
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="rounded-full bg-zinc-950 p-2.5 text-white">
                  <MapPin size={20} />
                </span>
                <p className="font-medium text-zinc-800">{siteInfo.address}</p>
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-full bg-zinc-950 p-2.5 text-white">
                  <Clock size={20} />
                </span>
                <p className="font-medium text-zinc-800">{siteInfo.hours}</p>
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-full bg-zinc-950 p-2.5 text-white">
                  <Phone size={20} />
                </span>
                <p className="font-medium text-zinc-800">{siteInfo.phone}</p>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/lokasi"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 font-semibold text-white transition hover:bg-zinc-800"
              >
                Lihat Lokasi & Rute <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10">
            <iframe
              title="Peta lokasi DRP Fitness Gym Cibitung"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4716.454298002332!2d107.0825477195417!3d-6.257208341740215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f893e750471%3A0x6a466b1065a84b7c!2sDRP%20GYM!5e0!3m2!1sen!2sid!4v1746668832571!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full"
            />
          </div>
        </div>
      </section>

      {/* MEMBER */}
      <section className="bg-zinc-950 px-4 py-20">
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
                  className={`h-75 w-full object-cover ${i === 3 ? "object-top" : "object-center"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16 text-zinc-950">
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
              variant="dark"
            />
          </div>
        </div>
      </section>
    </>
  );
}
