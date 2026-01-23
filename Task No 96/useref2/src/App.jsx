import { useRef, useState } from "react";
import './App.css'

function App() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current++;

  return (
    <div>
      <h1>Component Render Count</h1>
      <p>Rendered: {renderCount.current} times</p>

      <button onClick={() => setCount(count + 1)}>
        Re-render Component
      </button>
    </div>
  );
}

export default App;
