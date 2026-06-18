// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["i.imgur.com"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "assets.example.com",
//       },
//     ],
//   },
// };

// export default nextConfig;

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
      {
        protocol: "https",
        hostname: "zfjvutdwaalcjqhnoezd.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
