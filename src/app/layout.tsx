import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cary Pilates | Find Your Strength. Move with Grace. Live in Balance.",
  description:
    "Boutique Pilates studio in Cary, NC offering small group classes limited to 5 participants, private sessions, and Pilates-based physical therapy. Experience personalized attention on premium Balanced Body equipment.",
  keywords: [
    "Pilates",
    "Cary NC",
    "reformer pilates",
    "small group pilates",
    "private pilates",
    "physical therapy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
