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
      <a
        className="fixed top-3 left-3 z-50 -translate-y-[160%] rounded-[0.65rem] bg-paper px-5 py-3 text-maroon transition-transform focus:translate-y-0 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-maroon"
        href="#main-content"
      >
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
