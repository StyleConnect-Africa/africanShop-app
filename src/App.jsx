import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/landingPage/LandingPage";
import ShopPage from "./pages/shopPage/ShopPage";
import VendorPage from "./pages/vendorPage/VendorPage";
import ContactPage from "./pages/contactPage/ContactPage";
import UserSignUp from "./components/user/SignUp";
import VendorSignUp1 from "./components/vendor/SignUp1";
import SignUp2 from "./components/vendor/SignUp2";
import SignUp from "./components/user/SignUp";
import SignUp1 from "./components/vendor/SignUp1";
import Login from "./components/user/Login"
import VendorLogin from "./components/vendor/VendorLogin"
import Cart from "./pages/cart/Cart";
import WishList from "./pages/wishList/WishList";

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
      element: <SignUp />
    },
    {
      path: "/signup1",
      element: <SignUp1 />
    },
    {
      path:"/signup2",
      element: <SignUp2 />
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/vendorlogin",
      element:<VendorLogin />
    },
    {
      path:"/cart",
      element:<Cart />
    },
    {
      path:"/wishlist",
      element:<WishList />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
