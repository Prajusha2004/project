// SVG Radar Chart — lightweight, no external dependency
import { BRAND_CYAN } from '@/data/constants';

interface RadarChartProps {
  data: { label: string; value: number }[]; // value: 0-100
  size?: number;
  color?: string;
  fillColor?: string;
}

export function RadarChart({ data, size = 280, color = BRAND_CYAN, fillColor = 'rgba(34,211,238,0.12)' }: RadarChartProps) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 38;
  const angleStep = (Math.PI * 2) / data.length;

  const pointFor = (index: number, value: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const r = (value / 100) * radius;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  const labelPoint = (index: number) => {
    const angle = angleStep * index - Math.PI / 2;
    return {
      x: cx + (radius + 18) * Math.cos(angle),
      y: cy + (radius + 18) * Math.sin(angle),
    };
  };

  const polygonPoints = data.map((d, i) => {
    const p = pointFor(i, d.value);
    return `${p.x},${p.y}`;
  }).join(' ');

  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <svg width={size} height={size} className="overflow-visible">
      {/* Grid rings */}
      {rings.map((r, i) => (
        <polygon
          key={i}
          points={data.map((_, j) => {
            const angle = angleStep * j - Math.PI / 2;
            return `${cx + radius * r * Math.cos(angle)},${cy + radius * r * Math.sin(angle)}`;
          }).join(' ')}
          fill="none"
          stroke="#1e293b"
          strokeWidth={1}
        />
      ))}
      {/* Axis lines */}
      {data.map((_, i) => {
        const angle = angleStep * i - Math.PI / 2;
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + radius * Math.cos(angle)}
            y2={cy + radius * Math.sin(angle)}
            stroke="#1e293b"
            strokeWidth={1}
          />
        );
      })}
      {/* Data polygon */}
      <polygon
        points={polygonPoints}
        fill={fillColor}
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {/* Data points */}
      {data.map((d, i) => {
        const p = pointFor(i, d.value);
        return <circle key={i} cx={p.x} cy={p.y} r={3} fill={color} />;
      })}
      {/* Labels */}
      {data.map((d, i) => {
        const lp = labelPoint(i);
        return (
          <text
            key={i}
            x={lp.x}
            y={lp.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-text-secondary"
            style={{ fontSize: 10, fontWeight: 500 }}
          >
            {d.label}
          </text>
        );
      })}
    </svg>
  );
}