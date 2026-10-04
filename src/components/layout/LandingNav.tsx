import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { GlobeIcon } from '@/components/ui/GlobeIcon';

interface LandingNavProps {
  onEnter: () => void;
}

export function LandingNav({ onEnter }: LandingNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
            <GlobeIcon />
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
  );
}
