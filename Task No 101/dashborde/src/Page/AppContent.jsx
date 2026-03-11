import { Routes, Route, Link } from "react-router-dom";
import { useState, useContext, useCallback } from "react";
import { ThemeContext } from "../Component/ThemeContext";

import Home from "./Home";
import Login from "./Login";
import Products from "./Products";
import Profile from "./Profile";

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const { theme, toggleTheme } = useContext(ThemeContext);

  const correctName = "Admin";
  const correctPassword = "1234";

  const login = useCallback((name, password) => {
    if (name === correctName && password === correctPassword) {
      localStorage.setItem("token", "loggedin");
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password")
      setIsLoggedIn(false)
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className={theme}>
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <div className="navbar-buttons">
          <button onClick={toggleTheme}>Toggle Theme</button>
          <button onClick={logout}>Logout</button>
        </div>
      </nav>


      {!isLoggedIn ? (
        <Login onLogin={login} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      )}
    </div>
  );
}

export default AppContent;
