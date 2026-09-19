import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}

      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <p className="text-amber-600 font-semibold tracking-widest mb-4">
              MODERN FURNITURE
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Make Your Home
              <br />
              Beautiful &
              <br />
              <span className="text-amber-600">
                Comfortable.
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8 max-w-xl">
              Discover elegant furniture designed to make
              your home stylish, comfortable and welcoming.
              Find pieces that perfectly match your lifestyle.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/products"
                className="bg-gray-900 text-white px-7 py-3 rounded-full hover:bg-amber-600 transition"
              >
                Explore Collection
              </Link>

              <Link
                to="/about"
                className="border border-gray-900 text-gray-900 px-7 py-3 rounded-full hover:bg-gray-900 hover:text-white transition"
              >
                Our Story
              </Link>

            </div>

          </div>


          {/* Hero Image */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80"
              alt="Modern furniture"
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />

            {/* Small Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-6 py-4 shadow-lg">

              <p className="text-sm text-gray-500">
                Starting from
              </p>

              <p className="text-xl font-bold text-gray-900">
                $199
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="bg-white px-8 py-16">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">

            <div>
              <p className="text-amber-600 font-semibold">
                SHOP BY CATEGORY
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Find Your Perfect Style
              </h2>
            </div>

            <Link
              to="/products"
              className="text-gray-900 font-semibold hover:text-amber-600 mt-4 md:mt-0"
            >
              View All →
            </Link>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Category 1 */}
            <div className="group relative overflow-hidden rounded-2xl h-64">

              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80"
                alt="Living Room"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Living Room
                </h3>
              </div>

            </div>


            {/* Category 2 */}
            <div className="group relative overflow-hidden rounded-2xl h-64">

              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=700&q=80"
                alt="Bedroom"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Bedroom
                </h3>
              </div>

            </div>


            {/* Category 3 */}
            <div className="group relative overflow-hidden rounded-2xl h-64">

              <img
                src="https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=700&q=80"
                alt="Dining Room"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Dining
                </h3>
              </div>

            </div>


            {/* Category 4 */}
            <div className="group relative overflow-hidden rounded-2xl h-64">

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80"
                alt="Office"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Office
                </h3>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="px-8 py-16">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-amber-600 font-semibold">
              OUR COLLECTION
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Featured Products
            </h2>

            <p className="text-gray-600 mt-4">
              Discover some of our most loved furniture pieces.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Product 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">

              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80"
                alt="Modern Sofa"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-amber-600">
                  Living Room
                </p>

                <h3 className="text-xl font-semibold mt-1">
                  Modern Sofa
                </h3>

                <p className="text-gray-500 mt-2">
                  $499
                </p>
              </div>

            </div>


            {/* Product 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">

              <img
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=700&q=80"
                alt="Luxury Chair"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-amber-600">
                  Chairs
                </p>

                <h3 className="text-xl font-semibold mt-1">
                  Luxury Chair
                </h3>

                <p className="text-gray-500 mt-2">
                  $249
                </p>
              </div>

            </div>


            {/* Product 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">

              <img
                src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=700&q=80"
                alt="Wooden Table"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-amber-600">
                  Dining
                </p>

                <h3 className="text-xl font-semibold mt-1">
                  Wooden Table
                </h3>

                <p className="text-gray-500 mt-2">
                  $299
                </p>
              </div>

            </div>


            {/* Product 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">

              <img
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80"
                alt="Modern Lamp"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-amber-600">
                  Lighting
                </p>

                <h3 className="text-xl font-semibold mt-1">
                  Modern Lamp
                </h3>

                <p className="text-gray-500 mt-2">
                  $129
                </p>
              </div>

            </div>

          </div>


          <div className="text-center mt-10">

            <Link
              to="/products"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-amber-600 transition"
            >
              View All Products
            </Link>

          </div>

        </div>

      </section>

      {/* ================= NEW ARRIVALS ================= */}

<section className="bg-white px-8 py-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">

      <div>
        <p className="text-amber-600 font-semibold">
          JUST ARRIVED
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          New Arrivals
        </h2>

        <p className="text-gray-600 mt-3">
          Fresh designs made to elevate your space.
        </p>
      </div>

      <Link
        to="/products"
        className="text-gray-900 font-semibold hover:text-amber-600 transition mt-4 md:mt-0"
      >
        Explore All →
      </Link>

    </div>


    {/* Products */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


      {/* Product 1 */}
      <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition">

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=700&q=80"
            alt="Accent Chair"
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
          />

          <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            NEW
          </span>

        </div>

        <div className="p-5">

          <p className="text-sm text-gray-500">
            Chairs
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-1">
            Accent Chair
          </h3>

          <div className="flex justify-between items-center mt-4">

            <p className="text-lg font-bold text-gray-900">
              $229
            </p>

            <Link
              to="/products"
              className="text-sm font-semibold text-amber-600 hover:text-gray-900"
            >
              View →
            </Link>

          </div>

        </div>

      </div>


      {/* Product 2 */}
      <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition">

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=80"
            alt="Modern Side Table"
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
          />

          <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            NEW
          </span>

        </div>

        <div className="p-5">

          <p className="text-sm text-gray-500">
            Tables
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-1">
            Side Table
          </h3>

          <div className="flex justify-between items-center mt-4">

            <p className="text-lg font-bold text-gray-900">
              $159
            </p>

            <Link
              to="/products"
              className="text-sm font-semibold text-amber-600 hover:text-gray-900"
            >
              View →
            </Link>

          </div>

        </div>

      </div>


      {/* Product 3 */}
      <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition">

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=700&q=80"
            alt="Modern Sofa"
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
          />

          <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            NEW
          </span>

        </div>

        <div className="p-5">

          <p className="text-sm text-gray-500">
            Living Room
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-1">
            Cozy Sofa
          </h3>

          <div className="flex justify-between items-center mt-4">

            <p className="text-lg font-bold text-gray-900">
              $549
            </p>

            <Link
              to="/products"
              className="text-sm font-semibold text-amber-600 hover:text-gray-900"
            >
              View →
            </Link>

          </div>

        </div>

      </div>


      {/* Product 4 */}
      <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition">

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=700&q=80"
            alt="Modern Ottoman"
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
          />

          <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            NEW
          </span>

        </div>

        <div className="p-5">

          <p className="text-sm text-gray-500">
            Decor
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-1">
            Modern Ottoman
          </h3>

          <div className="flex justify-between items-center mt-4">

            <p className="text-lg font-bold text-gray-900">
              $189
            </p>

            <Link
              to="/products"
              className="text-sm font-semibold text-amber-600 hover:text-gray-900"
            >
              View →
            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-gray-900 text-white px-8 py-16">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-amber-500 font-semibold">
              WHY FURNICO
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Designed For Better Living
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center p-8">
              <div className="text-4xl mb-5">
                ✨
              </div>

              <h3 className="text-xl font-semibold">
                Premium Quality
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                Carefully selected furniture made for
                comfort and long-lasting use.
              </p>
            </div>


            <div className="text-center p-8">
              <div className="text-4xl mb-5">
                🎨
              </div>

              <h3 className="text-xl font-semibold">
                Modern Design
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                Timeless designs that bring elegance
                and personality to every room.
              </p>
            </div>


            <div className="text-center p-8">
              <div className="text-4xl mb-5">
                🚚
              </div>

              <h3 className="text-xl font-semibold">
                Fast Delivery
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                Get your favorite furniture delivered
                conveniently to your doorstep.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="px-8 py-20">

        <div className="max-w-6xl mx-auto bg-amber-600 rounded-3xl px-8 py-14 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready To Transform Your Home?
          </h2>

          <p className="text-amber-100 mt-4">
            Explore our collection and find furniture
            that feels like it belongs in your home.
          </p>

          <Link
            to="/products"
            className="inline-block mt-7 bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Shop Collection
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Home