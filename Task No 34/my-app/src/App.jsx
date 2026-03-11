import React from 'react'
import Navbar from './components/Navbar'
import Login from './Pages/Login'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <Home />
      <About />
      <Footer />

    </div>
  )
}

export default App
