import Image from "next/image";

export default function FacilityCard({
  facility,
  className = "",
  imgClass = "h-52 lg:h-64",
  TitleTag = "h3",
}) {
  return (
    <article className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={facility.src}
        alt={`${facility.title} di DRP Fitness Gym Cibitung — ${facility.desc}`}
        width={600}
        height={450}
        loading="lazy"
        sizes="(max-width: 1024px) 50vw, 25vw"
        className={`w-full object-cover ${imgClass}`}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-12">
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
