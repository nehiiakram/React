import Card from "../componenets/Card";

function AllProducts({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">

      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          category={product.category}
        />
      ))}

    </div>
  );
}

export default AllProducts;