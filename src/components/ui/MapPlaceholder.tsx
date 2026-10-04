// MapPlaceholder — a visually convincing map mock using SVG.
// Designed to look like a satellite-intelligence / GIS map view without
// requiring actual map tiles. Later this can be replaced with a real
// MapLibre/PostGIS-backed component.
import { useMemo, useState } from 'react';
import { DEFAULT_LOCATION, BRAND_CYAN } from '@/data/constants';

interface MapMarker {
  x: number; // 0-100 %
  y: number; // 0-100 %
  label?: string;
  color?: string;
  pulse?: boolean;
}

interface MapPlaceholderProps {
  className?: string;
  markers?: MapMarker[];
  showGrid?: boolean;
  showCrosshair?: boolean;
  highlightRadius?: { x: number; y: number; r: number; color?: string };
  beforeAfter?: 'before' | 'after';
  year?: number;
  interactive?: boolean;
  children?: React.ReactNode;
}

export function MapPlaceholder({
  className = '',
  markers = [],
  showGrid = true,
  showCrosshair = true,
  highlightRadius,
  beforeAfter,
  year,
  interactive = true,
  children,
}: MapPlaceholderProps) {
  const [hover, setHover] = useState(false);

  // Deterministic pseudo-random terrain shapes
  const terrainPaths = useMemo(() => {
    const seed = year ?? 0;
    const rng = (n: number) => {
      const x = Math.sin(seed * 999 + n * 7777) * 10000;
      return x - Math.floor(x);
    };
    const paths: string[] = [];
    for (let i = 0; i < 8; i++) {
      const points: string[] = [];
      const segments = 6 + Math.floor(rng(i) * 4);
      for (let j = 0; j <= segments; j++) {
        const x = (j / segments) * 100;
        const y = 20 + rng(i * 10 + j) * 60;
        points.push(`${x},${y}`);
      }
      paths.push(points.join(' L '));
    }
    return paths;
  }, [year]);

  const urbanOpacity = year !== undefined ? Math.min(0.15 + (year - 1900) / 200, 0.55) : 0.3;
  const vegOpacity = year !== undefined ? Math.max(0.4 - (year - 1900) / 300, 0.1) : 0.25;

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-bg-secondary border border-border-subtle ${interactive ? 'cursor-crosshair' : ''} ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-secondary" />

      {/* Terrain SVG */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        {/* Water bodies */}
        <path
          d="M 0 70 Q 20 65 35 72 T 70 68 T 100 70 L 100 100 L 0 100 Z"
          fill="rgba(59,130,246,0.08)"
          stroke="rgba(59,130,246,0.15)"
          strokeWidth="0.2"
        />
        <path
          d="M 10 30 Q 25 28 40 32 T 70 30"
          fill="none"
          stroke="rgba(59,130,246,0.12)"
          strokeWidth="0.3"
        />

        {/* Terrain contours */}
        {terrainPaths.map((d, i) => (
          <path
            key={i}
            d={`M ${d}`}
            fill="none"
            stroke={beforeAfter === 'before' ? 'rgba(16,185,129,0.12)' : beforeAfter === 'after' ? 'rgba(239,68,68,0.12)' : 'rgba(148,163,184,0.08)'}
            strokeWidth="0.15"
          />
        ))}

        {/* Urban grid overlay */}
        <defs>
          <pattern id="urbanGrid" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" fill="rgba(245,158,11,0.04)" />
            <rect width="1.5" height="1.5" fill="rgba(245,158,11,0.06)" />
          </pattern>
          <pattern id="vegPattern" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1" fill="rgba(16,185,129,0.08)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100" height="100" fill="url(#vegPattern)" opacity={vegOpacity} />
        <rect x="0" y="0" width="100" height="100" fill="url(#urbanGrid)" opacity={urbanOpacity} />

        {/* Grid lines */}
        {showGrid &&
          Array.from({ length: 10 }).map((_, i) => (
            <g key={i}>
              <line x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="rgba(34,211,238,0.05)" strokeWidth="0.1" />
              <line x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="rgba(34,211,238,0.05)" strokeWidth="0.1" />
            </g>
          ))}

        {/* Highlight radius */}
        {highlightRadius && (
          <circle
            cx={highlightRadius.x}
            cy={highlightRadius.y}
            r={highlightRadius.r}
            fill={`${highlightRadius.color ?? 'rgba(239,68,68,0.08)'}`}
            stroke={highlightRadius.color ?? 'rgba(239,68,68,0.4)'}
            strokeWidth="0.3"
            strokeDasharray="1,1"
          />
        )}

        {/* Markers */}
        {markers.map((m, i) => (
          <g key={i}>
            {m.pulse && (
              <circle cx={m.x} cy={m.y} r="1.5" fill="none" stroke={m.color ?? BRAND_CYAN} strokeWidth="0.2">
                <animate attributeName="r" from="1.5" to="4" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
            <circle cx={m.x} cy={m.y} r="0.8" fill={m.color ?? BRAND_CYAN} />
            {m.label && (
              <text x={m.x + 1.5} y={m.y + 0.5} fill="#94a3b8" style={{ fontSize: 1.5 }}>
                {m.label}
              </text>
            )}
          </g>
        ))}
      </svg>

      {/* Crosshair */}
      {showCrosshair && (
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity ${hover ? 'opacity-100' : 'opacity-40'}`}>
          <div className="w-px h-12 bg-accent-cyan/30" />
          <div className="h-px w-12 bg-accent-cyan/30 absolute" />
        </div>
      )}

      {/* Corner brackets — HUD style */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-accent-cyan/40 pointer-events-none" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-accent-cyan/40 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-accent-cyan/40 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-accent-cyan/40 pointer-events-none" />

      {/* Coordinate overlay */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-text-muted pointer-events-none">
        {DEFAULT_LOCATION.lat.toFixed(4)}°N · {DEFAULT_LOCATION.lng.toFixed(4)}°E · ALT 243m
      </div>

      {children}
    </div>
  );
}