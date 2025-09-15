import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-6">Solutions</h4>
            <div className="space-y-3">
              <Link href="/trading-ai" className="block text-gray-300 hover:text-blue-400 transition-colors">Trading AI</Link>
              <Link href="/smart-farming" className="block text-gray-300 hover:text-blue-400 transition-colors">Smart Farming</Link>
              <Link href="/retail-intelligence" className="block text-gray-300 hover:text-blue-400 transition-colors">Retail Intelligence</Link>
              <Link href="/custom-solutions" className="block text-gray-300 hover:text-blue-400 transition-colors">Custom Solutions</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-6">Company</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">About Us</Link>
              <Link href="/careers" className="block text-gray-300 hover:text-blue-400 transition-colors">Careers</Link>
              <Link href="/sustainability" className="block text-gray-300 hover:text-blue-400 transition-colors">Sustainability</Link>
              <Link href="/news" className="block text-gray-300 hover:text-blue-400 transition-colors">News</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-6">Resources</h4>
            <div className="space-y-3">
              <Link href="/docs" className="block text-gray-300 hover:text-blue-400 transition-colors">Documentation</Link>
              <Link href="/api" className="block text-gray-300 hover:text-blue-400 transition-colors">API</Link>
              <Link href="/case-studies" className="block text-gray-300 hover:text-blue-400 transition-colors">Case Studies</Link>
              <Link href="/support" className="block text-gray-300 hover:text-blue-400 transition-colors">Support</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-6">Connect</h4>
            <div className="space-y-3">
              <Link href="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">Contact</Link>
              <a 
                href="https://www.linkedin.com/company/dcann-ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <Link href="/twitter" className="block text-gray-300 hover:text-blue-400 transition-colors">Twitter</Link>
              <Link href="/newsletter" className="block text-gray-300 hover:text-blue-400 transition-colors">Newsletter</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="mb-2">
            &copy; {currentYear} DCANNAI.com. Building a sustainable future with AI.
          </p>
          <p className="text-accent font-medium italic">
            Made with ❤️ from Melbourne
          </p>
        </div>
      </div>
    </footer>
  );
}