/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dcannai.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Generate sitemap
  async generateBuildId() {
    return 'dcannai-v1.0.0'
  },
  // SEO optimizations
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://dcannai.com',
  },
}

module.exports = nextConfig