export default function AboutHero() {
  return (
    <section className="bg-[#f5f5f7] px-6 pb-16 pt-28 text-center md:pb-20 md:pt-36">
      <div className="mx-auto max-w-5xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">
          About DCANNAI
        </p>
        <h1 className="text-balance text-5xl font-semibold leading-tight text-[#1d1d1f] md:text-7xl">
          An AI research studio for practical systems.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-[#515154] md:text-2xl md:leading-9">
          DCANNAI focuses on domains where AI can make complex work clearer: chess learning, school academy operations, personal health, organic farming, genetics, and trading.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ['Chess', 'Play, learn, review, and coach'],
            ['Health', 'BioTrack preventive health records'],
            ['Research', 'Farming, genetics, and trading AI']
          ].map(([title, detail]) => (
            <div key={title} className="rounded-lg border border-black/10 bg-white p-6">
              <h2 className="text-2xl font-semibold text-[#1d1d1f]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
