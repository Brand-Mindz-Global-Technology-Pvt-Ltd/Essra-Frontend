import Container from '@/components/ui/Container';
import ImageTextSection from '@/components/ui/ImageTextSection';
import { home } from '@/data/home.data';

export default function BrandIntroductionSection() {
  return (
    <section className="section introduction-section">
      <Container>
        <ImageTextSection content={home.introduction} />
      </Container>
    </section>
  );
}
