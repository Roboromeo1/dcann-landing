'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-800/98 backdrop-blur-md shadow-lg shadow-blue-500/10' 
        : 'bg-dark-800/95 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gradient-brand">
            DCANNAI
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                href="/#services" 
                className={`font-medium transition-colors hover:text-blue-400 ${
                  pathname === '/' ? 'text-blue-400' : 'text-gray-200'
                }`}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className={`font-medium transition-colors hover:text-blue-400 ${
                  pathname === '/about' ? 'text-blue-400' : 'text-gray-200'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className={`font-medium transition-colors hover:text-blue-400 ${
                  pathname === '/contact' ? 'text-blue-400' : 'text-gray-200'
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link href="#resources" className="font-medium text-gray-200 transition-colors hover:text-blue-400">
                Resources
              </Link>
            </li>
          </ul>
          
          <Link 
            href="/contact" 
            className="hidden md:inline-flex bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:glow-accent"
          >
            Get Started
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-6 h-0.5 bg-gray-200 transform transition duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-200 transform transition duration-300 ${mobileMenuOpen ? 'opacity-0' : 'my-1'}`}></span>
              <span className={`w-6 h-0.5 bg-gray-200 transform transition duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-dark-800/95 backdrop-blur-sm">
            <div className="py-4 space-y-2">
              <Link href="/#services" className="block py-2 text-gray-200 hover:text-blue-400">Solutions</Link>
              <Link href="/about" className="block py-2 text-gray-200 hover:text-blue-400">About</Link>
              <Link href="/contact" className="block py-2 text-gray-200 hover:text-blue-400">Contact</Link>
              <Link href="#resources" className="block py-2 text-gray-200 hover:text-blue-400">Resources</Link>
              <Link href="/contact" className="block mt-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg font-semibold text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}