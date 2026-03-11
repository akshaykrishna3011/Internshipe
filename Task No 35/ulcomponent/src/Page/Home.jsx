import React from "react";

export function Home({ onNavigate }) {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Home Page</h1>

      <button
        className="btn btn-primary"
        onClick={() => onNavigate("list")}
      >
        View Places
      </button>
    </div>
  );
}