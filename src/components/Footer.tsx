import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[#efede4] px-5 py-12 md:px-6">
      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="text-lg font-semibold text-[#1d1d1f]">
            DCANNAI
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#6e6e73]">
            Applied AI research and product studio building systems for chess learning, academy partnerships, preventive health, farming, genetics, and trading from Melbourne.
          </p>
          <p className="mt-6 text-sm text-[#86868b]">© {currentYear} DCANNAI. All rights reserved.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#1d1d1f]">Products</h4>
          <div className="mt-4 grid gap-3 text-sm text-[#6e6e73]">
            <a href="https://chess.dcannai.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f]">
              DCANNAI Chess
            </a>
            <a
              href="https://chess.dcannai.com/s/velammal-chess-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1d1d1f]"
            >
              Velammal Academy
            </a>
            <a href="https://biotrack.dcannai.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f]">
              BioTrack
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#1d1d1f]">Company</h4>
          <div className="mt-4 grid gap-3 text-sm text-[#6e6e73]">
            <Link href="/about" className="hover:text-[#1d1d1f]">
              About
            </Link>
            <Link href="/team" className="hover:text-[#1d1d1f]">
              Team
            </Link>
            <Link href="/contact" className="hover:text-[#1d1d1f]">
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/adhityaram/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1d1d1f]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#1d1d1f]">Contact</h4>
          <div className="mt-4 grid gap-3 text-sm text-[#6e6e73]">
            <a href="mailto:hello@dcannai.com" className="hover:text-[#1d1d1f]">
              hello@dcannai.com
            </a>
            <span>Melbourne, Australia</span>
            <Link href="/#contact" className="hover:text-[#1d1d1f]">
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
