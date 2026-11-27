import { home } from '@/data/home.data';

export default function ProductBenefitsSection() {
  return (
    <section
      className="border-b border-line/60 bg-cream"
      aria-label="Product benefits from design brief"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <ul className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-5 py-6 sm:py-7 md:grid-cols-4 md:gap-6">
          {home.benefits.map(({ label, image, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3.5 text-sm font-medium text-ink sm:text-base"
            >
              {image ? (
                <img
                  src={image}
                  alt=""
                  width="36"
                  height="36"
                  loading="lazy"
                  className="h-8 w-8 flex-none object-contain sm:h-9 sm:w-9"
                />
              ) : (
                <Icon
                  size={36}
                  strokeWidth={1.4}
                  className="h-8 w-8 flex-none text-maroon sm:h-9 sm:w-9"
                  aria-hidden="true"
                />
              )}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
