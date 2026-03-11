import React from "react";

export function List({ data, onSelect, onNavigate }) {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Places List</h2>

      {data.map((item) => (
        <div className="card mb-3" key={item.id}>
          <div className="card-body d-flex justify-content-between">
            <h5>{item.name}</h5>

            <button
              className="btn btn-success"
              onClick={() => onSelect(item)}
            >
              Details
            </button>
          </div>
        </div>
      ))}

      <button
        className="btn btn-secondary"
        onClick={() => onNavigate("home")}
      >
        Back
      </button>
    </div>
  );
}