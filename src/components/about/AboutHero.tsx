export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
          <span className="text-gray-100">
            Building AI for a{' '}
          </span>
          <span className="text-gradient-brand">
            Sustainable Future
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          We believe technology should heal our planet, not harm it. That&apos;s why we&apos;re pioneering 
          self-hosted, eco-friendly AI solutions that deliver powerful results without the environmental cost.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="card-dark p-8 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 card-dark-hover">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-2">90%</div>
            <div className="text-gray-300 font-medium">Less Energy Consumption</div>
          </div>
          <div className="card-dark p-8 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 card-dark-hover">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-2">Zero</div>
            <div className="text-gray-300 font-medium">Cloud Dependency</div>
          </div>
          <div className="card-dark p-8 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 card-dark-hover">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-2">100%</div>
            <div className="text-gray-300 font-medium">Self-Hosted</div>
          </div>
        </div>
      </div>
    </section>
  );
}