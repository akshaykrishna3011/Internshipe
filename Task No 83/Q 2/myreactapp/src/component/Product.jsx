import React from 'react';

const Product = (props) => {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif"
      }}
    >
      <img
        src={props.image}
        alt={props.title}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />

      <div style={{ padding: "15px" }}>
        <h3 style={{ margin: "0 0 10px 0" }}>{props.title}</h3>
        <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0" }}>
          ₹{props.price}
        </p>
      </div>
    </div>
  );
};

export default Product;
