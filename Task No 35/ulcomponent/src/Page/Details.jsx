import React from "react";

export function Details({ item, onNavigate }) {
  if (!item) return null;

  return (
    <div className="container mt-5 text-center">
      <div className="card p-4">
        <h2>{item.name}</h2>
        <p>{item.description}</p>

        <button
          className="btn btn-primary"
          onClick={() => onNavigate("list")}
        >
          Back
        </button>
      </div>
    </div>
  );
}