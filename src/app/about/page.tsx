import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import Mission from '@/components/about/Mission';
import Values from '@/components/about/Values';
import Team from '@/components/about/Team';

export const metadata: Metadata = {
  title: "About Us - DCANNAI | Eco-Friendly AI Solutions",
  description: "Learn about DCANNAI's mission to build self-hosted, eco-friendly AI solutions that don't rely on GPU-intensive tasks. We're at the forefront of AI research for sustainable technology.",
  openGraph: {
    title: "About DCANNAI - Sustainable AI Innovation",
    description: "Building self-hosted, eco-friendly AI solutions for a better tomorrow",
    url: "https://dcannai.com/about",
  },
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <Mission />
        <Values />
        <Team />
      </main>
      <Footer />
    </>
  );
}