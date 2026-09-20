import { Plus_Jakarta_Sans, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });
const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  metadataBase: new URL("https://drpfitness.id"),
  title: {
    default: "DRP Fitness Cibitung — Gym, Personal Trainer & Kelas",
    template: "%s | DRP Fitness Cibitung",
  },
  description:
    "DRP Fitness di Cibitung, Bekasi: gym lengkap, personal trainer, kelas senam, boxing & muaythai. Cek harga member, fasilitas, pelatih, dan lokasi.",
  keywords: [
    "gym cibitung",
    "fitness bekasi",
    "gym bekasi",
    "personal trainer cibitung",
    "drp fitness",
    "muaythai cibitung",
    "senam cibitung",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "DRP Fitness Cibitung",
    images: [{ url: "/image/background.webp", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/image/drp_logo.webp",
    apple: "/image/drp_logo.webp",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "DRP Fitness",
  description:
    "Gym di Cibitung, Bekasi dengan personal trainer, kelas senam, boxing & muaythai.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Perumahan GramaPuri Tamansari No. 14 cc, RW.37, Wanasari, Kec. Cibitung",
    addressLocality: "Kabupaten Bekasi",
    addressRegion: "Jawa Barat",
    postalCode: "17520",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: -6.2564664, longitude: 107.0827773 },
  openingHours: "Mo-Su 07:00-22:00",
  telephone: "+62-813-8433-4250",
  sameAs: [
    "https://www.instagram.com/drpfitness21/",
    "https://www.tiktok.com/@drpfitness21",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${sans.className} ${display.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        {/* <FloatingWhatsApp /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
