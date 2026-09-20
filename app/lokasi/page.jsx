import { MapPin, Phone, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { siteInfo } from "@/data/site";

export const metadata = {
  title: "Lokasi & Jam Buka",
  description:
    "Lokasi DRP Fitness: Perumahan GramaPuri Tamansari No. 14 cc, Wanasari, Cibitung, Bekasi. Buka setiap hari 07:00–22:00 WIB.",
};

const info = [
  { icon: MapPin, label: "Alamat", value: siteInfo.address },
  { icon: Phone, label: "Telepon / WA", value: siteInfo.phone },
  { icon: Clock, label: "Jam buka", value: siteInfo.hours },
];

export default function LokasiPage() {
  return (
    <>
    <section className="bg-white px-4 py-16 text-zinc-900 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            as="h1"
            align="left"
            dark
            eyebrow="Lokasi"
            title="Datang & Rasakan Sendiri"
            description="Lokasi strategis di Cibitung, mudah diakses dan dekat pusat kota."
          />
          <ul className="mt-8 space-y-5">
            {info.map((i) => (
              <li key={i.label} className="flex items-start gap-3">
                <span className="rounded-full bg-zinc-950 p-2.5 text-white">
                  <i.icon size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
                    {i.label}
                  </p>
                  <p className="mt-1 font-medium">{i.value}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 font-semibold text-white transition hover:bg-zinc-800"
            >
              <MapPin size={18} /> Buka di Google Maps
            </a>
            <WhatsAppCTA
              message="Halo DRP Fitness! Saya mau tanya rute ke lokasi."
              label="Tanya Rute"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl">
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

    <section className="bg-zinc-950 px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Kunjungan"
          title="Sampai Jumpa di Gym"
          description="Kunjungan pertama dibantu instruktur. Chat admin sebelum datang biar langsung dilayani."
        />
        <div className="mt-8">
          <WhatsAppCTA
            message="Halo DRP Fitness! Saya mau mampir ke gym hari ini."
            label="Kabari Admin"
          />
        </div>
      </div>
    </section>
    </>
  );
}
