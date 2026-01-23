import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(false)

  const clickMe = () => {
    setShow(!show)
  }

  return (
    <>
      <button onClick={clickMe}>Show / Hide</button>

      {show && <p>This paragraph can be shown or hidden.</p>}
    </>
  )
}

export default App
