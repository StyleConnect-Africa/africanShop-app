import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './redux/strore';
import { Provider } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components
const LandingPage = lazy(() => import('./pages/landingPage/LandingPage'));
const ShopPage = lazy(() => import('./pages/shopPage/ShopPage'));
const VendorPage = lazy(() => import('./pages/vendorPage/VendorPage'));
const ContactPage = lazy(() => import('./pages/contactPage/ContactPage'));
const SignUp2 = lazy(() => import('./components/vendor/SignUp2'));
const SignUp = lazy(() => import('./components/user/SignUp'));
const SignUp1 = lazy(() => import('./components/vendor/SignUp1'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./components/user/Login'));
const VendorLogin = lazy(() => import('./components/vendor/VendorLogin'));
const Cart = lazy(() => import('./pages/cart'));
const VendorProducts = lazy(() => import('./pages/vendorProducts/VendorProducts'));
const OrderConfirmation = lazy(() => import('./pages/orderConfirmation/OrderConfirmation'));
const TrackOrder = lazy(() => import('./pages/trackOrder/TrackOrder'));

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/shoppage', element: <ShopPage /> },
    { path: '/vendorpage', element: <VendorPage /> },
    { path: '/contactpage', element: <ContactPage /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/signup1', element: <SignUp1 /> },
    { path: '/signup2', element: <SignUp2 /> },
    { path: '/login', element: <Login /> },
    { path: '/vendorlogin', element: <VendorLogin /> },
    { path: '/cart', element: <Cart /> },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute isAuthenticated={true}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    { path: '/vendorproducts', element: <VendorProducts /> },
    { path: '/orderconfirmation', element: <OrderConfirmation /> },
    { path: '/trackorder', element: <TrackOrder /> },
  ]);

  return (
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
}

export default App;
