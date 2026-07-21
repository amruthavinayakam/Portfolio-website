import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export — the build emits plain HTML/CSS/JS in `out/`,
  // so it deploys to Vercel (or any static host) with zero config.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
