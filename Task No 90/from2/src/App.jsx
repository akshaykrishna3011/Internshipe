import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setMessage("Login Successful");
    } else {
      setMessage("Invalid Credentials");
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Login Form</h2>

      <form className="form" onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>

        <h3>{message}</h3>
      </form>
    </>
  );
}

export default App;
