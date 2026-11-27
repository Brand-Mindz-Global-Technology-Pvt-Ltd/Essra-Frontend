import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, UserRound, Menu, X, Search } from 'lucide-react';
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

  const iconButtonClass =
    'relative inline-flex h-10 w-10 items-center justify-center rounded-lg text-paper transition-colors hover:bg-white/10 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-paper';

  const badgeClass =
    'absolute top-0.5 right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-paper px-1 text-[0.6rem] font-semibold leading-none text-maroon';

  return (
    <header
      className="relative z-20 bg-maroon text-paper"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setMenuOpen(false);
      }}
    >
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1360px] flex-wrap items-center gap-x-4 gap-y-3 px-6 py-3 sm:px-10 md:flex-nowrap md:gap-5 lg:min-h-[84px] lg:gap-7 lg:px-14 xl:px-16">
        <Brand />

        <nav
          className="mr-auto ml-2 hidden items-center gap-5 whitespace-nowrap lg:flex xl:ml-6 xl:gap-8"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const isCurrent =
              `${location.pathname}${location.search}${location.hash}` ===
              item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                aria-current={isCurrent ? 'location' : undefined}
                className={`py-2 text-sm font-normal text-paper transition-colors hover:underline hover:underline-offset-7 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-paper ${
                  isCurrent ? 'underline underline-offset-7' : ''
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <form
          className="order-3 flex w-full basis-full items-center overflow-hidden rounded-full bg-paper text-ink md:order-none md:ml-auto md:w-[230px] md:basis-auto lg:ml-0 lg:w-[240px] xl:w-[265px]"
          role="search"
          onSubmit={search}
        >
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <input
            id="product-search"
            name="search"
            type="search"
            placeholder="Search the Product"
            maxLength={100}
            className="w-full min-w-0 bg-transparent py-2 pr-1 pl-5 text-xs text-ink placeholder:text-center placeholder:text-ink/80 focus:outline-none md:text-[0.8rem]"
          />
          <button
            type="submit"
            aria-label="Search products"
            className="grid h-9 w-10 flex-none place-items-center rounded-r-full text-maroon transition-colors hover:text-brand-red focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-maroon"
          >
            <Search size={17} strokeWidth={1.8} />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-0.5 md:ml-0 md:gap-1">
          <Link
            className={iconButtonClass}
            to={panel('wishlist')}
            aria-label={`Wishlist, ${wishlist.length} items`}
          >
            <Heart size={20} strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span className={badgeClass}>{wishlist.length}</span>
            )}
          </Link>
          <Link
            className={iconButtonClass}
            to={panel('cart')}
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <ShoppingCart size={20} strokeWidth={1.5} />
            {cartCount > 0 && <span className={badgeClass}>{cartCount}</span>}
          </Link>
          <Link
            className={`${iconButtonClass} hidden min-[380px]:inline-flex`}
            to={panel('account')}
            aria-label="Your account"
          >
            <UserRound size={20} strokeWidth={1.5} />
          </Link>
          <button
            className={iconButtonClass}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <X size={22} strokeWidth={1.6} />
            ) : (
              <Menu size={22} strokeWidth={1.6} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && <MobileMenu onNavigate={() => setMenuOpen(false)} />}
    </header>
  );
}
