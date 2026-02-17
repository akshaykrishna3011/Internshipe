import React, { useState } from "react";
import TodoFrom from "./TodoFrom";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [nextId, setNextId] = useState(1); // start from 1

  const handleAdd = (text) => {
    if (editId !== null) {
      // Update
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, text } : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      // Add
      const newTodo = {
        id: nextId,
        text,
      };

      setTodos([...todos, newTodo]);
      setNextId(nextId + 1); // increase id
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
  };

  return (
    <div className="todo">
      <div className="todoheader">
        <h1>TODO List</h1>
      </div>

      <TodoFrom onAdd={handleAdd} editId={editId} />

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td> {/* Display serial number */}
              <td>{todo.text}</td>
              <td>
                <button onClick={() => handleEdit(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;