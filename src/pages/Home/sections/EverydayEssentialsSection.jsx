import { ArrowRight, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '@/hooks/ShopContext';
import { home } from '@/data/home.data';
import { products } from '@/data/products.data';
import { formatPrice } from '@/utils/catalog';
import patternBg from '@/assets/shared/patterns/traditional-line-pattern.svg';

const ESSENTIAL_META = {
  'samba-rava': { tag: 'GRAIN', subtitle: 'High fibre roasted..' },
  'murukku-mix': { tag: 'SNACK', subtitle: 'Authentic crunchy..' },
  'rice-flour': { tag: 'STAPLE', subtitle: 'Ultra-fine ground for..' },
  'idiyappam-flour': { tag: 'CLASSIC', subtitle: 'Pre-steamed for..' },
};

export default function EverydayEssentialsSection() {
  const { wishlist, toggleWishlist, addToCart } = useShop();
  const content = home.essentials;

  return (
    <section
      id="everyday-essentials"
      className="relative overflow-hidden bg-cream py-14 sm:py-16 lg:py-20"
      aria-labelledby="everyday-essentials-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-55"
        style={{ backgroundImage: `url(${patternBg})` }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[28%_1fr] lg:gap-10 xl:gap-12">
          <div>
            <p className="flex items-center gap-3 font-sans text-xs font-bold tracking-[0.16em] text-brand-red uppercase">
              <span className="h-px w-6 bg-brand-red/70" aria-hidden="true" />
              <span>{content.eyebrow}</span>
            </p>

            <h2
              id="everyday-essentials-heading"
              className="mt-4 font-serif text-[2.2rem] leading-[1.08] font-normal tracking-[-0.015em] text-ink sm:text-[2.6rem] lg:text-[2.95rem]"
            >
              {content.title}
              <em className="mt-1 block font-serif font-normal italic text-brand-red">
                {content.highlight}
              </em>
            </h2>

            {content.quote && (
              <p className="mt-5 font-sans text-sm font-medium text-ink/90">
                {content.quote}
              </p>
            )}

            <p className="mt-2.5 max-w-[360px] font-sans text-xs leading-relaxed text-body sm:text-[0.84rem]">
              {content.description}
            </p>

            <Link
              to={content.buttonUrl}
              className="mt-7 inline-flex min-h-[44px] items-center gap-2.5 rounded-full bg-brand-red px-6 py-2.5 font-sans text-xs font-bold tracking-wider text-paper uppercase shadow-[0_8px_20px_rgba(191,0,19,0.28)] transition-colors hover:bg-[#9e0010] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-red"
            >
              <span>{content.buttonText}</span>
              <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {products.map((product, index) => {
              const wished = wishlist.includes(product.id);
              const meta = ESSENTIAL_META[product.id] || {
                tag: product.category,
                subtitle: product.description,
              };

              return (
                <article
                  key={product.id}
                  className={`flex flex-col justify-between rounded-2xl border border-line/80 bg-paper p-4 shadow-[0_8px_26px_rgba(37,35,31,0.05)] transition-shadow hover:shadow-[0_14px_34px_rgba(37,35,31,0.09)] ${
                    index % 2 === 1 ? 'lg:mt-8' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-sans text-[0.65rem] font-bold tracking-[0.14em] text-body/70 uppercase">
                        {meta.tag}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        aria-label={`${wished ? 'Remove' : 'Save'} ${product.name} ${wished ? 'from' : 'to'} wishlist`}
                        aria-pressed={wished}
                        className={`grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-cream focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
                          wished ? 'text-brand-red' : 'text-body/70'
                        }`}
                      >
                        <Heart
                          size={16}
                          strokeWidth={1.75}
                          fill={wished ? 'currentColor' : 'none'}
                        />
                      </button>
                    </div>

                    <Link
                      to={`/?product=${product.slug}`}
                      aria-label={`View ${product.name}`}
                      className="my-3 block"
                    >
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        width="320"
                        height="340"
                        loading="lazy"
                        className="mx-auto aspect-[1/1.05] w-full object-contain transition-transform duration-200 hover:scale-[1.03]"
                      />
                    </Link>

                    <h3 className="font-serif text-base leading-snug font-normal text-ink">
                      <Link
                        to={`/?product=${product.slug}`}
                        className="transition-colors hover:text-brand-red focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                      >
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-0.5 truncate font-sans text-xs text-body">
                      {meta.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-2 border-t border-line/60 pt-3">
                    <div>
                      <span className="block font-sans text-[0.6rem] font-semibold tracking-wider text-body/70 uppercase">
                        PRICE
                      </span>
                      <span className="block font-sans text-base leading-tight font-bold text-ink">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => addToCart(product.id)}
                      aria-label={`Add ${product.name} to cart`}
                      className="grid h-9 w-9 flex-none place-items-center rounded-full bg-ink text-paper transition-colors hover:bg-brand-red focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                    >
                      <ShoppingCart size={15} strokeWidth={1.75} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
