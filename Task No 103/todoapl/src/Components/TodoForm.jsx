import React from "react";

function TodoForm({
  title,
  setTitle,
  handleSubmit,
  editId,
  error,
  userId,
  setUserId
}) {

  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="form">
      <form className="formfilde" onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Select UserId</option>

          {users.map((id) => (
            <option key={id} value={id}>
              User {id}
            </option>
          ))}

        </select>

        {error && <p className="error">{error}</p>}

        <button type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>

      </form>
    </div>
  );
}

export default TodoForm;
