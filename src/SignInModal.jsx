import React from 'react';
import './SignInModal.css';

function SignInModal({onClose, openModal}) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">Sign in</h2>
                <form className="sign-in-form">
                    <div className="form-group">
                        <label></label>
                        <input type="email" className='signInInput' placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <label></label>
                        <input type="password" className='signInInput' placeholder="Password" required />
                    </div>
                    <button type="submit" className="sign-in-button" >Login</button>
                    <p className="sign-up-text">
                        You Don't have an account? <a href="#signup" onClick={openModal}>Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignInModal;
