import type { Metadata } from 'next';
import Header from '@/components/Header';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Team - DCANNAI',
  description: 'Meet the DCANNAI team across product, software, hardware, network systems, and operations.'
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <Team />
      </main>
      <Footer />
    </>
  );
}
