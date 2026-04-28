import Image from 'next/image';

type ChessPiece = {
  square: number;
  color: 'w' | 'b';
  type: 'k' | 'q' | 'r' | 'b' | 'n' | 'p';
};

const chessPieces: ChessPiece[] = [
  { square: 0, color: 'b', type: 'r' },
  { square: 1, color: 'b', type: 'n' },
  { square: 2, color: 'b', type: 'b' },
  { square: 3, color: 'b', type: 'q' },
  { square: 4, color: 'b', type: 'k' },
  { square: 5, color: 'b', type: 'b' },
  { square: 6, color: 'b', type: 'n' },
  { square: 7, color: 'b', type: 'r' },
  { square: 8, color: 'b', type: 'p' },
  { square: 9, color: 'b', type: 'p' },
  { square: 10, color: 'b', type: 'p' },
  { square: 11, color: 'b', type: 'p' },
  { square: 12, color: 'b', type: 'p' },
  { square: 13, color: 'b', type: 'p' },
  { square: 14, color: 'b', type: 'p' },
  { square: 15, color: 'b', type: 'p' },
  { square: 48, color: 'w', type: 'p' },
  { square: 49, color: 'w', type: 'p' },
  { square: 50, color: 'w', type: 'p' },
  { square: 51, color: 'w', type: 'p' },
  { square: 52, color: 'w', type: 'p' },
  { square: 53, color: 'w', type: 'p' },
  { square: 54, color: 'w', type: 'p' },
  { square: 55, color: 'w', type: 'p' },
  { square: 56, color: 'w', type: 'r' },
  { square: 57, color: 'w', type: 'n' },
  { square: 58, color: 'w', type: 'b' },
  { square: 59, color: 'w', type: 'q' },
  { square: 60, color: 'w', type: 'k' },
  { square: 61, color: 'w', type: 'b' },
  { square: 62, color: 'w', type: 'n' },
  { square: 63, color: 'w', type: 'r' }
];

const biomarkerRows = [
  ['HbA1c', '5.2%', 'Optimal'],
  ['LDL C', '118 mg/dL', 'Review'],
  ['Vitamin D', '42 ng/mL', 'Improving'],
  ['hs CRP', '0.7 mg/L', 'Optimal']
];

const academyRows = [
  ['Aarav', '1420', '+38'],
  ['Meera', '1365', '+24'],
  ['Kavin', '1288', '+19']
];

const researchPrograms = [
  {
    name: 'Organic farming AI',
    detail: 'Crop intelligence, soil signal interpretation, pest risk prediction, yield planning, and farm decision support.'
  },
  {
    name: 'Gene therapy and genetic modification AI',
    detail: 'Research systems for sequence analysis, target discovery, experiment planning, and safety review workflows.'
  },
  {
    name: 'AI trading research',
    detail: 'Market pattern research, risk controls, strategy simulation, and decision systems for disciplined trading workflows.'
  }
];

function getPieceUrl(piece: ChessPiece) {
  return `/media/chess-pieces/3d-chesskid/${piece.color}${piece.type}.png`;
}

