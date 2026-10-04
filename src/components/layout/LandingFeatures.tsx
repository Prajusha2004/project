import { useState } from 'react';
import { FEATURES } from '@/data/landing';

export function LandingFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">Modules</p>
          <h2 className="text-3xl md:text-4xl font-bold">Eight ways to explore the world</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Each module is a specialized lens for understanding a different dimension of geographic reality.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`panel p-5 cursor-default transition-all duration-300 ${
                hoveredFeature === i ? 'border-accent-cyan/40 -translate-y-1' : ''
              }`}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="w-11 h-11 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-accent-cyan" />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{f.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}