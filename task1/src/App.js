import React from "react";
import "./App.css";
import logo from "./logo.png"; // your logo image
import background from "./background.png"; // your background image

function App() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Left Section */}
        <div className="left-section">
          <h1 className="logo">
            <img src={logo} alt="Better Market" style={{ width: "200px" }} />
          </h1>
          <p className="left-text">
            Say hello to global food and beverage producers and suppliers, all
            in one place
          </p>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h1>
            Let’s get started <br /> with a few simple steps
          </h1>
          <form className="signup-form">
            <label>Email</label>
            <input type="email" required />

            <label>Full Name</label>
            <input type="text" required />

            <label>Password</label>
            <input type="password" required />

            <button type="submit">Sign up</button>
          </form>
          <p className="terms">
            By signing up, you agree to our <a href="#">Terms of Service</a>.
            <br></br>Already have an account?{" "}
            <a href="#" id="login">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
