function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80"
              alt="Fashion Store"
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              About StyleHub
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Fashion That Fits Your Style
            </h1>

            <p className="text-gray-600 leading-7 mt-6">
              Welcome to StyleHub, a simple and modern fashion store
              created for everyone who loves stylish and comfortable
              clothing.
            </p>

            <p className="text-gray-600 leading-7 mt-4">
              From men's and women's collections to kids' fashion,
              we bring different styles together in one place.
              Our goal is to make your shopping experience simple,
              enjoyable, and easy.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  50+
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Products
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  3
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Collections
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  100%
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Style
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;