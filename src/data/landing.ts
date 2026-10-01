import {
  Layers,
  ShieldAlert,
  Radio,
  GitCompareArrows,
  Clock,
  Diff,
  Network,
  Gamepad2,
  Fingerprint,
  Satellite,
  Database,
  Cpu,
} from 'lucide-react';

export const FEATURES = [
  { icon: Fingerprint, title: 'GeoDNA', desc: 'Geographic fingerprinting for any location on Earth' },
  { icon: ShieldAlert, title: 'GeoRisk', desc: 'Multi-dimensional risk assessment with visual indicators' },
  { icon: Radio, title: 'GeoRipple', desc: 'Simulate how events ripple through geographic space' },
  { icon: GitCompareArrows, title: 'What-If', desc: 'Compare scenarios side-by-side with live parameters' },
  { icon: Clock, title: 'Time Machine', desc: 'Travel through decades of geographic change' },
  { icon: Diff, title: 'Change Detection', desc: 'Detect and quantify what changed between periods' },
  { icon: Network, title: 'Why Here?', desc: 'Understand the causal chain behind any settlement' },
  { icon: Gamepad2, title: 'GeoMystery', desc: 'Test your geographic intuition with clues' },
];

export const STACK = [
  { icon: Satellite, label: 'Spatial Analysis' },
  { icon: Layers, label: 'Historical Change' },
  { icon: ShieldAlert, label: 'Geographic Risk' },
  { icon: Cpu, label: 'Simulation' },
  { icon: Database, label: 'Interactive Exploration' },
];