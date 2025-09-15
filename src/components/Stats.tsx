'use client';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 85, suffix: '%', label: 'Carbon Footprint Reduction', key: 'reduction' },
  { value: 200, suffix: '+', label: 'Successful Implementations', key: 'implementations' },
  { value: 50, prefix: '$', suffix: 'M', label: 'Environmental Savings Generated', key: 'savings' },
  { value: 24, suffix: '/7', label: 'AI-Powered Monitoring', key: 'monitoring' }
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({
    reduction: 0,
    implementations: 0,
    savings: 0,
    monitoring: 0
  });
  
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateStats = () => {
    stats.forEach(stat => {
      let current = 0;
      const increment = stat.value / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }));
      }, 20);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-2xl shadow-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2">
                {stat.prefix || ''}
                {animatedStats[stat.key]}
                {stat.suffix || ''}
              </h3>
              <p className="text-lg md:text-xl opacity-90 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}