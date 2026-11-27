import { Timer, Feather, Luggage, CookingPot } from 'lucide-react';
import usp1 from '@/assets/home/USP-1.webp';
import usp2 from '@/assets/home/USP-2.webp';
import usp3 from '@/assets/home/USP-3.webp';
import usp4 from '@/assets/home/USP-4.webp';
import heroImage from '@/assets/home/images/hero/hero-meal.jpg';
import introductionImage from '@/assets/home/Carefully arranged Indian spices and natural ingredients.webp';
import sambaRavaIngImage from '@/assets/home/images/ingredients/samba-rava.jpg';
import ragiIngImage from '@/assets/home/images/ingredients/ragi.jpg';
import thoothuvalaiIngImg from '@/assets/home/Thoothuvalai.webp';
import bajraIngImg from '@/assets/home/Bajra (Pearl Millet).webp';
import murungaiIngImg from '@/assets/home/Murungai (Moringa).webp';
import mudakathanIngImg from '@/assets/home/Mudakathan Leaf.webp';
import manathakkaliIngImg from '@/assets/home/Manathakkali.webp';
import agathiIngImg from '@/assets/home/Agathi Leaf.webp';
import heroBgImage from '@/assets/home/Hero-bg.webp';
import dosaComboBanner from '@/assets/home/images/combo-offers/dosa-combo-banner.jpg';
import idiyappamImg from '@/assets/home/Idiyappam.webp';
import sambaRavaFoodImg from '@/assets/home/Samba-Rava.webp';
import murrukuFoodImg from '@/assets/home/Murruku.webp';
import riceFlourFoodImg from '@/assets/home/Rice-flour.webp';
import offerImage from '@/assets/home/Group 1437257017.webp';
import processFarmer from '@/assets/home/authentic_indian_farmer_in_traditional_attire_standing_in_lush_organic_green 1.webp';
import processSelection from '@/assets/home/close_up_shot_of_hands_carefully_sorting_and_inspecting_fresh_vibrant_green 1.webp';
import processDrying from '@/assets/home/traditional_hygienic_shade_drying_process_of_fresh_aromatic_green_culinary 1.webp';
import processMilling from '@/assets/home/artisanal_stone_grinding_and_milling_process_fine_textured_vibrant_natural 1.webp';
import processPacking from '@/assets/home/Group 1437256993.webp';

// Re-export introductionImage as signatureImage (same spice composition photo)
const signatureImage = introductionImage;
// Re-export heroImage for journal cards
const heroMealImage = heroImage;

