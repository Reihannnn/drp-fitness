export const pricingPlans = [
  {
    name: "Visit",
    description: "Akses latihan untuk satu kali kunjungan.",
    options: [
      { label: "Pelajar", price: "Rp20.000", unit: "/ visit" },
      { label: "Dewasa", price: "Rp30.000", unit: "/ visit" },
    ],
  },
  {
    name: "1 Bulan",
    description: "Akses membership gym selama satu bulan.",
    options: [
      { label: "Member", price: "Rp155.000", unit: "/ orang" },
    ],
  },
  {
    name: "Senam",
    description: "Ikut sesi senam dengan instruktur.",
    options: [
      { label: "Senam", price: "Rp20.000", unit: "/ visit" },
    ],
  },
  {
    name: "Boxing / Muaythai",
    description: "Pilihan sesi latihan combat sport sesuai kebutuhanmu.",
    options: [
      { label: "1 Sesi", price: "Rp60.000", unit: "" },
      { label: "4 Sesi", price: "Rp200.000", unit: "" },
      { label: "8 Sesi", price: "Rp380.000", unit: "" },
    ],
  },
];

export const personalTrainerPlans = [
  {
    category: "PT (Solo)",
    sessions: "1 sesi",
    schedule: "Pertemuan dalam sehari",
    price: "Rp50.000",
  },
  {
    category: "PT (Solo)",
    sessions: "8 sesi",
    schedule: "Pertemuan dalam sebulan",
    price: "Rp368.000",
  },
  {
    category: "PT (Solo)",
    sessions: "14 sesi",
    schedule: "Pertemuan dalam sebulan",
    price: "Rp588.000",
  },
  {
    category: "Paket PT (Duo)",
    sessions: "10 sesi",
    schedule: "Pertemuan dalam sebulan",
    price: "Rp650.000",
  },
  {
    category: "Paket PT (Trio)",
    sessions: "10 sesi",
    schedule: "Pertemuan dalam sebulan",
    price: "Rp1.000.000",
  },
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
