import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Loader from '@/components/common/Loader';
import SEO from '@/components/common/SEO';

const Home = lazy(() => import('@/pages/Home/Home'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            element={
              <>
                <SEO />
                <Home />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
