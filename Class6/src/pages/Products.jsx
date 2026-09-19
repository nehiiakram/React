import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [favourites, setFavourites] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [activeCategory, setActiveCategory] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const products = [
    {
      id: 1,
      name: 'Modern Sofa',
      category: 'Living Room',
      price: 499,
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      description:
        'A comfortable modern sofa designed to bring elegance and comfort to your living room.',
      material: 'Premium Fabric',
      color: 'Beige',
    },
    {
      id: 2,
      name: 'Luxury Armchair',
      category: 'Living Room',
      price: 249,
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
      description:
        'A stylish armchair with a soft finish, perfect for reading and relaxing.',
      material: 'Soft Fabric',
      color: 'Cream',
    },
    {
      id: 3,
      name: 'Classic Coffee Table',
      category: 'Living Room',
      price: 299,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80',
      description:
        'A timeless coffee table with a clean design for modern living spaces.',
      material: 'Solid Wood',
      color: 'Brown',
    },
    {
      id: 4,
      name: 'Modern Floor Lamp',
      category: 'Living Room',
      price: 129,
      rating: 4.5,
      image:
        'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      description:
        'A modern floor lamp that adds warm and beautiful lighting to your room.',
      material: 'Metal',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Wooden TV Cabinet',
      category: 'Living Room',
      price: 349,
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80',
      description:
        'A spacious wooden TV cabinet designed for organized and stylish interiors.',
      material: 'Oak Wood',
      color: 'Natural Brown',
    },
    {
      id: 6,
      name: 'Cozy Ottoman',
      category: 'Living Room',
      price: 189,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80',
      description:
        'A soft and versatile ottoman that works beautifully in any living room.',
      material: 'Velvet',
      color: 'Gray',
    },

    {
      id: 7,
      name: 'King Size Bed',
      category: 'Bedroom',
      price: 799,
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      description:
        'A premium king size bed designed for comfort and peaceful nights.',
      material: 'Wood & Fabric',
      color: 'Light Brown',
    },
    {
      id: 8,
      name: 'Modern Bedside Table',
      category: 'Bedroom',
      price: 159,
      rating: 4.5,
      image:
        'https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=800&q=80',
      description:
        'A compact bedside table with practical storage and a modern appearance.',
      material: 'Wood',
      color: 'White',
    },
    {
      id: 9,
      name: 'Bedroom Dresser',
      category: 'Bedroom',
      price: 429,
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
      description:
        'A spacious dresser that combines storage functionality with elegant design.',
      material: 'Engineered Wood',
      color: 'Walnut',
    },
    {
      id: 10,
      name: 'Elegant Wardrobe',
      category: 'Bedroom',
      price: 649,
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
      description:
        'A spacious wardrobe designed to keep your bedroom organized and stylish.',
      material: 'Premium Wood',
      color: 'Oak',
    },
    {
      id: 11,
      name: 'Bedroom Bench',
      category: 'Bedroom',
      price: 229,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      description:
        'A comfortable bedroom bench that adds a stylish finishing touch.',
      material: 'Fabric',
      color: 'Cream',
    },
    {
      id: 12,
      name: 'Minimal Nightstand',
      category: 'Bedroom',
      price: 139,
      rating: 4.5,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      description:
        'A minimal nightstand perfect for keeping your essentials close by.',
      material: 'Wood',
      color: 'Brown',
    },

    {
      id: 13,
      name: 'Dining Table',
      category: 'Dining',
      price: 599,
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      description:
        'A beautiful dining table designed for memorable meals with family and friends.',
      material: 'Solid Oak',
      color: 'Natural',
    },
    {
      id: 14,
      name: 'Dining Chair',
      category: 'Dining',
      price: 149,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=800&q=80',
      description:
        'A comfortable dining chair with a modern silhouette and elegant finish.',
      material: 'Wood & Fabric',
      color: 'Beige',
    },
    {
      id: 15,
      name: 'Round Dining Table',
      category: 'Dining',
      price: 479,
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=800&q=80',
      description:
        'A round dining table perfect for creating a warm and social dining experience.',
      material: 'Wood',
      color: 'Brown',
    },
    {
      id: 16,
      name: 'Dining Sideboard',
      category: 'Dining',
      price: 389,
      rating: 4.5,
      image:
        'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
      description:
        'A stylish sideboard offering useful storage for your dining area.',
      material: 'Wood',
      color: 'Walnut',
    },
    {
      id: 17,
      name: 'Bar Stool',
      category: 'Dining',
      price: 119,
      rating: 4.4,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      description:
        'A modern bar stool with a comfortable seat and strong frame.',
      material: 'Metal & Fabric',
      color: 'Gray',
    },
    {
      id: 18,
      name: 'Dining Bench',
      category: 'Dining',
      price: 199,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
      description:
        'A modern dining bench that provides comfortable seating for multiple guests.',
      material: 'Wood & Fabric',
      color: 'Cream',
    },

    {
      id: 19,
      name: 'Executive Office Desk',
      category: 'Office',
      price: 549,
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      description:
        'A spacious executive desk designed for productive and professional workspaces.',
      material: 'Premium Wood',
      color: 'Dark Brown',
    },
    {
      id: 20,
      name: 'Ergonomic Office Chair',
      category: 'Office',
      price: 299,
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80',
      description:
        'An ergonomic office chair designed to provide comfortable support during work.',
      material: 'Mesh & Fabric',
      color: 'Black',
    },
    {
      id: 21,
      name: 'Modern Bookshelf',
      category: 'Office',
      price: 259,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80',
      description:
        'A modern bookshelf that keeps your workspace organized and stylish.',
      material: 'Wood',
      color: 'Natural',
    },
    {
      id: 22,
      name: 'Office Storage Cabinet',
      category: 'Office',
      price: 329,
      rating: 4.5,
      image:
        'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80',
      description:
        'A practical storage cabinet for keeping your office clean and organized.',
      material: 'Engineered Wood',
      color: 'White',
    },
    {
      id: 23,
      name: 'Minimal Office Table',
      category: 'Office',
      price: 379,
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80',
      description:
        'A clean and minimal desk designed for modern work environments.',
      material: 'Oak Wood',
      color: 'Light Brown',
    },
    {
      id: 24,
      name: 'Office Lounge Chair',
      category: 'Office',
      price: 279,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80',
      description:
        'A comfortable lounge chair for relaxing during breaks or reading.',
      material: 'Velvet',
      color: 'Gray',
    },
  ]

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        )

  const addToFavourite = (product) => {
    setFavourites((current) => {
      const alreadyFavourite = current.some(
        (item) => item.id === product.id
      )

      if (alreadyFavourite) {
        return current.filter((item) => item.id !== product.id)
      }

      return [...current, product]
    })
  }

  const openProduct = (product) => {
    setSelectedProduct(product)
    setQuantity(1)
  }

  const closeProduct = () => {
    setSelectedProduct(null)
  }

  const orderProduct = () => {
  Swal.fire({
    icon: 'success',
    title: 'Order Placed!',
    text: `${quantity} x ${selectedProduct.name} has been ordered successfully.`,
    confirmButtonText: 'Continue Shopping',
    confirmButtonColor: '#d97706',
  })
}

  const categories = [
    'All',
    'Living Room',
    'Bedroom',
    'Dining',
    'Office',
  ]

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">

      {/* ================= HEADER ================= */}

      <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">

        <div className="max-w-7xl mx-auto">

          <p className="text-amber-600 font-semibold tracking-widest text-sm">
            OUR COLLECTION
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Explore Our Collection
          </h1>

          <p className="text-gray-600 max-w-2xl mt-4 leading-7 text-sm sm:text-base">
            Discover furniture designed to bring comfort,
            functionality and modern style into every room.
          </p>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">

        <div className="max-w-7xl mx-auto">

          {/* TOP BAR */}

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-5">

            <div>

              <p className="text-gray-500 text-sm">
                Showing {filteredProducts.length} products
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {activeCategory === 'All'
                  ? 'All Products'
                  : activeCategory}
              </h2>

            </div>


            {/* MOBILE FILTER BUTTON */}

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium"
            >
              ☰
              {showFilters
                ? 'Hide Categories'
                : 'Filter Categories'}
            </button>


            {/* DESKTOP CATEGORY BUTTONS */}

            <div className="hidden lg:flex gap-3 flex-wrap justify-end">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                    activeCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>

          </div>


          {/* MOBILE CATEGORY MENU */}

          {showFilters && (

            <div className="lg:hidden bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {categories.map((category) => (

                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category)
                      setShowFilters(false)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition ${
                      activeCategory === category
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>

                ))}

              </div>

            </div>

          )}


          {/* PRODUCT GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">

            {filteredProducts.map((product) => {

              const isFavourite = favourites.some(
                (item) => item.id === product.id
              )

              return (

                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                >

                  {/* IMAGE */}

                  <div className="relative">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 sm:h-60 lg:h-64 object-cover"
                    />

                    {/* FAVOURITE */}

                    <button
                      onClick={() => addToFavourite(product)}
                      className={`absolute top-3 right-3 w-10 h-10 rounded-full shadow flex items-center justify-center text-xl hover:scale-110 transition ${
                        isFavourite
                          ? 'bg-amber-500 text-white'
                          : 'bg-white text-gray-700'
                      }`}
                    >
                      {isFavourite ? '♥' : '♡'}
                    </button>

                  </div>


                  {/* CONTENT */}

                  <div className="p-4 sm:p-5">

                    <p className="text-amber-600 text-sm font-medium">
                      {product.category}
                    </p>

                    <h3 className="text-lg font-bold text-gray-900 mt-1">
                      {product.name}
                    </h3>


                    <div className="flex items-center gap-1 mt-2">

                      <span className="text-amber-500">
                        ★
                      </span>

                      <span className="text-sm text-gray-500">
                        {product.rating}
                      </span>

                    </div>


                    {/* PRICE + BUY */}

                    <div className="flex items-center justify-between gap-3 mt-5">

                      <p className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </p>

                      <button
                        onClick={() => openProduct(product)}
                        className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-amber-600 transition whitespace-nowrap"
                      >
                        Buy Now
                      </button>

                    </div>

                  </div>

                </div>

              )
            })}

          </div>

        </div>

      </section>


      {/* ================= PRODUCT DETAIL PANEL ================= */}

      {selectedProduct && (

        <div className="fixed inset-0 z-50">

          {/* BACKDROP */}

          <div
            onClick={closeProduct}
            className="absolute inset-0 bg-black/50"
          ></div>


          {/* PANEL */}

          <div className="absolute right-0 top-0 h-full w-full sm:max-w-[500px] bg-white shadow-2xl overflow-y-auto">

            {/* CLOSE */}

            <button
              onClick={closeProduct}
              className="absolute top-4 right-4 z-10 bg-white/90 shadow w-10 h-10 rounded-full text-xl hover:bg-gray-100"
            >
              ✕
            </button>


            {/* IMAGE */}

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 sm:h-80 object-cover"
            />


            {/* DETAILS */}

            <div className="p-5 sm:p-7">

              <p className="text-amber-600 font-medium">
                {selectedProduct.category}
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 pr-10">
                {selectedProduct.name}
              </h2>


              {/* RATING */}

              <div className="flex items-center gap-2 mt-3">

                <span className="text-amber-500">
                  ★
                </span>

                <span className="text-gray-600">
                  {selectedProduct.rating} Rating
                </span>

              </div>


              {/* PRICE */}

              <p className="text-3xl font-bold text-gray-900 mt-5">
                ${selectedProduct.price}
              </p>


              {/* DESCRIPTION */}

              <p className="text-gray-600 leading-7 mt-5">
                {selectedProduct.description}
              </p>


              {/* INFO */}

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-7">

                <div className="bg-gray-50 rounded-xl p-4">

                  <p className="text-gray-500 text-sm">
                    Material
                  </p>

                  <p className="font-semibold text-gray-900 mt-1 text-sm sm:text-base">
                    {selectedProduct.material}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-xl p-4">

                  <p className="text-gray-500 text-sm">
                    Color
                  </p>

                  <p className="font-semibold text-gray-900 mt-1 text-sm sm:text-base">
                    {selectedProduct.color}
                  </p>

                </div>

              </div>


              {/* FAVOURITE */}

              <button
                onClick={() => addToFavourite(selectedProduct)}
                className="w-full border border-gray-200 py-3 rounded-xl mt-6 font-medium hover:border-amber-500 transition"
              >
                {favourites.some(
                  (item) => item.id === selectedProduct.id
                )
                  ? '♥ Added to Favourite'
                  : '♡ Add to Favourite'}
              </button>


              {/* QUANTITY */}

              <div className="flex items-center justify-between mt-6">

                <p className="font-semibold text-gray-900">
                  Quantity
                </p>

                <div className="flex items-center border rounded-full">

                  <button
                    onClick={() =>
                      setQuantity((q) => Math.max(1, q - 1))
                    }
                    className="w-10 h-10 text-lg"
                  >
                    −
                  </button>

                  <span className="w-10 text-center font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity((q) => q + 1)
                    }
                    className="w-10 h-10 text-lg"
                  >
                    +
                  </button>

                </div>

              </div>


              {/* ORDER */}

              <button
                onClick={orderProduct}
                className="w-full bg-gray-900 text-white py-4 rounded-xl mt-7 font-semibold hover:bg-amber-600 transition"
              >
                🛒 Order Now
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default Products