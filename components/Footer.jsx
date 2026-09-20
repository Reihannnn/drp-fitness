import Link from "next/link";
import Image from "next/image";
import { Instagram, Music2, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-zinc-950 p-10 pb-16 text-white md:p-12">
        <div className="mx-auto flex w-full flex-col justify-start gap-8 md:w-[95%] md:flex-row md:justify-around">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/image/drp_logo.webp"
                alt="Logo DRP Fitness"
                width={64}
                height={72}
                className="h-[72px] w-[64px] object-cover"
              />
              <p className="font-display text-2xl font-extrabold">
                DRP FITNESS
              </p>
            </div>
            <div className="mt-8">
              <p className="font-bold lg:text-xl">Jam buka</p>
              <p className="text-zinc-300 lg:text-lg">
                Setiap hari | 07:00 - 22:00 WIB
              </p>
            </div>
            <div className="mt-6">
              <p className="font-bold lg:text-xl">Whatsapp</p>
              <a
                href="https://wa.me/6281384334250"
                className="text-zinc-300 transition hover:text-white lg:text-lg"
              >
                +62 813-8433-4250
              </a>
            </div>
          </div>

          <nav aria-label="Tentang">
            <h2 className="text-xl font-bold">About us</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/lokasi"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <MapPin size={18} /> Lokasi
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/6281384334250"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <MessageCircle size={18} /> Hubungi kami
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Program">
            <h2 className="text-xl font-bold">Program</h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li>
                <Link href="/harga" className="transition hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/harga" className="transition hover:text-white">
                  Senam
                </Link>
              </li>
              <li>
                <Link href="/harga" className="transition hover:text-white">
                  Boxing & Muaythai
                </Link>
              </li>
              <li>
                <Link href="/harga" className="transition hover:text-white">
                  Personal Trainer (Gym)
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xl font-bold">Social Media</h2>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/drpfitness21/"
                aria-label="Instagram DRP Fitness"
                className="rounded-full border border-zinc-700 p-2.5 transition hover:border-white hover:text-white"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.tiktok.com/@drpfitness21"
                aria-label="TikTok DRP Fitness"
                className="rounded-full border border-zinc-700 p-2.5 transition hover:border-white hover:text-white"
              >
                <Music2 size={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-zinc-950 p-6 text-center text-sm text-zinc-400">
        <p>&copy; 2026 DRP Fitness GYM. All Rights Reserved.</p>
      </div>
    </>
  );
}
