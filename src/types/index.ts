// GeoSphere — Shared Type Definitions
// These types define the data shapes used across the UI prototype.
// Mock data conforms to these interfaces so that later, real API responses
// can replace the mock data without changing component contracts.

export type PageId =
  | 'map'
  | 'geodna'
  | 'georisk'
  | 'georipple'
  | 'whatif'
  | 'timemachine'
  | 'changedetection'
  | 'whyhere'
  | 'geomystery'
  | 'reports'
  | 'saved'
  | 'settings';

export interface NavItem {
  id: PageId;
  label: string;
  icon: string;
  section: 'explore' | 'analysis' | 'system';
}

// ── GeoDNA ──
export interface GeoFeature {
  label: string;
  value: number; // 0-100 normalized
  unit: string;
  description: string;
}

export interface GeoDNAProfile {
  location: string;
  country: string;
  coordinates: { lat: number; lng: number };
  features: GeoFeature[];
  stats: { label: string; value: string; unit?: string }[];
}

// ── GeoRisk ──
export type RiskLevel = 'low' | 'moderate' | 'high' | 'severe' | 'extreme';

export interface RiskItem {
  id: string;
  label: string;
  level: RiskLevel;
  score: number; // 0-100
  trend: number; // percentage change
  description: string;
}

// ── GeoRipple ──
export interface RippleImpact {
  label: string;
  value: string;
  icon: string;
}

export interface RippleStage {
  name: string;
  description: string;
}

// ── What-If ──
export interface ScenarioParameter {
  id: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  valueA: number;
  valueB: number;
}

export interface ScenarioResult {
  label: string;
  before: number;
  after: number;
  unit: string;
}

// ── Time Machine ──
export interface TimeLayer {
  year: number;
  label: string;
  urbanCoverage: number;
  vegetationCoverage: number;
  waterCoverage: number;
  population: string;
  description: string;
}

// ── Change Detection ──
export interface ChangeStats {
  new: number;
  removed: number;
  changed: number;
  unchanged: number;
  total: number;
}

// ── Why Here? ──
export interface ReasoningNode {
  id: string;
  label: string;
  description: string;
  icon: string;
}

// ── GeoMystery ──
export interface MysteryClue {
  id: string;
  icon: string;
  text: string;
}

export interface MysteryLocation {
  name: string;
  country: string;
  clues: MysteryClue[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// ── Dashboard ──
export interface DashboardCard {
  id: string;
  label: string;
  value: string;
  subtext: string;
  icon: string;
  trend?: string;
}
