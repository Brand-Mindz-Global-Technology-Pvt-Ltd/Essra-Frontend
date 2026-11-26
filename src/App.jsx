import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import ShopProvider from '@/components/common/ShopProvider';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ShopProvider>
          <AppRoutes />
        </ShopProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
