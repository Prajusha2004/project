import { SectionHeader, ChartCard } from '@/components/ui/Cards';
import { RiskBar, riskLevelConfig } from '@/components/ui/RiskBar';
import { MapPlaceholder } from '@/components/ui/MapPlaceholder';
import { riskItems } from '@/data/geoRisk';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { ShieldAlert, TrendingUp, TrendingDown, Info } from 'lucide-react';

export function GeoRiskPage() {
  const avgScore = Math.round(riskItems.reduce((sum, r) => sum + r.score, 0) / riskItems.length);
  const maxScore = Math.max(...riskItems.map((r) => r.score));

  return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-7xl mx-auto p-5 space-y-4">
        <div className="flex items-center justify-between">
          <SectionHeader
            title="Risk Analysis"
            subtitle="Multi-dimensional geographic risk assessment"
            icon="ShieldAlert"
            badge="GeoRisk"
          />
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-warning/10 border border-warning/20 text-xs text-warning">
            <Info className="w-3.5 h-3.5" />
            <span className="font-mono">Demonstration Data</span>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="panel p-4">
            <p className="text-[11px] uppercase tracking-wider text-text-muted">Overall Risk</p>
            <p className="text-2xl font-bold text-warning mt-1">
              <AnimatedNumber value={avgScore} suffix="/100" />
            </p>
            <p className="text-xs text-text-secondary mt-0.5">Moderate-High</p>
          </div>
          <div className="panel p-4">
            <p className="text-[11px] uppercase tracking-wider text-text-muted">Highest Risk</p>
            <p className="text-2xl font-bold text-danger mt-1">
              <AnimatedNumber value={maxScore} suffix="/100" />
            </p>
            <p className="text-xs text-text-secondary mt-0.5">Urban Pressure</p>
          </div>
          <div className="panel p-4">
            <p className="text-[11px] uppercase tracking-wider text-text-muted">Trending Up</p>
            <p className="text-2xl font-bold text-danger mt-1">
              <AnimatedNumber value={5} />
            </p>
            <p className="text-xs text-text-secondary mt-0.5">of 6 categories</p>
          </div>
          <div className="panel p-4">
            <p className="text-[11px] uppercase tracking-wider text-text-muted">Critical Alerts</p>
            <p className="text-2xl font-bold text-danger mt-1">
              <AnimatedNumber value={2} />
            </p>
            <p className="text-xs text-text-secondary mt-0.5">Severe or above</p>
          </div>
        </div>

        {/* Risk cards grid + map */}
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {riskItems.map((risk) => {
              const config = riskLevelConfig[risk.level];
              return (
                <div key={risk.id} className={`panel p-4 ${config.glow} hover:border-accent-cyan/30 transition-colors`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">{risk.label}</h3>
                      <span className={`inline-block mt-1 text-[10px] font-mono px-1.5 py-0.5 rounded ${config.bg} ${config.color} ${config.border} border`}>
                        {config.label.toUpperCase()}
                      </span>
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-mono ${risk.trend > 0 ? 'text-danger' : 'text-success'}`}>
                      {risk.trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {risk.trend > 0 ? '+' : ''}{risk.trend}%
                    </div>
                  </div>
                  <RiskBar score={risk.score} level={risk.level} />
                  <p className="text-xs text-text-secondary mt-2.5 leading-relaxed">{risk.description}</p>
                </div>
              );
            })}
          </div>

          {/* Risk map */}
          <ChartCard title="Risk Heat Map" subtitle="Spatial distribution" icon="Map">
            <MapPlaceholder
              className="h-72"
              showCrosshair={false}
              highlightRadius={{ x: 50, y: 52, r: 18, color: 'rgba(239,68,68,0.1)' }}
              markers={[
                { x: 50, y: 52, label: 'High Risk Zone', color: '#ef4444', pulse: true },
                { x: 30, y: 40, color: '#f59e0b' },
                { x: 70, y: 60, color: '#f59e0b' },
                { x: 25, y: 70, color: '#10b981' },
                { x: 75, y: 35, color: '#10b981' },
              ]}
              interactive={false}
            />
            <div className="flex items-center justify-center gap-3 mt-3 text-xs">
              {(['low', 'moderate', 'high', 'severe', 'extreme'] as const).map((lvl) => {
                const c = riskLevelConfig[lvl];
                return (
                  <div key={lvl} className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${c.bg.replace('/10', '/60')}`} />
                    <span className="text-text-muted">{c.label}</span>
                  </div>
                );
              })}
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
