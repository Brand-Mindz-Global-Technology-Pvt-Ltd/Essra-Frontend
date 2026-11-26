import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CarouselControls({
  carousel,
  label,
  onPrevious,
  onNext,
  canPrevious = true,
  canNext = true,
}) {
  return (
    <div className="carousel-controls">
      <button
        className="icon-button"
        type="button"
        onClick={onPrevious}
        disabled={!canPrevious}
        aria-label={`Previous ${label}`}
        aria-controls={carousel}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        className="icon-button"
        type="button"
        onClick={onNext}
        disabled={!canNext}
        aria-label={`Next ${label}`}
        aria-controls={carousel}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
