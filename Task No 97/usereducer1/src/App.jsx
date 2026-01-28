import React, { useReducer } from 'react'
import './App.css'

const initialState = 0;
const reducer = (State, Action) => {
  switch (Action) {
    case "INCREMENT":
      return State + 1;
    case "DECREMENT":
      return State - 1;
    case "RESET":
      return initialState;
    default:
      return State;

  }

}

const App = () => {
  const [Counter, dispatch] = useReducer(reducer, initialState)
  return (

    <div>
      <h1>Count:{Counter}</h1>
      <button style ={{backgroundColor:"lightblue"}}onClick={() => dispatch("INCREMENT")}>+</button>
      <button style ={{backgroundColor:"lightblue"}}onClick={() => dispatch("DECREMENT")}>-</button>
      <button style ={{backgroundColor:"lightblue"}}onClick={() => dispatch("RESET")}>RESET</button>
    </div>
  )
}

export default App
