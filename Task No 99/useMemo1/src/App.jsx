import { useState, useMemo } from "react";
import './App.css'
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const result = useMemo(() => {
    console.log("Calculation running...");
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += i;
    }
    return sum * count;
  }, [count]);

  return (
    <div>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br /><br />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
}

export default App;
