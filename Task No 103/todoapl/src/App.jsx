import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import UserFilter from "./Components/UserFilter";
import TodoTable from "./Components/TodoTable";


function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");
  const [userFilter, setUserFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("")

  useEffect(() => {
    setLoading(true);


    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);


        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(() => {
        setError("Failed to fetch todos from API");
        setLoading(false);
      });

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Todo title is required");
      return;
    }

    if (!userId) {
      setError("Please select a UserId first");
      return;
    }

    setError("");

    ; if (editId !== null) {

      const userTodos = todos.filter(
        (todo) => todo.userId === Number(userId)
      );

      const maxUserId =
        userTodos.length > 0
          ? Math.max(...userTodos.map((todo) => todo.id))
          : 0;

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId
            ? {
              ...todo,
              title,
              userId: Number(userId),
              id: maxUserId + 1
            }
            : todo
        )
      );

      setEditId(null);

    } else {

      const userTodos = todos.filter(
        (todo) => todo.userId === Number(userId)
      );

      const maxUserId =
        userTodos.length > 0
          ? Math.max(...userTodos.map((todo) => todo.id))
          : 0;

      const newTodo = {
        userId: Number(userId),
        id: maxUserId + 1,
        title,
        completed: false,
      };

      setTodos((prev) => [...prev, newTodo]);
    }

    setTitle("");
    setUserId("");
  };

  const handleEdit = (todo) => {
    setTitle(todo.title);
    setUserId(todo.userId);
    setEditId(todo.id);
  };


  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };


  const uniqueUsers = [...new Set(todos.map((todo) => todo.userId))];


  const filteredTodos = todos.filter((todo) => {
    if (userFilter === "all") return true;
    return todo.userId === Number(userFilter);
  });


  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };


  return (
    <div className="todo">
      <div className="todoheader">
        <h1>Todo App</h1>
      </div>


      <TodoForm
        title={title}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
        editId={editId}
        error={error}
        userId={userId}
        setUserId={setUserId}
      />


      <UserFilter
        userFilter={userFilter}
        setUserFilter={setUserFilter}
        uniqueUsers={uniqueUsers}
      />


      <TodoTable
        todos={filteredTodos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        loading={loading}
      />
    </div>
  );
}


export default App;

