import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUpModal.css";
import { API_BASE_URL } from "./config";
function SignUpModal({ onClose, openModal }) {
    const navigate = useNavigate();
    const [role, setRole] = useState("");
    const [error, setError] = useState(null);

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const userData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role,
        };

        if (userData.password !== e.target.confirmPassword.value) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post(
                `${API_BASE_URL}/signup`,
                userData
            );

            if (response.status === 201) {
                const { role, token, email } = response.data;
                
                // Store token and email in localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('userEmail', email);

                // Redirect based on user role
                if (role === "quizMaker") {
                    navigate("/quiz-maker-dashboard");
                } else if (role === "quizTaker") {
                    navigate("/quiz-taker-dashboard");
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setError("Email already registered.");
            } else if (error.response && error.response.status === 400) {
                setError("All fields are required.");
            } else {
                setError("Something went wrong. Please try again later.");
                console.error(error);
            }
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">Sign up</h2>
                {error && <p className="error-text">{error}</p>}
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label></label>
                            <input
                                type="text"
                                className="signUpInput"
                                name="firstName"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label></label>
                            <input
                                type="text"
                                className="signUpInput"
                                name="lastName"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label></label>
                            <input
                                type="email"
                                className="signUpInput"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label></label>
                            <input
                                type="email"
                                className="signUpInput"
                                name="confirmEmail"
                                placeholder="Confirm Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label></label>
                            <input
                                type="password"
                                className="signUpInput"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label></label>
                            <input
                                type="password"
                                className="signUpInput"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group role-group">
                        <label>What is your role?</label>
                        <div className="roles">
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="quizTaker"
                                    onChange={handleRoleChange}
                                />
                                Quiz Taker
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="quizMaker"
                                    onChange={handleRoleChange}
                                />
                                Quiz Maker
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="sign-up-button">
                        Sign up
                    </button>
                    <p className="sign-in-text">
                        Already have an account?{" "}
                        <a href="#signin" onClick={openModal}>
                            Sign in
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignUpModal;
