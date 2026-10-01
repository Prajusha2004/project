import { SectionHeader } from '@/components/ui/Cards';
import { recentReports } from '@/data/dashboard';
import { FileText, Download, Eye, Filter } from 'lucide-react';
import { useState } from 'react';

export function ReportsPage() {
  const [filter, setFilter] = useState('all');
  const types = ['all', ...Array.from(new Set(recentReports.map((r) => r.type)))];
  const filtered = filter === 'all' ? recentReports : recentReports.filter((r) => r.type === filter);

  return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-7xl mx-auto p-5 space-y-4">
        <SectionHeader
          title="Reports"
          subtitle="Generated analysis and assessment reports"
          icon="FileText"
          badge="Analysis"
        />

        {/* Filter tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-text-muted" />
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === t
                  ? 'bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan'
                  : 'bg-bg-panel border border-border-subtle text-text-secondary hover:text-text-primary'
              }`}
            >
              {t === 'all' ? 'All Reports' : t}
            </button>
          ))}
        </div>

        {/* Reports list */}
        <div className="space-y-2">
          {filtered.map((report) => (
            <div key={report.id} className="panel p-4 flex items-center gap-4 hover:border-accent-cyan/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-accent-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-text-primary truncate">{report.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-text-muted font-mono">{report.date}</span>
                  <span className="text-xs text-text-secondary px-1.5 py-0.5 rounded bg-bg-secondary border border-border-subtle">{report.type}</span>
                </div>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                report.status === 'Complete' ? 'bg-success/10 text-success border border-success/20' :
                report.status === 'In Review' ? 'bg-warning/10 text-warning border border-warning/20' :
                'bg-bg-elevated text-text-secondary border border-border-subtle'
              }`}>
                {report.status}
              </span>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-accent-cyan transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg hover:bg-bg-elevated text-text-muted hover:text-accent-cyan transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
