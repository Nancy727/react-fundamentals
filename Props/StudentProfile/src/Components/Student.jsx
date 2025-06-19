import React from "react";
import styles from "./Student.module.css";

function Student({ name, age, course, cgpa, gender, skills, email }) {
  const genderEmoji = gender === "female" ? "👩‍🎓" : "👨‍🎓";

  const cardStyle = {
    backgroundColor: cgpa >= 7 ? "#e0ffe0" : "#fff"
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <h2 className={styles.name}>{genderEmoji} {name}</h2>
      <p className={styles.info}><strong>Age:</strong> {age}</p>
      <p className={styles.info}><strong>Course:</strong> {course}</p>
      <p className={styles.info}><strong>CGPA:</strong> {cgpa}</p>
      <p className={styles.info}><strong>Skills:</strong> {skills.join(", ")}</p>
      <a href={`mailto:${email}`} className={styles.email}>📧 Contact</a>
    </div>
  );
}

export default Student;
