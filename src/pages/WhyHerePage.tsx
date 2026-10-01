import { SectionHeader, ChartCard } from '@/components/ui/Cards';
import { MapPlaceholder } from '@/components/ui/MapPlaceholder';
import { reasoningNodes, reasoningConnections } from '@/data/whyHere';
import * as Icons from 'lucide-react';
import { getIcon } from '@/lib/icons';
import { ArrowDown } from 'lucide-react';

export function WhyHerePage() {
  return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-7xl mx-auto p-5 space-y-4">
        <SectionHeader
          title="Why Here?"
          subtitle="Geographic reasoning chain — Dhanbad, India"
          icon="Network"
          badge="Causal Analysis"
        />

        {/* Reasoning chain — vertical flow */}
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 panel p-6">
            <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-6">Causal Chain</p>
            <div className="flex flex-col items-center">
              {reasoningNodes.map((node, i) => {
                const Icon = getIcon(node.icon);
                return (
                  <div key={node.id} className="flex flex-col items-center">
                    <div className="panel-elevated px-6 py-4 w-full max-w-md flex items-center gap-4 hover:border-accent-cyan/30 transition-colors animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-accent-cyan" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{node.label}</p>
                        <p className="text-xs text-text-secondary mt-0.5">{node.description}</p>
                      </div>
                      <span className="ml-auto text-xs font-mono text-text-muted">{i + 1}</span>
                    </div>
                    {i < reasoningNodes.length - 1 && (
                      <div className="flex flex-col items-center py-1">
                        <ArrowDown className="w-5 h-5 text-accent-cyan/40" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side info */}
          <div className="space-y-4">
            <ChartCard title="Location Context" subtitle="Dhanbad, India" icon="Map">
              <MapPlaceholder
                className="h-48"
                showCrosshair={false}
                markers={[{ x: 50, y: 50, label: 'Dhanbad', pulse: true }]}
                interactive={false}
              />
            </ChartCard>

            <div className="panel p-4">
              <h3 className="text-sm font-semibold mb-3">Key Factors</h3>
              <div className="space-y-2.5">
                {[
                  { label: 'Water Proximity', value: 'Damodar River', icon: 'Droplets' },
                  { label: 'Natural Resource', value: 'Coal Deposits', icon: 'Mountain' },
                  { label: 'Transport Access', value: 'Rail Network', icon: 'Train' },
                  { label: 'Historical', value: 'Founded 1920s', icon: 'Clock' },
                ].map((f) => {
                  const Icon = getIcon(f.icon);
                  return (
                    <div key={f.label} className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-accent-cyan/70 shrink-0" />
                      <div>
                        <p className="text-xs text-text-muted">{f.label}</p>
                        <p className="text-sm text-text-primary">{f.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="panel p-4">
              <h3 className="text-sm font-semibold mb-2">Summary</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Dhanbad exists where it does because water attracted settlement, coal deposits
                enabled industry, and rail transport connected it to the wider economy — driving
                rapid urbanization that continues today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
