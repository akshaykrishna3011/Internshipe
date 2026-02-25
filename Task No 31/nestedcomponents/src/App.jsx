import { useState } from 'react'
import './App.css'
import Display from './Display'
import Controler from './Controler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Display count={count} />
      <Controler
        increment={() => setCount(count + 1)}
        decrement={() => setCount(count - 1)}
        reset={() => setCount(0)} />
    </div>
  )
}

export default App
