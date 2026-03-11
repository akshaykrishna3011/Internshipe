import React from "react";

function TodoTable({ todos, handleEdit, handleDelete, handleToggle ,loading  }) {
  if (loading) {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading Todos...</p>
    </div>
  );
}
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={`${todo.userId}-${todo.id}`}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>

              <td>
                <button onClick={() => handleToggle(todo.id)}
                  style={{
                    backgroundColor: todo.completed ? "green" : "red",
                    color: "white"
                  }}>
                  {todo.completed ? "Done" : "Pending"}
                </button>
              </td>

              <td>
                <button onClick={() => handleEdit(todo)}>
                  Edit
                </button>

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
}

export default TodoTable;