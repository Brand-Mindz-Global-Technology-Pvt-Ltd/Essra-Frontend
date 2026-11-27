import { ArrowRight } from 'lucide-react';
import IngredientCard from '@/components/ui/IngredientCard';
import { home } from '@/data/home.data';

export default function IngredientsSection() {
  const content = home.ingredients;

  return (
    <section
      className="bg-paper py-14 sm:py-16 lg:py-20"
      aria-labelledby="ingredients-heading"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="text-center">
          <h2
            id="ingredients-heading"
            className="font-serif text-[2.2rem] leading-[1.12] font-normal tracking-[-0.015em] text-ink sm:text-[2.75rem] lg:text-[3.1rem]"
          >
            {content.title}{' '}
            <em className="font-serif font-normal italic text-brand-red">
              {content.highlight}
            </em>
          </h2>
          {content.subtitle && (
            <p className="mx-auto mt-3 max-w-[600px] font-sans text-sm text-body sm:text-[0.95rem]">
              {content.subtitle}
            </p>
          )}
        </div>

        <div className="mt-12 grid items-start gap-10 lg:mt-14 lg:grid-cols-[24%_1fr] lg:gap-10 xl:gap-12">
          <div className="lg:pt-2">
            <p className="flex items-center gap-3 font-sans text-xs font-bold tracking-[0.14em] text-brand-red uppercase">
              <span className="h-px w-6 bg-brand-red/70" aria-hidden="true" />
              <span>{content.eyebrow}</span>
            </p>

            <h3 className="mt-4 font-serif text-[2rem] leading-[1.12] font-normal text-ink sm:text-[2.25rem] lg:text-[2.45rem]">
              {content.introTitle}
              <em className="mt-1 block font-serif font-normal italic text-brand-red">
                {content.introHighlight}
              </em>
            </h3>

            <a
              href="#ingredient-grid"
              className="mt-7 inline-flex items-center gap-2 border-b border-brand-red/70 pb-1 font-sans text-sm font-semibold text-brand-red transition-colors hover:border-brand-red hover:text-maroon focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            >
              <span>{content.linkText}</span>
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          <div
            className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 lg:gap-x-5 lg:gap-y-7"
            id="ingredient-grid"
          >
            {content.items.map((item) => (
              <IngredientCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
