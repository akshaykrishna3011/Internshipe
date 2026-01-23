import './App.css'

function App() {
  const persons = [
    { id: 1, name: "Akku", age: 27 },
    { id: 2, name: "Appu", age: 25 },
    { id: 3, name: "Achu", age: 26}
  ]

  return (
    <div>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            ID: {person.id} | Name: {person.name} | Age: {person.age}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
