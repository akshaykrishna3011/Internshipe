import React from "react";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div>
      <h1>My API Key:</h1>
      <p>{apiKey}</p>
    </div>
  );
}

export default App;
