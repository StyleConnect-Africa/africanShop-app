
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductListing from "./components/ProductListing";
import Vendor from "./components/Vendor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <ProductListing />
      <Vendor />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default LandingPage;
