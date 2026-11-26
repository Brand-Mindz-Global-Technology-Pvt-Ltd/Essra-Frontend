import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import BlogCard from '@/components/ui/BlogCard';
import { home } from '@/data/home.data';

export default function FoodJournalSection() {
  return (
    <section className="section journal-section" id="food-journal">
      <Container>
        <SectionHeading {...home.journal} align="center" />
        <div className="blog-grid">
          {home.journal.items.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
