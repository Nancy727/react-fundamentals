import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="container mt-5 food-wrapper">
        <h1 className="text-center mb-4">🥗 Healthy Food Tracker</h1>
        <ul className="list-group shadow-sm">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Fresh Spinach
            <span className="badge text-bg-success rounded-pill">Low Calories</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Quinoa Salad
            <span className="badge text-bg-warning rounded-pill">High Protein</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Greek Yogurt
            <span className="badge text-bg-info rounded-pill">Probiotic</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Almonds
            <span className="badge text-bg-primary rounded-pill">Healthy Fats</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Blueberries
            <span className="badge text-bg-danger rounded-pill">Antioxidants</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
