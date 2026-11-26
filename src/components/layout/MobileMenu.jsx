import { Link } from 'react-router-dom';
import { navigation } from '@/data/navigation.data';

export default function MobileMenu({ onNavigate }) {
  return (
    <nav
      id="mobile-navigation"
      className="mobile-menu"
      aria-label="Mobile navigation"
    >
      {navigation.map((item) => (
        <Link key={item.label} to={item.to} onClick={onNavigate}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
