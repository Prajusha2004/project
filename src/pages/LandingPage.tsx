import { useState } from 'react';
import { Globe3D } from '@/components/three/Globe3D';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Layers,
  Cpu,
  Satellite,
  ChevronRight,
} from 'lucide-react';
import { FEATURES, STACK } from '@/data/landing';
interface LandingPageProps {
  onEnter: () => void;
}

 interface LandingPageProps {
   onEnter: () => void;
 }

export function LandingPage({ onEnter }: LandingPageProps) {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* Top nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
              <Globe3DLogo />
            </div>
            <span className="text-sm font-bold tracking-wider">GEOSPHERE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
            <a href="#features" className="hover:text-text-primary transition-colors">Features</a>
            <a href="#technology" className="hover:text-text-primary transition-colors">Technology</a>
            <a href="#about" className="hover:text-text-primary transition-colors">About</a>
          </div>
          <Button variant="primary" size="sm" onClick={onEnter}>
            Launch App <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center grid-bg">
        {/* Background grid */}
        <div className="absolute inset-0 grid-bg-fine opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/0 via-bg-primary/0 to-bg-primary" />

        <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left — text */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse-slow" />
              <span className="text-xs font-mono text-accent-cyan">Geographic Intelligence Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-glow-cyan">GEOSPHERE</span>
            </h1>
            <p className="mt-5 text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-lg">
              Understand the world.
              <br />
              Explore its patterns.
              <br />
              Simulate its future.
            </p>
            <p className="mt-6 text-sm text-text-muted max-w-md leading-relaxed">
              GeoSphere combines geographic intelligence, spatial analysis, historical change,
              geographic risk modeling, simulation, and interactive exploration into a single
              unified platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={onEnter}>
                Explore GeoSphere <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore the Technology
              </Button>
            </div>

            {/* Stack pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-1.5 text-xs text-text-muted px-2.5 py-1.5 rounded-lg bg-bg-panel border border-border-subtle">
                  <s.icon className="w-3 h-3 text-accent-cyan/70" />
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — 3D globe */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[560px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Glow behind globe */}
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent-cyan/5 blur-3xl" />
              <Globe3D className="relative w-full h-full" />
            </div>
            {/* Floating data labels */}
            <div className="absolute top-8 right-4 panel px-3 py-2 text-xs font-mono text-text-secondary animate-fade-in">
              <span className="text-accent-cyan">●</span> 8 active markers
            </div>
            <div className="absolute bottom-8 left-4 panel px-3 py-2 text-xs font-mono text-text-secondary animate-fade-in">
              <span className="text-success">●</span> Live · Rotating
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted animate-pulse-slow">
          <span className="text-[10px] font-mono uppercase tracking-wider">Scroll</span>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </section>

      {/* Features */}
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

      {/* Technology */}
      <section id="technology" className="relative py-24 px-6 border-t border-border-subtle">
        <div className="absolute inset-0 grid-bg-fine opacity-30" />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">Architecture</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for real geographic data</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12">
            This prototype uses realistic mock data, structured so every component can later connect
            to a real geographic intelligence pipeline.
          </p>

          {/* Pipeline diagram */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {['React UI', 'REST API', 'Spring Boot', 'PostgreSQL / PostGIS', 'Geographic Datasets'].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="panel px-4 py-3 text-sm">
                  <span className="text-text-primary font-medium">{step}</span>
                </div>
                {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-accent-cyan/50" />}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Layers, title: 'Separation of Concerns', desc: 'Mock data lives in a dedicated layer, ready to be swapped for API calls.' },
              { icon: Cpu, title: 'Component Architecture', desc: 'Reusable components designed for real-time data binding.' },
              { icon: Satellite, title: 'GIS-Ready', desc: 'Structured to accept PostGIS queries and real geographic datasets.' },
            ].map((item) => (
              <div key={item.title} className="panel p-5 text-left">
                <item.icon className="w-5 h-5 text-accent-cyan mb-3" />
                <h3 className="text-sm font-semibold mb-1.5">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="relative py-24 px-6 border-t border-border-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to explore?</h2>
          <p className="text-text-secondary mb-8">
            Enter the GeoSphere workspace and start exploring geographic intelligence.
          </p>
          <Button variant="primary" size="lg" onClick={onEnter}>
            Launch GeoSphere <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
              <Globe3DLogo small />
            </div>
            <span className="text-sm font-bold tracking-wider">GEOSPHERE</span>
          </div>
          <p className="text-xs text-text-muted font-mono">
            UI Prototype · Geographic Intelligence Platform · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

function Globe3DLogo({ small = false }: { small?: boolean }) {
  const size = small ? 16 : 20;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#22d3ee" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
      <circle cx="12" cy="12" r="1.5" fill="#22d3ee" />
    </svg>
  );
}
