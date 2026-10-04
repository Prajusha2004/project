import { lazy, Suspense } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { STACK } from '@/data/landing';


const Globe3D = lazy(() => import('@/components/three/Globe3D').then((m) => ({ default: m.Globe3D })));
interface LandingHeroProps {
  onEnter: () => void;
}

export function LandingHero({ onEnter }: LandingHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center grid-bg">
      <div className="absolute inset-0 grid-bg-fine opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/0 via-bg-primary/0 to-bg-primary" />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center pt-20">
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

          <div className="mt-10 flex flex-wrap gap-2">
            {STACK.map((s) => (
              <span key={s.label} className="inline-flex items-center gap-1.5 text-xs text-text-muted px-2.5 py-1.5 rounded-lg bg-bg-panel border border-border-subtle">
                <s.icon className="w-3 h-3 text-accent-cyan/70" />
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] md:h-[500px] lg:h-[560px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent-cyan/5 blur-3xl" />
           <Suspense fallback={<div className="relative w-full h-full" />}>
              <Globe3D className="relative w-full h-full" />
            </Suspense>
          </div>
          <div className="absolute top-8 right-4 panel px-3 py-2 text-xs font-mono text-text-secondary animate-fade-in">
            <span className="text-accent-cyan">●</span> 8 active markers
          </div>
          <div className="absolute bottom-8 left-4 panel px-3 py-2 text-xs font-mono text-text-secondary animate-fade-in">
            <span className="text-success">●</span> Live · Rotating
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted animate-pulse-slow">
        <span className="text-[10px] font-mono uppercase tracking-wider">Scroll</span>
        <ChevronRight className="w-4 h-4 rotate-90" />
      </div>
    </section>
  );
}