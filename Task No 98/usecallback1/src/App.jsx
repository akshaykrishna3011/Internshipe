import { useState, useCallback } from "react";
import Child from "./Child";
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  console.log("Parent rendered");

  return (
    <div>
      <h1>Parent Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Parent
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
