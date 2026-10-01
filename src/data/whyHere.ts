import type { ReasoningNode } from '@/types';

export const reasoningNodes: ReasoningNode[] = [
  { id: 'water', label: 'Water', description: 'Damodar River provides year-round water supply', icon: 'Droplets' },
  { id: 'settlement', label: 'Settlement', description: 'Reliable water source attracted early settlements', icon: 'Home' },
  { id: 'transport', label: 'Transport', description: 'Railway lines built to connect settlements to ports', icon: 'Train' },
  { id: 'industry', label: 'Industry', description: 'Coal deposits + transport enabled mining industry', icon: 'Factory' },
  { id: 'urbanization', label: 'Urbanization', description: 'Industry jobs drove massive population growth', icon: 'Building2' },
];

export const reasoningConnections = [
  { from: 'water', to: 'settlement' },
  { from: 'settlement', to: 'transport' },
  { from: 'transport', to: 'industry' },
  { from: 'industry', to: 'urbanization' },
];
