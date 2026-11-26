import { useId, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
import CarouselControls from './CarouselControls';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Carousel({
  items,
  renderItem,
  label,
  perView = 4,
  pagination = false,
  className = '',
  controlsPosition = 'bottom',
}) {
  const ref = useRef(null);
  const id = useId();
  const [position, setPosition] = useState({
    start: true,
    end: items.length <= 1,
  });
  function updatePosition(swiper) {
    setPosition({
      start: swiper.isBeginning,
      end: swiper.isEnd || swiper.isLocked,
    });
  }
  return (
    <div
      className={`carousel carousel--${controlsPosition} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <Swiper
        id={id}
        modules={[A11y, Keyboard, Pagination]}
        keyboard={{ enabled: true, onlyInViewport: true }}
        pagination={pagination ? { clickable: true } : false}
        watchOverflow
        spaceBetween={20}
        slidesPerView={perView === 1 ? 1 : 1.2}
        breakpoints={
          perView === 1
            ? undefined
            : {
                480: { slidesPerView: 2 },
                768: { slidesPerView: Math.min(3, perView) },
                1100: { slidesPerView: perView },
              }
        }
        onSwiper={(swiper) => {
          ref.current = swiper;
          updatePosition(swiper);
        }}
        onSlideChange={updatePosition}
        onResize={updatePosition}
        a11y={{ enabled: true, containerMessage: label }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id || item.slug}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselControls
        carousel={id}
        label={label}
        canPrevious={!position.start}
        canNext={!position.end}
        onPrevious={() => ref.current?.slidePrev()}
        onNext={() => ref.current?.slideNext()}
      />
    </div>
  );
}
