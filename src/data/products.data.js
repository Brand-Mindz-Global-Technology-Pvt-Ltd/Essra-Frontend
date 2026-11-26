import packaging from '@/assets/home/images/products/product-image-placeholder.svg';

export const productTabs = [
  { id: 'best-sellers', label: 'Best Sellers' },
  { id: 'favourites', label: 'Customer Favourites' },
  { id: 'new-arrivals', label: 'New Arrivals' },
];

const createProduct = (slug, name, category, tone, tabs) => ({
  id: slug,
  slug,
  name,
  category,
  tone,
  tabs,
  image: packaging,
  imageAlt: `${name}: original ESSRA packaging image not yet supplied`,
  price: null,
  weight: null,
  rating: null,
  reviewCount: null,
  description:
    'Product description, ingredients, pack size and price are awaiting approved catalogue information.',
  verified: false,
});

// Names supplied in the brief. Tab assignments are provisional merchandising data.
export const products = [
  createProduct('samba-rava', 'Samba Rava', 'breakfast', 'sage', [
    'best-sellers',
    'favourites',
  ]),
  createProduct('murukku-mix', 'Murukku Mix', 'snacks', 'peach', [
    'best-sellers',
    'new-arrivals',
  ]),
  createProduct('rice-flour', 'Rice Flour', 'flours', 'sand', [
    'best-sellers',
    'favourites',
    'new-arrivals',
  ]),
  createProduct('idiyappam-flour', 'Idiyappam Flour', 'flours', 'rose', [
    'best-sellers',
    'favourites',
    'new-arrivals',
  ]),
];
