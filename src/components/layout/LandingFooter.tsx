import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { GlobeIcon } from '@/components/ui/GlobeIcon';
interface LandingFooterProps {
  onEnter: () => void;
}

export function LandingFooter({ onEnter }: LandingFooterProps) {
  return (
    <>
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

      <footer className="border-t border-border-subtle py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
               <GlobeIcon size={16} />
            </div>
            <span className="text-sm font-bold tracking-wider">GEOSPHERE</span>
          </div>
          <p className="text-xs text-text-muted font-mono">
            UI Prototype · Geographic Intelligence Platform · 2026
          </p>
        </div>
      </footer>
    </>
  );
}
