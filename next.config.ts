import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
      },
    ],
  },
};

export default nextConfig;
