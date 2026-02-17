import React from "react";

const Child = ({ count }) => {
  console.log("Child rendered");

  return <h2>Child Count: {count}</h2>;
};

export default React.memo(Child);
