import { mkdir, writeFile } from 'node:fs/promises';

const root = new URL('../src/assets/', import.meta.url);
const assets = [
  [
    'home/images/hero/indian-meal-placeholder.svg',
    'APPROVED MEAL PHOTOGRAPH',
    1000,
    800,
    '#eee3ce',
    'hero',
  ],
  [
    'home/images/products/product-image-placeholder.svg',
    'ORIGINAL PACKAGING',
    400,
    420,
    '#f6f2e9',
    'product',
  ],
  [
    'home/images/introduction/spice-composition-placeholder.svg',
    'SPICE COMPOSITION',
    720,
    740,
    '#352a25',
    'dark',
  ],
  [
    'home/images/combo-offers/offer-artwork-placeholder.svg',
    'ORIGINAL OFFER ARTWORK',
    650,
    400,
    '#ece5d4',
    'landscape',
  ],
  [
    'home/images/ingredients/ingredient-placeholder.svg',
    'INGREDIENT PHOTO',
    260,
    210,
    '#eee8d9',
    'ingredient',
  ],
  [
    'home/images/process/process-photograph-placeholder.svg',
    'PROCESS PHOTOGRAPH',
    520,
    380,
    '#e6e1d4',
    'landscape',
  ],
  [
    'home/images/signature-products/signature-photograph-placeholder.svg',
    'SIGNATURE PHOTOGRAPH',
    900,
    580,
    '#332e26',
    'dark',
  ],
  [
    'home/images/blogs/journal-photograph-placeholder.svg',
    'FOOD JOURNAL PHOTOGRAPH',
    640,
    420,
    '#ede4d4',
    'landscape',
  ],
];
for (const [path, label, width, height, bg, type] of assets) {
  const dark = type === 'dark';
  const ink = dark ? '#d9c4a4' : '#846d55';
  const cx = width / 2;
  const cy = height * 0.43;
  const radius = Math.min(width, height) * 0.23;
  const illustration =
    type === 'product'
      ? `<rect x="${cx - 63}" y="${cy - 90}" width="126" height="180" rx="8"/><path d="M${cx - 50} ${cy - 72}h100M${cx - 50} ${cy + 72}h100"/><path d="M${cx - 18} ${cy + 25}q35 -20 35 -53q-35 4 -35 53v-48m0 36q-30 -10 -30 -34q30 2 30 34"/>`
      : `<circle cx="${cx}" cy="${cy}" r="${radius}"/><circle cx="${cx}" cy="${cy}" r="${radius * 0.82}"/><path d="M${cx - radius * 0.4} ${cy + radius * 0.3}q${radius * 0.8} -${radius * 0.2} ${radius * 0.75} -${radius * 0.85}q-${radius * 0.8} 0 -${radius * 0.75} ${radius * 0.85}v-${radius * 0.55}"/>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${bg}"/><g fill="none" stroke="${ink}" stroke-width="1.4" opacity=".5">${illustration}<rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="10" stroke-dasharray="4 7"/></g><g fill="${ink}" text-anchor="middle" font-family="Arial,sans-serif"><text x="${cx}" y="${height * 0.78}" font-size="${Math.max(10, width * 0.016)}" letter-spacing="2">${label}</text><text x="${cx}" y="${height * 0.84}" font-size="${Math.max(10, width * 0.014)}">Asset placeholder · to be supplied</text></g></svg>`;
  const url = new URL(path, root);
  await mkdir(new URL('./', url), { recursive: true });
  await writeFile(url, svg);
}
await mkdir(new URL('shared/patterns/', root), { recursive: true });
await writeFile(
  new URL('shared/patterns/traditional-line-pattern.svg', root),
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><g fill="none" stroke="#702124" stroke-width=".7" opacity=".09"><path d="M80 10C40 30 40 60 80 80C120 60 120 30 80 10ZM80 80C40 100 40 130 80 150C120 130 120 100 80 80ZM10 80C30 40 60 40 80 80C60 120 30 120 10 80ZM80 80C100 40 130 40 150 80C130 120 100 120 80 80Z"/><circle cx="80" cy="80" r="28"/></g></svg>',
);
