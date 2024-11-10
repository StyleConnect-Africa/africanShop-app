import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/landingPage/LandingPage";
import ShopPage from "./pages/shopPage/ShopPage";
import VendorPage from "./pages/vendorPage/VendorPage";
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path:"/shoppage",
      element:<ShopPage />
    },
    {
      path:"/vendorpage",
      element:<VendorPage />
    },
    {
      path:"/contactpage",
      element:<ContactPage />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
