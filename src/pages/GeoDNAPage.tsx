import { RadarChart } from '@/components/ui/RadarChart';
import { MapPlaceholder } from '@/components/ui/MapPlaceholder';
import { ChartCard, DataPanel, SectionHeader } from '@/components/ui/Cards';
import { geoDNAProfiles, defaultGeoDNAKey } from '@/data/geoDNA';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function GeoDNAPage() {
  const [profileKey, setProfileKey] = useState(defaultGeoDNAKey);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profile = geoDNAProfiles[profileKey];

  return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-7xl mx-auto p-5 space-y-4">
        {/* Header */}
        <SectionHeader
          title={`${profile.location.toUpperCase()}, ${profile.country.toUpperCase()}`}
          subtitle={`Geographic DNA Profile · ${profile.coordinates.lat.toFixed(4)}°N, ${profile.coordinates.lng.toFixed(4)}°E`}
          icon="Fingerprint"
          badge="GeoDNA"
        />

        {/* Location selector */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-panel border border-border-subtle hover:border-accent-cyan/30 text-sm transition-colors"
          >
            <span className="text-text-secondary">Location:</span>
            <span className="text-text-primary font-medium">{profile.location}, {profile.country}</span>
            <ChevronDown className="w-3.5 h-3.5 text-text-muted" />
          </button>
          {dropdownOpen && (
            <div className="absolute top-full mt-1 z-20 w-64 panel-elevated py-1 animate-slide-up">
              {Object.entries(geoDNAProfiles).map(([key, p]) => (
                <button
                  key={key}
                  onClick={() => { setProfileKey(key); setDropdownOpen(false); }}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-bg-panel transition-colors ${key === profileKey ? 'text-accent-cyan' : 'text-text-secondary'}`}
                >
                  {p.location}, {p.country}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Radar chart */}
          <ChartCard title="Geographic Fingerprint" subtitle="7-dimensional profile" icon="Radar" className="lg:col-span-1">
            <div className="flex items-center justify-center py-2">
              <RadarChart
                data={profile.features.map((f) => ({ label: f.label, value: f.value }))}
                size={300}
              />
            </div>
          </ChartCard>

          {/* Stats grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="panel p-4">
                <p className="text-[11px] uppercase tracking-wider text-text-muted">{stat.label}</p>
                <p className="text-xl font-semibold text-text-primary mt-1">
                  {stat.value}
                  {stat.unit && <span className="text-sm text-text-secondary ml-1">{stat.unit}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards + small map */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Feature panel */}
          <DataPanel title="Feature Breakdown" className="lg:col-span-2">
            <div className="space-y-3">
              {profile.features.map((f) => (
                <div key={f.label} className="flex items-start gap-4">
                  <div className="w-28 shrink-0">
                    <p className="text-sm font-medium text-text-primary">{f.label}</p>
                    <p className="text-xs font-mono text-accent-cyan">{f.value} {f.unit}</p>
                  </div>
                  <div className="flex-1">
                    <div className="h-1.5 rounded-full bg-bg-secondary overflow-hidden mb-1.5">
                      <div
                        className="h-full rounded-full bg-accent-cyan/60 transition-all duration-700"
                        style={{ width: `${f.value}%` }}
                      />
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </DataPanel>

          {/* Small map */}
          <ChartCard title="Location Map" subtitle="Regional context" icon="Map">
            <MapPlaceholder
              className="h-56"
              showCrosshair={false}
              markers={[{ x: 50, y: 50, label: profile.location, pulse: true }]}
              interactive={false}
            />
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
