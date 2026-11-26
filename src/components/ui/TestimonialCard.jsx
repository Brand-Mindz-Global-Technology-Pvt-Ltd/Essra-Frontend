import { Quote } from 'lucide-react';
import RatingStars from './RatingStars';

export default function TestimonialCard({ item }) {
  return (
    <figure className="testimonial-card">
      <div className="flex items-center justify-between">
        <RatingStars rating={item.rating} />
        <Quote size={24} aria-hidden="true" />
      </div>
      <blockquote>{item.content}</blockquote>
      <figcaption>
        <strong>{item.name}</strong>
        {item.location && <span>{item.location}</span>}
      </figcaption>
    </figure>
  );
}
