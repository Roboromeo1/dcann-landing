import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dcannai.com'),
  title: {
    default: "DCANNAI - Applied AI Research and Development",
    template: "%s | DCANNAI"
  },
  description: "DCANNAI is an applied AI research and development company building intelligence systems for chess, schools, preventive health, organic farming, genetics, and trading.",
  keywords: ["DCANNAI", "AI chess platform", "chess coaching", "school chess academy", "Velammal Chess Academy", "BioTrack", "preventive health app", "biomarker tracking", "organic farming AI", "gene therapy AI", "genetic modification AI", "AI trading research"],
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
    title: "DCANNAI - Applied AI Research and Development",
    description: "Researching and shipping AI systems for reasoning, learning, health, farming, genetics, and trading.",
    url: "https://dcannai.com",
    siteName: "DCANNAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DCANNAI AI products',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DCANNAI - Applied AI R&D",
    description: "AI systems for learning, health, farming, genetics, and trading.",
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#f5f5f7" />
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
              "description": "DCANNAI is an applied AI research and development company building intelligence systems for chess, schools, preventive health, organic farming, genetics, and trading.",
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
                "Chess Coaching",
                "School Academy Platforms",
                "Preventive Health Tracking",
                "Biomarker Tracking",
                "White Label Software",
                "Organic Farming AI",
                "Gene Therapy AI",
                "Genetic Modification AI",
                "AI Trading Research"
              ],
              "slogan": "AI products that feel simple from the first click",
              "offers": [
                {
                  "@type": "SoftwareApplication",
                  "name": "DCANNAI Chess",
                  "url": "https://chess.dcannai.com",
                  "description": "Chess platform with live play, AI coaching, puzzles, and game review."
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Velammal Chess Academy",
                  "url": "https://chess.dcannai.com/s/velammal-chess-academy",
                  "description": "White label academy portal for chess learning and tournaments."
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "BioTrack",
                  "url": "https://biotrack.dcannai.com",
                  "description": "Personal health record and biomarker tracking platform."
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
