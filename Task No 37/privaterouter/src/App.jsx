// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./page/Home";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";

import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        Private
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;