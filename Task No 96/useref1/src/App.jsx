import React, { useEffect, useRef } from 'react';
import './App.css'

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
      style={{padding:"10px",fontSize:"1rem",borderRadius:"1rem",backgroundColor:"lightblue"}}
        ref={inputRef}
        type="text"
        placeholder="I will be focused on load"
      />
    </div>
  );
};

export default App;
