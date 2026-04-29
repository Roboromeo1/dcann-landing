import Link from 'next/link';

const signals = [
  ['DCANNAI Chess', 'AI review and live board'],
  ['BioTrack', 'Health record intelligence'],
  ['Organic farming', 'Crop and soil intelligence'],
  ['Genetics', 'Gene therapy research systems']
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#efede4] px-5 pb-16 pt-24 text-[#111111] md:px-6 md:pt-28">
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-[1500px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center xl:gap-16">
        <div className="max-w-[780px]">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#6d6a62]">
            DCANNAI Research and Products
          </p>
          <h1 className="text-balance text-[clamp(3.35rem,5.1vw,6.55rem)] font-semibold leading-[0.99] tracking-normal">
            AI <span className="underline decoration-[0.075em] underline-offset-[0.12em]">research</span> systems for high context domains.
          </h1>
          <p className="mt-8 max-w-[660px] font-serif text-[clamp(1.35rem,1.45vw,1.95rem)] leading-[1.23] tracking-normal text-[#171717]">
            DCANNAI turns applied AI research into products and research programs for chess, schools, preventive health, organic farming, gene therapy, genetic modification, and trading.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#111111] px-7 text-base font-semibold text-white transition hover:bg-black"
            >
              Book a demo
            </Link>
            <Link
              href="#products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#111111]/[0.18] px-7 text-base font-semibold text-[#111111] transition hover:border-[#111111]/[0.35] hover:bg-white/[0.45]"
            >
              Explore systems
            </Link>
          </div>
        </div>

        <div id="research" className="relative">
          <div className="rounded-lg bg-[#111111] p-4 text-white shadow-[0_34px_90px_rgba(0,0,0,0.20)]">
            <div className="rounded-md border border-white/[0.12] bg-[#181818] p-5">
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.12] pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
                    Live ecosystem
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
                    Product surfaces from the lab
                  </h2>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#111111]">
                  Active
                </span>
              </div>

              <div className="grid gap-3 py-5 md:grid-cols-2">
                {signals.map(([name, detail], index) => (
                  <div key={name} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md border border-white/[0.10] bg-white/[0.055] p-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#111111]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-base font-semibold">{name}</p>
                      <p className="mt-1 text-sm text-white/[0.56]">{detail}</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-[#f7c948]" />
                  </div>
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-md bg-[#f6d447] p-5 text-[#111111]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Partner system</p>
                  <p className="mt-12 max-w-xs text-4xl font-semibold leading-[0.95]">Velammal academy portal live</p>
                </div>
                <div className="rounded-md bg-[#eef7f1] p-5 text-[#111111]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">Research expansion</p>
                  <div className="mt-10 grid gap-2">
                    {['Organic farming AI', 'Gene therapy AI', 'Genetic modification AI'].map((item) => (
                      <div key={item} className="rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-semibold">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
