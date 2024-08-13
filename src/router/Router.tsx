import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes';
// import Home from '../pages/Home'
import HomePage from '../page/HomePage';
const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route path={'/'} element={<HomePage />} />
    </ErrorBoundaryRoutes>
  );
};

export default Router;
