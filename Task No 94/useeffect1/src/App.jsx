import React, { useEffect } from 'react'
import './App.css'

const App = () => {
  useEffect(() =>{
    console.log("Component Mounted")
  },[]);
  return (
    <div>
      <h1>useEffect</h1>
    </div>
  )
}

export default App
