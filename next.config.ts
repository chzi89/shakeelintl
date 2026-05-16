import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
  
    unoptimized: true,
  
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;
