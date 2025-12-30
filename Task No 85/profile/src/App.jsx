import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [user, setuser] = useState({
    name:"Akshay Krishna",
    image:"./photo.jpg"

  });

  return (
    
      <div>
     <Card 
     name={user.name}
     image={user.image}
     />
      </div>
     
  )
}

export default App
