// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./layout/RootLayout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductListing from "./components/ProductListing";


function App() {
  
  return (
   <BrowserRouter>
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <ProductListing />
      <Footer />
    </div>
   </BrowserRouter>
  )
}

export default App;




// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }

// export default App;


// ********************