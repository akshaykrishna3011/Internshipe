import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const onHandleChange = (event) => {
    console.log(event.target.value)
  }
  return (

    <div>
      <input onChange={onHandleChange} type='text'></input>

    </div>


  )
}

export default App
