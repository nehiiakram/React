import React from 'react'

function Products() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-amber-600 font-semibold">
          OUR COLLECTION
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Featured Furniture
        </h1>

        <p className="text-gray-600 mt-4">
          Explore our collection of beautiful and comfortable furniture.
        </p>
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Product 4 */}
<div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition">
  <img
    src="https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=800&q=80"
    alt="Modern Lamp"
    className="w-full h-64 object-cover"
  />

  <div className="p-5">
    <h2 className="text-xl font-semibold text-gray-900">
      Modern Lamp
    </h2>

    <p className="text-gray-500 mt-2">
      Elegant lighting for your home.
    </p>

    <p className="text-amber-600 font-bold text-lg mt-4">
      $129
    </p>
  </div>
</div>


{/* Product 5 */}
<div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition">
  <img
    src="https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=800&q=80"
    alt="Comfort Chair"
    className="w-full h-64 object-cover"
  />

  <div className="p-5">
    <h2 className="text-xl font-semibold text-gray-900">
      Comfort Chair
    </h2>

    <p className="text-gray-500 mt-2">
      A comfortable chair with modern design.
    </p>

    <p className="text-amber-600 font-bold text-lg mt-4">
      $199
    </p>
  </div>
</div>


{/* Product 6 */}
<div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition">
  <img
    src="https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80"
    alt="Wooden Cabinet"
    className="w-full h-64 object-cover"
  />

  <div className="p-5">
    <h2 className="text-xl font-semibold text-gray-900">
      Wooden Cabinet
    </h2>

    <p className="text-gray-500 mt-2">
      Stylish storage with a natural wooden finish.
    </p>

    <p className="text-amber-600 font-bold text-lg mt-4">
      $349
    </p>
  </div>
</div>

        {/* Product 1 */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80"
            alt="Sofa"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Modern Sofa
            </h2>

            <p className="text-gray-500 mt-2">
              Comfortable modern sofa.
            </p>

            <div className="flex items-center justify-between mt-5">
              <span className="text-lg font-bold text-amber-600">
                $499
              </span>

              <button className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80"
            alt="Chair"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Luxury Chair
            </h2>

            <p className="text-gray-500 mt-2">
              Elegant chair for your home.
            </p>

            <div className="flex items-center justify-between mt-5">
              <span className="text-lg font-bold text-amber-600">
                $249
              </span>

              <button className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=700&q=80"
            alt="Table"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Wooden Table
            </h2>

            <p className="text-gray-500 mt-2">
              Simple and stylish wooden table.
            </p>

            <div className="flex items-center justify-between mt-5">
              <span className="text-lg font-bold text-amber-600">
                $299
              </span>

              <button className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Products