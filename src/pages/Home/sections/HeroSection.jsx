import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { home } from '@/data/home.data';
import traditionalPattern from '@/assets/shared/patterns/traditional-line-pattern.svg';

function SparkleAccent({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={`pointer-events-none text-[#e7dcc8]/75 ${className}`}
    >
      <path d="M16 0C16.9 9.6 22.4 15.1 32 16C22.4 16.9 16.9 22.4 16 32C15.1 22.4 9.6 16.9 0 16C9.6 15.1 15.1 9.6 16 0Z" />
    </svg>
  );
}

export default function HeroSection() {
  const content = home.hero;

  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ backgroundImage: `url(${traditionalPattern})` }}
      />

      <SparkleAccent className="absolute top-12 right-6 hidden h-8 w-8 lg:block" />
      <SparkleAccent className="absolute top-28 left-[37%] hidden h-6 w-6 lg:block" />
      <SparkleAccent className="absolute bottom-14 left-[18%] hidden h-7 w-7 sm:block" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-4 hidden flex-col items-center gap-2 select-none 2xl:flex"
      >
        <span className="h-14 w-px bg-ink/20" />
        <span className="rotate-180 text-[0.55rem] tracking-[0.22em] text-ink/45 uppercase [writing-mode:vertical-rl]">
          Scroll to discover
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pr-4">
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-[1.5px] w-6 flex-none bg-maroon/70"
                aria-hidden="true"
              />
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-maroon uppercase">
                {content.eyebrow}
              </p>
            </div>

            <h1 className="max-w-[500px] font-serif text-[2.45rem] leading-[1.12] font-normal tracking-[-0.02em] text-ink sm:text-[3.05rem] lg:text-[3.35rem] xl:text-[3.65rem]">
              {content.title}{' '}
              <em className="font-serif font-normal italic text-brand-red">
                {content.highlight}
              </em>
            </h1>

            <p className="mt-5 mb-7 max-w-[420px] text-[0.95rem] leading-[1.68] text-body">
              {content.description}
            </p>

            <Link
              to={content.buttonUrl}
              className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-brand-red px-7 py-3 text-sm font-medium text-paper shadow-sm transition-colors hover:bg-maroon focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            >
              <span>{content.buttonText}</span>
              <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="relative mx-auto w-full max-w-[740px] lg:ml-auto">
              <div className="hero-image relative aspect-[1.34/1] overflow-hidden rounded-tl-[50px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[24px] bg-beige shadow-[0_14px_38px_rgba(37,35,31,0.1)] sm:rounded-tl-[80px] sm:rounded-bl-[10px] lg:rounded-tl-[90px] lg:rounded-bl-[15px]">
                <img
                  src={content.image}
                  alt={content.imageAlt}
                  width="1000"
                  height="800"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 bottom-4 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white/80 bg-black/50 p-1.5 text-center text-paper ring-1 ring-white/40 ring-offset-3 ring-offset-transparent backdrop-blur-[2px] sm:right-6 sm:bottom-6 sm:h-24 sm:w-24"
                >
                  <span className="font-serif text-lg leading-none sm:text-xl">
                    100%
                  </span>
                  <span className="mt-1 text-[0.46rem] leading-[1.2] font-medium tracking-[0.12em] uppercase sm:text-[0.52rem]">
                    Wholesome
                    <br />
                    Goodness
                  </span>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3 -left-2 z-20 w-[124px] -rotate-[3.5deg] overflow-hidden rounded-xl bg-[#fdfaf3] shadow-[0_16px_34px_rgba(37,35,31,0.24)] sm:bottom-5 sm:-left-5 sm:w-[154px] lg:bottom-7 lg:-left-8 lg:w-[172px]"
              >
                <div className="h-1.5 w-full bg-brand-red" />

                <div className="flex flex-col items-center px-3 pt-3 pb-10 text-center sm:pt-3.5 sm:pb-12">
                  <span className="grid h-6 w-6 place-items-center rounded-t-full rounded-br-full rounded-bl-[4px] bg-brand-red font-serif text-xs leading-none text-paper sm:h-7 sm:w-7 sm:text-sm">
                    E
                  </span>
                  <span className="mt-1.5 font-sans text-[0.8rem] font-bold tracking-[0.18em] text-maroon sm:text-[0.95rem]">
                    ESSRA
                  </span>
                  <span className="mt-0.5 text-[0.36rem] tracking-[0.12em] text-ink/70 uppercase sm:text-[0.42rem]">
                    It&apos;s your healthy food
                  </span>
                </div>

                <div className="relative bg-[#7d181c] px-3 pt-2 pb-3.5 text-center sm:pb-4">
                  <div className="pointer-events-none absolute -top-7 left-1/2 h-14 w-[150%] -translate-x-1/2 rounded-t-[100%] bg-[#7d181c] sm:-top-8 sm:h-16" />

                  <div className="relative z-10 mx-auto -mt-10 mb-2 h-16 w-16 overflow-hidden rounded-full border-[3px] border-white bg-cream shadow-sm sm:-mt-12 sm:mb-2.5 sm:h-20 sm:w-20 lg:h-[88px] lg:w-[88px]">
                    <img
                      src={content.image}
                      alt=""
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="relative z-10">
                    <p className="font-serif text-[0.72rem] leading-tight text-white sm:text-[0.88rem]">
                      Whole Wheat
                    </p>
                    <p className="font-serif text-[0.88rem] leading-tight font-medium text-[#d49642] sm:text-[1.06rem]">
                      Chapati
                    </p>
                    <p className="mt-1 text-[0.4rem] tracking-[0.06em] text-white/90 sm:text-[0.48rem]">
                      Soft • Fresh • Wholesome
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
