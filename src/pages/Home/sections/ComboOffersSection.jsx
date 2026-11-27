import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { home } from '@/data/home.data';
import comboBackdrop from '@/assets/home/masterpiece_commercial_fmcg_food_advertising_backdrop_photography_on_a_warm 1.webp';

export default function ComboOffersSection() {
  const offers = home.offers;
  const [activeIndex, setActiveIndex] = useState(0);
  const current = offers[activeIndex] || offers[0];

  function handlePrev() {
    setActiveIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  }

  function handleNext() {
    setActiveIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
  }

  return (
    <section
      className="relative overflow-hidden bg-paper pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14"
      aria-labelledby="combo-offers-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[76%] bg-cover bg-top sm:h-[78%]"
        style={{ backgroundImage: `url(${comboBackdrop})` }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <h2
          id="combo-offers-heading"
          className="text-center font-serif text-[1.75rem] leading-[1.1] font-normal text-ink sm:text-[2.25rem] lg:text-[2.5rem]"
        >
          In The
          <span className="mt-0.5 block font-serif text-[2.4rem] leading-[1.08] font-normal italic text-brand-red sm:text-[3.1rem] lg:text-[3.5rem]">
            Combo Offers
          </span>
        </h2>

        <div
          className="relative mx-auto mt-8 max-w-[980px] sm:mt-10"
          role="region"
          aria-roledescription="carousel"
          aria-label="Combo offers"
        >
          <article className="relative flex min-h-[340px] items-center overflow-hidden rounded-2xl bg-[#24160e] shadow-[0_24px_60px_rgba(37,35,31,0.18)] sm:min-h-[380px] lg:min-h-[410px]">
            <img
              src={current.image}
              alt={current.imageAlt}
              width="1200"
              height="600"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-right"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#21130b] via-[#28180e]/90 via-[46%] to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-[540px] px-7 py-9 sm:px-11 sm:py-11 lg:px-14">
              <p className="font-sans text-xs font-bold tracking-[0.14em] text-[#f2d17a] uppercase sm:text-sm">
                {current.eyebrow}
              </p>

              <h3 className="mt-3 font-sans text-2xl leading-[1.12] font-extrabold tracking-[-0.01em] text-paper uppercase sm:text-[2rem] lg:text-[2.35rem]">
                {current.titleLead}{' '}
                <span className="text-[#f6e2b3]">{current.titleAccent}</span>
                <span className="block">{current.titleLine2}</span>
              </h3>

              <div className="mt-5 inline-flex flex-wrap items-center gap-2.5 rounded-xl border border-paper/25 bg-black/35 px-4 py-2.5 backdrop-blur-xs sm:gap-3.5">
                <span className="font-sans text-sm font-medium text-paper sm:text-base">
                  {current.highlight}
                </span>
                <span className="rounded-md bg-brand-red px-3 py-1 font-sans text-xs font-extrabold tracking-wider text-paper uppercase shadow-xs sm:text-sm">
                  {current.badgeText}
                </span>
              </div>

              <div>
                <Link
                  to={current.buttonUrl}
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2.5 rounded-full bg-brand-red px-6 py-2.5 font-sans text-xs font-bold tracking-wider text-paper uppercase shadow-[0_8px_20px_rgba(191,0,19,0.35)] transition-colors hover:bg-[#9e0010] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-paper sm:text-sm"
                >
                  <span>{current.buttonText}</span>
                  <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          {offers.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous combo offer"
                className="absolute top-1/2 -left-3 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-[0_6px_18px_rgba(37,35,31,0.18)] transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:-left-5"
              >
                <ChevronLeft size={18} strokeWidth={2.2} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next combo offer"
                className="absolute top-1/2 -right-3 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-[0_6px_18px_rgba(37,35,31,0.18)] transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:-right-5"
              >
                <ChevronRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </>
          )}

          {offers.length > 1 && (
            <div
              className="mt-6 flex items-center justify-center gap-2.5"
              role="tablist"
              aria-label="Choose combo offer"
            >
              {offers.map((offer, idx) => (
                <button
                  key={offer.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Show offer ${idx + 1}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-all focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
                    idx === activeIndex
                      ? 'bg-brand-red'
                      : 'bg-ink/20 hover:bg-ink/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
