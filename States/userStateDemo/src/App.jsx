import { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const [input, setInput] = useState("");
  const [detectedMoods, setDetectedMoods] = useState([]);
  const [greeting, setGreeting] = useState("");
  const moodList = [
    { keyword: "happy", emoji: "😊", message: "Keep smiling! 😊", color: "#fff3cd" },
    { keyword: "sad", emoji: "😢", message: "Its okay to be sad. 💙", color: "#d6eaf8" },
    { keyword: "angry", emoji: "😠", message: "Take a deep breath. 😌", color: "#f5b7b1" },
    { keyword: "excited", emoji: "🤩", message: "Yay! You're excited! 🎉", color: "#ffd6a5" },
    { keyword: "tired", emoji: "😴", message: "Get some rest. 💤", color: "#d0cde1" }
  ];

  function handleChange(event) {
    const value = event.target.value.toLowerCase();
    setInput(value);

    const matched = moodList.filter(mood => value.includes(mood.keyword));
    setDetectedMoods(matched);
  }
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) 
      setGreeting("Good Morning 🌅");
    else if (hour < 18) 
      setGreeting("Good Afternoon ☀️");
    else 
    setGreeting("Good Evening 🌙");
  }, []);

  function handleReset() {
    setInput("");
    setDetectedMoods([]);
  }
  
  const bgColor = detectedMoods.length > 0 ? detectedMoods[0].color : "#f3f3f3";

  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      <h2 className={styles.greeting}>{greeting}</h2>
      <h3>What's Your Mood?</h3>

      <input
        type="text"
        placeholder="Type how you're feeling..."
        value={input}
        onChange={handleChange}
        className={styles.input}
      />
      <h1>
        {detectedMoods.length > 0 ? (
          detectedMoods.map((mood, index) => (
            <span key={index} className={styles.emoji}>{mood.emoji}</span>
          ))
        ) : (
          <span className={styles.emoji}>😶</span>
        )}
      </h1>
      <div>
        {detectedMoods.map((mood, index) => (
          <p key={index}>{mood.message}</p>
        ))}
      </div>

      <button className={styles.button} onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
