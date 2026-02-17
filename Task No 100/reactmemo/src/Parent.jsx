import React, { useState } from "react";
import Child from "./Child.jsx";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Parent rendered");

  return (
    <div>
      <h1>Parent</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Child count={count} />
    </div>
  );
};

export default Parent;
