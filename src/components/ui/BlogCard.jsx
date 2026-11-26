import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogCard({ article }) {
  const to = `/?article=${article.slug}`;
  return (
    <article className="blog-card">
      <Link to={to} tabIndex={-1} aria-hidden="true">
        <img
          src={article.image}
          alt=""
          width="640"
          height="420"
          loading="lazy"
        />
      </Link>
      <div className="blog-copy">
        {article.isDraft && (
          <span className="draft-label">EDITORIAL PLACEHOLDER</span>
        )}
        <h3>
          <Link to={to}>{article.title}</Link>
        </h3>
        <p>{article.description}</p>
        <Link className="text-link" to={to}>
          Read Full Story <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
