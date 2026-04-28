const routes = [
  {
    title: 'Chess platform',
    detail: 'Live play, coaching, puzzles, review, and user growth.'
  },
  {
    title: 'School white label',
    detail: 'Academy branded portals with learning, tournaments, and student progress.'
  },
  {
    title: 'BioTrack',
    detail: 'Preventive health, biomarkers, GLP 1 tracking, and medical record workflows.'
  },
  {
    title: 'Research programs',
    detail: 'Organic farming AI, gene therapy, genetic modification, and trading research.'
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-black/10 bg-[#f5f5f7] p-6">
        <h2 className="text-2xl font-semibold text-[#1d1d1f]">Where enquiries go</h2>
        <p className="mt-3 text-base leading-7 text-[#515154]">
          Submissions are saved to the new DCANNAI contact backend and reviewed from the admin panel. Add context so the first reply can be specific.
        </p>
      </div>

      <div className="grid gap-3">
        {routes.map((route) => (
          <div key={route.title} className="rounded-lg border border-black/10 bg-white p-5">
            <h3 className="text-lg font-semibold text-[#1d1d1f]">{route.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{route.detail}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-black/10 bg-[#1d1d1f] p-6 text-white">
        <h3 className="text-xl font-semibold">Direct email</h3>
        <a href="mailto:hello@dcannai.com" className="mt-3 inline-block text-base font-semibold text-white/90 hover:text-white">
          hello@dcannai.com
        </a>
        <p className="mt-3 text-sm leading-6 text-white/60">Melbourne, Australia. Working with customers and partners globally.</p>
      </div>
    </div>
  );
}
