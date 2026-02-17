import { Routes, Route, Link } from "react-router-dom";
import { useState, useContext, useCallback } from "react";
import { ThemeContext } from "../Component/ThemeContext";

import Home from "./Home";
import Login from "./Login";
import Products from "./Products";
import Profile from "./Profile";

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <div className={theme}>
      <nav className="navbar">
        <div className="navbar-links">
        <Link to="/">Home</Link> 
        <Link to="/products">Products</Link> 
        <Link to="/profile">Profile</Link>
        </div>
        <button onClick={toggleTheme}>Toggle Theme</button>
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
