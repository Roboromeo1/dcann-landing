export default function AIVisualization() {
  return (
    <div className="relative w-80 h-80">
      {/* Outer nodes */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="absolute w-5 h-5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-pulse-node animate-glow"
          style={{
            top: `${[50, 30, 120, 220, 240, 150, 80][i]}px`,
            left: `${[50, 280, 320, 240, 80, 30, 130][i]}px`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
      
      {/* Central node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full animate-central-pulse shadow-lg shadow-blue-500/50" />
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 320 320">
        {[...Array(7)].map((_, i) => (
          <line
            key={i}
            x1="160"
            y1="160"
            x2={[50, 280, 320, 240, 80, 30, 130][i] + 10}
            y2={[50, 30, 120, 220, 240, 150, 80][i] + 10}
            stroke="url(#gradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066cc" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#004499" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
