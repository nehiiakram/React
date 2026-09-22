import Card from "../componenets/Card";

function KidsPage({ kidsCollection }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Kids' Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">

        {kidsCollection.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}

      </div>
    </div>
  );
}

export default KidsPage;