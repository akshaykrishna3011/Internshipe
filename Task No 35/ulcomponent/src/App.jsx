import React, { useState } from "react";
import { List } from "./Page/List";
import { Home } from "./Page/Home";
import { Details } from "./Page/Details";
import './App.css'

const places = [
  { id: 1, name: "Wayanad", description: "Beautiful hill station in Kerala" },
  { id: 2, name: "Munnar", description: "Tea gardens and misty mountains" },
  { id: 3, name: "Alappuzha", description: "Famous for backwaters and houseboats" },
];

export default function App() {
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
    setPage("details");
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {page === "home" && <Home onNavigate={setPage} />}
          {page === "list" && (
            <List data={places} onSelect={handleSelect} onNavigate={setPage} />
          )}
          {page === "details" && (
            <Details item={selected} onNavigate={setPage} />
          )}
        </div>
      </div>
    </div>
  );
}
