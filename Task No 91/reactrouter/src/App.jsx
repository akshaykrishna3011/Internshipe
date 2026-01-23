import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

  return (

    <BrowserRouter>
      <nav style={{ padding: "10px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "20px" }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
