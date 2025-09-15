const values = [
  {
    title: "Environmental Stewardship",
    description: "We prioritize the planet in every decision, creating AI that regenerates rather than depletes natural resources.",
    icon: "🌍"
  },
  {
    title: "Technological Innovation", 
    description: "Pushing boundaries in AI research to prove that sustainable technology can outperform traditional methods.",
    icon: "⚡"
  },
  {
    title: "Open Collaboration",
    description: "Sharing knowledge and fostering partnerships to accelerate the adoption of eco-friendly AI across industries.",
    icon: "🤝"
  },
  {
    title: "Ethical AI Development",
    description: "Building transparent, fair, and responsible AI systems that serve humanity's best interests.",
    icon: "⚖️"
  }
];

export default function Values() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-2xl shadow-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/25">
              <div className="text-4xl mb-6">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="leading-relaxed opacity-90">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}