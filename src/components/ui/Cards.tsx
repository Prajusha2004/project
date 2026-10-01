import { type ReactNode } from 'react';
import { getIcon } from '@/lib/icons';

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  icon: string;
  trend?: string;
  className?: string;
}

export function StatCard({ label, value, subtext, icon, trend, className = '' }: StatCardProps) {
  const Icon = getIcon(icon);
  return (
    <div className={`panel p-4 flex items-start gap-3 hover:border-accent-cyan/30 transition-colors ${className}`}>
      <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
        <Icon className="w-5 h-5 text-accent-cyan" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium">{label}</p>
        <p className="text-lg font-semibold text-text-primary mt-0.5 truncate">{value}</p>
        {subtext && <p className="text-xs text-text-secondary mt-0.5 truncate">{subtext}</p>}
      </div>
      {trend && (
        <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded bg-success/15 text-success border border-success/20">
          {trend}
        </span>
      )}
    </div>
  );
}

interface ChartCardProps {
  title: string;
  subtitle?: string;
  icon?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export function ChartCard({ title, subtitle, icon, children, className = '', action }: ChartCardProps) {
 const Icon = icon ? getIcon(icon) : null;
  return (
    <div className={`panel ${className}`}>
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-border-subtle">
        <div className="flex items-center gap-2.5">
          {Icon && <Icon className="w-4 h-4 text-accent-cyan" />}
          <div>
            <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
            {subtitle && <p className="text-xs text-text-muted mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

interface DataPanelProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function DataPanel({ title, children, className = '' }: DataPanelProps) {
  return (
    <div className={`panel ${className}`}>
      <div className="px-5 py-3 border-b border-border-subtle">
        <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
  badge?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, icon, badge, className = '' }: SectionHeaderProps) {
  const Icon = icon ? getIcon(icon) : null;
return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
            <Icon className="w-5 h-5 text-accent-cyan" />
          </div>
        )}
        <div>
          <h1 className="text-xl font-bold text-text-primary tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-text-secondary mt-0.5">{subtitle}</p>}
        </div>
      </div>
      {badge && (
        <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
          {badge}
        </span>
      )}
    </div>
  );
}