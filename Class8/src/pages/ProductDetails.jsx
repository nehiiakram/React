import { useParams } from "react-router-dom";

function ProductDetails({ products }) {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <section className="bg-gray-50 min-h-[70vh] py-16">

      <div className="max-w-5xl mx-auto px-6">

        {product ? (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

            {/* Product Image */}
            <div className="bg-gray-100 h-[450px] flex items-center justify-center">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

            </div>

            {/* Product Details */}
            <div className="p-8 flex flex-col justify-center">

              <p className="text-sm text-amber-600 font-semibold uppercase tracking-widest">
                {product.category}
              </p>

              <h1 className="text-4xl font-bold text-gray-900 mt-3">
                {product.name}
              </h1>

              <p className="text-2xl font-bold text-gray-800 mt-6">
                PKR {product.price}
              </p>

              <p className="text-gray-500 leading-7 mt-5">
                Discover this stylish product from our {product.category}
                collection. Perfect for a modern and comfortable look.
              </p>

              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg mt-8 hover:bg-amber-600 transition">
                Buy Now
              </button>

            </div>

          </div>
        ) : (
          <div className="text-center py-20">

            <h1 className="text-4xl font-bold text-gray-900">
              Product Not Found
            </h1>

            <p className="text-gray-500 mt-3">
              This product does not exist.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}

export default ProductDetails;