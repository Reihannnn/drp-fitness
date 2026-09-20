"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Harga", href: "/harga" },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "Pelatih", href: "/pelatih" },
  { label: "Lokasi", href: "/lokasi" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/90 shadow-md backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/image/drp_logo.webp"
            alt="Logo DRP Fitness Cibitung"
            width={50}
            height={50}
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <span className="font-display text-xl font-bold tracking-wide text-white">
            DRP <span className="text-yellow-400">FITNESS</span>
          </span>
        </Link>

        <ul className="hidden gap-10 text-lg font-medium text-white md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition hover:text-yellow-400">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 bg-zinc-950/95 p-4 text-lg font-medium text-white backdrop-blur-md md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block transition hover:text-yellow-400"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
