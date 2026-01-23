import React from 'react'
import { useContext } from 'react'
import { UserContext } from './App'

const User = () => {
    const userName =useContext(UserContext)
  return (
    <div>
      <h1>Welcome {userName}</h1>
    </div>
  )
}

export default User
