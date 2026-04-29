import Link from 'next/link';
import Image from 'next/image';

const pamphlets = [
  {
    product: 'BioTrack',
    href: '/pamphlets/biotrack',
    title: 'Preventive health intelligence for long term records.',
    description:
      'A client ready pamphlet for BioTrack covering biomarker memory, health exports, GLP 1 tracking, and lifestyle context.',
    points: ['130+ biomarkers', 'Health record memory', 'Shareable exports', 'Review flags'],
    accent: 'bg-[#eef7f1]',
    badge: 'Health',
    image: '/media/product/biotrack-home.png',
    imageAlt: 'BioTrack product landing page screenshot',
    objectPosition: 'center top'
  },
  {
    product: 'Chess Universe',
    href: '/pamphlets/chess-universe',
    title: 'Chess learning and academy operations in one AI platform.',
    description:
      'A client ready pamphlet for DCANNAI Chess, live play, AI coaching, game review, and school academy portals.',
    points: ['AI coach', 'Live play', 'Puzzles', 'Academy portals'],
    accent: 'bg-[#f6d447]',
    badge: 'Chess',
    image: '/media/product/chess-dashboard.png',
    imageAlt: 'Chess Universe dashboard screenshot',
    objectPosition: 'left top'
  }
];

export default function Pamphlets() {
  return (
    <section id="pamphlets" className="bg-[#efede4] px-5 py-20 text-[#111111] md:px-6 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 border-b border-black/[0.12] pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#6d6a62]">
              Client pamphlets
            </p>
            <h2 className="max-w-4xl text-balance text-[clamp(2.75rem,5vw,5.8rem)] font-semibold leading-[1] tracking-normal">
              Product briefs ready to share.
            </h2>
          </div>
          <p className="max-w-2xl font-serif text-[clamp(1.35rem,1.7vw,2.15rem)] leading-[1.18] text-[#171717] lg:ml-auto">
            Two focused one page briefs for clients who want a quick overview before a demo.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {pamphlets.map((pamphlet) => (
            <Link key={pamphlet.product} href={pamphlet.href} className="group block">
              <article className="grid min-h-[520px] overflow-hidden rounded-lg border border-black/[0.10] bg-white transition duration-300 hover:-translate-y-1 hover:border-black/[0.22] hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
                <div className={`${pamphlet.accent} flex flex-col justify-between p-6`}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                      {pamphlet.badge}
                    </p>
                    <p className="mt-14 text-[clamp(2.35rem,4vw,4.2rem)] font-semibold leading-[0.95]">
                      {pamphlet.product}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex w-fit rounded-full bg-[#111111] px-4 py-2 text-sm font-semibold text-white">
                    Open pamphlet
                  </span>
                </div>
                <div className="flex flex-col justify-between p-5 sm:p-7">
                  <div className="relative min-h-[220px] overflow-hidden rounded-lg border border-black/[0.08] bg-[#111111] shadow-inner">
                    <Image
                      src={pamphlet.image}
                      alt={pamphlet.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 35vw, 90vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: pamphlet.objectPosition }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                        Actual product image
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="mt-7 max-w-xl text-balance text-[clamp(2rem,3vw,3.4rem)] font-semibold leading-[1.02]">
                      {pamphlet.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-[#5c5952]">{pamphlet.description}</p>
                  </div>
                  <div className="mt-8 grid gap-2 sm:grid-cols-2">
                    {pamphlet.points.map((point) => (
                      <span key={point} className="rounded-md border border-black/[0.10] bg-[#f7f4eb] px-4 py-3 text-sm font-semibold">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
