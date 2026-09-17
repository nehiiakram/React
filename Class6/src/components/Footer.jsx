import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">
            Furni<span className="text-amber-500">co</span>
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            Modern furniture designed to make your
            home beautiful, comfortable and welcoming.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="text-gray-400 hover:text-amber-500 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-400 hover:text-amber-500 transition"
            >
              About
            </Link>

            <Link
              to="/products"
              className="text-gray-400 hover:text-amber-500 transition"
            >
              Products
            </Link>

            <Link
              to="/contact"
              className="text-gray-400 hover:text-amber-500 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Services
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <p>Furniture Design</p>
            <p>Home Decoration</p>
            <p>Interior Solutions</p>
            <p>Custom Furniture</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">
            <p>📍 Karachi, Pakistan</p>
            <p>📧 hello@furnico.com</p>
            <p>📞 +92 300 1234567</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-sm">
            © 2026 Furnico. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed with ❤️
          </p>

        </div>
      </div>

    </footer>
  )
}

export default Footer