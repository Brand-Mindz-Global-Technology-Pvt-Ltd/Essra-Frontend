import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { home } from '@/data/home.data';

export default function SignatureProductsSection() {
  const items = home.signature;
  const [activeIndex, setActiveIndex] = useState(0);
  const current = items[activeIndex] || items[0];

  function handlePrev() {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }

  function handleNext() {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }

  return (
    <section
      className="bg-cream py-14 sm:py-16 lg:py-20"
      aria-label="Signature products"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <article className="grid overflow-hidden rounded-2xl border border-line/90 bg-paper shadow-[0_10px_35px_rgba(37,35,31,0.06)] lg:min-h-[560px] lg:grid-cols-[62%_38%] xl:min-h-[600px]">
          <div className="relative bg-beige/30">
            <img
              src={current.image}
              alt={current.imageAlt}
              width="900"
              height="640"
              loading="lazy"
              className="aspect-[1.4] h-full w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto"
            />
          </div>

          <div className="flex flex-col p-8 sm:p-10 lg:px-10 lg:py-12 xl:px-12 xl:py-14">
            <div>
              <p className="flex items-center gap-3 font-sans text-xs font-bold tracking-[0.16em] text-brand-red uppercase">
                <span className="h-px w-6 bg-brand-red/70" aria-hidden="true" />
                <span>{current.eyebrow}</span>
              </p>

              <p className="mt-6 max-w-[380px] font-sans text-sm leading-[1.7] text-body sm:text-[0.95rem]">
                {current.description}
              </p>
            </div>

            <div className="mt-10 flex items-start gap-4 border-y border-line/80 py-5 lg:mt-24">
              <span className="font-serif text-base leading-snug font-semibold text-brand-red">
                {current.number}
              </span>
              <p className="font-sans text-sm leading-relaxed text-ink">
                {current.benefit}
              </p>
            </div>
          </div>
        </article>

        {items.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous signature product"
              className="grid h-10 w-10 place-items-center rounded-full border border-line/70 bg-paper text-ink shadow-[0_4px_14px_rgba(37,35,31,0.1)] transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              <ChevronLeft size={18} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next signature product"
              className="grid h-10 w-10 place-items-center rounded-full border border-line/70 bg-paper text-ink shadow-[0_4px_14px_rgba(37,35,31,0.1)] transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              <ChevronRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
