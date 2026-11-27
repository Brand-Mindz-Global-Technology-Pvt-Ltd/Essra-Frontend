import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard } from 'swiper/modules';
import { home } from '@/data/home.data';
import 'swiper/css';

export default function OurProcessSection() {
  const swiperRef = useRef(null);
  const { process } = home;

  return (
    <section
      className="bg-cream py-14 sm:py-16 lg:py-20"
      aria-labelledby="our-process-heading"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="text-center">
          <p className="flex items-center justify-center gap-4 font-sans text-xs font-bold tracking-[0.2em] text-maroon uppercase sm:gap-5 sm:text-sm">
            <span
              className="h-px w-8 bg-maroon/40 sm:w-12"
              aria-hidden="true"
            />
            <span>{process.eyebrow}</span>
            <span
              className="h-px w-8 bg-maroon/40 sm:w-12"
              aria-hidden="true"
            />
          </p>

          <h2
            id="our-process-heading"
            className="mt-3 font-serif text-[2.2rem] leading-[1.12] font-normal tracking-[-0.015em] text-ink sm:text-[2.75rem] lg:text-[3.1rem]"
          >
            {process.title}{' '}
            <em className="font-serif font-normal italic text-brand-red">
              {process.highlight}
            </em>
          </h2>
        </div>

        <div
          className="relative mt-10 sm:mt-12"
          role="region"
          aria-roledescription="carousel"
          aria-label="Our process steps"
        >
          <Swiper
            modules={[A11y, Keyboard]}
            keyboard={{ enabled: true, onlyInViewport: true }}
            spaceBetween={20}
            slidesPerView={1.15}
            breakpoints={{
              480: { slidesPerView: 1.8 },
              768: { slidesPerView: 2.6 },
              1100: { slidesPerView: 3.4 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            a11y={{ enabled: true, containerMessage: 'Our process steps' }}
          >
            {process.items.map((item) => (
              <SwiperSlide key={item.id} className="h-auto pb-2">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-paper shadow-[0_6px_22px_rgba(37,35,31,0.06)] transition-shadow hover:shadow-[0_12px_30px_rgba(37,35,31,0.1)]">
                  <div className="relative bg-beige/40">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      width="400"
                      height="275"
                      loading="lazy"
                      className="aspect-[1.45] w-full object-cover"
                    />
                    <span className="absolute top-3.5 left-3.5 grid h-9 w-9 place-items-center rounded-full bg-paper font-sans text-xs font-bold text-ink shadow-sm">
                      {item.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-[1.05rem] leading-snug font-normal text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-body">
                      {item.description}...{' '}
                      <Link
                        to="/?shop=all#featured-products"
                        className="inline-flex items-center gap-1 font-semibold text-brand-red transition-colors hover:text-maroon hover:underline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                      >
                        <span>Know More</span>
                        <ArrowRight
                          size={12}
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      </Link>
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            onClick={() => {
              const swiper = swiperRef.current;
              if (!swiper) return;
              if (swiper.isBeginning) {
                swiper.slideTo(process.items.length - 1);
              } else {
                swiper.slidePrev();
              }
            }}
            aria-label="Previous process step"
            className="absolute top-1/2 -left-3 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-[0_6px_18px_rgba(37,35,31,0.18)] transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:-left-5"
          >
            <ChevronLeft size={18} strokeWidth={2.2} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => {
              const swiper = swiperRef.current;
              if (!swiper) return;
              if (swiper.isEnd) {
                swiper.slideTo(0);
              } else {
                swiper.slideNext();
              }
            }}
            aria-label="Next process step"
            className="absolute top-1/2 -right-3 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-[0_6px_18px_rgba(37,35,31,0.18)] transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:-right-5"
          >
            <ChevronRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
