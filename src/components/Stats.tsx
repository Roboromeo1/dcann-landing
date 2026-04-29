const proofPoints = [
  {
    value: '6',
    label: 'Research domains',
    detail: 'Chess intelligence, health memory, organic farming, genetics, trading, and institutional deployment'
  },
  {
    value: '3',
    label: 'Live systems',
    detail: 'Chess intelligence, academy portals, and BioTrack preventive health'
  },
  {
    value: '130+',
    label: 'Health markers',
    detail: 'Biomarker coverage informing the BioTrack intelligence layer'
  },
  {
    value: '1',
    label: 'Partner portal',
    detail: 'Velammal Chess Academy validates the school white label model'
  }
];

export default function Stats() {
  return (
    <section className="bg-[#efede4] px-5 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 border-b border-black/[0.12] pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#6d6a62]">
              Operating model
            </p>
            <h2 className="max-w-4xl text-balance text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.96] tracking-normal text-[#111111]">
              Small team, real deployments, fast learning.
            </h2>
          </div>
          <p className="max-w-2xl font-serif text-[clamp(1.65rem,2vw,2.6rem)] leading-[1.14] text-[#171717] lg:ml-auto">
            The best signal comes from real systems. DCANNAI ships focused products, researches new domains, and turns field friction back into research direction.
          </p>
        </div>

        <div className="grid border-b border-black/[0.12] md:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div key={item.label} className="border-t border-black/[0.12] py-8 md:border-r md:px-7 lg:min-h-[280px] lg:py-10 first:md:pl-0 last:md:border-r-0">
              <p className="font-serif text-[clamp(4rem,6vw,7rem)] leading-none tracking-normal text-[#111111]">
                {item.value}
              </p>
              <h3 className="mt-8 text-xl font-semibold text-[#111111]">{item.label}</h3>
              <p className="mt-3 max-w-xs text-base leading-7 text-[#5c5952]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
