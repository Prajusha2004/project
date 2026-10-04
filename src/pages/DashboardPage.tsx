import { MapPlaceholder } from '@/components/ui/MapPlaceholder';
import { MapControls} from '@/components/layout/MapControls';
import { MapToolbar } from '@/components/layout/MapToolbar';
import { StatCard } from '@/components/ui/Cards';
import { dashboardCards } from '@/data/dashboard';
import { Activity, TrendingUp, AlertTriangle } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="h-full flex flex-col overflow-hidden animate-fade-in">
      {/* Cards row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3 shrink-0">
        {dashboardCards.map((card) => (
          <StatCard
            key={card.id}
            label={card.label}
            value={card.value}
            subtext={card.subtext}
            icon={card.icon}
            trend={card.trend}
          />
        ))}
      </div>

      {/* Map + side panel */}
      <div className="flex-1 flex gap-3 min-h-0">
        {/* Map workspace */}
        <div className="flex-1 flex flex-col min-w-0">
          <MapToolbar />
          <div className="flex-1 relative">
            <MapPlaceholder
              className="h-full"
              markers={[
                { x: 48, y: 52, label: 'Dhanbad', pulse: true },
                { x: 25, y: 35, color: '#a78bfa' },
                { x: 72, y: 68, color: '#a78bfa' },
                { x: 60, y: 30, color: '#f59e0b' },
              ]}
            />
            <MapControls />
          </div>
        </div>

        {/* Right info panel */}
        <div className="w-72 shrink-0 flex flex-col gap-3 overflow-y-auto">
          <div className="panel p-4">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-accent-cyan" />
              <h3 className="text-sm font-semibold">Live Activity</h3>
            </div>
            <div className="space-y-2.5">
              {[
                { text: 'Flood simulation completed', time: '2m ago', color: 'bg-success' },
                { text: 'GeoDNA profile generated', time: '8m ago', color: 'bg-accent-cyan' },
                { text: 'Change detection queued', time: '15m ago', color: 'bg-warning' },
                { text: 'Risk assessment updated', time: '32m ago', color: 'bg-accent-violet' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.color} mt-1.5 shrink-0`} />
                  <div className="min-w-0">
                    <p className="text-text-secondary truncate">{item.text}</p>
                    <p className="text-text-muted font-mono mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-accent-cyan" />
              <h3 className="text-sm font-semibold">Regional Trends</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Urban Growth', value: '+22%', color: 'text-danger' },
                { label: 'Vegetation Loss', value: '-15%', color: 'text-warning' },
                { label: 'Water Stress', value: '+8%', color: 'text-orange-400' },
                { label: 'Temperature', value: '+1.2°C', color: 'text-danger' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary">{item.label}</span>
                  <span className={`text-xs font-mono font-medium ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <h3 className="text-sm font-semibold">Alerts</h3>
            </div>
            <div className="space-y-2">
              <div className="text-xs p-2.5 rounded-lg bg-danger/10 border border-danger/20">
                <p className="text-danger font-medium">High Flood Risk</p>
                <p className="text-text-muted mt-0.5">Dhanbad district — monsoon season</p>
              </div>
              <div className="text-xs p-2.5 rounded-lg bg-warning/10 border border-warning/20">
                <p className="text-warning font-medium">Vegetation Decline</p>
                <p className="text-text-muted mt-0.5">NDVI drop detected in sector 7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
