export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Get in Touch</h2>
        <p className="text-gray-300 leading-relaxed">
          We&apos;re here to answer your questions about sustainable AI solutions and how they can 
          transform your business operations.
        </p>
      </div>
      
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="text-3xl">📧</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Email Us</h3>
            <a 
              href="mailto:hello@dcannai.com" 
              className="text-blue-400 hover:text-accent font-medium transition-colors"
            >
              hello@dcannai.com
            </a>
            <p className="text-gray-300 text-sm mt-1">We typically respond within 24 hours</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="text-3xl">🌏</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Based in Melbourne</h3>
            <p className="text-gray-300">Victoria, Australia</p>
            <p className="text-gray-300 text-sm">Serving clients globally</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="text-3xl">💼</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/adhityaram/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-accent font-medium transition-colors"
            >
              Connect with our founder
            </a>
            <p className="text-gray-300 text-sm mt-1">Professional network & updates</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-500/20 p-6 rounded-2xl border border-blue-400/30">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">What to Expect</h3>
        <ul className="space-y-3">
          {[
            'Initial response within 24 hours',
            'Detailed project assessment',
            'Custom solution proposal',
            'Transparent pricing & timeline',
            'Environmental impact analysis'
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="text-accent">✅</span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="card-dark p-6 rounded-2xl border border-gray-700 text-center">
        <h3 className="text-xl font-semibold text-gray-100 mb-3">Ready to Get Started?</h3>
        <p className="text-gray-300 leading-relaxed">
          Join the growing community of businesses using sustainable AI to drive positive change 
          while achieving their goals.
        </p>
      </div>
    </div>
  );
}