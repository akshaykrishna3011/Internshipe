import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button style={{backgroundColor:"green",color:"white",margin:"10px"}}onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{backgroundColor:"red",color:"white",margin:"10px"}}onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={{backgroundColor:"blue",color:"white",margin:"10px"}} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
