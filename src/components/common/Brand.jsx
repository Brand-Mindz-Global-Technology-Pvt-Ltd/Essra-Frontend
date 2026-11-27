import { Link } from 'react-router-dom';
import { site } from '@/data/site.data';

export default function Brand() {
  return (
    <Link
      to="/"
      className="brand inline-flex flex-none flex-col items-center leading-none text-paper focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-paper"
      aria-label={`${site.name} home`}
    >
      {site.logo ? (
        <img
          src={site.logo}
          alt={site.name}
          width="112"
          height="44"
          className="h-9 w-auto object-contain sm:h-10"
        />
      ) : (
        <>
          <span className="font-serif text-[2.15rem] tracking-[0.1em]">
            {site.name}
          </span>
          <small className="mt-2 text-[0.45rem] tracking-[0.2em]">
            {site.tagline}
          </small>
        </>
      )}
    </Link>
  );
}
