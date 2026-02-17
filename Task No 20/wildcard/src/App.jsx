
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Producte from './Page/Producte'
import NotFound from './Page/NotFound'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Producte' element={<Producte/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
