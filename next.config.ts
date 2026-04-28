import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dcannai.com',
      },
      {
        protocol: 'https',
        hostname: 'images.chesscomfiles.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  env: {
    SITE_URL: process.env.SITE_URL || 'https://dcannai.com',
  },
};

export default nextConfig;
