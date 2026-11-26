import { writeFile } from 'node:fs/promises';

const raw = process.argv[2] || process.env.VITE_SITE_URL;
if (!raw)
  throw new Error(
    'Supply the verified production origin: npm run seo:generate -- https://your-domain',
  );
const url = new URL(raw);
if (
  url.protocol !== 'https:' ||
  url.username ||
  url.password ||
  url.pathname !== '/' ||
  url.search ||
  url.hash
) {
  throw new Error(
    'Use a plain HTTPS origin without a path, credentials, query or fragment.',
  );
}
const origin = url.origin;
const xmlOrigin = origin
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('"', '&quot;');
await writeFile(
  new URL('../public/robots.txt', import.meta.url),
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);
await writeFile(
  new URL('../public/sitemap.xml', import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${xmlOrigin}/</loc></url></urlset>\n`,
);
process.stdout.write(
  'Generated production robots.txt and sitemap.xml. Configure the same VITE_SITE_URL before building.\n',
);
