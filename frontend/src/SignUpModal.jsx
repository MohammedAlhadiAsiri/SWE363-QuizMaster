// import React from 'react';
// import './SignUpModal.css';

// function SignUpModal({onClose, openModal}) {
    
//     return (
//         <div className="modal-overlay" onClick={onClose}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                 <h2 className="modal-title">Sign up</h2>
//                 <form className="sign-up-form">
//                     <div className="form-row">
//                         <div className="form-group">
//                             <label></label>
//                             <input type="text" className='signUpInput' placeholder="First Name" required />
//                         </div>
//                         <div className="form-group">
//                             <label></label>
//                             <input type="text" className='signUpInput' placeholder="Last Name" required />
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="form-group">
//                             <label></label>
//                             <input type="email" className='signUpInput' placeholder="Email" required/>
//                         </div>
//                         <div className="form-group">
//                             <label></label>
//                             <input type="email" className='signUpInput' placeholder="Confirm Email" required />
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="form-group">
//                             <label></label>
//                             <input type="password" className='signUpInput' placeholder="Password" required />
//                         </div>
//                         <div className="form-group">
//                             <label></label>
//                             <input type="password" className='signUpInput' placeholder="Confirm Password" required />
//                         </div>
//                     </div>
//                     <div className="form-group role-group">
//                         <label>What is your role?</label>
//                         <div className="roles">
//                             <label><input type="radio" name="role" value="quizTaker" /> Quiz Taker</label>
//                             <label><input type="radio" name="role" value="quizMaker" /> Quiz Maker</label>
//                         </div>
//                     </div>
//                     <button type="submit" className="sign-up-button" >Sign up</button>
//                     <p className="sign-in-text">Already have an account? <a href="#signin" onClick={openModal}>Sign in</a></p>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SignUpModal;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpModal.css';

function SignUpModal({ onClose, openModal }) {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to dummy "database" (in this case, just a log)
    const userData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      role: role,
    };
    console.log('User signed up:', userData);

    // Redirect based on role
    if (role === 'quizMaker') {
      navigate('/quiz-maker-dashboard');
    } else if (role === 'quizTaker') {
      navigate('/quiz-taker-dashboard');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Sign up</h2>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label></label>
              <input type="text" className="signUpInput" name="firstName" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <label></label>
              <input type="text" className="signUpInput" name="lastName" placeholder="Last Name" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label></label>
              <input type="email" className="signUpInput" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label></label>
              <input type="email" className="signUpInput" name="confirmEmail" placeholder="Confirm Email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label></label>
              <input type="password" className="signUpInput" name="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <label></label>
              <input type="password" className="signUpInput" name="confirmPassword" placeholder="Confirm Password" required />
            </div>
          </div>
          <div className="form-group role-group">
            <label>What is your role?</label>
            <div className="roles">
              <label>
                <input type="radio" name="role" value="quizTaker" onChange={handleRoleChange} />
                Quiz Taker
              </label>
              <label>
                <input type="radio" name="role" value="quizMaker" onChange={handleRoleChange} />
                Quiz Maker
              </label>
            </div>
          </div>
          <button type="submit" className="sign-up-button">Sign up</button>
          <p className="sign-in-text">
            Already have an account? <a href="#signin" onClick={openModal}>Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;

