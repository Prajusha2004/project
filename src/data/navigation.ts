// Navigation configuration — shared between Sidebar and routing
import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  { id: 'map', label: 'Map', icon: 'Map', section: 'explore' },
  { id: 'geodna', label: 'GeoDNA', icon: 'Fingerprint', section: 'explore' },
  { id: 'georisk', label: 'GeoRisk', icon: 'ShieldAlert', section: 'explore' },
  { id: 'georipple', label: 'GeoRipple', icon: 'Radio', section: 'explore' },
  { id: 'whatif', label: 'What-If', icon: 'GitCompareArrows', section: 'explore' },
  { id: 'timemachine', label: 'Time Machine', icon: 'Clock', section: 'explore' },
  { id: 'changedetection', label: 'Change Detection', icon: 'Diff', section: 'explore' },
  { id: 'whyhere', label: 'Why Here?', icon: 'Network', section: 'explore' },
  { id: 'geomystery', label: 'GeoMystery', icon: 'Gamepad2', section: 'explore' },
  { id: 'reports', label: 'Reports', icon: 'FileText', section: 'analysis' },
  { id: 'saved', label: 'Saved Simulations', icon: 'Save', section: 'analysis' },
  { id: 'settings', label: 'Settings', icon: 'Settings', section: 'system' },
];

export const navSections: { id: 'explore' | 'analysis' | 'system'; label: string }[] = [
  { id: 'explore', label: 'Explore' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'system', label: 'System' },
];
