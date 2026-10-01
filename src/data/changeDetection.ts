import type { ChangeStats } from '@/types';

export const changeDetectionStats: ChangeStats = {
  new: 184,
  removed: 96,
  changed: 312,
  unchanged: 1043,
  total: 1635,
};

export const changeDetectionDetails = [
  { category: 'Urban Structures', new: 67, removed: 12, changed: 89, unchanged: 421 },
  { category: 'Vegetation', new: 23, removed: 54, changed: 102, unchanged: 287 },
  { category: 'Water Bodies', new: 8, removed: 15, changed: 34, unchanged: 112 },
  { category: 'Roads & Paths', new: 86, removed: 15, changed: 87, unchanged: 223 },
];

export const changeDetectionPeriod = {
  before: '2018',
  after: '2024',
  area: 'Dhanbad District, India',
};
