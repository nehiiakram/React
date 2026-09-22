import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold">
          StyleHub
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>

          <Link to="/products" className="hover:text-gray-300">
            Products
          </Link>

          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;