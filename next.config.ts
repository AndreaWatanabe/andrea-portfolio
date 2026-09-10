import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Hides Next.js's own dev-mode badge (the black circle with the ▲ logo)
   * that sits over the bottom-left of the page while running `npm run dev`.
   * It never appears in a production build; this just keeps it out of the
   * way while working locally. Build and runtime errors still surface.
   */
  devIndicators: false,
};

export default nextConfig;
