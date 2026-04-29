import Link from 'next/link';

const capabilities = [
  'Product strategy and frontend design',
  'AI coaching and analysis workflows',
  'Health data and biomarker experiences',
  'School and partner white label delivery',
  'Farming, genetics, and trading research',
  'Backend lead capture and admin tooling',
  'Conversion focused launch systems'
];

export default function Team() {
  return (
    <section className="bg-[#f5f5f7] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">Capability</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-[#1d1d1f] md:text-6xl">
              Engineering and product working together.
            </h2>
            <p className="mt-5 text-xl leading-8 text-[#515154]">
              The work spans the parts that matter for launch: frontend polish, product clarity, backend capture, and operational admin views.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="rounded-lg border border-black/10 bg-white p-5 text-sm font-semibold leading-6 text-[#1d1d1f]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-black/10 bg-white p-8 text-center md:p-12">
          <h3 className="text-3xl font-semibold text-[#1d1d1f]">Bring the right product into focus.</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#515154]">
            Use the contact form for product demos, school partnerships, BioTrack enquiries, farming AI, genetics research, trading AI, or broader collaboration.
          </p>
          <Link
            href="/#contact"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1d1d1f] px-7 text-base font-semibold text-white transition hover:bg-black"
          >
            Contact DCANNAI
          </Link>
        </div>
      </div>
    </section>
  );
}
