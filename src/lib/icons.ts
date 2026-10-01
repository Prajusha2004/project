import * as Icons from 'lucide-react';

// Central lookup for dynamically-named Lucide icons (icon names stored as
// strings in /data files). Falls back to Circle if the name doesn't match.
const iconMap = Icons as unknown as Record<string, Icons.LucideIcon>;

export function getIcon(name: string): Icons.LucideIcon {
  return iconMap[name] ?? Icons.Circle;
}