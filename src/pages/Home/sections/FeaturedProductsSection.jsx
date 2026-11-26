import { Link, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
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
    <section id="featured-products" className="section featured-section">
      <Container>
        <div className="section-heading-row">
          <SectionHeading {...home.featured} />
          <Link className="text-link" to={home.featured.actionUrl}>
            {home.featured.actionText} <ArrowUpRight size={16} />
          </Link>
        </div>
        <div
          className="product-tabs"
          role="group"
          aria-label="Filter featured products"
        >
          {productTabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => selectTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={activeTab === tab.id ? 'is-active' : ''}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {(query || category) && (
          <div className="filter-summary">
            <span>
              {query
                ? `Search: “${query}”`
                : categories.find((item) => item.slug === category)?.name ||
                  category}
            </span>
            <Link to="/?shop=all#featured-products" className="text-link">
              Clear filters <X size={15} />
            </Link>
          </div>
        )}
        <p className="sr-only" role="status" aria-live="polite">
          {visibleProducts.length} products found
        </p>
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {visibleProducts.length === 0 && (
          <div className="empty-state">
            <h3>No products found.</h3>
            <p>Try another search, category or product filter.</p>
            <Link className="text-link" to="/?shop=all#featured-products">
              Browse all products
            </Link>
          </div>
        )}
        <p className="content-note">{home.featured.note}</p>
      </Container>
    </section>
  );
}
