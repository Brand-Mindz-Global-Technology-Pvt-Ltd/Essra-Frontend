import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '@/hooks/ShopContext';
import { formatPrice } from '@/utils/catalog';
import RatingStars from './RatingStars';

const TONE_CLASSES = {
  sage: 'bg-sage',
  peach: 'bg-peach',
  sand: 'bg-sand',
  rose: 'bg-rose',
};

export default function ProductCard({ product, variant = 'default' }) {
  const { wishlist, toggleWishlist, addToCart } = useShop();
  const wished = wishlist.includes(product.id);
  const compact = variant === 'compact';
  const toneClass = TONE_CLASSES[product.tone] || 'bg-cream';

  return (
    <article className="product-card flex h-full flex-col overflow-hidden rounded-xl border border-line/90 bg-paper shadow-[0_4px_18px_rgba(37,35,31,0.04)] transition-shadow hover:shadow-[0_10px_28px_rgba(37,35,31,0.08)]">
      <div className="relative bg-paper">
        <Link
          to={`/?product=${product.slug}`}
          aria-label={`View ${product.name}`}
          className={`block ${compact ? 'px-4 py-3' : 'px-6 pt-5 pb-4 sm:px-7'}`}
        >
          <img
            src={product.image}
            alt={product.imageAlt}
            width="400"
            height="420"
            loading="lazy"
            className="mx-auto aspect-[1/1.05] w-full object-contain transition-transform duration-200 hover:scale-[1.03]"
          />
        </Link>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={`${wished ? 'Remove' : 'Save'} ${product.name} ${wished ? 'from' : 'to'} wishlist`}
          aria-pressed={wished}
          className={`absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-line/80 bg-paper shadow-xs transition-colors hover:border-maroon focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
            wished ? 'text-brand-red' : 'text-ink/75'
          }`}
        >
          <Heart
            size={17}
            strokeWidth={1.75}
            fill={wished ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      <div
        className={`flex flex-1 flex-col justify-between ${toneClass} ${
          compact ? 'px-3.5 py-3' : 'px-4.5 pt-3.5 pb-4 sm:px-5'
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-2">
            <RatingStars
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
            {product.weight && (
              <span className="text-xs font-medium text-body">
                {product.weight}
              </span>
            )}
          </div>

          <h3
            className={`mt-1.5 font-serif font-normal leading-snug text-ink ${
              compact
                ? 'mb-2 text-[0.95rem]'
                : 'mb-3 text-[1.15rem] sm:text-[1.22rem]'
            }`}
          >
            <Link
              to={`/?product=${product.slug}`}
              className="transition-colors hover:text-brand-red focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              {product.name}
            </Link>
          </h3>
        </div>

        <div className="flex items-end justify-between gap-2">
          <div>
            {product.originalPrice != null && (
              <span className="block text-xs leading-tight text-body/80 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span
              className={`block font-bold leading-tight text-ink ${
                compact ? 'text-sm' : 'text-base sm:text-[1.05rem]'
              }`}
            >
              {formatPrice(product.price)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product.id)}
            aria-label={`Add ${product.name} to cart`}
            className={`grid flex-none place-items-center rounded-full border border-ink/25 bg-transparent text-ink transition-colors hover:border-brand-red hover:bg-brand-red hover:text-paper focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
              compact ? 'h-9 w-9' : 'h-10 w-10'
            }`}
          >
            <ShoppingCart size={compact ? 16 : 18} strokeWidth={1.65} />
          </button>
        </div>
      </div>
    </article>
  );
}
