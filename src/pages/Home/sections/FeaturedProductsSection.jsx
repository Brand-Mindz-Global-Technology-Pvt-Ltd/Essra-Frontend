import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products, productTabs } from '@/data/products.data';
import { categories } from '@/data/categories.data';
import { filterProducts } from '@/utils/catalog';
import { home } from '@/data/home.data';

export default function FeaturedProductsSection() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const category = params.get('category') || '';
  const requestedTab = params.get('tab');
  const activeTab =
    requestedTab && productTabs.some((tab) => tab.id === requestedTab)
      ? requestedTab
      : params.has('shop') || query || category
        ? ''
        : 'best-sellers';
  const visibleProducts = filterProducts(products, {
    query,
    category,
    tab: activeTab,
  });

  function selectTab(id) {
    const next = new URLSearchParams(params);
    next.set('tab', id);
    next.delete('shop');
    setParams(next, { preventScrollReset: true });
  }

  return (
    <section
      id="featured-products"
      className="bg-cream py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-6">
          <h2 className="font-serif text-[2.4rem] leading-[1.1] font-normal tracking-[-0.02em] text-ink sm:text-[2.85rem] lg:text-[3.1rem]">
            {home.featured.title}{' '}
            <em className="font-serif font-normal italic text-brand-red">
              {home.featured.highlight}
            </em>
          </h2>
          <Link
            to={home.featured.actionUrl}
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-maroon transition-colors hover:text-brand-red hover:underline hover:underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            <span>{home.featured.actionText}</span>
            <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <div
          className="product-tabs mt-6 mb-8 flex flex-wrap gap-3 sm:gap-4"
          role="group"
          aria-label="Filter featured products"
        >
          {productTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => selectTab(tab.id)}
                aria-pressed={isActive}
                className={`min-h-[42px] rounded-full bg-paper px-6 py-2 text-sm font-medium text-ink shadow-[0_6px_18px_rgba(37,35,31,0.08)] transition-all focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-red sm:px-7 ${
                  isActive
                    ? 'border border-brand-red shadow-[0_8px_22px_rgba(191,0,19,0.12)]'
                    : 'border border-line/80 hover:border-maroon/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {(query || category) && (
          <div className="filter-summary mb-5 flex items-center justify-between gap-4 text-sm text-body">
            <span>
              {query
                ? `Search: “${query}”`
                : categories.find((item) => item.slug === category)?.name ||
                  category}
            </span>
            <Link
              to="/?shop=all#featured-products"
              className="inline-flex min-h-[40px] items-center gap-1.5 font-medium text-brand-red hover:text-maroon hover:underline hover:underline-offset-4"
            >
              Clear filters <X size={15} />
            </Link>
          </div>
        )}

        <p className="sr-only" role="status" aria-live="polite">
          {visibleProducts.length} products found
        </p>

        <div className="product-grid grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleProducts.length === 0 && (
          <div className="py-10 text-center">
            <h3 className="font-serif text-2xl text-ink">No products found.</h3>
            <p className="my-3 text-sm text-body">
              Try another search, category or product filter.
            </p>
            <Link
              to="/?shop=all#featured-products"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-brand-red hover:text-maroon hover:underline hover:underline-offset-4"
            >
              Browse all products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
