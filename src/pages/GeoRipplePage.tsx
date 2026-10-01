import { useState } from 'react';
import { getIcon } from '@/lib/icons';
import { SectionHeader, ChartCard, DataPanel } from '@/components/ui/Cards';
import { MapPlaceholder } from '@/components/ui/MapPlaceholder';
import { Button } from '@/components/ui/Button';
import { rippleImpacts, rippleStages, rippleEventTypes } from '@/data/geoRipple';
import * as Icons from 'lucide-react';
import { ArrowDown } from 'lucide-react';

export function GeoRipplePage() {
  const [selectedEvent, setSelectedEvent] = useState('flood');
  const [radius, setRadius] = useState(5);

  const event = rippleEventTypes.find((e) => e.id === selectedEvent)!;
  const EventIcon = getIcon(event.icon);
       return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-7xl mx-auto p-5 space-y-4">
        <SectionHeader
          title="Impact Simulation"
          subtitle="Geographic ripple effect modeling"
          icon="Radio"
          badge="GeoRipple"
        />

        {/* Event selector */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-text-muted font-mono uppercase tracking-wider mr-2">Event:</span>
          {rippleEventTypes.map((e) => {
           const Icon = getIcon(e.icon);
            const active = e.id === selectedEvent;
            return (
              <button
                key={e.id}
                onClick={() => setSelectedEvent(e.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm border transition-all ${
                  active
                    ? 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan'
                    : 'bg-bg-panel border-border-subtle text-text-secondary hover:text-text-primary hover:border-border'
                }`}
              >
                <Icon className="w-4 h-4" />
                {e.label}
              </button>
            );
          })}
        </div>

        {/* Radius slider */}
        <div className="panel p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <EventIcon className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm font-medium text-text-primary">Impact Radius</span>
            </div>
            <span className="text-sm font-mono text-accent-cyan">{radius} km</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-text-muted">2 km</span>
            <input
              type="range"
              min={2}
              max={10}
              step={0.5}
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="flex-1 accent-accent-cyan"
            />
            <span className="text-xs font-mono text-text-muted">10 km</span>
          </div>
        </div>

        {/* Impact metrics + map */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Impact metrics */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {rippleImpacts.map((impact) => {
  const Icon = getIcon(impact.icon);
  return (
    <div key={impact.label} className="panel p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-accent-cyan" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-wider text-text-muted">{impact.label}</p>
        <p className="text-lg font-semibold text-text-primary">{impact.value}</p>
      </div>
    </div>
  );
})}
          </div>

          {/* Map */}
          <ChartCard title="Impact Zone" subtitle="Visual radius" icon="Map">
            <MapPlaceholder
              className="h-56"
              showCrosshair={false}
              highlightRadius={{ x: 50, y: 50, r: radius * 2.5, color: 'rgba(239,68,68,0.08)' }}
              markers={[
                { x: 50, y: 50, label: 'Epicenter', color: '#ef4444', pulse: true },
                { x: 35, y: 40, color: '#f59e0b' },
                { x: 65, y: 60, color: '#f59e0b' },
                { x: 40, y: 65, color: '#f59e0b' },
              ]}
              interactive={false}
            />
          </ChartCard>
        </div>

        {/* Ripple chain */}
        <DataPanel title="Ripple Effect Chain" className="lg:col-span-3">
          <div className="flex flex-col items-center">
            {rippleStages.map((stage, i) => (
              <div key={stage.name} className="flex flex-col items-center">
                <div className={`panel px-5 py-3 w-72 text-center ${i === 0 ? 'border-danger/30' : i === rippleStages.length - 1 ? 'border-accent-cyan/30' : ''}`}>
                  <p className={`text-sm font-semibold ${i === 0 ? 'text-danger' : 'text-text-primary'}`}>{stage.name}</p>
                  <p className="text-xs text-text-secondary mt-1">{stage.description}</p>
                </div>
                {i < rippleStages.length - 1 && (
                  <div className="flex flex-col items-center py-1">
                    <ArrowDown className="w-4 h-4 text-accent-cyan/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </DataPanel>

        <div className="flex justify-end">
          <Button variant="primary">
            <Icons.Play className="w-4 h-4" />
            Run Simulation
                   </Button>
        </div>
      </div>
    </div>
  );
}