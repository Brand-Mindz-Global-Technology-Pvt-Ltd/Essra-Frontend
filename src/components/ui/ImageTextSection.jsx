import SectionHeading from './SectionHeading';

export default function ImageTextSection({
  content,
  variant = 'editorial',
  children,
}) {
  return (
    <div className={`image-text image-text--${variant}`}>
      <div className="image-text-photo">
        <img
          src={content.image}
          alt={content.imageAlt}
          width="900"
          height="740"
          loading="lazy"
        />
      </div>
      <div className="image-text-copy">
        <SectionHeading {...content} />
        <p>{content.description}</p>
        {content.quote && <blockquote>{content.quote}</blockquote>}
        {children}
      </div>
    </div>
  );
}
