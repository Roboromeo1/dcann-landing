import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrintButton from '@/components/PrintButton';

type ProductPamphletProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  accentClassName: string;
  metrics: Array<[string, string]>;
  sections: Array<{
    title: string;
    items: string[];
  }>;
  productUrl: string;
};

export default function ProductPamphlet({
  eyebrow,
  title,
  subtitle,
  accentClassName,
  metrics,
  sections,
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

            @page {
              size: A4;
              margin: 12mm;
            }
          }
        `}</style>
        <div className="mx-auto max-w-[1120px]">
          <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
            <Link href="/#pamphlets" className="text-sm font-semibold text-[#5c5952] hover:text-[#111111]">
              Back to pamphlets
            </Link>
            <PrintButton />
          </div>

          <article className="pamphlet-document overflow-hidden rounded-lg border border-black/[0.10] bg-white shadow-[0_28px_90px_rgba(0,0,0,0.10)]">
            <div className={`grid gap-8 p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr] ${accentClassName}`}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">{eyebrow}</p>
                <h1 className="mt-8 max-w-3xl text-balance text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.96] tracking-normal">
                  {title}
                </h1>
              </div>
              <div className="flex flex-col justify-end">
                <p className="font-serif text-[clamp(1.5rem,2vw,2.4rem)] leading-[1.14] text-[#171717]">
                  {subtitle}
                </p>
                <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  {metrics.map(([value, label]) => (
                    <div key={label} className="rounded-md border border-black/[0.10] bg-white/[0.72] p-4">
                      <p className="text-3xl font-semibold">{value}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#6d6a62]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 p-8 md:p-10 lg:grid-cols-3">
              {sections.map((section) => (
                <section key={section.title} className="rounded-lg border border-black/[0.10] bg-[#f7f4eb] p-5">
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  <div className="mt-5 grid gap-3">
                    {section.items.map((item) => (
                      <p key={item} className="border-t border-black/[0.10] pt-3 text-base leading-7 text-[#4a4842]">
                        {item}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="grid gap-5 border-t border-black/[0.10] bg-[#111111] p-8 text-white md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
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
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
