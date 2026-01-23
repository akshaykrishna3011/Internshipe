import React from 'react'
import { createContext } from 'react'
import User from './User'
import './App.css'

export const UserContext = createContext()
const App = () => {
  
  const userName ="Akku"
  return (
    <div>
      <UserContext.Provider value={userName}>
        <User />
      </UserContext.Provider>
    </div>
  )
}

export default App
