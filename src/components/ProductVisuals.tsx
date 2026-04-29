import Image from 'next/image';

export type ProductVisualVariant = 'biotrack-dashboard' | 'velammal-academy';

type ProductSurfaceProps = {
  variant: ProductVisualVariant;
  compact?: boolean;
};

const biomarkerRows = [
  ['HbA1c', '5.2%', 'Optimal'],
  ['LDL C', '118 mg/dL', 'Review'],
  ['Vitamin D', '42 ng/mL', 'Improving'],
  ['hs CRP', '0.7 mg/L', 'Optimal']
];

const boardPieces = [
  [0, 'br', 'Black rook'],
  [1, 'bn', 'Black knight'],
  [2, 'bb', 'Black bishop'],
  [3, 'bq', 'Black queen'],
  [4, 'bk', 'Black king'],
  [5, 'bb', 'Black bishop'],
  [6, 'bn', 'Black knight'],
  [7, 'br', 'Black rook'],
  [8, 'bp', 'Black pawn'],
  [9, 'bp', 'Black pawn'],
  [10, 'bp', 'Black pawn'],
  [11, 'bp', 'Black pawn'],
  [12, 'bp', 'Black pawn'],
  [13, 'bp', 'Black pawn'],
  [14, 'bp', 'Black pawn'],
  [15, 'bp', 'Black pawn'],
  [48, 'wp', 'White pawn'],
  [49, 'wp', 'White pawn'],
  [50, 'wp', 'White pawn'],
  [51, 'wp', 'White pawn'],
  [52, 'wp', 'White pawn'],
  [53, 'wp', 'White pawn'],
  [54, 'wp', 'White pawn'],
  [55, 'wp', 'White pawn'],
  [56, 'wr', 'White rook'],
  [57, 'wn', 'White knight'],
  [58, 'wb', 'White bishop'],
  [59, 'wq', 'White queen'],
  [60, 'wk', 'White king'],
  [61, 'wb', 'White bishop'],
  [62, 'wn', 'White knight'],
  [63, 'wr', 'White rook']
] as const;

const pieceBySquare = new Map<number, { piece: string; alt: string }>(
  boardPieces.map(([square, piece, alt]) => [square, { piece, alt }])
);

export default function ProductSurface({ variant, compact = false }: ProductSurfaceProps) {
  if (variant === 'velammal-academy') {
    return <VelammalAcademySurface compact={compact} />;
  }

  return <BioTrackDashboardSurface compact={compact} />;
}

