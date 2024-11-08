import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/landingPage/LandingPage";
import ShopPage from "./pages/shopPage/ShopPage";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