export default function Services() {
  return (
    <section id="products" className="bg-black px-5 py-20 text-white md:px-6 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.46]">
              Products and research
            </p>
            <h2 className="max-w-4xl text-balance text-[clamp(3.2rem,6vw,7.2rem)] font-semibold leading-[0.96] tracking-normal">
              The products are the proof.
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-8 text-white/[0.62] lg:ml-auto">
            These are coded product surfaces from the platforms, with the wider research program extending into organic farming, genetics, and trading.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          <ProductShowcase
            href="https://chess.dcannai.com"
            eyebrow="DCANNAI Chess"
            title="A chess workspace that feels like the live academy portal."
            description="The board, time controls, queue status, and AI coach are modelled from the real Velammal and DCANNAI Chess experience."
            meta={['AI coach', 'Game review', 'Puzzles', 'Live play']}
            visual={<ChessSurface />}
          />

          <ProductShowcase
            href="https://biotrack.dcannai.com"
            eyebrow="BioTrack"
            title="A preventive health dashboard designed around long term context."
            description="Biomarkers, fasting, alerts, exports, and medical history become a clean personal health memory."
            meta={['130+ biomarkers', 'Health exports', 'GLP 1 tracking', 'Lifestyle goals']}
            visual={<BioTrackSurface />}
            reverse
          />

          <ProductShowcase
            href="https://chess.dcannai.com/s/velammal-chess-academy"
            eyebrow="Velammal Chess Academy"
            title="A school branded academy portal with proof, progress, and operations together."
            description="The white label layer gives partners a public academy site, student hub, leaderboards, tournaments, and coaching workflows."
            meta={['Partner live', 'Student hub', 'Leaderboards', 'Academy dashboard']}
            visual={<VelammalSurface />}
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {researchPrograms.map((program, index) => (
            <article key={program.name} className="rounded-lg border border-white/[0.10] bg-white/[0.045] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.42]">
                Research 0{index + 1}
              </p>
              <h3 className="mt-8 text-3xl font-semibold leading-tight">{program.name}</h3>
              <p className="mt-5 text-base leading-7 text-white/[0.62]">{program.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductShowcase({
  href,
  eyebrow,
  title,
  description,
  meta,
  visual,
  reverse = false
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  meta: string[];
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
      <article className="grid overflow-hidden rounded-lg border border-white/[0.10] bg-[#111111] transition duration-300 hover:border-white/[0.22] lg:grid-cols-[1.2fr_0.8fr]">
        <div className={`${reverse ? 'lg:order-2' : ''} min-h-[430px] p-4 sm:p-6 lg:p-8`}>
          {visual}
        </div>
        <div className="flex flex-col justify-between border-t border-white/[0.10] p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.46]">
              {eyebrow}
            </p>
            <h3 className="mt-8 text-balance text-[clamp(2.6rem,4.8vw,5.7rem)] font-semibold leading-[0.96] tracking-normal">
              {title}
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/[0.64]">
              {description}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {meta.map((item) => (
              <span key={item} className="rounded-full border border-white/[0.12] px-4 py-2 text-sm font-semibold text-white/[0.74]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
}

function ChessSurface() {
  return (
    <div className="h-full overflow-hidden rounded-lg bg-[radial-gradient(circle_at_8%_8%,rgba(246,183,0,0.18),transparent_26%),radial-gradient(circle_at_82%_24%,rgba(22,101,52,0.20),transparent_30%),linear-gradient(135deg,#080d17,#111827_54%,#0b1724)] p-4 text-white sm:p-5">
      <div className="mb-5 flex items-center justify-between border-b border-[#f6b700]/[0.18] pb-4">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-20 place-items-center rounded-md bg-white text-center text-[10px] font-black uppercase leading-[0.95] text-[#2463ad]">
            Velammal<br />Nexus
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.42]">Official portal</p>
            <p className="mt-1 text-xl font-semibold">Velammal Chess Academy</p>
          </div>
        </div>
        <span className="rounded-full border border-[#f6b700]/30 bg-[#f6b700]/15 px-3 py-1 text-xs font-semibold text-[#f6b700]">
          Blitz 3+2
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid content-start gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6b700]">Velammal Chess Academy</p>
            <h4 className="mt-3 font-serif text-5xl font-semibold leading-[0.98]">Ready to play?</h4>
            <p className="mt-3 text-sm leading-6 text-white/[0.58]">Pick a time control and jump in. Matches start within seconds.</p>
          </div>

          <div className="rounded-lg border border-white/[0.12] bg-[#0d1324]/[0.86] p-4 shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
            <div className="flex flex-wrap gap-2">
              {['Bullet', 'Blitz', 'Rapid'].map((mode) => (
                <span key={mode} className={`rounded-full border px-4 py-2 text-sm font-semibold ${mode === 'Blitz' ? 'border-[#f6b700]/50 bg-[#f6b700]/15 text-[#f6b700]' : 'border-white/[0.12] text-white/[0.72]'}`}>
                  {mode}
                </span>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {['3+0', '3+2', '5+0', '5+5'].map((time) => (
                <div key={time} className={`rounded-md border px-3 py-4 text-center text-base font-semibold ${time === '3+2' ? 'border-[#f6b700]/55 bg-[#f6b700]/10 shadow-[0_14px_40px_rgba(246,183,0,0.20)]' : 'border-white/[0.10] bg-white/[0.035]'}`}>
                  {time}
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-md bg-[#f6b700] px-5 py-4 text-center text-lg font-semibold text-[#111111]">
                Play 3+2
              </div>
              <div className="rounded-md border border-white/[0.12] bg-white/[0.055] px-5 py-4 text-center text-lg font-semibold">
                Train with AI
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/[0.12] bg-[#0d1324]/[0.86] p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.42]">Queue status</p>
              <p className="text-xs font-semibold text-white/[0.56]">Ping 24ms</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ['Online', '3'],
                ['Games', '949']
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/[0.10] bg-white/[0.035] p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/[0.36]">{label}</p>
                  <p className="mt-2 text-2xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-md border border-[#f6b700]/35 bg-[#f6b700]/10 px-3 py-3">
              <p className="text-sm font-semibold">DCANNAI AI Coach</p>
              <p className="mt-1 text-xs text-white/[0.58]">Want a warmup game before you queue?</p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-3 flex justify-center gap-2">
            <span className="rounded-full bg-[#f6b700] px-5 py-2 text-sm font-semibold text-[#111111]">2D Board</span>
            <span className="rounded-full border border-white/[0.12] px-5 py-2 text-sm font-semibold text-white/[0.56]">3D Board</span>
          </div>
          <div className="grid aspect-square grid-cols-8 overflow-hidden rounded-lg border-[8px] border-[#0f3c24] bg-[#0f7135] shadow-[0_26px_70px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.12]">
            {Array.from({ length: 64 }).map((_, square) => {
              const row = Math.floor(square / 8);
              const col = square % 8;
              const isLight = (row + col) % 2 === 0;
              const piece = chessPieces.find((item) => item.square === square);
              return (
                <div
                  key={square}
                  className={`relative flex aspect-square items-center justify-center ${isLight ? 'bg-[#d4f7dd]' : 'bg-[#156f36]'}`}
                >
                  {piece ? (
                    <Image
                      src={getPieceUrl(piece)}
                      alt=""
                      width={150}
                      height={150}
                      className="relative h-[88%] w-[88%] object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.28)]"
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="mt-4 rounded-lg border border-white/[0.12] bg-[#33465c] p-4">
            <div className="flex flex-wrap gap-5 border-b border-white/[0.12] pb-3 text-sm font-semibold">
              {['Board', 'Pieces', 'Background', 'Presets'].map((tab) => (
                <span key={tab} className={tab === 'Pieces' ? 'text-white' : 'text-white/[0.62]'}>
                  {tab}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.42]">Preview</p>
            <p className="mt-2 text-lg font-semibold">Forest Pro</p>
            <p className="text-sm text-white/[0.62]">3D Chesskid</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BioTrackSurface() {
  return (
    <div className="h-full rounded-lg bg-[#f6fbf8] p-4 text-[#111111] sm:p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700/70">Dashboard</p>
          <p className="mt-1 text-xl font-semibold">BioTrack</p>
        </div>
        <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
          Synced today
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ['248', 'Total entries'],
          ['41', 'Optimal'],
          ['7', 'Review'],
          ['4', 'Fasting streak']
        ].map(([value, label]) => (
          <div key={label} className="rounded-lg border border-emerald-900/10 bg-white p-4">
            <p className="text-3xl font-semibold">{value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#68736c]">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-lg border border-emerald-900/10 bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Biological age trend</p>
            <span className="text-xs font-semibold text-emerald-700">Improving</span>
          </div>
          <div className="mt-8 flex h-32 items-end gap-2">
            {[44, 58, 50, 68, 61, 74, 82, 76, 88, 92, 86, 96].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className="flex-1 rounded-t bg-emerald-500/80"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-emerald-900/10 bg-white p-4">
          <p className="text-sm font-semibold">Latest biomarkers</p>
          <div className="mt-3 grid gap-2">
            {biomarkerRows.map(([name, value, status]) => (
              <div key={name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-md bg-[#f2f7f4] px-3 py-2">
                <span className="text-sm font-semibold">{name}</span>
                <span className="text-sm text-[#5d675f]">{value}</span>
                <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${status === 'Review' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}`}>
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VelammalSurface() {
  return (
    <div className="grid h-full content-start gap-4 overflow-hidden rounded-lg bg-[#f6d447] p-4 text-[#111111]">
      <div className="relative aspect-[1000/563] overflow-hidden rounded-md bg-[#f6d447]">
        <Image
          src="/media/velammal-wstc-2025.jpg"
          alt="Velammal Chess Academy students at the 2025 FIDE WSTC event"
          fill
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="object-contain"
        />
        <p className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
          2025 FIDE WSTC
        </p>
      </div>

      <div className="rounded-lg bg-[#111111] p-5 text-white">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.45]">Academy dashboard</p>
            <h4 className="mt-4 text-3xl font-semibold leading-tight">Velammal Chess Academy</h4>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 lg:mt-0">
            {[
              ['412', 'Students'],
              ['28', 'Events'],
              ['91%', 'Active']
            ].map(([value, label]) => (
              <div key={label} className="rounded-md border border-white/[0.12] bg-white/[0.055] p-3">
                <p className="text-2xl font-semibold">{value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/[0.45]">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <p className="text-sm font-semibold text-white/[0.72]">Leaderboard movement</p>
          <div className="mt-3 grid gap-2">
            {academyRows.map(([name, rating, change]) => (
              <div key={name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-md bg-white/[0.07] px-3 py-2">
                <span className="text-sm font-semibold">{name}</span>
                <span className="text-sm text-white/[0.62]">{rating}</span>
                <span className="text-sm font-semibold text-[#f6d447]">{change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
