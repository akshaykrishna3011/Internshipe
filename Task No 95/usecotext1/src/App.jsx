import { useState, createContext } from "react";
import Child from "./Child";
import "./App.css";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;
