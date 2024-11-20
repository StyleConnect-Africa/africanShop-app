import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/landingPage/LandingPage";
import ShopPage from "./pages/shopPage/ShopPage";
import VendorPage from "./pages/vendorPage/VendorPage";
import ContactPage from "./pages/contactPage/ContactPage";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp2 from "./components/vendor/SignUp2";
import SignUp from "./components/user/SignUp";
import SignUp1 from "./components/vendor/SignUp1";
import Dashboard from "./pages/dashboard";
import Login from "./components/user/Login";
import VendorLogin from "./components/vendor/VendorLogin";
import Cart from "./pages/cart";
import VendorProducts from "./pages/vendorProducts/VendorProducts";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import TrackOrder from "./pages/trackOrder/TrackOrder";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/shoppage",
      element: <ShopPage />,
    },
    {
      path: "/vendorpage",
      element: <VendorPage />,
    },
    {
      path: "/contactpage",
      element: <ContactPage />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signup1",
      element: <SignUp1 />,
    },
    {
      path: "/signup2",
      element: <SignUp2 />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/vendorlogin",
      element: <VendorLogin />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute isAuthenticated={true}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/vendorproducts",
      element: <VendorProducts />,
    },
    {
      path:"/orderconfirmation",
      element:<OrderConfirmation />
    },
    {
      path:"/trackorder",
      element:<TrackOrder />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
