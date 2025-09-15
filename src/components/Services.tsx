import Link from 'next/link';

const services = [
  {
    icon: '📈',
    title: 'Sustainable Trading AI',
    description: 'Advanced algorithms that optimize trading strategies while prioritizing ESG-compliant investments and carbon-neutral market operations.',
    link: '/trading-ai',
    features: ['ESG Compliance', 'Low Energy Usage', 'Real-time Analytics']
  },
  {
    icon: '🌱',
    title: 'Smart Farming Solutions',
    description: 'AI-powered precision agriculture that maximizes crop yields while minimizing water usage, pesticides, and environmental impact.',
    link: '/smart-farming',
    features: ['Precision Agriculture', 'Water Optimization', 'Crop Monitoring']
  },
  {
    icon: '🛒',
    title: 'Green Retail Intelligence',
    description: 'Transform your retail operations with AI that reduces waste, optimizes supply chains, and promotes sustainable consumer choices.',
    link: '/retail-intelligence',
    features: ['Waste Reduction', 'Supply Chain Optimization', 'Demand Forecasting']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-dark-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Our Eco-Friendly AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence that doesn&apos;t compromise our planet&apos;s future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="card-dark p-8 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-2 group card-dark-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:glow-accent">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <Link 
                href={service.link}
                className="inline-flex items-center text-blue-400 font-semibold hover:text-accent transition-colors group-hover:gap-3 gap-2"
              >
                Learn more 
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
