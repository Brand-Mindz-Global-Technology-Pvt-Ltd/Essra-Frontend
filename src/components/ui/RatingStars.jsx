import { Star } from 'lucide-react';

export default function RatingStars({ rating, reviewCount }) {
  if (rating == null) {
    return <span className="text-[0.6875rem] text-body">Reviews pending</span>;
  }

  return (
    <span
      className="inline-flex items-center gap-1 text-xs text-body"
      aria-label={`${rating} out of 5 stars${reviewCount ? ` from ${reviewCount} reviews` : ''}`}
    >
      <span
        className="inline-flex items-center gap-0.5 text-gold"
        aria-hidden="true"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} size={12} fill="currentColor" strokeWidth={1.5} />
        ))}
      </span>
      <span className="text-[0.75rem] font-medium text-ink/80">({rating})</span>
    </span>
  );
}
