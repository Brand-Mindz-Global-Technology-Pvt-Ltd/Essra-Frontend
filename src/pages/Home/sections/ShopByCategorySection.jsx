import { useSearchParams } from 'react-router-dom';
import CategoryCard from '@/components/ui/CategoryCard';
import { categories } from '@/data/categories.data';
import { home } from '@/data/home.data';

export default function ShopByCategorySection() {
  const [params] = useSearchParams();
  return (
    <section
      className="border-b border-line/60 bg-paper py-10 sm:py-12"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <h2
          id="categories-heading"
          className="flex items-center justify-center gap-4 font-sans text-sm font-bold tracking-[0.2em] text-maroon uppercase sm:gap-6 sm:text-base"
        >
          <span className="h-px w-8 bg-maroon/40 sm:w-14" aria-hidden="true" />
          <span>{home.categoryHeading}</span>
          <span className="h-px w-8 bg-maroon/40 sm:w-14" aria-hidden="true" />
        </h2>

        <div className="grid grid-cols-2 gap-4 pt-7 sm:grid-cols-4 lg:grid-cols-8 lg:gap-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
              active={category.slug === params.get('category')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
