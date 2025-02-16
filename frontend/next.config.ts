import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  } as any, // cast to any to bypass type errors
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/nextjs-website/" : "",
};

export default nextConfig;