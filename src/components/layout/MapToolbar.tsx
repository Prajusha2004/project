import { DEFAULT_LOCATION, formatCoordinates } from '@/data/constants';

// Horizontal map toolbar — top of map
export function MapToolbar() {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted px-3 py-1.5 rounded-lg bg-bg-panel border border-border-subtle">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-slow" />
        LIVE · SATELLITE
      </div>
      <div className="text-xs font-mono text-text-muted px-3 py-1.5 rounded-lg bg-bg-panel border border-border-subtle">
        ZOOM 12
      </div>
      <div className="text-xs font-mono text-text-muted px-3 py-1.5 rounded-lg bg-bg-panel border border-border-subtle">
        {formatCoordinates(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng)}
      </div>
    </div>
  );
}