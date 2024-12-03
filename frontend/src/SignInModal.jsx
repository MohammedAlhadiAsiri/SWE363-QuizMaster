import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignInModal.css';

function SignInModal({ onClose, openModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { role } = response.data;
        // Redirect based on user role
        if (role === 'quizMaker') {
          navigate('/quiz-maker-dashboard');
        } else if (role === 'quizTaker') {
          navigate('/quiz-taker-dashboard');
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert(`Invalid email or password` + error.response);
        
      } else {
        alert('Something went wrong. Please try again later.');
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
          <button type="submit" className="sign-in-button">Login</button>
          <p className="sign-up-text">
            You Don't have an account? <a href="#signup" onClick={openModal}>Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignInModal;

