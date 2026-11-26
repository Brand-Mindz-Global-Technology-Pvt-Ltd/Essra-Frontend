import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash, search, key } = useLocation();
  const previous = useRef(null);
  useEffect(() => {
    const params = new URLSearchParams(search);
    const isPanel = ['view', 'product', 'article', 'policy'].some((param) =>
      params.has(param),
    );
    const last = previous.current;
    previous.current = { pathname, hash, isPanel };
    // Panels preserve the underlying browsing position, including on dismissal.
    if (
      isPanel ||
      (last?.isPanel && last.pathname === pathname && last.hash === hash)
    )
      return;
    const frame = requestAnimationFrame(() => {
      if (hash)
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: 'instant' });
      else if (!last || last.pathname !== pathname)
        window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, search, key]);
  return null;
}
