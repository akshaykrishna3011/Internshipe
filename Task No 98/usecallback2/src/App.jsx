import React, { useCallback, useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked with count:", count);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </>
  );
}

export default App;
