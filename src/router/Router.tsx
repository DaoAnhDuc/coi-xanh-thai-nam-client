import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes';
// import Home from '../pages/Home'
import HomePage from '../page/HomePage';
import ProductDetailPage from '../page/ProductDetailPage/ProductDetailPage';
import ProductsPage from '../page/ProductsPage/ProductsPage';

const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={`:productType`} element={<ProductsPage />}>
        <Route
          path={`:productId`}
          element={<ProductDetailPage />}
        ></Route>
      </Route>
    </ErrorBoundaryRoutes>
  );
};

export default Router;
