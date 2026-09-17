import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">

      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Furni<span className="text-amber-600">co</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">

        <Link
          to="/"
          className="text-gray-800 font-medium hover:text-amber-600 transition"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-gray-600 font-medium hover:text-amber-600 transition"
        >
          About
        </Link>

        <Link
          to="/products"
          className="text-gray-600 font-medium hover:text-amber-600 transition"
        >
          Products
        </Link>

        <Link
          to="/contact"
          className="text-gray-600 font-medium hover:text-amber-600 transition"
        >
          Contact
        </Link>

      </div>

      {/* Shop Button */}
      <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-amber-600 transition">
        Shop Now
      </button>

    </nav>
  )
}

export default Navbar