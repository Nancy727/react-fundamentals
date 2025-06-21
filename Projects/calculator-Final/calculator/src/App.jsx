import styles from "./App.module.css";
import Display from "./Components/display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        setCalVal(eval(calVal).toString());
      } catch {
        setCalVal("Error");
      }
    } else {
      setCalVal(calVal + buttonText);
    }
  };

  return (
    <div
      style={{
        background: "#f0f2f5",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.calculator}>
        <Display displayVal={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
