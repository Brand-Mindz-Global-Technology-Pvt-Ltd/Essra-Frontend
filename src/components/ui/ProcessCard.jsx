export default function ProcessCard({ item }) {
  return (
    <article className="process-card">
      <div className="process-image">
        <img
          src={item.image}
          alt={item.imageAlt}
          width="520"
          height="380"
          loading="lazy"
        />
        <span className="process-number">
          {String(item.number).padStart(2, '0')}
        </span>
      </div>
      <div className="process-copy">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
