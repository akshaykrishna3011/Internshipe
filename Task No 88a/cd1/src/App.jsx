import { useState } from "react";
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  let message;
  if (isLoggedIn) {
    message = "Welcome User";
  } else {
    message = "Please Login";
  }

  return (
    <div>
      <h1>Login Status</h1>

      <h2>If / Else: {message}</h2>

      <h2>
        Ternary: {isLoggedIn ? "Welcome User" : "Please Login"}
      </h2>

      <h2>AND Operator:</h2>
      {isLoggedIn && <h2>Welcome User</h2>}
      {!isLoggedIn && <h2>Please Login</h2>}
    </div>
  );
}

export default App;
