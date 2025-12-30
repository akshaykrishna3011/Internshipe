import { useState } from 'react'
import './App.css'
import Product from './component/Product';

function App() {
  const products = [
    { id: 1, name: "Walker Best Student & Office Work Laptop", price: 16490 ,img:"image.jpg"},
    { id: 2, name: "HP Intel Core i3 13th Gen 1315u Laptop", price: 36990,img:"lap.jpg" },
    { id: 3, name: "Acer Aspire 3 15.6 Intel Core Celeron N4500 Laptop", price: 22990 ,img:"image3.jpg"},
  ];

  return (
    <div className='App'>
      

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
