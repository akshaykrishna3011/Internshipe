import React, { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);
  return (

    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <h2>{user.email}</h2>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
