import { useState } from "react";
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>{isLoggedIn ? "Logged in" : "Guest"}</h2>

      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
}

export default App;
