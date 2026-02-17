import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];

const Products = () => {
  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          
          <Link to={`/products/${product.id}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;
