import React, { useState } from 'react';
import Product from './components/Product';

function App() {
  const [product, setProduct] = useState({
    title: "Bluetooth Speaker",
    price: "1499",
    image: "https://via.placeholder.com/300x200?text=Speaker"
  });

  return (
    <div style={{ padding: "20px" }}>
      <Product 
        title={product.title}
        price={product.price}
        image={product.image}
      />
    </div>
  );
}

export default App;
