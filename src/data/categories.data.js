import {
  CookingPot,
  Wheat,
  Soup,
  Leaf,
  Sprout,
  UtensilsCrossed,
  Coffee,
  Package,
} from 'lucide-react';

// Provisional labels: replace with the eight approved categories and illustrations.
export const categories = [
  { slug: 'flours', name: 'Flours', icon: Wheat },
  { slug: 'millets', name: 'Millets', icon: Sprout },
  { slug: 'breakfast', name: 'Breakfast Mixes', icon: CookingPot },
  { slug: 'snacks', name: 'Snack Mixes', icon: UtensilsCrossed },
  { slug: 'spices', name: 'Spice Powders', icon: Leaf },
  { slug: 'ready-to-cook', name: 'Ready to Cook', icon: Soup },
  { slug: 'health-mixes', name: 'Health Mixes', icon: Coffee },
  { slug: 'combos', name: 'Combo Packs', icon: Package },
];
