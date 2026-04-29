import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrintButton from '@/components/PrintButton';

type ProductPamphletProps = {
  eyebrow: string;
  productName: string;
  title: string;
  subtitle: string;
  accentClassName: string;
  visual: {
    src: string;
    alt: string;
    caption: string;
    objectPosition?: string;
  };
  metrics: Array<[string, string]>;
  sections: Array<{
    title: string;
    items: string[];
  }>;
  proof: Array<{
    label: string;
    detail: string;
  }>;
  productUrl: string;
};

export default function ProductPamphlet({
  eyebrow,
  productName,
  title,
  subtitle,
  accentClassName,
  visual,
  metrics,
  sections,
  proof,
  productUrl
}: ProductPamphletProps) {
  return (
    <>
      <Header />
      <main className="bg-[#efede4] px-5 py-24 text-[#111111] md:px-6 md:py-28">
        <style>{`
          @media print {
            header, footer, .no-print {
              display: none !important;
            }

            body {
              background: #fff !important;
            }

            main {
              padding: 0 !important;
              background: #fff !important;
            }

            .pamphlet-document {
              border: 0 !important;
              box-shadow: none !important;
            }

            .print-avoid-break {
              break-inside: avoid;
            }

            @page {
              size: A4;
              margin: 12mm;
            }
          }
        `}</style>
        <div className="mx-auto max-w-[1280px]">
          <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
            <Link href="/#pamphlets" className="text-sm font-semibold text-[#5c5952] hover:text-[#111111]">
              Back to pamphlets
            </Link>
            <PrintButton />
          </div>

          <article className="pamphlet-document overflow-hidden rounded-lg border border-black/[0.10] bg-[#f9f7ef] shadow-[0_32px_100px_rgba(0,0,0,0.12)]">
            <section className={`print-avoid-break grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10 ${accentClassName}`}>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">{eyebrow}</p>
                  <p className="mt-10 text-lg font-semibold text-black/60">{productName}</p>
                  <h1 className="mt-4 max-w-3xl text-balance text-[clamp(3rem,6vw,6.35rem)] font-semibold leading-[0.95] tracking-normal">
                    {title}
                  </h1>
                </div>
                <p className="mt-10 max-w-2xl font-serif text-[clamp(1.45rem,2vw,2.35rem)] leading-[1.14] text-[#171717]">
                  {subtitle}
                </p>
              </div>

              <figure className="rounded-[2rem] border border-black/[0.10] bg-[#111111] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem] bg-black">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 650px, 90vw"
                    className="object-cover object-top"
                    style={{ objectPosition: visual.objectPosition ?? 'center top' }}
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 px-3 py-4 text-sm font-semibold text-white/72">
                  <span>{visual.caption}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.12em] text-black">
                    Live product
                  </span>
                </figcaption>
              </figure>
            </section>

            <section className="print-avoid-break grid border-y border-black/[0.10] bg-white sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map(([value, label]) => (
                <div key={label} className="border-b border-black/[0.10] p-6 sm:border-r lg:border-b-0">
                  <p className="text-[clamp(2.4rem,4vw,4.4rem)] font-semibold leading-none">{value}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#6d6a62]">{label}</p>
                </div>
              ))}
            </section>

            <section className="grid gap-5 p-6 sm:p-8 lg:grid-cols-3 lg:p-10">
              {sections.map((section) => (
                <section key={section.title} className="print-avoid-break rounded-lg border border-black/[0.10] bg-white p-6">
                  <h2 className="text-[clamp(1.65rem,2.1vw,2.35rem)] font-semibold leading-tight">{section.title}</h2>
                  <div className="mt-5 grid gap-3">
                    {section.items.map((item) => (
                      <p key={item} className="border-t border-black/[0.10] pt-3 text-base leading-7 text-[#4a4842]">
                        {item}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </section>

            <section className="print-avoid-break grid gap-4 border-t border-black/[0.10] bg-[#111111] p-6 text-white sm:p-8 lg:grid-cols-3 lg:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.42]">Client proof</p>
                <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-none">
                  Built around real workflows, not a pitch deck.
                </h2>
              </div>
              {proof.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/[0.12] bg-white/[0.06] p-5">
                  <p className="text-lg font-semibold">{item.label}</p>
                  <p className="mt-3 text-base leading-7 text-white/[0.62]">{item.detail}</p>
                </div>
              ))}
            </section>

            <section className="grid gap-5 border-t border-white/[0.10] bg-black p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.48]">Next step</p>
                <p className="mt-3 max-w-2xl text-3xl font-semibold leading-tight">
                  Share this brief, then book a focused DCANNAI demo.
                </p>
              </div>
              <div className="grid gap-2 text-sm font-semibold text-white/[0.72]">
                <a href={productUrl} className="hover:text-white">
                  {productUrl.replace('https://', '')}
                </a>
                <a href="https://dcannai.com/#contact" className="hover:text-white">
                  dcannai.com/#contact
                </a>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
