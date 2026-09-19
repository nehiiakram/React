import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-3xl font-bold text-white"
            >
              Furni<span className="text-amber-500">co</span>
            </Link>

            <p className="text-gray-400 mt-5 leading-7 text-sm">
              Modern furniture designed to bring comfort,
              style and personality into every space.
            </p>

            <div className="flex items-center gap-3 mt-6">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/neha-akram-2b670735a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-amber-600 hover:text-white transition"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              {/* Email */}
              <a
                href="mailto:Nehakhan29934@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-amber-600 hover:text-white transition"
                title="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>

            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          {/* Collections */}
          <div>
            <h3 className="text-lg font-semibold">
              Collections
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Living Room
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Bedroom
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Dining Room
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Office
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href="mailto:Nehakhan29934@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-amber-500 transition"
              >
                <i className="fas fa-envelope mt-1"></i>
                <span>Nehakhan29934@gmail.com</span>
              </a>

              <a
                href="tel:+923272105077"
                className="flex items-center gap-3 text-gray-400 hover:text-amber-500 transition"
              >
                <i className="fas fa-phone"></i>
                <span>+92 327 2105077</span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <i className="fas fa-location-dot mt-1"></i>
                <span>Karachi, Pakistan</span>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2026 Furnico. All rights reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Designed & Developed with ❤️
            </p>

          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer