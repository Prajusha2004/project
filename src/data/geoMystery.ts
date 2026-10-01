import type { MysteryLocation } from '@/types';

export const mysteryLocations: MysteryLocation[] = [
  {
    name: 'Manaus',
    country: 'Brazil',
    difficulty: 'medium',
    clues: [
      { id: '1', icon: 'CloudRain', text: 'High rainfall — over 2,000 mm annually' },
      { id: '2', icon: 'Mountain', text: 'Located in the Amazon basin, relatively flat' },
      { id: '3', icon: 'Trees', text: 'Dense tropical rainforest vegetation' },
      { id: '4', icon: 'Waves', text: 'Major river — the Rio Negro meets the Amazon here' },
    ],
    explanation: 'Manaus is the capital of Amazonas state, situated at the confluence of the Rio Negro and Solimões River. It is the largest city in the Amazon rainforest.',
  },
  {
    name: 'Ulaanbaatar',
    country: 'Mongolia',
    difficulty: 'hard',
    clues: [
      { id: '1', icon: 'ThermometerSnowflake', text: 'Coldest capital on Earth — winter drops below -40°C' },
      { id: '2', icon: 'Mountain', text: 'Surrounded by mountains, elevation 1,300m' },
      { id: '3', icon: 'Trees', text: 'Sparse vegetation — grassland steppe' },
      { id: '4', icon: 'Wind', text: 'Strong continental climate, far from any ocean' },
    ],
    explanation: 'Ulaanbaatar is the capital of Mongolia, located in a valley on the Tuul River. It has the coldest average temperature of any national capital.',
  },
  {
    name: 'Marrakech',
    country: 'Morocco',
    difficulty: 'easy',
    clues: [
      { id: '1', icon: 'Sun', text: 'Hot semi-arid climate with very warm summers' },
      { id: '2', icon: 'Mountain', text: 'Near the Atlas Mountains to the south' },
      { id: '3', icon: 'Trees', text: 'Sparse desert vegetation, palm oases nearby' },
      { id: '4', icon: 'Building', text: 'Famous for its ancient medina and red walls' },
    ],
    explanation: 'Marrakech is a major city in Morocco, founded in 1070. Known as the "Red City" for its sandstone buildings and walls, it sits near the foothills of the Atlas Mountains.',
  },
];
