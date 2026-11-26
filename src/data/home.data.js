import { Timer, Feather, Luggage, CookingPot, Sprout } from 'lucide-react';
import heroImage from '@/assets/home/images/hero/indian-meal-placeholder.svg';
import introductionImage from '@/assets/home/images/introduction/spice-composition-placeholder.svg';
import ingredientImage from '@/assets/home/images/ingredients/ingredient-placeholder.svg';
import processImage from '@/assets/home/images/process/process-photograph-placeholder.svg';
import signatureImage from '@/assets/home/images/signature-products/signature-photograph-placeholder.svg';
import journalImage from '@/assets/home/images/blogs/journal-photograph-placeholder.svg';
import offerImage from '@/assets/home/images/combo-offers/offer-artwork-placeholder.svg';

export const home = {
  categoryHeading: 'SHOP BY CATEGORY',
  featured: {
    title: 'Find Goodness for',
    highlight: 'Every Meal.',
    actionText: 'View All Products',
    actionUrl: '/?shop=all#featured-products',
    note: 'Catalogue preview · product imagery, pricing and merchandising awaiting approval.',
  },
  hero: {
    eyebrow: 'FROM OUR TRADITION TO YOUR TABLE',
    title: 'Tradition you can taste.',
    highlight: 'Quality you can trust.',
    description:
      'Bring the familiar flavours of Indian cooking to your everyday table. Discover a pantry inspired by tradition and made for the way you cook today.',
    buttonText: 'Explore Products',
    buttonUrl: '/?shop=all#featured-products',
    image: heroImage,
    imageAlt:
      'Placeholder for approved Indian meal photograph with chapati, accompaniments and ESSRA packaging',
  },
  benefits: [
    { label: 'Instant Ready', icon: Timer },
    { label: 'Light Weight', icon: Feather },
    { label: 'Travel Friendly', icon: Luggage },
    { label: 'One Pot Recipe', icon: CookingPot },
  ],
  introduction: {
    eyebrow: 'THE ESSRA WAY',
    title: 'Past the following content',
    highlight: 'in the segment!',
    description:
      'Traditional food, carefully selected ingredients and the convenience of an everyday pantry. This introduction is draft copy awaiting the approved ESSRA brand story.',
    quote: 'Familiar flavours. Everyday moments.',
    image: introductionImage,
    imageAlt:
      'Placeholder for dark photograph of red chillies, turmeric, spices and seeds',
  },
  offers: [
    {
      id: 'dosa-combo',
      eyebrow: 'AUTHENTIC SOUTH RECIPE',
      title: 'Buy 3 Healthy Dosa Powders',
      highlight: 'Get 1 Chutney Powder FREE!',
      note: 'Reference offer · availability and terms awaiting confirmation',
      image: offerImage,
      imageAlt:
        'Placeholder for original ESSRA dosa powder promotional packaging artwork',
      buttonText: 'Explore Products',
      buttonUrl: '/?shop=all#featured-products',
    },
  ],
  ingredients: {
    title: 'Why families',
    highlight: 'Choose ESSRA.',
    subtitle:
      'A closer look at the ingredients behind familiar Indian flavours.',
    eyebrow: 'OUR INGREDIENTS',
    introTitle: 'Wholesome Ingredients.',
    introHighlight: 'Rooted in Nature.',
    linkText: 'Explore All Our Ingredients',
    note: 'Illustrative ingredient list · product-specific ingredients pending approval',
    items: [
      ['traditional-rice', 'Traditional Rice', 'A familiar pantry staple.'],
      ['little-millet', 'Little Millet', 'Discover traditional grains.'],
      ['finger-millet', 'Finger Millet', 'For everyday recipe inspiration.'],
      ['green-gram', 'Green Gram', 'A staple of home cooking.'],
      ['red-chillies', 'Red Chillies', 'Colour and warmth in the kitchen.'],
      ['turmeric', 'Turmeric', 'An ingredient rooted in tradition.'],
      ['curry-leaves', 'Curry Leaves', 'A familiar aromatic ingredient.'],
      ['cumin', 'Cumin', 'A classic spice cupboard essential.'],
    ].map(([id, name, description]) => ({
      id,
      name,
      description,
      image: ingredientImage,
      imageAlt: `${name} photograph pending`,
    })),
  },
  process: {
    eyebrow: 'OUR PROCESS',
    title: 'From',
    highlight: 'Farm to Your Plate.',
    note: 'Process shown in the brief · operational details awaiting verification',
    items: [
      [
        'sourcing',
        'Sourced from Local Farmers',
        'Sourcing information will be added after confirmation.',
      ],
      [
        'selection',
        'Careful Selection & Cleaning',
        'Selection and cleaning details await approval.',
      ],
      [
        'drying',
        'Natural Shade Drying',
        'Drying methods require confirmation from ESSRA.',
      ],
      [
        'milling',
        'Gentle Low Heat Milling',
        'Milling specifications will be added once verified.',
      ],
    ].map(([id, title, description], i) => ({
      id,
      title,
      description,
      number: i + 1,
      image: processImage,
      imageAlt: `Approved ${title.toLowerCase()} photograph pending`,
    })),
  },
  signature: [
    {
      id: 'signature-pantry',
      eyebrow: 'SIGNATURE PRODUCT',
      title: 'A little tradition,',
      highlight: 'in every kitchen.',
      description:
        'Explore the flavours and pantry essentials at the heart of ESSRA. Approved signature product details will be added here.',
      benefit: 'Product benefit awaiting approval',
      icon: Sprout,
      image: signatureImage,
      imageAlt:
        'Placeholder for overhead photograph of Indian spices and ESSRA signature products',
    },
  ],
  essentials: {
    eyebrow: 'ESSENTIAL PANTRY',
    title: 'Everyday Essentials,',
    highlight: 'Naturally Good.',
    description:
      'Make room for familiar favourites. Explore everyday ingredients and mixes for the meals you love to make.',
    buttonText: 'See All Products',
    buttonUrl: '/?shop=all#featured-products',
  },
  testimonials: {
    title: 'Proof in',
    highlight: 'Every Meal.',
    items: [],
    emptyTitle: 'Your stories belong here.',
    emptyDescription:
      'Approved customer reviews will appear here. No ratings or testimonials have been supplied yet.',
  },
  journal: {
    title: 'Food',
    highlight: 'Journal',
    items: [
      [
        'pantry',
        'The traditional Indian pantry',
        'A space for stories about ingredients, familiar flavours and everyday cooking.',
      ],
      [
        'breakfast',
        'A place for breakfast traditions',
        'Explore the inspiration behind comforting starts to the day.',
      ],
      [
        'recipes',
        'From our kitchen to yours',
        'Recipe ideas and cooking stories will be shared here.',
      ],
    ].map(([slug, title, description]) => ({
      slug,
      title,
      description,
      image: journalImage,
      imageAlt: `Food journal photograph pending: ${title}`,
      body: 'This is an editorial placeholder. The approved article and recipe content have not been supplied.',
      isDraft: true,
    })),
  },
};
