import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1 style={{backgroundColor:"lightblue",borderRadius:"10px"}}>{counter}</h1>
      <button onClick={increment}style={{margin: "10px",backgroundColor:"lightblue"}}>+</button>
      <button onClick={decrement}style={{margin: "10px",backgroundColor:"lightblue"}}>-</button>
    </div>
  );
};

export default App;
