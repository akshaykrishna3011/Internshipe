import './App.css'

function App() {
  const Products = [
    { id: 1, name: "Laptop", quantity: 6 },
    { id: 2, name: "Mobile", quantity: 0 },
    { id: 3, name: "TV", quantity: 4 },
    { id: 3, name: "Speaker", quantity: 0 }
  ]
  return (
    <>
      <h1>Product List</h1>
      <div className='products'>
        {Products.map((product) => (
          <div className='product' key={product.id}>
            <h1>{product.name}</h1>
            <h2>Quantity: {product.quantity}</h2>
            {product.quantity === 0 && <p>Out of Stock</p>}
          </div>

        ))}
      </div>
    </>
  )
}

export default App
