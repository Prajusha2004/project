import { LandingNav } from '@/components/layout/LandingNav';
import { LandingFeatures } from '@/components/layout/LandingFeatures';
import { LandingHero } from '@/components/layout/LandingHero';
import { LandingTechnology } from '@/components/layout/LandingTechnology';
import { LandingFooter } from '@/components/layout/LandingFooter';
interface LandingPageProps {
  onEnter: () => void;
}

export function LandingPage({ onEnter }: LandingPageProps) {
   return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
        <LandingNav onEnter={onEnter} />
        <LandingHero onEnter={onEnter} />
    <LandingFeatures />

    <LandingTechnology />

    <LandingFooter onEnter={onEnter} />  
    </div>
  );
}
