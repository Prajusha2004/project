import { useState } from 'react';
import { SectionHeader, ChartCard, DataPanel } from '@/components/ui/Cards';
import { MapPlaceholder } from '@/components/ui/MapPlaceholder';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { scenarioParameters, scenarioResultsA, scenarioResultsB } from '@/data/whatIf';
import { ArrowRight } from 'lucide-react';

export function WhatIfPage() {
  const [params, setParams] = useState(
    scenarioParameters.reduce((acc, p) => ({ ...acc, [p.id]: { a: p.valueA, b: p.valueB } }), {} as Record<string, { a: number; b: number }>)
  );

  const updateParam = (id: string, side: 'a' | 'b', value: number) => {
    setParams((prev) => ({ ...prev, [id]: { ...prev[id], [side]: value } }));
  };

  return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-7xl mx-auto p-5 space-y-4">
        <SectionHeader
          title="Scenario Simulator"
          subtitle="Compare two geographic scenarios side-by-side"
          icon="GitCompareArrows"
          badge="What-If"
        />

        {/* Scenario comparison header */}
        <div className="grid grid-cols-3 gap-3">
          <div className="panel p-3 text-center">
            <p className="text-xs text-text-muted uppercase tracking-wider">Before</p>
            <p className="text-lg font-semibold text-text-secondary mt-1">Baseline</p>
          </div>
          <div className="panel p-3 text-center border-accent-cyan/30">
            <p className="text-xs text-accent-cyan uppercase tracking-wider">Scenario A</p>
            <p className="text-lg font-semibold text-text-primary mt-1">Conservative</p>
          </div>
          <div className="panel p-3 text-center border-accent-violet/30">
            <p className="text-xs text-accent-violet uppercase tracking-wider">Scenario B</p>
            <p className="text-lg font-semibold text-text-primary mt-1">Aggressive</p>
          </div>
        </div>

        {/* Parameter sliders */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Scenario A */}
          <DataPanel title="Scenario A Parameters">
            <div className="space-y-5">
              {scenarioParameters.map((p) => (
                <div key={p.id}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-text-secondary">{p.label}</span>
                    <span className="text-sm font-mono text-accent-cyan">{params[p.id].a} {p.unit}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-text-muted">{p.min}</span>
                    <input
                      type="range"
                      min={p.min}
                      max={p.max}
                      step={p.step}
                      value={params[p.id].a}
                      onChange={(e) => updateParam(p.id, 'a', Number(e.target.value))}
                      className="flex-1 accent-accent-cyan"
                    />
                    <span className="text-xs font-mono text-text-muted">{p.max}</span>
                  </div>
                </div>
              ))}
            </div>
          </DataPanel>

          {/* Scenario B */}
          <DataPanel title="Scenario B Parameters">
            <div className="space-y-5">
              {scenarioParameters.map((p) => (
                <div key={p.id}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-text-secondary">{p.label}</span>
                    <span className="text-sm font-mono text-accent-violet">{params[p.id].b} {p.unit}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-text-muted">{p.min}</span>
                    <input
                      type="range"
                      min={p.min}
                      max={p.max}
                      step={p.step}
                      value={params[p.id].b}
                      onChange={(e) => updateParam(p.id, 'b', Number(e.target.value))}
                      className="flex-1 accent-accent-violet"
                    />
                    <span className="text-xs font-mono text-text-muted">{p.max}</span>
                  </div>
                </div>
              ))}
            </div>
          </DataPanel>
        </div>

        {/* Results comparison */}
        <div className="grid lg:grid-cols-2 gap-4">
          <ChartCard title="Scenario A Results" subtitle="Conservative parameters" icon="TrendingUp">
            <div className="space-y-3">
              {scenarioResultsA.map((r) => (
                <div key={r.label} className="flex items-center justify-between p-3 rounded-lg bg-bg-secondary border border-border-subtle">
                  <span className="text-sm text-text-secondary">{r.label}</span>
                  <span className="text-lg font-semibold text-accent-cyan">
                    <AnimatedNumber value={r.after} />
                    <span className="text-xs text-text-muted ml-1">{r.unit}</span>
                  </span>
                </div>
              ))}
            </div>
          </ChartCard>

          <ChartCard title="Scenario B Results" subtitle="Aggressive parameters" icon="TrendingUp">
            <div className="space-y-3">
              {scenarioResultsB.map((r) => (
                <div key={r.label} className="flex items-center justify-between p-3 rounded-lg bg-bg-secondary border border-border-subtle">
                  <span className="text-sm text-text-secondary">{r.label}</span>
                  <span className="text-lg font-semibold text-accent-violet">
                    <AnimatedNumber value={r.after} />
                    <span className="text-xs text-text-muted ml-1">{r.unit}</span>
                  </span>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>

        {/* Difference map */}
        <ChartCard title="Difference Visualization" subtitle="Before vs After" icon="Diff">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <p className="text-xs text-text-muted mb-2 text-center">Before</p>
              <MapPlaceholder className="h-40" showCrosshair={false} beforeAfter="before" interactive={false} />
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-accent-cyan" />
            </div>
            <div>
              <p className="text-xs text-text-muted mb-2 text-center">After</p>
              <MapPlaceholder className="h-40" showCrosshair={false} beforeAfter="after" interactive={false} />
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  );
}
