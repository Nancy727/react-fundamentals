import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonConfig = [
    { label: "C", className: "clear" },
    { label: "1" }, { label: "2" }, { label: "+" , className: "operator"},
    { label: "3" }, { label: "4" }, { label: "-" , className: "operator"},
    { label: "5" }, { label: "6" }, { label: "*" , className: "operator"},
    { label: "7" }, { label: "8" }, { label: "/" , className: "operator"},
    { label: "=" , className: "equals"}, { label: "9" }, { label: "0" }, { label: "." }
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonConfig.map((btn, index) => (
        <button
          key={index}
          className={`${styles.button} ${btn.className ? styles[btn.className] : ""}`}
          onClick={() => onButtonClick(btn.label)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
