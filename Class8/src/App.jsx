import { Routes, Route } from "react-router-dom";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import AllProducts from "./pages/AllProducts";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";



const menCollection = [
  {
    id: 1,
    name: "Classic Shirt",
    price: 2500,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    category: "Men",
  },
  {
    id: 2,
    name: "Casual Jacket",
    price: 4500,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
    category: "Men",
  },
  {
    id: 3,
    name: "Denim Shirt",
    price: 3200,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    category: "Men",
  },
  {
    id: 4,
    name: "Casual T-Shirt",
    price: 1800,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "Men",
  },
  {
    id: 5,
    name: "Formal Blazer",
    price: 5500,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    category: "Men",
  },
  {
    id: 6,
    name: "Classic Hoodie",
    price: 3000,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    category: "Men",
  },
];

const womenCollection = [
  {
    id: 7,
    name: "Summer Dress",
    price: 3500,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    category: "Women",
  },
  {
    id: 8,
    name: "Elegant Dress",
    price: 4200,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    category: "Women",
  },
  {
    id: 9,
    name: "Casual Top",
    price: 2200,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    category: "Women",
  },
  {
    id: 10,
    name: "Fashion Outfit",
    price: 4800,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
    category: "Women",
  },
  {
    id: 11,
    name: "Denim Jacket",
    price: 3800,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
    category: "Women",
  },
  {
    id: 12,
    name: "Classic Blouse",
    price: 2800,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    category: "Women",
  },
];

const kidsCollection = [
  {
    id: 13,
    name: "Kids T-Shirt",
    price: 1500,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
    category: "Kids",
  },
  {
    id: 14,
    name: "Kids Outfit",
    price: 2200,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
    category: "Kids",
  },
  {
    id: 15,
    name: "Kids Casual Wear",
    price: 1800,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b",
    category: "Kids",
  },
  {
    id: 16,
    name: "Kids Summer Dress",
    price: 2500,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8",
    category: "Kids",
  },
  {
    id: 17,
    name: "Kids Denim Outfit",
    price: 2800,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8",
    category: "Kids",
  },
  {
    id: 18,
    name: "Kids Hoodie",
    price: 2000,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
    category: "Kids",
  },
];
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
        <Route
  path="/products"
  element={<Products />}
>
  {/* All Products */}
  <Route
    index
    element={
      <AllProducts
        products={[
          ...menCollection,
          ...womenCollection,
          ...kidsCollection,
        ]}
      />
    }
  />

  {/* Men Products */}
  <Route
    path="men"
    element={
      <MenPage
        menCollection={menCollection}
      />
    }
  />

  {/* Women Products */}
  <Route
    path="women"
    element={
      <WomenPage
        womenCollection={womenCollection}
      />
    }
  />

  {/* Kids Products */}
  <Route
    path="kids"
    element={
      <KidsPage
        kidsCollection={kidsCollection}
      />
    }
  />

  {/* Dynamic Product Details */}
  <Route
    path=":id"
    element={
      <ProductDetails
        products={[
          ...menCollection,
          ...womenCollection,
          ...kidsCollection,
        ]}
      />
    }
  />
</Route>
  <Route path="*" element={<PageNotFound />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;