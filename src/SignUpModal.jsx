import React from 'react';
import './SignUpModal.css';

function SignUpModal({onClose, openModal}) {
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">Sign up</h2>
                <form className="sign-up-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label></label>
                            <input type="text" className='signUpInput' placeholder="First Name" required />
                        </div>
                        <div className="form-group">
                            <label></label>
                            <input type="text" className='signUpInput' placeholder="Last Name" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label></label>
                            <input type="email" className='signUpInput' placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <label></label>
                            <input type="email" className='signUpInput' placeholder="Confirm Email" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label></label>
                            <input type="password" className='signUpInput' placeholder="Password" required />
                        </div>
                        <div className="form-group">
                            <label></label>
                            <input type="password" className='signUpInput' placeholder="Confirm Password" required />
                        </div>
                    </div>
                    <div className="form-group role-group">
                        <label>What is your role?</label>
                        <div className="roles">
                            <label><input type="radio" name="role" value="quizTaker" /> Quiz Taker</label>
                            <label><input type="radio" name="role" value="quizMaker" /> Quiz Maker</label>
                        </div>
                    </div>
                    <button type="submit" className="sign-up-button" >Sign up</button>
                    <p className="sign-in-text">Already have an account? <a href="#signin" onClick={openModal}>Sign in</a></p>
                </form>
            </div>
        </div>
    );
}

export default SignUpModal;
