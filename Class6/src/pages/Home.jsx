import React from 'react'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="px-8 py-20 flex items-center justify-between">

        {/* Left Side */}
        <div className="w-1/2">

          <p className="text-amber-600 font-semibold mb-3">
            MODERN FURNITURE
          </p>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Make Your Home
            <br />
            Beautiful & Comfortable
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Discover elegant furniture designed to make
            your home stylish, comfortable and welcoming.
          </p>

          <button className="mt-8 bg-gray-900 text-white px-7 py-3 rounded-full hover:bg-amber-600 transition">
            Explore Collection
          </button>

        </div>

        {/* Right Side */}
        <div className="w-1/2">

          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
            alt="Modern furniture"
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />

        </div>

      </section>

    </div>
  )
}

export default Home