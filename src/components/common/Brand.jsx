import { Link } from 'react-router-dom';
import { site } from '@/data/site.data';

export default function Brand() {
  return (
    <Link to="/" className="brand" aria-label={`${site.name} home`}>
      {site.logo ? (
        <img src={site.logo} alt={site.name} width="120" height="44" />
      ) : (
        <>
          <span>{site.name}</span>
          <small>{site.tagline}</small>
        </>
      )}
    </Link>
  );
}
