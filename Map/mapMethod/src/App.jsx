
import './App.css';

function App() {
  const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];

  const fruitDetails = [
    { id: 1, name: 'Apple', emoji: '🍎', color: 'Red' },
    { id: 2, name: 'Mango', emoji: '🥭', color: 'Yellow' },
    { id: 3, name: 'Banana', emoji: '🍌', color: 'Yellow' },
    { id: 4, name: 'Orange', emoji: '🍊', color: 'Orange' },
  ];

  return (
    <div className="container">
      <h1>Fruit Lists 🍓</h1>

      <h2>🔹 Basic List using map()</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h2>🔹 List with Index and Emoji</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            ({index + 1}) - {fruit}🍇
          </li>
        ))}
      </ul>

      <h2>🔹 List with Objects</h2>
      <div className="cards">
        {fruitDetails.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.emoji} {item.name}</h3>
            <p>Color: <b>{item.color}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
