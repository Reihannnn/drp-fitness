import Image from "next/image";

export default function FacilityCard({
  facility,
  className = "",
  TitleTag = "h3",
}) {
  return (
    <article className={`relative min-h-64 overflow-hidden rounded-2xl md:min-h-72 ${className}`}>
      <Image
        src={facility.src}
        alt={`${facility.title} di DRP Fitness Gym Cibitung — ${facility.desc}`}
        width={800}
        height={600}
        loading="lazy"
        sizes="(max-width: 640px) 100vw, 50vw"
        className="block h-full min-h-64 w-full object-cover object-center md:min-h-72"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 pt-8">
        <TitleTag className="font-semibold text-white">
          {facility.title}
        </TitleTag>
        <p className="mt-1 text-sm leading-snug text-zinc-300">
          {facility.desc}
        </p>
      </div>
    </article>
  );
}
