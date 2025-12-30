import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1);
    console.log(count + 1);
  };

  return (

    <div>

      <button onClick={handleClick}>Click</button>
    </div>

  )
}

export default App;
