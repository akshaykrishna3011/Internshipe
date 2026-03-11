import React, { useState } from "react";
import './App.css'
const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    if (editId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: text } : todo
        )
      );
      setEditId(null);
    } 
    else {
      setTodos([...todos, { id: Date.now(), text }]);
    }

    setText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>CRUD Todo App</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;