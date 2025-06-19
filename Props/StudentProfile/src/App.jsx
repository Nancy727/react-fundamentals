import Student from "./Components/Student";


function App(){
  return (
    <div style={{textAlign:"center"}}>
      <h1>🧑‍🎓Student Profile</h1>
      <Student name="Nancy" age="21" course="Web Development" cgpa="7.74"
       gender="female" 
        skills={["HTML", "CSS", "JavaScript"]}
        email="nancy@example.com"
        />
      <Student name="Abhinav" age="21" course="Data Science" cgpa="6.60"
       gender="male"
        skills={["Python", "NumPy", "Pandas"]}
        email="abhinav@example.com"
        />

      <Student name="Vihan" age="20" course="Web Development" cgpa="8.74"
      gender="male"
        skills={["React", "Tailwind", "Node.js"]}
        email="vihan@example.com"
        />
      <Student name="Krishna" age="22" course="Data Science" cgpa="5.74"
       gender="male"
        skills={["Excel", "SQL"]}
        email="krishna@example.com"
        />
      <Student name="Rishav" age="21" course="AI/ML" cgpa="6.74"
       gender="male"
        skills={["Machine Learning", "Python"]}
        email="rishav@example.com"
        />
    </div>
  )
}
export default App;