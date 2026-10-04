import { BRAND_CYAN } from '@/data/constants';

interface GlobeIconProps {
  size?: number;
}

export function GlobeIcon({ size = 20 }: GlobeIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={BRAND_CYAN} strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke={BRAND_CYAN} strokeWidth="1" opacity="0.5" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke={BRAND_CYAN} strokeWidth="1" opacity="0.5" />
      <circle cx="12" cy="12" r="1.5" fill={BRAND_CYAN} />
    </svg>
  );
}