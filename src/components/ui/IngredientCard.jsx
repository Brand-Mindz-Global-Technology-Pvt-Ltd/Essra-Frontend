export default function IngredientCard({ item }) {
  return (
    <article className="ingredient-card">
      <img
        src={item.image}
        alt={item.imageAlt}
        width="260"
        height="210"
        loading="lazy"
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </article>
  );
}
