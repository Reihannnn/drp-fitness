export const membershipPlans = [
  {
    name: "Visit",
    price: "Rp30.000",
    unit: "/ kunjungan",
    features: [
      "Bebas pakai semua alat gym",
      "Akses 1 sesi kunjungan",
      "Konsultasi ringan dengan instruktur",
    ],
  },
  {
    name: "Member Solo",
    price: "Rp155.000",
    unit: "/ bulan",
    popular: true,
    features: [
      "Akses full 1 bulan",
      "Bebas pakai semua alat gym",
      "Gabung komunitas yang solid & satu tujuan",
    ],
  },
  {
    name: "Member Squad",
    price: "Rp520.000",
    unit: "/ 4 orang / bulan",
    features: [
      "Akses full 1 bulan untuk 4 orang",
      "Bebas pakai semua alat gym",
      "Latihan bareng, lebih hemat & seru",
    ],
  },
];

export const classPlans = [
  {
    name: "Senam",
    rows: [
      { label: "Aerobik", price: "Rp20.000 / sesi" },
      { label: "Salsa", price: "Rp25.000 / sesi" },
    ],
  },
  {
    name: "Boxing & Muaythai",
    rows: [
      { label: "1 sesi", price: "Rp60.000" },
      { label: "4 sesi", price: "Rp200.000" },
      { label: "8 sesi", price: "Rp380.000" },
    ],
  },
];

export const ptPlans = [
  { name: "PT Solo · 1 sesi", sessions: "1 pertemuan", price: "Rp50.000" },
  { name: "PT Solo · 8 sesi", sessions: "8 pertemuan / bulan", price: "Rp368.000" },
  { name: "PT Solo · 14 sesi", sessions: "14 pertemuan / bulan", price: "Rp588.000" },
  { name: "PT Duo · 10 sesi", sessions: "10 pertemuan / bulan, berdua", price: "Rp650.000" },
  { name: "PT Trio · 10 sesi", sessions: "10 pertemuan / bulan, bertiga", price: "Rp1.000.000" },
];

export const facilities = [
  {
    src: "/image/facility/bench-press.webp",
    title: "Bench Press Smith Machine",
    desc: "Untuk gerakan dada, punggung, dan banyak variasinya.",
  },
  {
    src: "/image/facility/all-in-one.webp",
    title: "Machine Zone",
    desc: "Alat serba guna untuk berbagai variasi gerakan.",
  },
  {
    src: "/image/facility/cardio.webp",
    title: "Cardio Zone",
    desc: "Treadmill untuk pemanasan dan bakar kalori.",
  },
  {
    src: "/image/facility/leg.webp",
    title: "Leg Machine",
    desc: "Fokus otot kaki: quadriceps, hamstring, glutes.",
  },
  {
    src: "/image/facility/back.webp",
    title: "Back Machine",
    desc: "Bangun punggung yang kuat dan tegap.",
  },
  {
    src: "/image/facility/chest-area.webp",
    title: "Chest Area",
    desc: "Zona dada dengan dumbbell & bench lengkap.",
    banner: true,
  },
  {
    src: "/image/facility/new-dubmblee.webp",
    title: "Weights & Dumbbells",
    desc: "Dumbbell berbagai pilihan berat.",
  },  
];

export const trainers = [
  {
    name: "Aji",
    photo: "/image/aji4-mentor.webp",
    role: "Personal Trainer",
    instagram: "https://www.instagram.com/bangjiwww/",
    desc: "Bantu kamu bangun kekuatan, disiplin, dan konsistensi dari sesi pertama.",
  }
];

export const memberPhotos = Array.from(
  { length: 8 },
  (_, i) => `/image/member/member${i + 1}.webp`
);

export const siteInfo = {
  address:
    "Perumahan GramaPuri Tamansari No. 14 cc, RW.37, Wanasari, Kec. Cibitung, Kabupaten Bekasi, Jawa Barat 17520",
  phone: "+62 813-8433-4250",
  hours: "Setiap hari, 07:00 – 22:00 WIB",
  mapsUrl:
    "https://www.google.com/maps/place/DRP+GYM/@-6.2572083,107.0825477,16.75z/data=!4m6!3m5!1s0x2e698f893e750471:0x6a466b1065a84b7c!8m2!3d-6.2564664!4d107.0827773!16s%2Fg%2F11pvp0ftl0?entry=ttu",
};
