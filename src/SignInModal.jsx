// import React from 'react';
// import './SignInModal.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function SignInModal({onClose, openModal}) {
//     return (
//         <div className="modal-overlay" onClick={onClose}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                 <h2 className="modal-title">Sign in</h2>
//                 <form className="sign-in-form">
//                     <div className="form-group">
//                         <label></label>
//                         <input type="email" className='signInInput' placeholder="Email" required />
//                     </div>
//                     <div className="form-group">
//                         <label></label>
//                         <input type="password" className='signInInput' placeholder="Password" required />
//                     </div>
//                     <button type="submit" className="sign-in-button" >Login</button>
//                     <p className="sign-up-text">
//                         You Don't have an account? <a href="#signup" onClick={openModal}>Sign up</a>
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SignInModal;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInModal.css';

function SignInModal({ onClose, openModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Dummy database (user data)
  const users = [
    { email: 'taker@example.com', password: 'password123', role: 'quizTaker' },
    { email: 'maker@example.com', password: 'password123', role: 'quizMaker' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user exists in the dummy database
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      // Redirect based on user role
      if (user.role === 'quizMaker') {
        navigate('/quiz-maker-dashboard');
      } else if (user.role === 'quizTaker') {
        navigate('/quiz-taker-dashboard');
      }
    } else {
      alert('Invalid email or password');
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
