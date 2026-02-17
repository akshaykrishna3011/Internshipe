import React, { useState } from "react";

const TodoFrom = ({ onAdd, editId }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd(text);
    setText("");
  };

  return (
    <div className="form">
      <form className="formfilde" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What would you like to do?"
        />
        <button type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoFrom;