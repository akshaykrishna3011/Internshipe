import { useState } from 'react'
import './App.css'
import Product from './component/Product';

function App() {
  const [product, setproduct] = useState({
    title: "Bluetooth Speaker",
    price: "1499",
    image: "/jbl.jpg"
  });

  return (

    <div>
      <div style={{ padding: "20px" }}>
        <Product
          title={product.title}
          price={product.price}
          image={product.image}
        />
      </div>
    </div>

  )
}

export default App
