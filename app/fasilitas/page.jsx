import SectionHeading from "@/components/SectionHeading";
import FacilityCard from "@/components/FacilityCard";
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
            <FacilityCard key={f.title} facility={f} TitleTag="h2" />
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
