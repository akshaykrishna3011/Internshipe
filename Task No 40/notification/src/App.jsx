import React, { useState } from "react";
import { Button, Spinner, Alert, Toast, ToastContainer } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
function App() {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const handleClick = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);

      const success = Math.random() > 0.5;

      if (success) {
        setShowToast(true);
      } else {
        setError("Something went wrong!");
      }
    }, 2000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Example</h2>

      <Button onClick={handleClick}>Click Me</Button>

      <br /><br />

      {loading && <Spinner animation="border" />}

      {error && <Alert variant="danger">{error}</Alert>}

      <ToastContainer position="top-center" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Body>Toast Message</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default App;