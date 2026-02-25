import React from "react";

const Card = ({ title, children }) => {
  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>

      <div>{children}</div>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "16px",
  margin: "12px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  background: "#fff"
};

export default Card;