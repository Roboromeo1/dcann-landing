import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sustainable Trading AI - DCANNAI | ESG-Compliant Trading Solutions",
  description: "Revolutionary AI trading systems that prioritize ESG investments while maximizing returns. Reduce carbon footprint by 90% compared to traditional trading infrastructure.",
  openGraph: {
    title: "Sustainable Trading AI - DCANNAI",
    description: "ESG-compliant AI trading with 90% less energy consumption",
    url: "https://dcannai.com/trading-ai",
  },
};

export default function TradingAI() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-800">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-800 to-dark-900"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="animate-pulse w-2 h-2 bg-accent-500 rounded-full"></span>
                ESG-Compliant Trading
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                <span className="text-gradient-brand">Sustainable Trading AI</span>
                <br />
                <span className="text-gray-100">That Outperforms The Market</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Our self-hosted AI trading systems use 90% less energy than cloud-based alternatives 
                while focusing on ESG-compliant investments that drive both profit and positive impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Start Trading Sustainably
                </Link>
                <Link href="#features" className="btn-secondary">
                  View Features
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
              {[
                { value: '90%', label: 'Less Energy Usage', icon: '⚡' },
                { value: '24/7', label: 'Automated Trading', icon: '🤖' },
                { value: '100%', label: 'ESG Compliant', icon: '🌱' },
                { value: '0.001s', label: 'Execution Speed', icon: '⚡' },
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

        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-dark-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">
              Advanced Trading Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'ESG Portfolio Optimization',
                  description: 'AI algorithms that automatically filter and prioritize ESG-compliant investments while maintaining competitive returns.',
                  icon: '🌍',
                  features: ['Carbon footprint tracking', 'Social impact scoring', 'Governance analysis']
                },
                {
                  title: 'Real-Time Market Analysis',
                  description: 'Process millions of data points per second using edge computing, eliminating cloud latency and reducing energy consumption.',
                  icon: '📊',
                  features: ['Sentiment analysis', 'Pattern recognition', 'Predictive modeling']
                },
                {
                  title: 'Risk Management AI',
                  description: 'Advanced risk assessment that considers both financial and environmental factors for comprehensive portfolio protection.',
                  icon: '🛡️',
                  features: ['Dynamic hedging', 'Stress testing', 'Climate risk analysis']
                },
                {
                  title: 'Algorithmic Execution',
                  description: 'Smart order routing and execution algorithms that minimize market impact and transaction costs.',
                  icon: '⚡',
                  features: ['VWAP strategies', 'Dark pool access', 'Micro-second execution']
                },
                {
                  title: 'Multi-Asset Support',
                  description: 'Trade across equities, bonds, commodities, and crypto with unified ESG criteria and risk management.',
                  icon: '💼',
                  features: ['Cross-asset correlation', 'Unified reporting', 'Asset rebalancing']
                },
                {
                  title: 'Self-Hosted Infrastructure',
                  description: 'Complete control over your trading infrastructure with on-premise deployment for maximum security and efficiency.',
                  icon: '🏠',
                  features: ['Data sovereignty', 'Custom hardware optimization', 'Zero cloud costs']
                }
              ].map((feature, index) => (
                <article key={index} className="card-dark p-8 group hover:glow-primary transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
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

        {/* Technology Stack */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary-900/20 to-dark-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">
              Cutting-Edge Technology Stack
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary-400 mb-6">Built for Performance & Sustainability</h3>
                <div className="space-y-4">
                  {[
                    { tech: 'Neural Networks', desc: 'Custom lightweight models optimized for edge computing' },
                    { tech: 'Rust Core Engine', desc: 'Ultra-fast execution with minimal memory footprint' },
                    { tech: 'Time-Series Database', desc: 'Efficient storage and retrieval of market data' },
                    { tech: 'WebAssembly Runtime', desc: 'Secure, sandboxed strategy execution' },
                    { tech: 'gRPC Communication', desc: 'Low-latency inter-service communication' },
                    { tech: 'Hardware Acceleration', desc: 'FPGA support for critical path optimization' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-dark-700/30 rounded-lg border border-dark-600">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 animate-pulse"></div>
                      <div>
                        <h4 className="font-semibold text-gray-100">{item.tech}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card-dark p-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  {[
                    { metric: 'Latency', value: '< 1ms', percentage: 95 },
                    { metric: 'Uptime', value: '99.99%', percentage: 99 },
                    { metric: 'Energy Efficiency', value: '90% less', percentage: 90 },
                    { metric: 'ESG Compliance', value: '100%', percentage: 100 },
                    { metric: 'Data Processing', value: '1M/sec', percentage: 85 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{item.metric}</span>
                        <span className="text-accent-500 font-semibold">{item.value}</span>
                      </div>
                      <div className="w-full bg-dark-600 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-dark-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Ready to Trade Sustainably?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Join the future of trading with AI that prioritizes both profit and planet.
              Our self-hosted solution gives you complete control while reducing environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Demo
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
            
            <div className="mt-12 p-6 bg-primary-500/10 rounded-lg border border-primary-500/30">
              <p className="text-primary-400 font-medium">
                🌱 Every trade through our platform contributes to a greener future
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}