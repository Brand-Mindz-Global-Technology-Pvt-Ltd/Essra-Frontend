import { home } from '@/data/home.data';

export default function BrandIntroductionSection() {
  const { introduction: intro } = home;

  return (
    <section
      className="bg-paper py-14 sm:py-16 lg:py-20"
      aria-labelledby="brand-intro-heading"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left — Image + floating badge */}
          <div className="relative">
            <div className="overflow-hidden rounded-tl-[100px] rounded-tr-none rounded-br-none rounded-bl-none">
              <img
                src={intro.image}
                alt={intro.imageAlt}
                width="900"
                height="740"
                loading="lazy"
                className="aspect-[1.12] w-full object-cover"
              />
            </div>

            {/* Badge — half overlapping image bottom-right */}
            {intro.badge && (
              <div className="absolute -right-6 bottom-6 z-10 flex h-[92px] w-[92px] flex-col items-center justify-center rounded-full border-[3px] border-paper bg-brand-red text-center shadow-md sm:-right-8 sm:bottom-8 sm:h-[100px] sm:w-[100px] lg:-right-11 lg:bottom-10">
                <span className="text-[0.6rem] font-semibold tracking-wider text-paper uppercase sm:text-[0.65rem]">
                  Made with
                </span>
                <span className="font-serif text-xl leading-tight italic text-paper sm:text-[1.4rem]">
                  care
                </span>
                <span className="mt-0.5 text-[0.5rem] font-bold tracking-widest text-paper/80 uppercase sm:text-[0.55rem]">
                  {intro.badgeSub}
                </span>
              </div>
            )}
          </div>

          {/* Right — Copy */}
          <div className="relative">
            {/* Decorative large E watermark */}
            <span
              className="pointer-events-none absolute -top-6 right-0 select-none font-serif text-[12rem] leading-none font-light text-line/30 sm:text-[14rem] lg:-top-10 lg:right-4 lg:text-[16rem]"
              aria-hidden="true"
            >
              E
            </span>

            {/* Eyebrow */}
            <p className="mb-4 flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.14em] text-brand-red uppercase sm:text-sm">
              <span
                className="h-px w-6 bg-maroon/50 sm:w-10"
                aria-hidden="true"
              />
              {intro.eyebrow}
            </p>

            {/* Heading */}
            <h2
              id="brand-intro-heading"
              className="max-w-[440px] font-serif text-[2rem] leading-[1.15] font-normal tracking-[-0.01em] text-ink sm:text-[2.4rem] lg:text-[2.75rem]"
            >
              {intro.title}{' '}
              <em className="font-serif font-normal italic text-brand-red">
                {intro.highlight}
              </em>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[520px] font-sans text-sm leading-relaxed text-body sm:text-[0.94rem]">
              {intro.description}
            </p>

            {/* Quote */}
            {intro.quote && (
              <blockquote className="mt-8 border-l-2 border-brand-red py-1 pl-5 font-serif text-base leading-snug italic text-brand-red sm:text-lg">
                {intro.quote}
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
