import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lilibauza.web.app'),
  title: "Mtra. Liliana Bauza | Psicóloga Clínica en Villa de Álvarez, Colima",
  description: "Psicóloga Clínica con más de 30 años de experiencia. Especialista en trauma, conducta compulsiva, ansiedad y depresión. Terapia presencial en Villa de Álvarez y en línea. Cédula: 3398478",
  keywords: ["psicóloga Villa de Álvarez", "psicóloga Colima", "terapia psicológica", "ansiedad", "depresión", "trauma", "EMDR", "terapia de pareja", "salud mental", "Mtra. Liliana Bauza"],
  authors: [{ name: "Mtra. Liliana Bauza" }],
  openGraph: {
    title: "Mtra. Liliana Bauza | Psicóloga Clínica",
    description: "Especialista en trauma y conducta compulsiva. Más de 228 reseñas verificadas.",
    type: "website",
    locale: "es_MX",
    url: "https://www.lilianabauza.com",
    images: [
      {
        url: "/images/LiliBauza.png",
        width: 1200,
        height: 630,
        alt: "Mtra. Liliana Bauza - Psicóloga Clínica en Villa de Álvarez, Colima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mtra. Liliana Bauza | Psicóloga Clínica",
    description: "Especialista en trauma y conducta compulsiva. Más de 228 reseñas verificadas.",
    images: ["/images/LiliBauza.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
