import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 50000, description: "High performance laptop" },
  { id: 2, name: "Mobile", price: 20000, description: "Smartphone with good camera" },
  { id: 3, name: "Headphones", price: 2000, description: "Noise cancelling headphones" },
];

const ProductDetail = () => {
  const { id } = useParams();  

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
