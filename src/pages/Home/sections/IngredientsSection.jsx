import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import IngredientCard from '@/components/ui/IngredientCard';
import { home } from '@/data/home.data';

export default function IngredientsSection() {
  const content = home.ingredients;
  return (
    <section className="section ingredients-section">
      <Container>
        <SectionHeading {...content} align="center" />
        <div className="ingredients-layout">
          <div className="ingredients-intro">
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.introTitle}
              highlight={content.introHighlight}
            />
            <a href="#ingredient-grid" className="text-link">
              {content.linkText} <ArrowUpRight size={16} />
            </a>
            <p className="content-note">{content.note}</p>
          </div>
          <div className="ingredient-grid" id="ingredient-grid">
            {content.items.map((item) => (
              <IngredientCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
