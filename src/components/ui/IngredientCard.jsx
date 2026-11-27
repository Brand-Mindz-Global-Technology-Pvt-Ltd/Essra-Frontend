export default function IngredientCard({ item }) {
  return (
    <article className="group">
      <div className="overflow-hidden bg-beige/40">
        <img
          src={item.image}
          alt={item.imageAlt}
          width="260"
          height="180"
          loading="lazy"
          className="aspect-[1.42] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <h4 className="mt-2.5 font-serif text-[0.94rem] leading-snug font-normal text-ink">
        {item.name}
      </h4>
      <p className="mt-1 font-sans text-xs leading-[1.45] text-body">
        {item.description}
      </p>
    </article>
  );
}
