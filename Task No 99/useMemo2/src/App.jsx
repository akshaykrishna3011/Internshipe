import React, { useState, useMemo } from "react";
import './App.css'

function App() {
  const [filter, setFilter] = useState("");
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);

  const filteredNumbers = useMemo(() => {
    console.log("Filtering...");
    return numbers.filter(n => n.toString().includes(filter));
  }, [filter]);

  return (
    <div>
      <input
        value={filter}
        placeholder="Type a number"
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {filteredNumbers.map(n => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
