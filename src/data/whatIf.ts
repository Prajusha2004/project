import type { ScenarioParameter, ScenarioResult } from '@/types';

export const scenarioParameters: ScenarioParameter[] = [
  { id: 'floodRadius', label: 'Flood Radius', unit: 'km', min: 1, max: 10, step: 0.5, valueA: 2, valueB: 5 },
  { id: 'urbanExpansion', label: 'Urban Expansion', unit: '%', min: 0, max: 50, step: 5, valueA: 10, valueB: 20 },
  { id: 'rainfallIntensity', label: 'Rainfall Intensity', unit: 'mm/hr', min: 10, max: 200, step: 10, valueA: 50, valueB: 120 },
  { id: 'temperatureRise', label: 'Temperature Rise', unit: '°C', min: 0, max: 5, step: 0.5, valueA: 1, valueB: 2.5 },
];

export const scenarioResultsA: ScenarioResult[] = [
  { label: 'Affected Population', before: 0, after: 45000, unit: 'people' },
  { label: 'Infrastructure Cost', before: 0, after: 12.5, unit: 'M USD' },
  { label: 'Displaced Households', before: 0, after: 8200, unit: 'households' },
  { label: 'Recovery Time', before: 0, after: 6, unit: 'months' },
];

export const scenarioResultsB: ScenarioResult[] = [
  { label: 'Affected Population', before: 0, after: 112000, unit: 'people' },
  { label: 'Infrastructure Cost', before: 0, after: 31.2, unit: 'M USD' },
  { label: 'Displaced Households', before: 0, after: 20500, unit: 'households' },
  { label: 'Recovery Time', before: 0, after: 14, unit: 'months' },
];
