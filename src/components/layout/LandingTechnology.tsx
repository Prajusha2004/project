import { ArrowRight } from 'lucide-react';
import { ARCHITECTURE_POINTS, PIPELINE_STEPS } from '@/data/landing';

export function LandingTechnology() {
  return (
    <section id="technology" className="relative py-24 px-6 border-t border-border-subtle">
      <div className="absolute inset-0 grid-bg-fine opacity-30" />
      <div className="relative max-w-5xl mx-auto text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">Architecture</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for real geographic data</h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-12">
          This prototype uses realistic mock data, structured so every component can later connect
          to a real geographic intelligence pipeline.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {PIPELINE_STEPS.map((step, i, arr) => (
            <div key={step} className="flex items-center gap-3">
              <div className="panel px-4 py-3 text-sm">
                <span className="text-text-primary font-medium">{step}</span>
              </div>
              {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-accent-cyan/50" />}
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {ARCHITECTURE_POINTS.map((item) => (
            <div key={item.title} className="panel p-5 text-left">
              <item.icon className="w-5 h-5 text-accent-cyan mb-3" />
              <h3 className="text-sm font-semibold mb-1.5">{item.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}