'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Research', href: '/#research' },
  { label: 'Products', href: '/#products' },
  { label: 'BioTrack', href: 'https://biotrack.dcannai.com', external: true },
  { label: 'Chess', href: 'https://chess.dcannai.com', external: true },
  { label: 'Velammal', href: 'https://chess.dcannai.com/s/velammal-chess-academy', external: true },
  { label: 'About', href: '/about' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition ${
        scrolled ? 'border-black/10 bg-[#efede4]/[0.92] shadow-sm backdrop-blur-xl' : 'border-transparent bg-[#efede4]/[0.78] backdrop-blur-xl'
      }`}
    >
      <nav className="mx-auto flex min-h-[72px] max-w-[1500px] items-center justify-between px-5 md:px-6">
        <Link href="/" className="text-[19px] font-semibold tracking-normal text-[#111111]">
          DCANNAI
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#272727] transition hover:text-black"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#272727] transition hover:text-black"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="inline-flex min-h-10 items-center rounded-full bg-[#111111] px-5 text-sm font-semibold text-white transition hover:bg-black"
          >
            Book a demo
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-[#111111] transition ${
                mobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-4 bg-[#111111] transition ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-4 bg-[#111111] transition ${
                mobileMenuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-black/10 bg-[#efede4] px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-[1500px] gap-2">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-2 py-3 text-base font-semibold text-[#111111]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-2 py-3 text-base font-semibold text-[#111111]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/#contact"
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-[#111111] px-5 text-sm font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
