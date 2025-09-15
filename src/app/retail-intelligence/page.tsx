import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Green Retail Intelligence - DCANNAI | Sustainable Retail AI",
  description: "Transform retail operations with AI that reduces waste by 60%, optimizes supply chains, and promotes sustainable consumer choices. Zero-waste retail technology.",
  openGraph: {
    title: "Green Retail Intelligence - DCANNAI",
    description: "AI-powered sustainable retail solutions for the future",
    url: "https://dcannai.com/retail-intelligence",
  },
};

export default function RetailIntelligence() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-800">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-800 to-accent-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="animate-pulse w-2 h-2 bg-accent-500 rounded-full"></span>
                Zero-Waste Retail
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                <span className="text-gradient-brand">Green Retail Intelligence</span>
                <br />
                <span className="text-gray-100">Profit Meets Sustainability</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI that helps retailers reduce waste by 60%, optimize inventory with 
                99% accuracy, and guide customers toward sustainable choices while boosting revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Transform Your Store
                </Link>
                <Link href="#capabilities" className="btn-secondary">
                  View Capabilities
                </Link>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
              {[
                { value: '60%', label: 'Waste Reduction', icon: '♻️' },
                { value: '99%', label: 'Inventory Accuracy', icon: '📦' },
                { value: '35%', label: 'Energy Savings', icon: '⚡' },
                { value: '45%', label: 'Revenue Increase', icon: '💰' },
              ].map((stat, index) => (
                <div key={index} className="card-dark card-dark-hover p-6 text-center group">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-accent-500 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 px-6 bg-dark-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">
              Intelligent Retail Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Demand Forecasting',
                  description: 'AI predictions that consider weather, events, trends, and sustainability factors to optimize stock levels.',
                  icon: '📊',
                  features: ['95% accuracy rate', 'Real-time adjustments', 'Seasonal modeling']
                },
                {
                  title: 'Waste Prevention',
                  description: 'Smart algorithms that identify products at risk of expiry and suggest promotional strategies.',
                  icon: '🎯',
                  features: ['Dynamic pricing', 'Donation coordination', 'Expiry tracking']
                },
                {
                  title: 'Supply Chain Optimization',
                  description: 'Carbon-conscious routing and supplier selection to minimize environmental impact.',
                  icon: '🚚',
                  features: ['Carbon tracking', 'Route optimization', 'Supplier scoring']
                },
                {
                  title: 'Customer Analytics',
                  description: 'Understand and influence customer behavior toward sustainable purchasing decisions.',
                  icon: '👥',
                  features: ['Behavior analysis', 'Eco-score tracking', 'Personalization']
                },
                {
                  title: 'Energy Management',
                  description: 'Intelligent control of lighting, HVAC, and refrigeration to minimize energy consumption.',
                  icon: '💡',
                  features: ['Smart scheduling', 'Peak load management', 'IoT integration']
                },
                {
                  title: 'Circular Economy',
                  description: 'Facilitate product returns, recycling, and resale programs with automated tracking.',
                  icon: '🔄',
                  features: ['Return processing', 'Resale marketplace', 'Recycling tracking']
                }
              ].map((capability, index) => (
                <article key={index} className="card-dark p-8 group hover:glow-primary transition-all duration-300">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">{capability.title}</h3>
                  <p className="text-gray-400 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent-500 mt-1">✓</span>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-6 bg-gradient-to-r from-dark-900 to-primary-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">
              Comprehensive Retail Platform
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary-400 mb-6">Real-Time Dashboard</h3>
                <div className="space-y-4">
                  {[
                    { feature: 'Inventory Levels', desc: 'Live tracking across all locations and channels' },
                    { feature: 'Sales Analytics', desc: 'Performance metrics with sustainability scoring' },
                    { feature: 'Waste Metrics', desc: 'Track reduction progress and identify opportunities' },
                    { feature: 'Carbon Footprint', desc: 'Monitor and reduce environmental impact' },
                    { feature: 'Customer Insights', desc: 'Eco-conscious shopping patterns and preferences' },
                    { feature: 'Predictive Alerts', desc: 'Proactive notifications for optimization opportunities' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-dark-700/30 rounded-lg border border-dark-600">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 animate-pulse"></div>
                      <div>
                        <h4 className="font-semibold text-gray-100">{item.feature}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card-dark p-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-6">Integration Ecosystem</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { system: 'POS Systems', icon: '💳' },
                    { system: 'ERP Platforms', icon: '🏢' },
                    { system: 'E-commerce', icon: '🛍️' },
                    { system: 'CRM Tools', icon: '👤' },
                    { system: 'IoT Sensors', icon: '📡' },
                    { system: 'Payment Gateways', icon: '💰' },
                    { system: 'Marketing Automation', icon: '📧' },
                    { system: 'Analytics Tools', icon: '📈' }
                  ].map((item, index) => (
                    <div key={index} className="bg-dark-700/50 p-4 rounded-lg border border-dark-600 hover:border-primary-500/50 transition-colors">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p className="text-gray-300 text-sm">{item.system}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 px-6 bg-dark-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">
              Proven Return on Investment
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: 'Payback Period',
                  value: '6 months',
                  description: 'Average time to ROI'
                },
                {
                  metric: 'Cost Savings',
                  value: '$2.5M',
                  description: 'Annual average per store'
                },
                {
                  metric: 'Waste Diverted',
                  value: '500 tons',
                  description: 'From landfills yearly'
                },
                {
                  metric: 'Customer Satisfaction',
                  value: '+42%',
                  description: 'NPS score improvement'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-accent-500 mb-2">{item.value}</div>
                  <div className="text-xl text-gray-100 mb-2">{item.metric}</div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Case Studies */}
            <div className="mt-20">
              <h3 className="text-2xl font-semibold text-center text-gray-100 mb-12">Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    company: 'GreenMart Chain',
                    type: 'Supermarket',
                    results: '65% waste reduction, 40% energy savings',
                    testimonial: 'DCANNAI helped us become the first zero-waste supermarket chain.'
                  },
                  {
                    company: 'EcoFashion Boutique',
                    type: 'Apparel Retail',
                    results: '50% inventory optimization, 35% sales increase',
                    testimonial: 'Our customers love the sustainability recommendations.'
                  },
                  {
                    company: 'FreshFood Express',
                    type: 'Convenience Store',
                    results: '70% expiry reduction, 45% profit margin improvement',
                    testimonial: 'The demand forecasting is incredibly accurate.'
                  }
                ].map((study, index) => (
                  <div key={index} className="card-dark p-6 hover:glow-accent transition-all duration-300">
                    <div className="text-primary-400 font-semibold mb-2">{study.company}</div>
                    <div className="text-gray-400 text-sm mb-4">{study.type}</div>
                    <div className="bg-accent-500/10 p-4 rounded-lg mb-4">
                      <p className="text-accent-500 font-medium">{study.results}</p>
                    </div>
                    <blockquote className="text-gray-300 italic">&quot;{study.testimonial}&quot;</blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary-500/10 to-accent-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Ready to Build a Sustainable Retail Future?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Join leading retailers worldwide who are proving that sustainability and profitability 
              go hand in hand with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Live Demo
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-dark p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-semibold text-gray-100 mb-2">Quick Setup</h4>
                <p className="text-gray-400 text-sm">Go live in 30 days or less</p>
              </div>
              <div className="card-dark p-6">
                <div className="text-3xl mb-3">🎓</div>
                <h4 className="font-semibold text-gray-100 mb-2">Full Training</h4>
                <p className="text-gray-400 text-sm">Comprehensive staff onboarding</p>
              </div>
              <div className="card-dark p-6">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-semibold text-gray-100 mb-2">Guaranteed Results</h4>
                <p className="text-gray-400 text-sm">Or your money back</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}