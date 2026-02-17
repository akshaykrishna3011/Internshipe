import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
