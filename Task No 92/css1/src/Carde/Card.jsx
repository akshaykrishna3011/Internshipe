import { useState } from "react";
import "./Card.css";

function Card() {
    const [isActive, setIsActive] = useState(true);

    return (
        <div style={{ padding: "20px" }}>
            <div className="card external-card">
                <h3>External CSS Card</h3>
            </div>
            <div
                className="card"
                style={{
                    backgroundColor: "#e3f2fd",
                    border: "2px solid #2196f3",
                }}
            >
                <h3>Inline Style Card</h3>
            </div>
            <div className={`card ${isActive ? "active" : "inactive"}`}>
                <h3>Conditional Card</h3>
                <p>Status: {isActive ? "Active" : "Inactive"}</p>
                <button onClick={() => setIsActive(!isActive)}>
                    Active / Inactive
                </button>
            </div>

        </div>
    );
}

export default Card;
