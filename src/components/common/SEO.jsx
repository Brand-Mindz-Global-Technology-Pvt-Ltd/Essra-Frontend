import { useLocation } from 'react-router-dom';
import { site } from '@/data/site.data';

export default function SEO({
  title = site.seo.title,
  description = site.seo.description,
  noIndex = false,
}) {
  const { pathname, search } = useLocation();
  const origin = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '');
  const canonical = origin ? `${origin}${pathname}` : null;
  const robots =
    !origin || noIndex || search ? 'noindex, nofollow' : 'index, follow';
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {canonical && (
        <>
          <link rel="canonical" href={canonical} />
          <meta property="og:url" content={canonical} />
        </>
      )}
    </>
  );
}
