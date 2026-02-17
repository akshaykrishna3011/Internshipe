import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Component/ThemeContext";
import AppContent from "./Page/AppContent";

import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
