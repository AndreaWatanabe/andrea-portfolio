import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import PetalField from "@/components/PetalField";
import SiteNav from "@/components/SiteNav";
import { resumeSrc } from "@/lib/assets";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrea Watanabe | Economics, data & design",
  description:
    "Portfolio of Andrea Watanabe — economics student at SFU working across data analysis, product strategy, UX/UI, and web projects.",
};

export const viewport: Viewport = {
  themeColor: "#fff5f8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <PetalField />
        <SiteNav resumeHref={resumeSrc} />
        {children}
      </body>
    </html>
  );
}
