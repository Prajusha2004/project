import type { RippleImpact, RippleStage } from '@/types';

export const rippleImpacts: RippleImpact[] = [
  { label: 'Affected Area', value: '78.5 km²', icon: 'Map' },
  { label: 'Affected Roads', value: '142 km', icon: 'Route' },
  { label: 'Affected Settlements', value: '23', icon: 'Home' },
  { label: 'Affected Land', value: '54.2 km²', icon: 'Layers' },
];

export const rippleStages: RippleStage[] = [
  { name: 'Event', description: 'Flood event originating from river overflow' },
  { name: 'Direct Impact', description: 'Inundation of low-lying areas within 2-4 km radius' },
  { name: 'Secondary Impact', description: 'Road closures, utility disruption, displacement' },
  { name: 'Surrounding Region', description: 'Economic and logistical ripple effects up to 10 km' },
];

export const rippleEventTypes = [
  { id: 'flood', label: 'Flood', icon: 'Waves' },
  { id: 'earthquake', label: 'Earthquake', icon: 'Activity' },
  { id: 'wildfire', label: 'Wildfire', icon: 'Flame' },
  { id: 'landslide', label: 'Landslide', icon: 'Mountain' },
  { id: 'storm', label: 'Storm', icon: 'CloudLightning' },
];
