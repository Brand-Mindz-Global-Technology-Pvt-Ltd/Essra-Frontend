import Button from '@/components/ui/Button';
import SEO from '@/components/common/SEO';

export default function NotFound() {
  return (
    <div className="empty-state not-found">
      <SEO title="Page not found — ESSRA" noIndex />
      <p className="eyebrow">404</p>
      <h1>This page isn’t in our pantry.</h1>
      <p>Return to the homepage to keep exploring.</p>
      <Button to="/">Back to ESSRA</Button>
    </div>
  );
}
