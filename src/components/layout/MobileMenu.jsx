import { Link } from 'react-router-dom';
import { navigation } from '@/data/navigation.data';

export default function MobileMenu({ onNavigate }) {
  return (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      className="mx-auto flex w-full max-w-[1360px] flex-col gap-1 border-t border-white/20 px-6 py-3 sm:px-10 md:flex-row md:flex-wrap md:gap-4 lg:px-14 xl:px-16"
    >
      {navigation.map((item) => (
        <Link
          key={item.label}
          to={item.to}
          onClick={onNavigate}
          className="rounded-md px-3 py-2 text-sm text-paper transition-colors hover:bg-white/10 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-paper"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
