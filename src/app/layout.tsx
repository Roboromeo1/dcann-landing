import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dcannai.com'),
  title: {
    default: "DCANNAI - Sustainable AI Solutions for Trading, Farming & Retail",
    template: "%s | DCANNAI"
  },
  description: "Revolutionary eco-friendly AI solutions reducing carbon footprint by 85%. Self-hosted sustainable technology for ESG trading, precision farming, and zero-waste retail.",
  keywords: ["sustainable AI", "eco-friendly technology", "ESG trading", "AI trading platform", "smart farming", "precision agriculture", "green retail", "carbon neutral AI", "environmental AI solutions", "self-hosted AI", "edge computing", "zero waste technology"],
  authors: [{ name: "DCANNAI", url: "https://dcannai.com" }],
  creator: "DCANNAI",
  publisher: "DCANNAI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "DCANNAI - Sustainable AI Solutions",
    description: "Eco-friendly AI reducing carbon footprint by 85%. Self-hosted solutions for trading, farming & retail.",
    url: "https://dcannai.com",
    siteName: "DCANNAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DCANNAI - Sustainable AI Solutions',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DCANNAI - Sustainable AI Solutions",
    description: "Eco-friendly AI reducing carbon footprint by 85%. Self-hosted solutions for trading, farming & retail.",
    images: ['/og-image.png'],
    creator: '@dcannai',
  },
  alternates: {
    canonical: 'https://dcannai.com',
  },
  category: 'Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#00ff88" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DCANNAI",
              "alternateName": "DCANN AI",
              "url": "https://dcannai.com",
              "logo": "https://dcannai.com/favicon.svg",
              "description": "Revolutionary eco-friendly AI solutions reducing carbon footprint by 85%. Self-hosted sustainable technology for ESG trading, precision farming, and zero-waste retail.",
              "foundingDate": "2024",
              "foundingLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Melbourne",
                  "addressRegion": "Victoria",
                  "addressCountry": "Australia"
                }
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "0",
                  "longitude": "0"
                },
                "geoRadius": "20000000"
              },
              "sameAs": [
                "https://www.linkedin.com/in/adhityaram/"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Sustainable Technology",
                "ESG Trading",
                "Precision Agriculture",
                "Green Retail",
                "Carbon Neutral AI"
              ],
              "slogan": "AI that puts planet first",
              "offers": [
                {
                  "@type": "Service",
                  "name": "Sustainable Trading AI",
                  "description": "ESG-compliant AI trading systems"
                },
                {
                  "@type": "Service",
                  "name": "Smart Farming Solutions",
                  "description": "Precision agriculture AI technology"
                },
                {
                  "@type": "Service",
                  "name": "Green Retail Intelligence",
                  "description": "Zero-waste retail AI solutions"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}