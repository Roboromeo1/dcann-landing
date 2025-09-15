import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: "Contact Us - DCANNAI | Get In Touch",
  description: "Get in touch with DCANNAI for sustainable AI solutions. Contact our team for trading AI, smart farming, and retail intelligence solutions.",
  openGraph: {
    title: "Contact DCANNAI - Sustainable AI Solutions",
    description: "Ready to transform your business with eco-friendly AI? Get in touch today.",
    url: "https://dcannai.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-6 py-20">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </>
  );
}