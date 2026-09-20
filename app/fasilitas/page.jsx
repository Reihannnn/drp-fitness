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
  const portrait = facilities.filter((f) => !f.banner);
  const banner = facilities.filter((f) => f.banner);
  return (
    <>
      <section className="bg-zinc-950 px-4 pb-4 pt-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            as="h1"
            eyebrow="Fasilitas"
            title="Fasilitas Gym"
            description="Tujuh zona latihan untuk semua target: strength, hypertrophy, dan cardio."
          />
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {portrait.map((f) => (
              <FacilityCard key={f.title} facility={f} TitleTag="h2" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          {banner.map((f) => (
            <FacilityCard key={f.title} facility={f} TitleTag="h2" />
          ))}
        </div>
      </section>
    </>
  );
}
