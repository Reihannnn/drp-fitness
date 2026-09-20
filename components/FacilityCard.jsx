import Image from "next/image";

export default function FacilityCard({
  facility,
  className = "",
  TitleTag = "h3",
}) {
  return (
    <article className={`relative min-h-40 overflow-hidden rounded-xl md:min-h-72 md:rounded-2xl ${className}`}>
      <Image
        src={facility.src}
        alt={`${facility.title} di DRP Fitness Gym Cibitung — ${facility.desc}`}
        width={800}
        height={600}
        loading="lazy"
        sizes="(max-width: 640px) 100vw, 50vw"
        className="block h-full min-h-40 w-full object-cover object-center md:min-h-72"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3 pt-7 md:p-4 md:pt-8">
        <TitleTag className="text-sm font-semibold leading-tight text-white md:text-base">
          {facility.title}
        </TitleTag>
        <p className="mt-1 text-xs leading-snug text-zinc-300 md:text-sm">
          {facility.desc}
        </p>
      </div>
    </article>
  );
}