function BioTrackDashboardSurface({ compact }: { compact: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[1.35rem] border border-emerald-950/10 bg-[#f6fbf8] text-[#102018] ${compact ? 'min-h-[250px] p-4' : 'min-h-[470px] p-5 sm:p-6'}`}>
      <div className="flex items-center justify-between border-b border-emerald-950/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white">B</div>
          <div>
            <p className="text-base font-semibold leading-none">BioTrack</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-900/45">Dashboard</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">Add Entry</span>
      </div>

      <div className={`${compact ? 'mt-4 grid-cols-2' : 'mt-5 grid-cols-4'} grid gap-3`}>
        {[
          ['42', 'Total entries', 'text-[#102018]'],
          ['28', 'Optimal', 'text-emerald-700'],
          ['4', 'Needs review', 'text-amber-600'],
          ['12', 'Fasting streak', 'text-[#102018]']
        ].map(([value, label, tone]) => (
          <div key={label} className="rounded-lg border border-emerald-950/10 bg-white p-4 shadow-sm">
            <p className={`text-2xl font-semibold leading-none ${tone}`}>{value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#607068]">{label}</p>
          </div>
        ))}
      </div>

      <div className={`${compact ? 'mt-4' : 'mt-5 grid-cols-[1.05fr_0.95fr]'} grid gap-4`}>
        <section className="rounded-lg border border-emerald-950/10 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#607068]">Latest biomarkers</p>
              <h3 className="mt-2 text-2xl font-semibold">Health record memory</h3>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Updated today</span>
          </div>
          <div className="mt-4 grid gap-2">
            {biomarkerRows.slice(0, compact ? 3 : 4).map(([name, value, status]) => (
              <div key={name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-md bg-[#f6fbf8] px-3 py-2 text-sm">
                <span className="font-semibold">{name}</span>
                <span className="text-[#4f6259]">{value}</span>
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${status === 'Review' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {!compact && (
          <section className="grid gap-4">
            <div className="rounded-lg border border-emerald-950/10 bg-[#102018] p-4 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/42">Biological age</p>
              <div className="mt-4 flex items-end justify-between">
                <p className="text-5xl font-semibold leading-none">31.8</p>
                <p className="text-sm text-emerald-200">2.4 years better</p>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/12">
                <div className="h-full w-[72%] rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['Protein', 'Hydration', 'Sleep'].map((label, index) => (
                <div key={label} className="rounded-lg border border-emerald-950/10 bg-white p-3 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-[7px] border-emerald-200 text-sm font-semibold text-emerald-700">
                    {[88, 74, 91][index]}%
                  </div>
                  <p className="mt-2 text-xs font-semibold text-[#607068]">{label}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function VelammalAcademySurface({ compact }: { compact: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[1.35rem] border border-[#f6c400]/25 bg-[#070b16] text-white shadow-inner ${compact ? 'min-h-[250px]' : 'min-h-[470px]'}`}>
      <div className="border-b border-[#f6c400]/20 bg-[#0b1020] px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="rounded-md bg-white px-3 py-2 text-[10px] font-black uppercase leading-none text-[#1d5ea8]">
              Velammal<br />Nexus
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/38">Official Portal</p>
              <p className="truncate text-sm font-semibold">Velammal Chess Academy</p>
            </div>
          </div>
          <div className="hidden gap-2 text-xs font-semibold text-white/58 md:flex">
            {['Hub', 'Tournaments', 'Puzzles', 'Learn', 'Review'].map((item, index) => (
              <span key={item} className={`rounded-full px-3 py-1 ${index === 0 ? 'bg-[#f6c400] text-black' : 'bg-white/5'}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={`${compact ? 'p-4' : 'grid-cols-[0.86fr_1.14fr] p-5'} grid gap-5`}>
        <section className="grid gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6c400]">Velammal Chess Academy</p>
            <h3 className={`${compact ? 'mt-3 text-3xl' : 'mt-4 text-5xl'} font-serif font-semibold leading-none`}>Ready to play?</h3>
            <p className="mt-2 text-sm text-white/58">Pick a time control and jump into academy training.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <div className="flex flex-wrap gap-2">
              {['Bullet', 'Blitz', 'Rapid'].map((label, index) => (
                <span key={label} className={`rounded-full border px-3 py-2 text-xs font-semibold ${index === 1 ? 'border-[#f6c400] bg-[#f6c400]/12 text-[#f6c400]' : 'border-white/12 text-white/64'}`}>
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm font-semibold">
              {['3+0', '3+2', '5+0'].map((label, index) => (
                <span key={label} className={`rounded-md border px-3 py-3 ${index === 1 ? 'border-[#f6c400] bg-[#f6c400]/12' : 'border-white/10 bg-white/[0.03]'}`}>
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-[1.15fr_0.85fr] gap-3">
              <span className="rounded-md bg-[#f6c400] px-4 py-3 text-center text-sm font-semibold text-black">Play 3+2</span>
              <span className="rounded-md border border-white/12 px-4 py-3 text-center text-sm font-semibold text-white/78">Train with AI</span>
            </div>
          </div>

          {!compact && (
            <div className="rounded-lg border border-[#f6c400]/30 bg-[#f6c400]/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/48">Academy dashboard</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ['412', 'Students'],
                  ['28', 'Events'],
                  ['91%', 'Active']
                ].map(([value, label]) => (
                  <div key={label} className="rounded-md border border-white/10 bg-black/20 p-3">
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/44">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="grid gap-4">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-[#f6c400]/35 px-3 py-2 text-xs font-semibold text-[#f6c400]">Blitz 3+2</span>
            <span className="text-xs font-semibold text-emerald-300">Ping 24ms</span>
          </div>
          <ChessBoard />
          {!compact && (
            <div className="grid grid-cols-3 gap-2 text-sm">
              {[
                ['Aarav', '1420', '+38'],
                ['Meera', '1365', '+24'],
                ['Kavin', '1288', '+19']
              ].map(([name, score, move]) => (
                <div key={name} className="rounded-md bg-white/[0.06] p-3">
                  <p className="font-semibold">{name}</p>
                  <p className="mt-1 text-white/48">{score} <span className="text-[#f6c400]">{move}</span></p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function ChessBoard() {
  return (
    <div className="mx-auto grid aspect-square w-full max-w-[420px] grid-cols-8 overflow-hidden rounded-lg border-[6px] border-[#143920] bg-[#15703a] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
      {Array.from({ length: 64 }, (_, square) => {
        const piece = pieceBySquare.get(square);
        const isLight = (Math.floor(square / 8) + square) % 2 === 0;

        return (
          <div key={square} className={`relative ${isLight ? 'bg-[#d8f7df]' : 'bg-[#146b35]'}`}>
            {piece && (
              <Image
                src={`/media/chess-pieces/3d-chesskid/${piece.piece}.png`}
                alt={piece.alt}
                fill
                sizes="60px"
                className="object-contain p-[7%]"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
