import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { RouteTransition } from './components/RouteTransition';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { WarrantyPage } from './pages/WarrantyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <>
      <MainLayout>
        <RouteTransition>{(location) => <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/productos/:slug" element={<ProductDetailPage />} />
          <Route path="/garantia" element={<WarrantyPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>}</RouteTransition>
      </MainLayout>
    </>
  );
}
