import React from 'react';
import "./Product.css"

const Product = ({ product }) => {
  return (
    <div className='cover'>
      <div className='cover-img'>
     {product.img && (
        <img
          src={product.img}
        />
      )}
      </div>
       <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <div className='button'>
        <button>Buy Now</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
