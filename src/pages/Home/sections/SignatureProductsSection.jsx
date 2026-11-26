import Container from '@/components/ui/Container';
import ImageTextSection from '@/components/ui/ImageTextSection';
import Carousel from '@/components/ui/Carousel';
import { home } from '@/data/home.data';

export default function SignatureProductsSection() {
  return (
    <section
      className="section signature-section"
      aria-label="Signature products"
    >
      <Container>
        <Carousel
          items={home.signature}
          label="signature products"
          perView={1}
          renderItem={(item) => {
            const Icon = item.icon;
            return (
              <ImageTextSection content={item} variant="signature">
                <div className="signature-benefit">
                  <Icon size={26} strokeWidth={1} />
                  <span>{item.benefit}</span>
                </div>
              </ImageTextSection>
            );
          }}
        />
      </Container>
    </section>
  );
}
