import React from 'react'
import './App.css'

function App() {
  const showAlert = () =>{
    alert("Button Clicked !")
  }
  return (
    <div>
      <button onClick={showAlert}>Click Me</button>
    </div>
  )
}

export default App
