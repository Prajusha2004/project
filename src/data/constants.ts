// Default focus location for map/globe views throughout the app.
export const DEFAULT_LOCATION = {
  name: 'Dhanbad',
  lat: 23.7957,
  lng: 86.4304,
} as const;

export function formatCoordinates(lat: number, lng: number): string {
  return `${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E`;
}
export const BRAND_CYAN = '#22d3ee';