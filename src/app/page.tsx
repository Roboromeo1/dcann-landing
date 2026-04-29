import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contact/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Team />
        <section id="contact" className="bg-[#111111] px-5 py-20 text-white md:px-6 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.48]">
                Work with DCANNAI
              </p>
              <h2 className="text-balance text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.96] tracking-normal text-white">
                Bring the lab into your organisation.
              </h2>
              <p className="mt-7 max-w-xl text-xl leading-8 text-white/[0.64]">
                Use the form for academy partnerships, chess intelligence demos, BioTrack enquiries, organic farming AI, genetics research, trading AI, or broader applied AI product work.
              </p>
              <div className="mt-9 grid gap-3 text-sm font-semibold text-white sm:grid-cols-2">
                {['Research partnership', 'School deployment', 'Health intelligence', 'Farming and genetics'].map((item) => (
                  <div key={item} className="rounded-md border border-white/[0.12] bg-white/[0.055] px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
