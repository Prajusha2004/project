import type { RiskItem } from '@/types';

export const riskItems: RiskItem[] = [
  {
    id: 'flood',
    label: 'Flood Exposure',
    level: 'high',
    score: 72,
    trend: 8,
    description: 'Proximity to Damodar River basin and low-lying terrain increases seasonal flood risk during monsoon.',
  },
  {
    id: 'heat',
    label: 'Heat Exposure',
    level: 'moderate',
    score: 54,
    trend: 12,
    description: 'Rising urban heat island effect from dense built environment and reduced green cover.',
  },
  {
    id: 'landslide',
    label: 'Landslide Exposure',
    level: 'moderate',
    score: 48,
    trend: 3,
    description: 'Plateau escarpments and mining-disturbed slopes present moderate landslide susceptibility.',
  },
  {
    id: 'water',
    label: 'Water Stress',
    level: 'high',
    score: 68,
    trend: -5,
    description: 'Industrial demand and mining activity strain groundwater resources across the region.',
  },
  {
    id: 'vegetation',
    label: 'Vegetation Change',
    level: 'severe',
    score: 81,
    trend: 15,
    description: 'Significant NDVI decline over 20 years due to mining expansion and urban sprawl.',
  },
  {
    id: 'urban',
    label: 'Urban Pressure',
    level: 'extreme',
    score: 89,
    trend: 22,
    description: 'Rapid, unplanned urban expansion creating severe pressure on land and infrastructure.',
  },
];
