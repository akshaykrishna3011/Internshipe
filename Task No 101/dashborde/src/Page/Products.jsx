import { useMemo } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Headset", price: 2000 },
];

function Products() {
  const expensiveProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter(p => p.price > 10000);
  }, []);

  return (
    <div className="products">
      <div>
      <h2>Products</h2>
      {expensiveProducts.map(p => (
        <p key={p.id}>
          {p.name} - ₹{p.price}
        </p>
      ))}
      </div>
    </div>
  );
}

export default Products;
