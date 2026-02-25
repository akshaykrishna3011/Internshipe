import React, { useRef } from "react";
import './App.css'
const App = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Focus Input Example</h2>

      <input type="text" ref={inputRef} placeholder="Enter name" />

      <br /><br />

      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default App;
