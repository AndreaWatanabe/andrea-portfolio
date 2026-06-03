import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrea Watanabe | Portfolio",
  description: "Portfolio of Andrea Watanabe — economics, data analysis, product strategy, UX/UI, and web projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}