export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  as = "h2",
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const Tag = as === "h1" ? "h1" : "h2";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p
        className={`mb-3 text-sm font-bold uppercase tracking-widest ${dark ? "text-zinc-500" : "text-zinc-400"}`}
      >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-display text-3xl font-bold uppercase tracking-tight md:text-5xl ${
          dark ? "text-zinc-900" : "text-white"
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg ${
            dark ? "text-zinc-600" : "text-zinc-300"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
