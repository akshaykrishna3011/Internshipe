import './App.css'

function App() {
  const users = ["Anoop", "Rahul", "Neha"];

  return (
    <>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user}
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default App
