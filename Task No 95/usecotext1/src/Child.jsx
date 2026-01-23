import { useContext } from "react";
import { ThemeContext } from "./App";

function Child() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#222" : "#eee",
        color: theme === "dark" ? "white" : "black",
        padding: "30px"
      }}
    >
      <h2>{theme} MODE</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Child;
