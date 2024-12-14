import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignInModal.css";
import { API_BASE_URL } from "./config";
function SignInModal({ onClose, openModal }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await axios.post(`${API_BASE_URL}/login`, {
              email,
              password,
          });
  
          if (response.status === 200) {
              const { role, token, email: userEmail } = response.data;
              
              // Store token and email in localStorage
              localStorage.setItem('token', token);
              localStorage.setItem('userEmail', userEmail);
  
              // Redirect based on user role
              if (role === "quizMaker") {
                  navigate("/quiz-maker-dashboard");
              } else if (role === "quizTaker") {
                  navigate("/quiz-taker-dashboard");
              }else if (role === "admin") {
                navigate("/admin");
            }
          }
      } catch (error) {
          if (error.response && error.response.status === 401) {
              alert(`Invalid email or password`);
          } else {
              alert("Something went wrong. Please try again later.");
              console.error(error);
          }
      }
  };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">Sign in</h2>
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label></label>
                        <input
                            type="email"
                            className="signInInput"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label></label>
                        <input
                            type="password"
                            className="signInInput"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="sign-in-button">
                        Login
                    </button>
                    <p className="sign-up-text">
                        You Don't have an account?{" "}
                        <a href="#signup" onClick={openModal}>
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignInModal;
