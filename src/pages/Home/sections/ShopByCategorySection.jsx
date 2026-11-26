import { useSearchParams } from 'react-router-dom';
import Container from '@/components/ui/Container';
import CategoryCard from '@/components/ui/CategoryCard';
import { categories } from '@/data/categories.data';
import { home } from '@/data/home.data';

export default function ShopByCategorySection() {
  const [params] = useSearchParams();
  return (
    <section
      className="categories-section"
      aria-labelledby="categories-heading"
    >
      <Container>
        <h2 className="line-heading" id="categories-heading">
          <span>{home.categoryHeading}</span>
        </h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
              active={category.slug === params.get('category')}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
