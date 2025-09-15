import Link from 'next/link';

export default function Team() {
  return (
    <section className="py-20 px-6 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">
          Leading the AI Revolution
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team combines decades of experience in artificial intelligence, environmental science, 
              and sustainable technology. We&apos;re researchers, engineers, and visionaries united by a 
              common goal: proving that the most advanced AI can also be the most environmentally responsible.
            </p>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">Our Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '🧠 Advanced Machine Learning & Neural Networks',
                  '🔬 Green Computing & Energy-Efficient Algorithms',
                  '📊 Quantitative Finance & Algorithmic Trading',
                  '🌾 Precision Agriculture & IoT Integration',
                  '🛒 Supply Chain Optimization & Demand Forecasting',
                  '♻️ Circular Economy & Sustainability Metrics'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-dark-700/60 rounded-lg border border-gray-700">
                    <span className="text-lg">{item.split(' ')[0]}</span>
                    <span className="text-gray-300">{item.substring(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { number: '15+', label: 'Years Combined AI Experience' },
              { number: '50+', label: 'Research Papers Published' },
              { number: '3', label: 'Industries Transformed' }
            ].map((stat, index) => (
              <div key={index} className="card-dark p-6 rounded-2xl text-center border border-gray-700 hover:border-blue-400 transition-all duration-300 card-dark-hover">
                <div className="text-3xl font-extrabold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card-dark p-12 rounded-2xl text-center border border-gray-700">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
            Ready to Join the Sustainable AI Movement?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our eco-friendly AI solutions can transform your business while protecting our planet.
          </p>
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 inline-block hover:glow-accent"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}