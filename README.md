# DRP Fitness

Website resmi **DRP Fitness Cibitung**, sebuah gym dan fitness center di Kabupaten Bekasi yang menyediakan membership gym, kelas senam, boxing & muaythai, serta personal trainer.

Website ini dibangun dengan Next.js untuk memberikan pengalaman browsing yang cepat, responsive, mudah dibaca, dan lebih optimal untuk SEO lokal.

## Preview

Website production: [DRP Fitness](https://drpfitness.id)

## Fitur Utama

- Landing page modern dengan informasi gym yang terstruktur.
- Halaman harga Visit, membership, senam, boxing, dan muaythai.
- Daftar harga Personal Trainer Solo, Duo, dan Trio.
- Galeri fasilitas gym dengan deskripsi setiap area.
- Profil pelatih dan link Instagram.
- Informasi alamat, jam buka, nomor WhatsApp, dan Google Maps.
- Floating WhatsApp button yang selalu tersedia di kanan bawah.
- Responsive layout untuk mobile, tablet, dan desktop.
- Background section hitam dan putih dengan design system monokrom.
- FAQ pada halaman utama dan halaman harga.
- Metadata SEO unik untuk setiap halaman.
- JSON-LD `ExerciseGym` untuk SEO lokal.
- Sitemap dan robots file otomatis.
- Optimasi gambar dengan `next/image` dan lazy loading.

## Halaman

| Route | Keterangan |
| --- | --- |
| `/` | Home page, layanan utama, fasilitas, lokasi, galeri, FAQ, dan CTA |
| `/harga` | Harga Visit, 1 Bulan, Senam, Boxing/Muaythai, dan Personal Trainer |
| `/fasilitas` | Galeri dan deskripsi fasilitas gym |
| `/pelatih` | Profil mentor dan personal trainer |
| `/lokasi` | Alamat, jam buka, kontak, dan Google Maps |
| `/sitemap.xml` | Sitemap untuk search engine |
| `/robots.txt` | Aturan crawling search engine |

## Price List

Harga dikelola sebagai data HTML/JavaScript sehingga dapat dibaca search engine dan mudah diubah tanpa mengganti gambar price list.

### Membership & Kelas

- Visit Pelajar: **Rp20.000 / visit**
- Visit Dewasa: **Rp30.000 / visit**
- 1 Bulan: **Rp155.000 / orang**
- Senam: **Rp20.000 / visit**
- Boxing / Muaythai 1 Sesi: **Rp60.000**
- Boxing / Muaythai 4 Sesi: **Rp200.000**
- Boxing / Muaythai 8 Sesi: **Rp380.000**

### Personal Trainer

- PT Solo 1 Sesi: **Rp50.000**
- PT Solo 8 Sesi: **Rp368.000**
- PT Solo 14 Sesi: **Rp588.000**
- Paket PT Duo 10 Sesi: **Rp650.000**
- Paket PT Trio 10 Sesi: **Rp1.000.000**

## Tech Stack

- [Next.js 15](https://nextjs.org/) dengan App Router.
- React 19.
- Tailwind CSS 4.
- `next/font` untuk optimasi font.
- `next/image` untuk optimasi gambar.
- Lucide React untuk icons.
- Vercel Analytics dan Speed Insights.
- Vercel untuk deployment.

## Menjalankan Project

### Requirements

- Node.js 20 atau lebih baru.
- npm.

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Struktur Project

```text
app/
├── fasilitas/page.jsx
├── harga/page.jsx
├── lokasi/page.jsx
├── pelatih/page.jsx
├── globals.css
├── layout.jsx
├── page.jsx
├── robots.js
└── sitemap.js

components/
├── FacilityCard.jsx
├── Footer.jsx
├── Navbar.jsx
├── PersonalTrainerCard.jsx
├── PricingCard.jsx
├── SectionHeading.jsx
├── WhatsAppCTA.jsx
└── FloatingWhatsApp.jsx

data/
└── site.js

public/
└── image/
```

## SEO & Performance

Website menggunakan beberapa praktik SEO dan performance berikut:

- Server-rendered metadata dengan Next.js App Router.
- Title dan description berbeda untuk setiap route utama.
- Local business structured data menggunakan schema `ExerciseGym`.
- Semantic heading structure dengan satu H1 per halaman.
- Alt text deskriptif untuk gambar.
- Lazy loading untuk gambar non-kritis dan Google Maps.
- Hero image menggunakan priority loading.
- Sitemap dan robots tersedia secara otomatis.
- Konten harga berupa teks, bukan gambar, sehingga dapat dibaca search engine.

## Deployment ke Vercel

Project ini dapat dideploy langsung ke Vercel melalui repository GitHub.

1. Import repository ke Vercel.
2. Pastikan framework terdeteksi sebagai **Next.js**.
3. Gunakan build command default `next build` atau `npm run build`.
4. Biarkan output directory menggunakan default Next.js.
5. Set production branch ke `main`.

Setelah push ke branch production, Vercel akan membuat deployment baru secara otomatis.

## Kontak

- Website: [drpfitness.id](https://drpfitness.id)
- Instagram: [@drpfitness21](https://www.instagram.com/drpfitness21/)
- TikTok: [@drpfitness21](https://www.tiktok.com/@drpfitness21)
- WhatsApp: [+62 813-8433-4250](https://wa.me/6281384334250)
- Lokasi: [DRP Fitness di Google Maps](https://www.google.com/maps/place/DRP+GYM/)

## License

Website ini dibuat untuk kebutuhan DRP Fitness. Konten, logo, foto, dan brand merupakan milik DRP Fitness.
