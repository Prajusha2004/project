import type { RiskLevel } from '@/types';

export const riskLevelConfig: Record<RiskLevel, { label: string; color: string; bg: string; border: string; glow: string }> = {
  low: { label: 'Low', color: 'text-success', bg: 'bg-success/10', border: 'border-success/30', glow: 'shadow-[0_0_12px_rgba(16,185,129,0.2)]' },
  moderate: { label: 'Moderate', color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning/30', glow: 'shadow-[0_0_12px_rgba(245,158,11,0.2)]' },
  high: { label: 'High', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', glow: 'shadow-[0_0_12px_rgba(249,115,22,0.2)]' },
  severe: { label: 'Severe', color: 'text-danger', bg: 'bg-danger/10', border: 'border-danger/30', glow: 'shadow-[0_0_12px_rgba(239,68,68,0.2)]' },
  extreme: { label: 'Extreme', color: 'text-red-300', bg: 'bg-red-600/15', border: 'border-red-500/40', glow: 'shadow-[0_0_16px_rgba(239,68,68,0.3)]' },
};

interface RiskBarProps {
  score: number;
  level: RiskLevel;
}

export function RiskBar({ score, level }: RiskBarProps) {
  const config = riskLevelConfig[level];
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <span className={`text-xs font-medium ${config.color}`}>{config.label}</span>
        <span className="text-xs font-mono text-text-secondary">{score}/100</span>
      </div>
      <div className="h-2 rounded-full bg-bg-secondary overflow-hidden">
        <div
          className={`h-full rounded-full ${config.bg.replace('/10', '/60')} transition-all duration-700 ease-out`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
