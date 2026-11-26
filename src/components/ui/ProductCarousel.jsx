import Carousel from './Carousel';
import ProductCard from './ProductCard';

export default function ProductCarousel({ products, variant = 'compact' }) {
  return (
    <Carousel
      items={products}
      label="everyday products"
      perView={4}
      renderItem={(product) => (
        <ProductCard product={product} variant={variant} />
      )}
    />
  );
}
