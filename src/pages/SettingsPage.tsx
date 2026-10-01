import { useState } from 'react';
import { SectionHeader } from '@/components/ui/Cards';
import { Button } from '@/components/ui/Button';
import { Globe, Palette, Layers, Bell, Database, Monitor } from 'lucide-react';

export function SettingsPage() {
  const [theme, setTheme] = useState('dark');
  const [units, setUnits] = useState('metric');
  const [mapStyle, setMapStyle] = useState('satellite');
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="h-full overflow-y-auto animate-fade-in">
      <div className="max-w-4xl mx-auto p-5 space-y-4">
        <SectionHeader
          title="Settings"
          subtitle="Configure your GeoSphere workspace"
          icon="Settings"
          badge="System"
        />

        {/* Appearance */}
        <div className="panel p-5">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-4 h-4 text-accent-cyan" />
            <h3 className="text-sm font-semibold">Appearance</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-text-muted uppercase tracking-wider">Theme</label>
              <div className="flex gap-2 mt-2">
                {['dark', 'midnight', 'deep'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`px-4 py-2 rounded-lg text-sm border transition-colors capitalize ${
                      theme === t
                        ? 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan'
                        : 'bg-bg-secondary border-border-subtle text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-text-muted uppercase tracking-wider">Map Style</label>
              <div className="flex gap-2 mt-2">
                {['satellite', 'terrain', 'dark'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setMapStyle(s)}
                    className={`px-4 py-2 rounded-lg text-sm border transition-colors capitalize ${
                      mapStyle === s
                        ? 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan'
                        : 'bg-bg-secondary border-border-subtle text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Units */}
        <div className="panel p-5">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-4 h-4 text-accent-cyan" />
            <h3 className="text-sm font-semibold">Units & Region</h3>
          </div>
          <div>
            <label className="text-xs text-text-muted uppercase tracking-wider">Measurement Units</label>
            <div className="flex gap-2 mt-2">
              {['metric', 'imperial'].map((u) => (
                <button
                  key={u}
                  onClick={() => setUnits(u)}
                  className={`px-4 py-2 rounded-lg text-sm border transition-colors capitalize ${
                    units === u
                      ? 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan'
                      : 'bg-bg-secondary border-border-subtle text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Toggles */}
        <div className="panel p-5">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-4 h-4 text-accent-cyan" />
            <h3 className="text-sm font-semibold">Notifications & Data</h3>
          </div>
          <div className="space-y-4">
            <ToggleRow
              label="Risk Alerts"
              description="Receive notifications when risk thresholds are exceeded"
              value={notifications}
              onChange={setNotifications}
            />
            <ToggleRow
              label="Auto-save Simulations"
              description="Automatically save simulation results"
              value={autoSave}
              onChange={setAutoSave}
            />
          </div>
        </div>

        {/* System info */}
        <div className="panel p-5">
          <div className="flex items-center gap-2 mb-4">
            <Monitor className="w-4 h-4 text-accent-cyan" />
            <h3 className="text-sm font-semibold">System</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-text-muted">Version</p>
              <p className="text-text-primary font-mono mt-0.5">GeoSphere v0.9.0 (Prototype)</p>
            </div>
            <div>
              <p className="text-xs text-text-muted">Data Source</p>
              <p className="text-text-primary font-mono mt-0.5">Mock Data Layer</p>
            </div>
            <div>
              <p className="text-xs text-text-muted">Render Engine</p>
              <p className="text-text-primary font-mono mt-0.5">Three.js + React Three Fiber</p>
            </div>
            <div>
              <p className="text-xs text-text-muted">Map Engine</p>
              <p className="text-text-primary font-mono mt-0.5">Placeholder (MapLibre-ready)</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="ghost">Reset to Defaults</Button>
          <Button variant="primary">Save Changes</Button>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({ label, description, value, onChange }: { label: string; description: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-text-primary">{label}</p>
        <p className="text-xs text-text-muted mt-0.5">{description}</p>
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`relative w-11 h-6 rounded-full transition-colors ${value ? 'bg-accent-cyan/60' : 'bg-bg-elevated border border-border-subtle'}`}
      >
        <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-text-primary transition-transform ${value ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
    </div>
  );
}
