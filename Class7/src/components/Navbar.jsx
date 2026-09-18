import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        Glow & Grace
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#products">Products</a>
        </li>

        <li>
          <a href="#beauty">Beauty</a>
        </li>

        <li>
          <a href="#accessories">Accessories</a>
        </li>
      </ul>

      <button className="cart-btn">
        🛒 Cart
      </button>

    </nav>
  );
};

export default Navbar;