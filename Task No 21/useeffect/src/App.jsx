import React, { useEffect, useState } from 'react';
import'./App.css'

const App = () => {
  const [clicked, setClicked] = useState(false);

  const handleChange = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      console.log("Hello");
    }
  }, [clicked]);

  return (
    <div>
      <button onClick={handleChange}>Click Me</button>
    </div>
  );
};

export default App;
