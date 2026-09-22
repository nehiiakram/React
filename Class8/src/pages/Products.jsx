import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <section className="bg-gray-50 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Our Products
          </h1>

          <p className="text-gray-500 mt-2">
            Explore Our Latest Collection
          </p>
        </div>

        {/* Category Menu */}
        <div className="flex justify-center mb-10">

          <div className="bg-white shadow-md rounded-xl p-2 flex gap-2">

            <Link
              to="/products"
              className="px-5 py-2 rounded-lg bg-gray-900 text-white hover:bg-amber-500 transition"
            >
              All
            </Link>

            <Link
              to="/products/men"
              className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-amber-500 hover:text-white transition"
            >
              Men
            </Link>

            <Link
              to="/products/women"
              className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-amber-500 hover:text-white transition"
            >
              Women
            </Link>

            <Link
              to="/products/kids"
              className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-amber-500 hover:text-white transition"
            >
              Kids
            </Link>

          </div>

        </div>

        {/* Selected Category ka page yahan ayega */}
        <Outlet />

      </div>

    </section>
  );
}

export default Products;