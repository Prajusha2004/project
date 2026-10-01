import { SectionHeader } from '@/components/ui/Cards';
import { savedSimulations } from '@/data/dashboard';
import { Save, Play, Trash2, Copy } from 'lucide-react';

export function SavedSimulationsPage() {
  return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-7xl mx-auto p-5 space-y-4">
        <SectionHeader
          title="Saved Simulations"
          subtitle="Previously run geographic simulations"
          icon="Save"
          badge="Analysis"
        />

        <div className="grid sm:grid-cols-2 gap-3">
          {savedSimulations.map((sim) => (
            <div key={sim.id} className="panel p-4 hover:border-accent-cyan/30 transition-colors group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                    <Save className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{sim.name}</h3>
                    <span className="text-xs text-text-muted font-mono">{sim.date}</span>
                  </div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
                  {sim.type}
                </span>
              </div>
              <p className="text-xs text-text-secondary mb-3 font-mono">{sim.params}</p>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs hover:bg-accent-cyan/20 transition-colors">
                  <Play className="w-3.5 h-3.5" /> Run
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-elevated border border-border-subtle text-text-secondary text-xs hover:text-text-primary transition-colors">
                  <Copy className="w-3.5 h-3.5" /> Duplicate
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-elevated border border-border-subtle text-text-muted text-xs hover:text-danger transition-colors ml-auto">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
