import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/features/shared/components/LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ptah - Mercado Premium de Diseños 3D",
  description: "Creando divinidad en 3D. Esculturas coleccionables premium inspiradas en civilizaciones antiguas y cultura pop moderna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-ptah-base text-ptah-text-primary`}
        style={{
          backgroundColor: '#FFFFFF',
          color: '#09090B',
        }}
      >
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
