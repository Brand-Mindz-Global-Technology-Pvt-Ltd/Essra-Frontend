import { Link } from 'react-router-dom';

export default function CategoryCard({ category, active }) {
  const Icon = category.icon;
  return (
    <Link
      to={`/?category=${category.slug}#featured-products`}
      aria-current={active ? 'true' : undefined}
      className={`group flex flex-col items-center gap-3 border-b-2 px-1 py-2 text-center transition-colors focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red ${
        active
          ? 'border-brand-red text-brand-red'
          : 'border-transparent text-ink hover:border-brand-red hover:text-brand-red'
      }`}
    >
      {category.image ? (
        <img
          src={category.image}
          alt=""
          width="52"
          height="52"
          loading="lazy"
          className="h-12 w-12 object-contain"
        />
      ) : (
        <Icon className="h-12 w-12 transition-transform duration-200 group-hover:-translate-y-0.5" />
      )}
      <span className="text-xs font-medium leading-snug text-ink group-hover:text-brand-red">
        {category.name}
      </span>
    </Link>
  );
}
