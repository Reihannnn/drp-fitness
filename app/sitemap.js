const base = process.env.NEXT_PUBLIC_SITE_URL || "https://drp-fitness.my.id";
const pages = ["", "/harga", "/fasilitas", "/pelatih", "/lokasi"];

export default function sitemap() {
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date("2026-10-30"),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
}
