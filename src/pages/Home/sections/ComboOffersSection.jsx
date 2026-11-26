import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Carousel from '@/components/ui/Carousel';
import Button from '@/components/ui/Button';
import { home } from '@/data/home.data';

export default function ComboOffersSection() {
  return (
    <section className="section combo-section">
      <Container>
        <SectionHeading
          title="In The"
          highlight="Combo Offers"
          align="center"
        />
        <Carousel
          label="combo offers"
          items={home.offers}
          perView={1}
          pagination
          renderItem={(offer) => (
            <article className="offer-card">
              <div className="offer-copy">
                <p className="eyebrow">{offer.eyebrow}</p>
                <h3>{offer.title}</h3>
                <p className="offer-highlight">{offer.highlight}</p>
                <Button to={offer.buttonUrl}>{offer.buttonText}</Button>
                <p className="content-note">{offer.note}</p>
              </div>
              <img
                src={offer.image}
                alt={offer.imageAlt}
                width="650"
                height="400"
                loading="lazy"
              />
            </article>
          )}
        />
      </Container>
    </section>
  );
}
