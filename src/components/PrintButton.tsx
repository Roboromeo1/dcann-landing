'use client';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-11 items-center rounded-full bg-[#111111] px-5 text-sm font-semibold text-white transition hover:bg-black"
    >
      Print or save PDF
    </button>
  );
}
