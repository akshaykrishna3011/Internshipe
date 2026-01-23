import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Producte from "./Producte/Producte";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/producte/101" style={{marginLeft:"10px"}}>Product 101</Link>
        <Link to="/producte/202" style={{marginLeft:"10px"}}>Product 202</Link>
      </nav>

      <Routes>
        <Route path="/producte/:id" element={<Producte/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
