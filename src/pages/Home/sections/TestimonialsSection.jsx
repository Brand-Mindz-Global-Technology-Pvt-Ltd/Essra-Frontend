import { useRef } from 'react';
import { ChevronFirst, ChevronLast, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard } from 'swiper/modules';
import { home } from '@/data/home.data';
import 'swiper/css';

export default function TestimonialsSection() {
  const swiperRef = useRef(null);
  const content = home.testimonials;

  return (
    <section
      className="bg-cream py-14 sm:py-16 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex items-center justify-between gap-4">
          <h2
            id="testimonials-heading"
            className="font-serif text-[2.2rem] leading-[1.12] font-normal tracking-[-0.015em] text-ink sm:text-[2.75rem] lg:text-[3.1rem]"
          >
            {content.title}{' '}
            <em className="font-serif font-normal italic text-brand-red">
              {content.highlight}
            </em>
          </h2>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                const swiper = swiperRef.current;
                if (!swiper) return;
                if (swiper.isBeginning) {
                  swiper.slideTo(content.items.length - 1);
                } else {
                  swiper.slidePrev();
                }
              }}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper text-body/70 transition-colors hover:border-ink hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              <ChevronFirst size={17} strokeWidth={1.8} aria-hidden="true" />
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
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink bg-paper text-ink transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              <ChevronLast size={17} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="mt-8 sm:mt-10"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <Swiper
            modules={[A11y, Keyboard]}
            keyboard={{ enabled: true, onlyInViewport: true }}
            spaceBetween={20}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.35 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            a11y={{ enabled: true, containerMessage: 'Customer testimonials' }}
          >
            {content.items.map((item) => (
              <SwiperSlide key={item.id} className="h-auto pb-3">
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-line/80 bg-paper p-6 shadow-[0_8px_24px_rgba(37,35,31,0.06)] sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className="flex items-center gap-1"
                        aria-label={`${item.rating} out of 5 stars`}
                      >
                        {Array.from({ length: item.rating }).map((_, idx) => (
                          <Star
                            key={idx}
                            size={16}
                            className="fill-gold text-gold"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span
                        className="font-serif text-3xl leading-none font-bold text-ink select-none"
                        aria-hidden="true"
                      >
                        “
                      </span>
                    </div>

                    <blockquote className="mt-5 font-sans text-sm leading-relaxed text-ink/90">
                      {item.quote}
                    </blockquote>
                  </div>

                  <figcaption className="mt-6">
                    <span className="block font-serif text-base font-semibold text-ink">
                      {item.author}
                    </span>
                    <span className="mt-0.5 block font-serif text-xs italic text-body">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
