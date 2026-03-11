import React, { useState ,useEffect} from "react";

const TodoFrom = ({ onAdd, editId , editText}) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  
   useEffect(() => {
    if (editId !== null) {
      setText(editText);
    }
  }, [editId, editText]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Todo is required");
      return;
    }

    setError("");
    onAdd(text);
    setText("");
  };

  return (
    <div className="form">
      <form className="formfilde" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError("");
          }}
          placeholder="What would you like to do?"
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoFrom;