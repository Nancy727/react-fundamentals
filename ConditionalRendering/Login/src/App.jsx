import "./App.css";

function App() {
  const isLoggedIn = true; 
  const userRole = "student"; 
  let greeting;
  if (isLoggedIn) {
    greeting = <h2 className="welcome">Welcome Back!</h2>;
  } else {
    greeting = <h2 className="welcome">Please Login</h2>;
  }
  let roleMessage;
  switch (userRole) {
    case "admin":
      roleMessage = <p className="role">You are an Admin.</p>;
      break;
    case "student":
      roleMessage = <p className="role">You are a Student.</p>;
      break;
    default:
      roleMessage = <p className="role">You are a Guest.</p>;
  }

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {greeting}
      {isLoggedIn ? (
        <button className="logout-btn">Logout</button>
      ) : (
        <button className="login-btn">Login</button>
      )}
      
      {isLoggedIn && (
        <div className="dashboard">
          <h3>Dashboard</h3>
          <p>You're now accessing the main app.</p>
        </div>
      )}
      {roleMessage}
    </div>
  );
}

export default App;
