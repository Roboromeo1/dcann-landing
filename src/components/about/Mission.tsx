export default function Mission() {
  return (
    <section className="py-20 px-6 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              At DCANNAI, we&apos;re at the <strong className="text-blue-400">forefront of AI research</strong>, 
              developing cutting-edge solutions that don&apos;t compromise our planet&apos;s future. Our self-hosted AI 
              systems are designed to be environmentally responsible while delivering exceptional performance.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌱</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Eco-First Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We build AI solutions that actively reduce carbon footprints rather than increasing them. 
                    Our algorithms are optimized for efficiency, not GPU intensity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🏠</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Self-Hosted Architecture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Complete control over your data and infrastructure. No cloud dependencies, 
                    no external data centers, no hidden environmental costs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Purpose-Driven Innovation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every solution we create serves a greater good - whether it&apos;s optimizing sustainable 
                    trading, improving crop yields, or reducing retail waste.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-dark p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-100">Traditional AI vs. DCANNAI</h3>
            <div className="space-y-6">
              {[
                { label: 'Energy Usage', traditional: 100, ours: 10 },
                { label: 'Carbon Footprint', traditional: 100, ours: 15 },
                { label: 'GPU Dependency', traditional: 100, ours: 5 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium text-gray-300 mb-2">
                    <span>{item.label}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-400 w-20">Traditional</span>
                      <div className="flex-1 bg-red-900/20 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: `${item.traditional}%`}}></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-400 w-20">DCANNAI</span>
                      <div className="flex-1 bg-blue-900/20 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: `${item.ours}%`}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6 text-sm">
              <span className="flex items-center text-gray-300"><span className="w-3 h-3 bg-red-500 rounded mr-2"></span>Traditional AI</span>
              <span className="flex items-center text-gray-300"><span className="w-3 h-3 bg-blue-500 rounded mr-2"></span>DCANNAI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}