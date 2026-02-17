import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Products from "./Products";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
