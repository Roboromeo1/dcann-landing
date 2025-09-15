import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Smart Farming Solutions - DCANNAI | Precision Agriculture AI",
  description: "AI-powered precision agriculture that maximizes crop yields while minimizing water usage, pesticides, and environmental impact. Sustainable farming for the future.",
  openGraph: {
    title: "Smart Farming Solutions - DCANNAI",
    description: "Precision agriculture AI for sustainable farming",
    url: "https://dcannai.com/smart-farming",
  },
};

export default function SmartFarming() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-800">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-dark-800 to-dark-900"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="animate-pulse w-2 h-2 bg-accent-500 rounded-full"></span>
                Precision Agriculture
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                <span className="text-gradient-brand">Smart Farming AI</span>
                <br />
                <span className="text-gray-100">Growing More With Less</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI that helps farmers increase yields by 40% while reducing water consumption 
                by 30% and eliminating unnecessary pesticide use through precision monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Transform Your Farm
                </Link>
                <Link href="#solutions" className="btn-secondary">
                  Explore Solutions
                </Link>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
              {[
                { value: '40%', label: 'Yield Increase', icon: '🌾' },
                { value: '30%', label: 'Water Saved', icon: '💧' },
                { value: '50%', label: 'Less Pesticides', icon: '🌱' },
                { value: '24/7', label: 'Monitoring', icon: '📡' },
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

        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-6 bg-dark-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">
              Comprehensive Farming Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Crop Health Monitoring',
                  description: 'Real-time disease detection and pest identification using computer vision to prevent crop loss before it happens.',
                  icon: '🔬',
                  features: ['Disease detection', 'Pest identification', 'Nutrient analysis']
                },
                {
                  title: 'Precision Irrigation',
                  description: 'AI-optimized watering schedules based on soil moisture, weather forecasts, and crop growth stages.',
                  icon: '💧',
                  features: ['Soil moisture tracking', 'Weather integration', 'Zone-based control']
                },
                {
                  title: 'Yield Prediction',
                  description: 'Accurate harvest forecasting using historical data, current conditions, and satellite imagery analysis.',
                  icon: '📈',
                  features: ['Satellite analysis', 'Growth modeling', 'Market timing']
                },
                {
                  title: 'Soil Analysis AI',
                  description: 'Deep learning models that analyze soil composition and recommend optimal fertilization strategies.',
                  icon: '🌍',
                  features: ['pH optimization', 'Nutrient mapping', 'Fertilizer planning']
                },
                {
                  title: 'Drone Integration',
                  description: 'Autonomous drone coordination for field surveying, spraying, and real-time data collection.',
                  icon: '🚁',
                  features: ['Aerial surveys', 'Precision spraying', 'Heat mapping']
                },
                {
                  title: 'Climate Adaptation',
                  description: 'Predictive models that help farmers adapt to changing climate patterns and extreme weather events.',
                  icon: '🌡️',
                  features: ['Weather prediction', 'Risk assessment', 'Crop selection']
                }
              ].map((solution, index) => (
                <article key={index} className="card-dark p-8 group hover:glow-accent transition-all duration-300">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((item, idx) => (
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

        {/* Technology Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-dark-900 to-primary-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">
              Advanced Agricultural Technology
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="card-dark p-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-6">IoT Sensor Network</h3>
                <div className="space-y-4">
                  {[
                    { sensor: 'Soil Moisture', coverage: '95%' },
                    { sensor: 'Temperature', coverage: '100%' },
                    { sensor: 'Humidity', coverage: '100%' },
                    { sensor: 'Light Intensity', coverage: '90%' },
                    { sensor: 'pH Levels', coverage: '85%' }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{item.sensor}</span>
                        <span className="text-accent-500 font-semibold">{item.coverage}</span>
                      </div>
                      <div className="w-full bg-dark-600 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-accent-500 to-primary-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: item.coverage }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-primary-400 mb-6">Edge Computing Architecture</h3>
                <div className="space-y-4">
                  {[
                    { tech: 'On-Farm Processing', desc: 'Process data locally without internet dependency' },
                    { tech: 'Real-Time Analytics', desc: 'Instant insights from sensor data and imagery' },
                    { tech: 'Offline Capability', desc: 'Full functionality even in remote locations' },
                    { tech: 'Low Power Design', desc: 'Solar-powered nodes with month-long battery life' },
                    { tech: 'Mesh Networking', desc: 'Self-healing network for reliable connectivity' },
                    { tech: 'Data Sovereignty', desc: 'Your farm data stays on your farm' }
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
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 px-6 bg-dark-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">
              Success Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  farm: 'Green Valley Farms',
                  location: 'California, USA',
                  crop: 'Almonds',
                  results: '35% water reduction, 42% yield increase',
                  quote: 'DCANNAI transformed how we manage our orchards.'
                },
                {
                  farm: 'Sunrise Agriculture',
                  location: 'Punjab, India',
                  crop: 'Wheat & Rice',
                  results: '50% pesticide reduction, 38% cost savings',
                  quote: 'Precision farming at its best with minimal investment.'
                },
                {
                  farm: 'EcoHarvest Co-op',
                  location: 'Netherlands',
                  crop: 'Greenhouse Vegetables',
                  results: '45% energy savings, 60% yield improvement',
                  quote: 'The AI predictions are incredibly accurate.'
                }
              ].map((study, index) => (
                <div key={index} className="card-dark p-6 hover:glow-accent transition-all duration-300">
                  <div className="text-accent-500 font-semibold mb-2">{study.farm}</div>
                  <div className="text-gray-400 text-sm mb-4">{study.location} • {study.crop}</div>
                  <div className="bg-primary-500/10 p-4 rounded-lg mb-4">
                    <p className="text-primary-400 font-medium">{study.results}</p>
                  </div>
                  <blockquote className="text-gray-300 italic">&quot;{study.quote}&quot;</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-accent-500/10 to-primary-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Ready to Revolutionize Your Farm?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Join thousands of farmers worldwide who are increasing yields, reducing costs, 
              and farming more sustainably with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started Today
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Farm Demo
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-dark-700/50 rounded-lg border border-accent-500/30">
                <div className="text-2xl mb-2">🌱</div>
                <p className="text-gray-300 text-sm">30-day free trial</p>
              </div>
              <div className="p-4 bg-dark-700/50 rounded-lg border border-accent-500/30">
                <div className="text-2xl mb-2">📱</div>
                <p className="text-gray-300 text-sm">Mobile app included</p>
              </div>
              <div className="p-4 bg-dark-700/50 rounded-lg border border-accent-500/30">
                <div className="text-2xl mb-2">🤝</div>
                <p className="text-gray-300 text-sm">24/7 support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}