import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="bg-gray-50">

      {/* ================= ABOUT HERO ================= */}

      <section className="bg-gray-900 text-white px-8 py-24">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-amber-500 font-semibold tracking-widest">
            ABOUT FURNICO
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            More Than Furniture.
            <br />
            It's Your <span className="text-amber-500">Lifestyle.</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
            We create furniture that brings comfort, character
            and timeless style into the spaces people call home.
          </p>

        </div>

      </section>


      {/* ================= OUR STORY ================= */}

      <section className="px-8 py-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
              alt="Furnico interior"
              className="w-full h-[520px] object-cover rounded-3xl shadow-lg"
            />

          </div>


          {/* Story */}
          <div>

            <p className="text-amber-600 font-semibold tracking-widest">
              OUR STORY
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-3 leading-tight">
              Creating Better Spaces,
              <br />
              One Piece at a Time.
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Furnico started with a simple idea: furniture should
              not only fill a room, it should make people feel
              comfortable and connected to their space.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              We carefully bring together modern design,
              practical functionality and timeless materials
              to create pieces that fit naturally into everyday life.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              Today, Furnico continues to grow with the same
              belief — beautiful furniture should be accessible,
              comfortable and made with purpose.
            </p>

          </div>

        </div>

      </section>


      {/* ================= OUR VALUES ================= */}

      <section className="bg-white px-8 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-amber-600 font-semibold tracking-widest">
              WHAT WE BELIEVE
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Our Core Values
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Everything we do is guided by a few simple principles.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


            {/* Value 1 */}
            <div className="p-8 rounded-2xl bg-gray-50 text-center hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-2xl">
                ✨
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                Quality
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                We focus on quality materials and thoughtful
                details in every piece we offer.
              </p>

            </div>


            {/* Value 2 */}
            <div className="p-8 rounded-2xl bg-gray-50 text-center hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-2xl">
                🎨
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                Design
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                We love clean, modern designs that remain
                beautiful beyond changing trends.
              </p>

            </div>


            {/* Value 3 */}
            <div className="p-8 rounded-2xl bg-gray-50 text-center hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-2xl">
                ❤️
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                People First
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Our goal is to make every customer's home
                feel more comfortable and personal.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= JOURNEY ================= */}

      <section className="px-8 py-20">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-amber-600 font-semibold tracking-widest">
              OUR JOURNEY
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Growing With You
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="text-center">
              <p className="text-3xl font-bold text-amber-600">
                2016
              </p>

              <h3 className="font-semibold text-gray-900 mt-3">
                The Beginning
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Furnico began with a passion for better home design.
              </p>
            </div>


            <div className="text-center">
              <p className="text-3xl font-bold text-amber-600">
                2020
              </p>

              <h3 className="font-semibold text-gray-900 mt-3">
                Growing Collection
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                We expanded our furniture styles and collections.
              </p>
            </div>


            <div className="text-center">
              <p className="text-3xl font-bold text-amber-600">
                2024
              </p>

              <h3 className="font-semibold text-gray-900 mt-3">
                New Designs
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                More modern designs created for modern homes.
              </p>
            </div>


            <div className="text-center">
              <p className="text-3xl font-bold text-amber-600">
                2026
              </p>

              <h3 className="font-semibold text-gray-900 mt-3">
                What's Next
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Continuing to create spaces people love.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="bg-gray-900 px-8 py-20">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-white">
            Let's Create a Home
            <br />
            You Love.
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            Explore our collection and discover pieces
            designed for your everyday life.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-500 transition"
          >
            Explore Products
          </Link>

        </div>

      </section>

    </div>
  )
}

export default About