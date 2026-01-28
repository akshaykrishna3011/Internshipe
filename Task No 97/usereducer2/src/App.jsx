import React, { useReducer } from "react";
import './App.css'
const initialState = {
  name: "",
  email: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };

    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div>
      <h2>Handle name and email updates</h2>

      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "UPDATE_NAME", payload: e.target.value })
        }
      />

      

      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
        }
      />

      <br /><br />

      <p><b>Name:</b> {state.name}</p>
      <p><b>Email:</b> {state.email}</p>
    </div>
  );
}

export default App;
