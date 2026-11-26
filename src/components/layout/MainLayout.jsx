import { Outlet } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import Footer from './Footer';
import ShopPanels from '@/components/common/ShopPanels';
import ScrollToTop from '@/components/common/ScrollToTop';

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ShopPanels />
    </>
  );
}
