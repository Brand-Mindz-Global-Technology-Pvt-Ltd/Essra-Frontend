import { Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Carousel from '@/components/ui/Carousel';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { home } from '@/data/home.data';

export default function TestimonialsSection() {
  const content = home.testimonials;
  return (
    <section className="section testimonials-section">
      <Container>
        <SectionHeading {...content} />
        {content.items.length > 0 ? (
          <Carousel
            label="customer testimonials"
            items={content.items}
            perView={3}
            controlsPosition="top"
            renderItem={(item) => <TestimonialCard item={item} />}
          />
        ) : (
          <div className="testimonial-empty">
            <Quote size={30} strokeWidth={1} aria-hidden="true" />
            <div>
              <h3>{content.emptyTitle}</h3>
              <p>{content.emptyDescription}</p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
