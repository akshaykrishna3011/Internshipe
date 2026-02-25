import React, { useState } from "react";
import './App.css'
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = { name, email };

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
      });

      const data = await res.json();
      console.log("API Response:", data);

    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />


        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;
