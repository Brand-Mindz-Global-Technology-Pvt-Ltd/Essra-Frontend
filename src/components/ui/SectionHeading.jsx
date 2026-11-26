export default function SectionHeading({
  title,
  highlight,
  eyebrow,
  subtitle,
  as: Tag = 'h2',
  align = 'left',
  className = '',
}) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag>
        {title}
        {highlight && (
          <>
            {' '}
            <em>{highlight}</em>
          </>
        )}
      </Tag>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
