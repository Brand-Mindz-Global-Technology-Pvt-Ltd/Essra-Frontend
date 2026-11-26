import { Star } from 'lucide-react';

export default function RatingStars({ rating, reviewCount }) {
  if (rating == null)
    return <span className="rating-pending">Reviews pending</span>;
  return (
    <span
      className="rating"
      aria-label={`${rating} out of 5 stars${reviewCount ? ` from ${reviewCount} reviews` : ''}`}
    >
      <Star size={13} fill="currentColor" aria-hidden="true" />
      <span>{rating}</span>
      {reviewCount != null && (
        <span className="review-count">({reviewCount})</span>
      )}
    </span>
  );
}
