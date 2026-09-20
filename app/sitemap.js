export default function sitemap() {
  const base = "https://drpfitness.id";
  const pages = ["", "/harga", "/fasilitas", "/pelatih", "/lokasi"];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
}
