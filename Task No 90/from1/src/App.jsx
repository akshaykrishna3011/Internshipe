import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div>
      <h2>Controlled Form</h2>
      <div className="from">
        <form onSubmit={handleSubmit}>
          <div className="name-secton">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <br />

          <div className="name-secton">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <br />

          <button style={{backgroundColor:"lightblue"}} 
          type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
