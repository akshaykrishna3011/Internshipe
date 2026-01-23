import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li style={{listStyleType:"none"}}key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
