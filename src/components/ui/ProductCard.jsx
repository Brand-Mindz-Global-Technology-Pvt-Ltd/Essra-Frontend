import { Heart, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '@/hooks/ShopContext';
import { formatPrice } from '@/utils/catalog';
import RatingStars from './RatingStars';

export default function ProductCard({ product, variant = 'default' }) {
  const { wishlist, toggleWishlist, addToCart } = useShop();
  const wished = wishlist.includes(product.id);
  return (
    <article
      className={`product-card product-card--${variant} tone-${product.tone}`}
    >
      <div className="product-image-wrap">
        <Link
          to={`/?product=${product.slug}`}
          aria-label={`View ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.imageAlt}
            width="400"
            height="420"
            loading="lazy"
          />
        </Link>
        <button
          className={`icon-button wishlist-toggle ${wished ? 'is-wished' : ''}`}
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={`${wished ? 'Remove' : 'Save'} ${product.name} ${wished ? 'from' : 'to'} wishlist`}
          aria-pressed={wished}
        >
          <Heart size={18} fill={wished ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="product-info">
        <RatingStars
          rating={product.rating}
          reviewCount={product.reviewCount}
        />
        <h3>
          <Link to={`/?product=${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="product-bottom">
          <span className="product-price">{formatPrice(product.price)}</span>
          <button
            className="add-button"
            type="button"
            onClick={() => addToCart(product.id)}
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus size={19} />
          </button>
        </div>
      </div>
    </article>
  );
}
