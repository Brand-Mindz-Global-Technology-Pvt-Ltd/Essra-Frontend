import Container from '@/components/ui/Container';
import { home } from '@/data/home.data';

export default function ProductBenefitsSection() {
  return (
    <section
      className="benefits"
      aria-label="Product benefits from design brief"
    >
      <Container>
        <ul>
          {home.benefits.map(({ label, icon: Icon }) => (
            <li key={label}>
              <Icon size={27} strokeWidth={1.2} aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
