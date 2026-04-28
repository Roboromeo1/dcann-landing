import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import Mission from '@/components/about/Mission';
import Values from '@/components/about/Values';
import Team from '@/components/about/Team';

export const metadata: Metadata = {
  title: "About DCANNAI | AI Product Studio",
  description: "Learn about DCANNAI, the AI research studio behind DCANNAI Chess, Velammal Chess Academy, BioTrack, farming AI, genetics research, and trading AI.",
  openGraph: {
    title: "About DCANNAI",
    description: "AI research studio for chess, schools, health, farming, genetics, and trading.",
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
