import type { DashboardCard } from '@/types';

export const dashboardCards: DashboardCard[] = [
  { id: 'region', label: 'Active Region', value: 'Dhanbad, IN', subtext: '23.80°N, 86.43°E', icon: 'Crosshair', trend: 'Live' },
  { id: 'features', label: 'Geographic Features', value: '7', subtext: '6 above threshold', icon: 'Layers' },
  { id: 'analysis', label: 'Recent Analysis', value: '14', subtext: '3 in progress', icon: 'FileBarChart' },
  { id: 'simulations', label: 'Active Simulations', value: '5', subtext: '2 running now', icon: 'PlayCircle' },
];

export const recentReports = [
  { id: '1', title: 'Dhanbad Flood Risk Assessment', date: '2026-09-24', status: 'Complete', type: 'Risk' },
  { id: '2', title: 'Tokyo Urban Pressure Analysis', date: '2026-09-22', status: 'Complete', type: 'Urbanization' },
  { id: '3', title: 'Reykjavik Climate Profile', date: '2026-09-20', status: 'In Review', type: 'GeoDNA' },
  { id: '4', title: 'Amazon Deforestation Simulation', date: '2026-09-18', status: 'Complete', type: 'What-If' },
  { id: '5', title: 'Coastal Change Detection — Mumbai', date: '2026-09-15', status: 'Draft', type: 'Change' },
];

export const savedSimulations = [
  { id: '1', name: 'Dhanbad Flood — 5km Radius', type: 'GeoRipple', date: '2026-09-25', params: 'Radius: 5km, Event: Flood' },
  { id: '2', name: 'Urban Expansion 20% Scenario', type: 'What-If', date: '2026-09-23', params: 'Expansion: 20%, Region: Dhanbad' },
  { id: '3', name: 'Tokyo Heat Island Simulation', type: 'What-If', date: '2026-09-21', params: 'Temp rise: +2.5°C' },
  { id: '4', name: 'Damodar River Overflow', type: 'GeoRipple', date: '2026-09-19', params: 'Radius: 8km, Event: Flood' },
];
