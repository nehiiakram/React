import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-[85vh] bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <p className="text-sm font-semibold tracking-[4px] text-amber-600 uppercase">
              Welcome to StyleHub
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mt-5">
              Find Your
              <span className="block text-amber-600">
                Perfect Style
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-7 mt-6 max-w-xl">
              Discover stylish and comfortable fashion collections
              for men, women and kids. Find something perfect for
              every style and every occasion.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <Link
                to="/products"
                className="bg-gray-900 text-white px-7 py-3 rounded-lg font-medium hover:bg-amber-600 transition"
              >
                Shop Collection
              </Link>

              <Link
                to="/about"
                className="border border-gray-900 text-gray-900 px-7 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition"
              >
                About Us
              </Link>

            </div>

          </div>


          {/* Right Image */}
          <div className="relative">

            <div className="absolute -top-5 -right-5 w-24 h-24 bg-amber-200 rounded-full opacity-60"></div>

            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80"
              alt="Fashion Collection"
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />

            

          </div>

        </div>


        {/* Bottom Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="font-bold text-lg">
              Men's Collection
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Modern styles for every occasion
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="font-bold text-lg">
              Women's Collection
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Elegant and stylish fashion
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="font-bold text-lg">
              Kids Collection
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Comfortable looks for kids
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;