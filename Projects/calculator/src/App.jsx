import styles from "./App.module.css";
import Display from "./Components/display";
import ButtonContainer from "./Components/ButtonContainer";
function App() {
  return (
    <center>
    <div className={styles.calculator}>
      <Display></Display>
     <ButtonContainer></ButtonContainer>
      </div>
    </center>
  );
}
export default App;
