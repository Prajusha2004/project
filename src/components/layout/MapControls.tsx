import { Plus, Minus, Box, Layers, Maximize, Locate } from 'lucide-react';
import { DEFAULT_LOCATION, formatCoordinates } from '@/data/constants';
// Floating map controls — vertical stack on the right side of the map
export function MapControls() {
  const controls = [
    { icon: Plus, label: 'Zoom in' },
    { icon: Minus, label: 'Zoom out' },
    { icon: Box, label: '3D view' },
    { icon: Layers, label: 'Layers' },
    { icon: Locate, label: 'Locate' },
    { icon: Maximize, label: 'Fullscreen' },
  ];

  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-10">
      {controls.map((c, i) => (
        <button
          key={c.label}
          title={c.label}
          className="w-9 h-9 rounded-lg bg-bg-panel/90 backdrop-blur-sm border border-border-subtle hover:border-accent-cyan/40 hover:bg-bg-elevated text-text-secondary hover:text-accent-cyan flex items-center justify-center transition-all duration-200 active:scale-90"
        >
          <c.icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}
