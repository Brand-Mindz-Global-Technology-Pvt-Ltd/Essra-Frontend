import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, UserRound, Menu, X, Search } from 'lucide-react';
import Container from '@/components/ui/Container';
import { navigation } from '@/data/navigation.data';
import Brand from '@/components/common/Brand';
import { useShop } from '@/hooks/ShopContext';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount, wishlist } = useShop();
  function search(event) {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get('search').trim();
    navigate(
      query
        ? `/?q=${encodeURIComponent(query)}#featured-products`
        : '/?shop=all#featured-products',
    );
    setMenuOpen(false);
  }
  function panel(view) {
    const params = new URLSearchParams(location.search);
    ['product', 'article', 'policy'].forEach((key) => params.delete(key));
    params.set('view', view);
    return `/?${params}${location.hash}`;
  }
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setMenuOpen(false);
      }}
    >
      <Container className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              aria-current={
                `${location.pathname}${location.search}${location.hash}` ===
                item.to
                  ? 'location'
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <form className="header-search" role="search" onSubmit={search}>
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <input
            id="product-search"
            name="search"
            type="search"
            placeholder="Search products"
            maxLength={100}
          />
          <button type="submit" aria-label="Search products">
            <Search size={17} />
          </button>
        </form>
        <div className="header-actions">
          <Link
            className="header-icon"
            to={panel('wishlist')}
            aria-label={`Wishlist, ${wishlist.length} items`}
          >
            <Heart size={21} />
            {wishlist.length > 0 && (
              <span className="count-badge">{wishlist.length}</span>
            )}
          </Link>
          <Link
            className="header-icon"
            to={panel('cart')}
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <ShoppingBag size={21} />
            {cartCount > 0 && <span className="count-badge">{cartCount}</span>}
          </Link>
          <Link
            className="header-icon account-icon"
            to={panel('account')}
            aria-label="Your account"
          >
            <UserRound size={21} />
          </Link>
          <button
            className="header-icon"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>
      {menuOpen && <MobileMenu onNavigate={() => setMenuOpen(false)} />}
    </header>
  );
}
