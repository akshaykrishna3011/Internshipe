import React, { useState } from "react";

const Login = React.memo(({ onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    if (!name.trim() || !password.trim()) {
      setError("Username and Password are required");
      return;
    }

    setError("");
    onLogin(name, password);
  };

  return (
    <div className="login">
      <div>
        <h2 style={{ textAlign: "center" }}>Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter username"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
});

export default Login;