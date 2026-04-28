const values = [
  'Clear product positioning',
  'Fast, low friction funnels',
  'Reliable partner operations',
  'Privacy aware product decisions'
];

export default function Values() {
  return (
    <section className="bg-[#1d1d1f] px-6 py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">Operating standard</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
            Calm interfaces. Direct copy. Useful automation.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={value} className="rounded-lg border border-white/12 bg-white/7 p-6">
              <span className="text-sm font-semibold text-white/45">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-semibold">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
