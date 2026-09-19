import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm px-5 sm:px-8 py-5 relative z-40">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-gray-900"
        >
          Furni<span className="text-amber-600">co</span>
        </Link>


        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-8">

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


        {/* DESKTOP SHOP BUTTON */}

        <Link
          to="/products"
          className="hidden md:block bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-amber-600 transition"
        >
          Shop Now
        </Link>


        {/* MOBILE HAMBURGER */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-900 text-2xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>


      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="md:hidden mt-5 border-t border-gray-100 pt-4 pb-2">

          <div className="flex flex-col gap-2">

            <Link
              to="/"
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100 hover:text-amber-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100 hover:text-amber-600 transition"
            >
              About
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100 hover:text-amber-600 transition"
            >
              Products
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100 hover:text-amber-600 transition"
            >
              Contact
            </Link>


            {/* MOBILE SHOP BUTTON */}

            <Link
              to="/products"
              onClick={closeMenu}
              className="mt-2 text-center bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-amber-600 transition"
            >
              Shop Now
            </Link>

          </div>

        </div>

      )}

    </nav>
  )
}

export default Navbar