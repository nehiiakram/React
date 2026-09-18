import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

const App = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    Promise.all([
      fetch("https://dummyjson.com/products/category/beauty")
        .then((response) => response.json()),

      fetch("https://dummyjson.com/products/category/womens-bags")
        .then((response) => response.json()),

      fetch("https://dummyjson.com/products/category/womens-jewellery")
        .then((response) => response.json()),

      fetch("https://dummyjson.com/products/category/womens-watches")
        .then((response) => response.json())
    ])

      .then((data) => {

        console.log(data);

        const allProducts = data.flatMap(
          (category) => category.products
        );

        setProducts(allProducts);
        setLoading(false);

      })

      .catch((error) => {

        console.log("API Error:", error);
        setError("Something went wrong!");
        setLoading(false);

      });

  }, []);

  return (
    <div>

      <Navbar />

      <h1>Beauty & Accessories Store</h1>

      {loading && <h2>Loading Products...</h2>}

      {error && <h2>{error}</h2>}

      {!loading && !error && (
        <div className="products-container">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      )}

    </div>
  );
};

export default App;