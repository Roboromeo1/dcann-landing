import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: "Contact DCANNAI | Product Demos and Partnerships",
  description: "Contact DCANNAI for chess platform demos, school white label academy partnerships, BioTrack enquiries, farming AI, genetics research, trading AI, and product collaborations.",
  openGraph: {
    title: "Contact DCANNAI",
    description: "Talk to DCANNAI about chess, white label academies, BioTrack, farming AI, genetics research, trading AI, and product partnerships.",
    url: "https://dcannai.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 bg-white px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </>
  );
}
