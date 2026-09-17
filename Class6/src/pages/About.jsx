import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
              alt="Beautiful modern interior"
              className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>

            <p className="text-amber-600 font-semibold tracking-widest mb-3">
              ABOUT FURNICO
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Furniture That
              <br />
              Makes You Feel
              <br />
              <span className="text-amber-600">At Home.</span>
            </h1>

            <p className="text-gray-600 mt-6 leading-8">
              At Furnico, we believe your home should reflect your
              personality and lifestyle. That's why we create modern,
              comfortable and timeless furniture for every space.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              From cozy sofas to elegant tables, every piece is carefully
              selected to bring comfort, style and warmth into your home.
            </p>

            <button className="mt-7 bg-gray-900 text-white px-7 py-3 rounded-full hover:bg-amber-600 transition">
              Explore Our Collection
            </button>

          </div>

        </div>
      </section>


      {/* Why Furnico */}
      <section className="bg-white px-8 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold">
              WHY FURNICO
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Designed For Your Lifestyle
            </h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                ✨
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Modern Design
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Clean and elegant designs that fit beautifully
                into modern homes.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                🛋️
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Comfort First
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Furniture created with comfort and everyday
                living in mind.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                ❤️
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Made With Care
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Every detail is chosen carefully to give your
                home a beautiful finishing touch.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Stats */}
      <section className="bg-gray-900 text-white px-8 py-14">

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-amber-500">
              10+
            </h3>
            <p className="text-gray-400 mt-2">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-amber-500">
              5K+
            </h3>
            <p className="text-gray-400 mt-2">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-amber-500">
              100+
            </h3>
            <p className="text-gray-400 mt-2">
              Furniture Designs
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-amber-500">
              20+
            </h3>
            <p className="text-gray-400 mt-2">
              Collections
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default About