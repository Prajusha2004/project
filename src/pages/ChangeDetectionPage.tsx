import { SectionHeader, ChartCard, DataPanel } from '@/components/ui/Cards';
import { MapPlaceholder } from '@/components/ui/MapPlaceholder';
import { changeDetectionStats, changeDetectionDetails, changeDetectionPeriod } from '@/data/changeDetection';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { Plus, Minus, RefreshCw, Equal } from 'lucide-react';

export function ChangeDetectionPage() {
  const stats = [
    { label: 'New', value: changeDetectionStats.new, icon: Plus, color: 'text-success', bg: 'bg-success/10', border: 'border-success/20' },
    { label: 'Removed', value: changeDetectionStats.removed, icon: Minus, color: 'text-danger', bg: 'bg-danger/10', border: 'border-danger/20' },
    { label: 'Changed', value: changeDetectionStats.changed, icon: RefreshCw, color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning/20' },
    { label: 'Unchanged', value: changeDetectionStats.unchanged, icon: Equal, color: 'text-text-secondary', bg: 'bg-bg-elevated', border: 'border-border-subtle' },
  ];

  return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-7xl mx-auto p-5 space-y-4">
        <SectionHeader
          title="Change Detection"
          subtitle={`${changeDetectionPeriod.before} → ${changeDetectionPeriod.after} · ${changeDetectionPeriod.area}`}
          icon="Diff"
          badge="Comparison"
        />

        {/* Before / After maps */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-xs text-text-muted mb-2 text-center font-mono uppercase tracking-wider">{changeDetectionPeriod.before}</p>
            <MapPlaceholder className="h-48" showCrosshair={false} beforeAfter="before" interactive={false} />
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-12 bg-accent-cyan/30" />
              <span className="text-xs font-mono text-accent-cyan whitespace-nowrap">{changeDetectionPeriod.before} → {changeDetectionPeriod.after}</span>
              <div className="w-px h-12 bg-accent-cyan/30" />
            </div>
          </div>
          <div>
            <p className="text-xs text-text-muted mb-2 text-center font-mono uppercase tracking-wider">{changeDetectionPeriod.after}</p>
            <MapPlaceholder className="h-48" showCrosshair={false} beforeAfter="after" interactive={false} />
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label} className={`panel p-4 ${s.bg} ${s.border} border`}>
              <div className="flex items-center gap-2 mb-2">
                <s.icon className={`w-4 h-4 ${s.color}`} />
                <span className="text-[11px] uppercase tracking-wider text-text-muted">{s.label}</span>
              </div>
              <p className={`text-2xl font-bold ${s.color}`}>
                <AnimatedNumber value={s.value} />
              </p>
              <p className="text-xs text-text-muted mt-1">
                {((s.value / changeDetectionStats.total) * 100).toFixed(1)}% of total
              </p>
            </div>
          ))}
        </div>

        {/* Category breakdown */}
        <DataPanel title="Category Breakdown">
          <div className="space-y-4">
            {changeDetectionDetails.map((cat) => {
              const total = cat.new + cat.removed + cat.changed + cat.unchanged;
              return (
                <div key={cat.category}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">{cat.category}</span>
                    <span className="text-xs font-mono text-text-muted">{total} features</span>
                  </div>
                  <div className="flex h-3 rounded-full overflow-hidden bg-bg-secondary">
                    <div className="bg-success/60" style={{ width: `${(cat.new / total) * 100}%` }} title={`New: ${cat.new}`} />
                    <div className="bg-danger/60" style={{ width: `${(cat.removed / total) * 100}%` }} title={`Removed: ${cat.removed}`} />
                    <div className="bg-warning/60" style={{ width: `${(cat.changed / total) * 100}%` }} title={`Changed: ${cat.changed}`} />
                    <div className="bg-border" style={{ width: `${(cat.unchanged / total) * 100}%` }} title={`Unchanged: ${cat.unchanged}`} />
                  </div>
                  <div className="flex items-center gap-4 mt-1.5 text-xs">
                    <span className="text-success">+{cat.new} new</span>
                    <span className="text-danger">-{cat.removed} removed</span>
                    <span className="text-warning">{cat.changed} changed</span>
                    <span className="text-text-muted">{cat.unchanged} unchanged</span>
                  </div>
                </div>
              );
            })}
          </div>
        </DataPanel>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 py-2">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded ${s.bg.replace('/10', '/60')}`} />
              <span className="text-xs text-text-secondary">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
