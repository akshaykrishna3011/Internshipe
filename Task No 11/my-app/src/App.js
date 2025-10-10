import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main style={{ minHeight:"75vh",padding: "20px", textAlign: "center" }}>
        <h2>Welcome to my React App!</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
