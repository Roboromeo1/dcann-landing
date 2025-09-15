import Link from 'next/link';
import AIVisualization from './AIVisualization';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              <span className="text-gradient-brand">
                Sustainable AI
              </span>{' '}
              <span className="text-gray-100">
                solutions that put{' '}
              </span>
              <span className="text-gradient-brand underline decoration-accent">
                planet
              </span>{' '}
              <span className="text-gray-100">
                at the forefront
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Revolutionizing trading, farming, and retail with eco-friendly artificial intelligence 
              that drives both profit and environmental responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 text-center hover:glow-accent"
              >
                Explore Solutions
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-primary-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 text-center hover:glow-accent"
              >
                See Demo
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <AIVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}