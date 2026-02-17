import React, { useState } from "react";

const Login = React.memo(({ onLogin }) => {
  const [name, setName] = useState("");

  return (
    <div className="login">
      <div> 
      <h2 style={{textAlign:'center'}}>Login</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
});

export default Login;