export const home = {
  categoryHeading: 'SHOP BY CATEGORY',
  featured: {
    title: 'Find Goodness for',
    highlight: 'Every Meal.',
    actionText: 'Taste All The Tradition',
    actionUrl: '/?shop=all#featured-products',
    note: '',
  },
  hero: {
    eyebrow: "ESSRA • IT'S YOUR HEALTHY FOOD",
    title: 'Tradition you can taste.',
    highlight: 'Quality you can trust.',
    description:
      'Made with carefully selected ingredients and authentic recipes, ESSRA brings wholesome Indian flavours to every table.',
    buttonText: 'Explore Products',
    buttonUrl: '/?shop=all#featured-products',
    image: heroImage,
    imageAlt:
      'Traditional Indian thali meal with chapatis, puris, saffron pulao, curries and ESSRA Whole Wheat Chapati pack',
  },
  benefits: [
    { label: 'Instant Ready', icon: Timer, image: usp1 },
    { label: 'Light Weight', icon: Feather, image: usp2 },
    { label: 'Travel Friendly', icon: Luggage, image: usp3 },
    { label: 'One Pot Recipe', icon: CookingPot, image: usp4 },
  ],
  introduction: {
    eyebrow: 'LOVE TRADITIONAL FOOD, BUT SHORT ON TIME?',
    title: 'Past the following content',
    highlight: 'in the segment!',
    description:
      '"We all love traditional South Indian breakfasts, but soaking, grinding and preparing ingredients can make busy mornings challenging. ESSRA makes it easier to enjoy traditional flavours with convenient choices across our Dosa Varieties, Chutney Varieties and Upma Varieties – bringing more variety to your breakfast without the hassle of sourcing and preparing multiple ingredients"',
    badge: 'Made with care',
    badgeSub: 'SINCE DAY ONE',
    quote:
      '"Less preparation hassle. More traditional flavours. More variety on your table."',
    image: introductionImage,
    imageAlt:
      'Artistic arrangement of Indian spices — red chili powder, turmeric, cardamom, cumin and dried chilies on a dark surface',
  },
  offers: [
    {
      id: 'dosa-combo',
      eyebrow: 'AUTHENTIC SOUTH RECIPE',
      titleLead: 'BUY 3',
      titleAccent: 'HEALTHY',
      titleLine2: 'DOSA POWDERS',
      highlight: 'Get 1 Chutney Powder',
      badgeText: 'FREE!',
      image: offerImage,
      imageAlt:
        'ESSRA Traditional Healthy Dosa Powder pouches with a free Gunpowder Chutney Podi pouch and crispy dosa',
      buttonText: 'TASTE NOW',
      buttonUrl: '/?shop=all#featured-products',
    },
    {
      id: 'breakfast-trio',
      eyebrow: 'EVERYDAY TRADITION',
      titleLead: 'SOUTH INDIAN',
      titleAccent: 'BREAKFAST',
      titleLine2: 'VALUE PACK',
      highlight: 'Save 20% on 4-Pack Combo',
      badgeText: 'SAVE 20%',
      image: offerImage,
      imageAlt:
        'ESSRA South Indian breakfast combo pack with dosa and chutney powders',
      buttonText: 'TASTE NOW',
      buttonUrl: '/?category=breakfast#featured-products',
    },
    {
      id: 'family-pantry',
      eyebrow: 'WHOLESOME ESSENTIALS',
      titleLead: 'COMPLETE',
      titleAccent: 'FAMILY',
      titleLine2: 'PANTRY BUNDLE',
      highlight: 'Free Shipping Across Germany',
      badgeText: 'FREE SHIP',
      image: offerImage,
      imageAlt: 'ESSRA wholesome family pantry bundle',
      buttonText: 'TASTE NOW',
      buttonUrl: '/?shop=all#featured-products',
    },
  ],
  ingredients: {
    title: 'Why families',
    highlight: 'Choose ESSRA.',
    subtitle:
      'Thoughtful choices, honest food and a standard of quality your family can trust.',
    eyebrow: 'OUR INGREDIENTS',
    introTitle: 'Wholesome Ingredients.',
    introHighlight: 'Rooted in Nature.',
    linkText: 'Explore All Our Ingredients',
    items: [
      [
        'samba-rava',
        'Samba Rava (Broken wheat)',
        'Easy to digest, hearty staple rich in complex fibre for nourishing meals.',
        sambaRavaIngImage,
      ],
      [
        'ragi',
        'Ragi (Finger Millet)',
        'The undisputed champion of calcium builds strong bones.',
        ragiIngImage,
      ],
      [
        'thoothuvalai',
        'Thoothuvalai (Climbing Leaf)',
        'Ancient herbal defense for clear respiratory wellness & strength.',
        thoothuvalaiIngImg,
      ],
      [
        'bajra',
        'Bajra (Pearl Millet)',
        'Slow-burning carbohydrates and iron to power productive days.',
        bajraIngImg,
      ],
      [
        'murungai-poo',
        'Murungai Poo (Moringa Flower)',
        'Fragrant, delicate blooms packed with amino acids and natural antioxidants.',
        murungaiIngImg,
      ],
      [
        'modakathan-leaf',
        'Modakathan Leaf (Ballon Plant)',
        'Supports natural joint flexibility, mobility, and healthy movement.',
        mudakathanIngImg,
      ],
      [
        'manathakkali',
        'Manathakkali (Wonderberry)',
        'Soothes delicate stomach lining, aids mouth comfort, and cools inner heat.',
        manathakkaliIngImg,
      ],
      [
        'agathi-leaf',
        'Agathi Leaf (Agave Leaf)',
        'Traditionally recognized to fortify heart health, rich in minerals and fibre.',
        agathiIngImg,
      ],
    ].map(([id, name, description, image]) => ({
      id,
      name,
      description,
      image,
      imageAlt: name,
    })),
  },
  process: {
    eyebrow: 'OUR PROCESS',
    title: 'From',
    highlight: 'Farm to Your Plate.',
    items: [
      [
        'sourcing',
        'Sourced from Local Farmers',
        'Fresh, quality ingredients sourced directly from trusted local farmers',
      ],
      [
        'selection',
        'Careful Selection & Cleaning',
        'Every ingredient is carefully cleaned and inspected for best quality',
      ],
      [
        'drying',
        'Natural Shade Drying',
        'Naturally shade-dried to preserve authentic aroma, colour and nutrients',
      ],
      [
        'milling',
        'Gentle Low-Heat Milling',
        'Slowly milled at low heat to retain goodness and nutrition',
      ],
      [
        'packing',
        'Hygienic Fresh Packing',
        'Packed in airtight pouches to lock in aroma, freshness and purity',
      ],
    ].map(([id, title, description], i) => ({
      id,
      title,
      description,
      number: String(i + 1).padStart(2, '0'),
      image: [processFarmer, processSelection, processDrying, processMilling, processPacking][i],
      imageAlt: `${title} process step`,
    })),
  },
  signature: [
    {
      id: 'signature-pantry',
      number: '01',
      eyebrow: 'SIGNATURE PRODUCT',
      description:
        'Ingredients are more than a list. They are the beginning of every aroma, every flavour, every meal shared at home.',
      benefit: 'Thoughtfully sourced and carefully considered.',
      image: signatureImage,
      imageAlt:
        'Overhead photograph of fresh Indian spices, herbs, ginger, garlic and chillies arranged on a rustic light wood surface',
    },
    {
      id: 'signature-tradition',
      number: '02',
      eyebrow: 'SIGNATURE PRODUCT',
      description:
        'Every ESSRA blend honours authentic South Indian kitchen traditions without preservatives or shortcuts.',
      benefit: 'Prepared in small batches for authentic home taste.',
      image: signatureImage,
      imageAlt:
        'Traditional Indian spices and whole grains prepared for ESSRA signature blends',
    },
    {
      id: 'signature-convenience',
      number: '03',
      eyebrow: 'SIGNATURE PRODUCT',
      description:
        'From busy weekday mornings to comforting family dinners, wholesome cooking becomes effortless.',
      benefit: 'Ready in minutes with zero compromise on nutrition.',
      image: signatureImage,
      imageAlt: 'ESSRA wholesome ingredients ready for everyday home cooking',
    },
  ],
  essentials: {
    eyebrow: 'ESSENTIAL PANTRY',
    title: 'Everyday Essentials,',
    highlight: 'Naturally Good.',
    quote: '"The goodness of tradition, made for every day."',
    description:
      'Stone-milled heirloom pantry staples crafted in authentic heritage tradition. Unadulterated purity, honest nutrition, and family wellness in every spoonful.',
    buttonText: 'SEE ALL PRODUCTS',
    buttonUrl: '/?shop=all#featured-products',
  },
  testimonials: {
    title: 'Proof in',
    highlight: 'Every Meal.',
    items: [
      {
        id: 'review-1',
        rating: 5,
        quote:
          'The packaging keeps our masala fresh, aromatic, and shelf-ready with a premium look customers trust.',
        author: 'Zareena Begum',
        role: 'Soft Engineer, Bangalore.',
      },
      {
        id: 'review-2',
        rating: 5,
        quote:
          'The packaging keeps our masala fresh, aromatic, and shelf-ready with a premium look customers trust.',
        author: 'Zareena Begum',
        role: 'Soft Engineer, Bangalore.',
      },
      {
        id: 'review-3',
        rating: 5,
        quote:
          'The packaging keeps our masala fresh, aromatic, and shelf-ready with a premium look customers trust.',
        author: 'Zareena Begum',
        role: 'Soft Engineer, Bangalore.',
      },
      {
        id: 'review-4',
        rating: 5,
        quote:
          'The packaging keeps our masala fresh, aromatic, and shelf-ready with a premium look customers trust.',
        author: 'Zareena Begum',
        role: 'Soft Engineer, Bangalore.',
      },
    ],
  },
  journal: {
    title: 'Food',
    highlight: 'Journal',
    items: [
      [
        'pantry',
        'The Art of Slow Fermentation: Crafting the Crispiest Heirloom Dosa & Idly Podi',
        'From balancing urad dal proportions in European kitchens to tempering curry leaves in unrefined sesame oil — unlock the authentic texture of...',
      ],
      [
        'breakfast',
        'The Art of Slow Fermentation: Crafting the Crispiest Heirloom Dosa & Idly Podi',
        'From balancing urad dal proportions in European kitchens to tempering curry leaves in unrefined sesame oil — unlock the authentic texture of...',
      ],
      [
        'recipes',
        'The Art of Slow Fermentation: Crafting the Crispiest Heirloom Dosa & Idly Podi',
        'From balancing urad dal proportions in European kitchens to tempering curry leaves in unrefined sesame oil — unlock the authentic texture of...',
      ],
    ].map(([slug, title, description], i) => ({
      slug,
      title,
      description,
      image: [dosaComboBanner, heroMealImage, dosaComboBanner][i],
      imageAlt: title,
      body: 'From balancing urad dal proportions in European kitchens to tempering curry leaves in unrefined sesame oil, slow fermentation brings out the authentic crispness and aroma of traditional South Indian dosas.',
      isDraft: false,
    })),
  },
};
