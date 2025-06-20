import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";

function App() {
  function handleClick(food, benefit) {
    alert(`${food} is good for ${benefit}!`);
  }

  return (
    <>
      <div className="container mt-5 food-wrapper">
        <h1 className="text-center mb-4">🥗 Healthy Food Tracker</h1>
        <ul className="list-group shadow-sm">

          <li className="list-group-item d-flex justify-content-between align-items-center">
            Fresh Spinach
            <span
              className="badge text-bg-success rounded-pill"
              onClick={() => handleClick("Fresh Spinach", "Low Calories")}
              style={{ cursor: "pointer" }}
            >
              Low Calories
            </span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            Quinoa Salad
            <span
              className="badge text-bg-warning rounded-pill"
              onClick={() => handleClick("Quinoa Salad", "High Protein")}
              style={{ cursor: "pointer" }}
            >
              High Protein
            </span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            Greek Yogurt
            <span
              className="badge text-bg-info rounded-pill"
              onClick={() => handleClick("Greek Yogurt", "Probiotic")}
              style={{ cursor: "pointer" }}
            >
              Probiotic
            </span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            Almonds
            <span
              className="badge text-bg-primary rounded-pill"
              onClick={() => handleClick("Almonds", "Healthy Fats")}
              style={{ cursor: "pointer" }}
            >
              Healthy Fats
            </span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            Blueberries
            <span
              className="badge text-bg-danger rounded-pill"
              onClick={() => handleClick("Blueberries", "Antioxidants")}
              style={{ cursor: "pointer" }}
            >
              Antioxidants
            </span>
          </li>

        </ul>
      </div>
    </>
  );
}

export default App;
