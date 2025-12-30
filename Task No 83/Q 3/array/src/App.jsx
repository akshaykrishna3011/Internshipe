import { useState } from 'react'
import './App.css'
import SkilsList from './component/SkilsList';

function App() {
  const skills = ["HTML", "CSS", "React"];

  return (
    <div>
      <SkilsList skills={skills} />
    </div>
  )
}

export default App
