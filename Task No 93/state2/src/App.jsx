import { useState } from "react";
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo(""); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={addTodo} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
