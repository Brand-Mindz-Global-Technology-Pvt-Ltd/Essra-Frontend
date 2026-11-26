import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Carousel from '@/components/ui/Carousel';
import ProcessCard from '@/components/ui/ProcessCard';
import { home } from '@/data/home.data';

export default function OurProcessSection() {
  return (
    <section className="section process-section">
      <Container>
        <SectionHeading {...home.process} />
        <Carousel
          label="process steps"
          items={home.process.items}
          controlsPosition="top"
          renderItem={(item) => <ProcessCard item={item} />}
        />
        <p className="content-note">{home.process.note}</p>
      </Container>
    </section>
  );
}
