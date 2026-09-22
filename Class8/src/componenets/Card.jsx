function Card({ name, price, image, category }) {
  return (
    <div className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-gray-500">{category}</p>

        <h2 className="text-lg font-semibold mt-1">
          {name}
        </h2>

        <p className="text-lg font-bold text-gray-800 mt-2">
          PKR {price}
        </p>
      </div>

    </div>
  );
}

export default Card;