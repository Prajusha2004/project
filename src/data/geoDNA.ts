import type { GeoDNAProfile } from '@/types';
import { DEFAULT_LOCATION } from './constants';
export const geoDNAProfiles: Record<string, GeoDNAProfile> = {
  dhanbad: {
    location: DEFAULT_LOCATION.name,
    country: 'India',
    coordinates: { lat: DEFAULT_LOCATION.lat, lng: DEFAULT_LOCATION.lng },
    features: [
      { label: 'Elevation', value: 42, unit: 'm', description: 'Average elevation 243m above sea level, part of the Chota Nagpur Plateau.' },
      { label: 'Climate', value: 68, unit: 'Köppen', description: 'Humid subtropical climate with distinct wet and dry seasons.' },
      { label: 'Water', value: 55, unit: 'index', description: 'Moderate surface water density with Damodar River system nearby.' },
      { label: 'Terrain', value: 60, unit: 'index', description: 'Undulating terrain with ridges and valleys, typical plateau topography.' },
      { label: 'Vegetation', value: 38, unit: 'NDVI', description: 'Sparse vegetation cover due to extensive mining and urbanization.' },
      { label: 'Urbanization', value: 82, unit: 'index', description: 'Highly urbanized region, major industrial and mining center.' },
      { label: 'Connectivity', value: 75, unit: 'index', description: 'Well-connected by rail and road, part of the Delhi-Kolkata corridor.' },
    ],
    stats: [
      { label: 'Area', value: '2,075', unit: 'km²' },
      { label: 'Population', value: '2.68M', unit: '' },
      { label: 'Avg. Elevation', value: '243', unit: 'm' },
      { label: 'Annual Rainfall', value: '1,328', unit: 'mm' },
      { label: 'Mean Temp', value: '24.8', unit: '°C' },
      { label: 'Land Cover Type', value: 'Urban/Mining', unit: '' },
    ],
  },
  tokyo: {
    location: 'Tokyo',
    country: 'Japan',
    coordinates: { lat: 35.6762, lng: 139.6503 },
    features: [
      { label: 'Elevation', value: 20, unit: 'm', description: 'Low-lying coastal plain, average elevation 40m.' },
      { label: 'Climate', value: 72, unit: 'Köppen', description: 'Humid subtropical climate with hot summers and mild winters.' },
      { label: 'Water', value: 65, unit: 'index', description: 'Extensive bay coastline with Sumida and Arakawa rivers.' },
      { label: 'Terrain', value: 25, unit: 'index', description: 'Flat alluvial plain bordered by hills to the west.' },
      { label: 'Vegetation', value: 30, unit: 'NDVI', description: 'Limited natural vegetation, extensive urban green spaces.' },
      { label: 'Urbanization', value: 98, unit: 'index', description: 'One of the most densely urbanized regions on Earth.' },
      { label: 'Connectivity', value: 95, unit: 'index', description: 'World-class rail, metro, and international airport connectivity.' },
    ],
    stats: [
      { label: 'Area', value: '2,194', unit: 'km²' },
      { label: 'Population', value: '13.96M', unit: '' },
      { label: 'Avg. Elevation', value: '40', unit: 'm' },
      { label: 'Annual Rainfall', value: '1,529', unit: 'mm' },
      { label: 'Mean Temp', value: '15.8', unit: '°C' },
      { label: 'Land Cover Type', value: 'Dense Urban', unit: '' },
    ],
  },
  reykjavik: {
    location: 'Reykjavik',
    country: 'Iceland',
    coordinates: { lat: 64.1466, lng: -21.9426 },
    features: [
      { label: 'Elevation', value: 55, unit: 'm', description: 'Coastal lowland with volcanic terrain, average 120m elevation.' },
      { label: 'Climate', value: 35, unit: 'Köppen', description: 'Subpolar oceanic climate, mild despite high latitude.' },
      { label: 'Water', value: 88, unit: 'index', description: 'Abundant freshwater, geothermal springs, and Atlantic coastline.' },
      { label: 'Terrain', value: 70, unit: 'index', description: 'Volcanic plateaus, lava fields, and glacial valleys.' },
      { label: 'Vegetation', value: 28, unit: 'NDVI', description: 'Tundra moss and lichen, sparse tree cover.' },
      { label: 'Urbanization', value: 45, unit: 'index', description: 'Compact urban core, large uninhabited surrounding areas.' },
      { label: 'Connectivity', value: 60, unit: 'index', description: 'International airport and port, limited road network.' },
    ],
    stats: [
      { label: 'Area', value: '273', unit: 'km²' },
      { label: 'Population', value: '139K', unit: '' },
      { label: 'Avg. Elevation', value: '120', unit: 'm' },
      { label: 'Annual Rainfall', value: '798', unit: 'mm' },
      { label: 'Mean Temp', value: '5.1', unit: '°C' },
      { label: 'Land Cover Type', value: 'Tundra/Volcanic', unit: '' },
    ],
  },
};

export const defaultGeoDNAKey = 'dhanbad';
