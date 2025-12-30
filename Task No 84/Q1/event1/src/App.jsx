import { useState } from 'react'
import './App.css'

function App() {
const handleClick = () => {
    alert("Button Clicked!")
}
  return (
    
      <div>
        <button style={{ backgroundColor :"lightblue"}} onClick={handleClick}>BUTTON</button>
      </div>
    
  )
}

export default App
