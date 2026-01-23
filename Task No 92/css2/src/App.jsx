import './App.css'

function App() {
const price = 999
  return (
    <>
      <h2 style={{ color: price > 1000 ? "red" : "green" }}>
      Price: ₹{price}
    </h2>
    </>
  )
}

export default App
