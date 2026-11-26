import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { home } from '@/data/home.data';

export default function HeroSection() {
  const content = home.hero;
  return (
    <section className="hero">
      <Container className="hero-grid">
        <div className="hero-copy">
          <SectionHeading {...content} as="h1" />
          <p>{content.description}</p>
          <Button to={content.buttonUrl}>{content.buttonText}</Button>
        </div>
        <div className="hero-image">
          <img
            src={content.image}
            alt={content.imageAlt}
            width="1000"
            height="800"
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  );
}
