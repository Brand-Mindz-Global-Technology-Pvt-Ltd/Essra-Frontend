import { Link } from 'react-router-dom';

export default function CategoryCard({ category, active }) {
  const Icon = category.icon;
  return (
    <Link
      className={`category-card ${active ? 'is-active' : ''}`}
      to={`/?category=${category.slug}#featured-products`}
      aria-current={active ? 'true' : undefined}
    >
      {category.image ? (
        <img
          src={category.image}
          alt=""
          width="48"
          height="48"
          loading="lazy"
        />
      ) : (
        <Icon size={38} strokeWidth={1} aria-hidden="true" />
      )}
      <span>{category.name}</span>
    </Link>
  );
}
