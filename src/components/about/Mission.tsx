const principles = [
  {
    title: 'Make the first action obvious',
    detail: 'Products should lead users to play, track, learn, or enquire without friction.'
  },
  {
    title: 'Keep data ownership visible',
    detail: 'Health, school, and research workflows need clear data boundaries, export paths, and trust building copy.'
  },
  {
    title: 'Design for the partner brand',
    detail: 'White label surfaces should feel native to the school or academy while keeping DCANNAI product quality.'
  }
];

export default function Mission() {
  return (
    <section className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">Mission</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-[#1d1d1f] md:text-6xl">
            Build AI products people understand immediately.
          </h2>
          <p className="mt-5 text-xl leading-8 text-[#515154]">
            DCANNAI is not a generic AI agency. It is a research and product studio with live surfaces, real users, and a bias for polished user journeys.
          </p>
        </div>

        <div className="grid gap-3">
          {principles.map((principle) => (
            <div key={principle.title} className="rounded-lg border border-black/10 bg-[#f5f5f7] p-6">
              <h3 className="text-xl font-semibold text-[#1d1d1f]">{principle.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#515154]">{principle.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
