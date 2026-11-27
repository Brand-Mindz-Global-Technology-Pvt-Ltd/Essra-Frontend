import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { home } from '@/data/home.data';

export default function FoodJournalSection() {
  const { journal } = home;

  return (
    <section
      id="food-journal"
      className="bg-paper py-14 sm:py-16 lg:py-20"
      aria-labelledby="food-journal-heading"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <h2
          id="food-journal-heading"
          className="text-center font-serif text-[2.2rem] leading-[1.12] font-normal tracking-[-0.015em] text-ink sm:text-[2.75rem] lg:text-[3.1rem]"
        >
          {journal.title}{' '}
          <em className="font-serif font-normal italic text-brand-red">
            {journal.highlight}
          </em>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-12">
          {journal.items.map((article) => {
            const to = `/?article=${article.slug}`;
            return (
              <article
                key={article.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line/80 bg-paper shadow-[0_6px_22px_rgba(37,35,31,0.05)] transition-shadow hover:shadow-[0_12px_30px_rgba(37,35,31,0.09)]"
              >
                <Link
                  to={to}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="overflow-hidden bg-beige/40"
                >
                  <img
                    src={article.image}
                    alt=""
                    width="640"
                    height="400"
                    loading="lazy"
                    className="aspect-[1.6] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-[1.12rem] leading-snug font-normal text-ink">
                    <Link
                      to={to}
                      className="transition-colors hover:text-brand-red focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-3 font-sans text-xs leading-relaxed text-body">
                    {article.description}
                  </p>

                  <div className="mt-auto pt-4">
                    <div className="border-t border-line/60 pt-3.5">
                      <Link
                        to={to}
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-brand-red transition-colors hover:text-maroon focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                      >
                        <span>Read Full Story</span>
                        <ArrowRight
                          size={14}
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
