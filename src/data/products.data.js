import sambaRavaImg from '@/assets/home/images/products/samba-rava.webp';
import murukkuMixImg from '@/assets/home/images/products/murukku-mix.webp';
import riceFlourImg from '@/assets/home/images/products/rice-flour.webp';
import idiyappamFlourImg from '@/assets/home/images/products/idiyappam-flour.webp';

export const productTabs = [
  { id: 'best-sellers', label: 'Best Sellers' },
  { id: 'favourites', label: 'Customer Favorites' },
  { id: 'new-arrivals', label: 'New Arrivals' },
];

const createProduct = ({
  slug,
  name,
  category,
  tone,
  tabs,
  image,
  price,
  originalPrice,
  weight,
  rating,
  reviewCount,
  description,
}) => ({
  id: slug,
  slug,
  name,
  category,
  tone,
  tabs,
  image,
  imageAlt: `ESSRA ${name} ${weight} pack`,
  price,
  originalPrice,
  weight,
  rating,
  reviewCount,
  description,
  verified: true,
});

export const products = [
  createProduct({
    slug: 'samba-rava',
    name: 'Samba Rava',
    category: 'breakfast',
    tone: 'sage',
    tabs: ['best-sellers', 'favourites'],
    image: sambaRavaImg,
    price: 199,
    originalPrice: 249,
    weight: '500g',
    rating: 4.8,
    reviewCount: 48,
    description:
      'Wholesome broken samba wheat milled to preserve natural fibre and nutty aroma for everyday upma, khichdi, and pongal.',
  }),
  createProduct({
    slug: 'murukku-mix',
    name: 'Murukku Mix',
    category: 'snacks',
    tone: 'peach',
    tabs: ['best-sellers', 'new-arrivals'],
    image: murukkuMixImg,
    price: 119,
    originalPrice: 199,
    weight: '500g',
    rating: 4.7,
    reviewCount: 36,
    description:
      'Authentic South Indian rice and urad dal blend for crisp, golden homemade murukku with traditional spices.',
  }),
  createProduct({
    slug: 'rice-flour',
    name: 'Rice Flour',
    category: 'flours',
    tone: 'sand',
    tabs: ['best-sellers', 'favourites', 'new-arrivals'],
    image: riceFlourImg,
    price: 111,
    originalPrice: 199,
    weight: '500g',
    rating: 4.9,
    reviewCount: 62,
    description:
      'Finely milled traditional rice flour ideal for soft idiyappam, crispy snacks, and everyday Indian cooking.',
  }),
  createProduct({
    slug: 'idiyappam-flour',
    name: 'Idiyappam Flour',
    category: 'flours',
    tone: 'rose',
    tabs: ['best-sellers', 'favourites', 'new-arrivals'],
    image: idiyappamFlourImg,
    price: 126,
    originalPrice: 189,
    weight: '500g',
    rating: 4.9,
    reviewCount: 54,
    description:
      'Specially steamed and stone-ground flour for delicate, soft string hoppers and kozhukattai in minutes.',
  }),
];
