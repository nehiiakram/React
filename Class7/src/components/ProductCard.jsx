import React from "react";

const ProductCard = ({ product }) => {

  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="product-info">

        <h3>{product.title}</h3>

        <p>{product.category}</p>

        <h4>${product.price}</h4>

        <button>
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;