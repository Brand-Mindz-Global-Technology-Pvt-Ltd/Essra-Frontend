import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ProductCarousel from '@/components/ui/ProductCarousel';
import { home } from '@/data/home.data';
import { products } from '@/data/products.data';

export default function EverydayEssentialsSection() {
  const content = home.essentials;
  return (
    <section className="section essentials-section" id="everyday-essentials">
      <Container className="essentials-layout">
        <div>
          <SectionHeading {...content} />
          <p className="essentials-description">{content.description}</p>
          <Button to={content.buttonUrl}>{content.buttonText}</Button>
        </div>
        <ProductCarousel products={products} />
      </Container>
    </section>
  );
}
