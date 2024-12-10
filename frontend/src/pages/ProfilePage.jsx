import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate
import "./ProfilePage.css";

function ProfilePage() {
    const [currentPassword, setCurrentPassword] = useState("password123");
    const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);

    const navigate = useNavigate();  // Initialize useNavigate

    const handleNewPasswordChange = (event) => {
        const value = event.target.value;
        setNewPassword(value);

        // Validate password: at least one number, one uppercase letter, no special characters
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        setPasswordValid(passwordPattern.test(value));
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSavePassword = () => {
        if (passwordValid) {
            alert("Password changed successfully!");
            setCurrentPassword(newPassword);
            setNewPassword("");
            setShowChangePassword(false);
        } else {
            alert("Password does not meet requirements.");
        }
    };

    // Handle log out
    const handleLogout = () => {
        alert("Logged out!");
        navigate("/");  // Redirect to HomePage after the alert
    };

    // Handle delete account
    const handleDeleteAccount = () => {
        const confirmation = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
        if (confirmation) {
            alert("Account deleted!");
            navigate("/");  // Redirect to HomePage after account deletion
        } else {
            alert("Account deletion canceled.");
        }
    };

    return (
        <div className="profilePage">
            <div className="sidebar">
                <div className="userInfo">
                    <h2 className="userName">Mohammed</h2>
                    <p className="userRole">Maker</p>
                </div>
                <div className="navButtons">
                    <Link to="/" className="navButton">Home</Link>
                    <Link to="/AboutUs" className="navButton">About</Link>
                    <Link to="/AboutUs" className="navButton">Contact Us</Link>
                </div>
                <div className="actionButtons">
                    {/* Log out button */}
                    <button className="logoutButton" onClick={handleLogout}>
                        Log Out
                    </button>
                    {/* Delete account button */}
                    <button className="deleteButton" onClick={handleDeleteAccount}>
                        Delete Account
                    </button>
                </div>
            </div>

            <div className="mainSection">
                <header className="header">
                    <h1 className="websiteName">QuizMaster</h1>
                    <span className="pageTitle">Account</span>
                </header>

                <div className="bodyContent">
                    <h2>Profile Information</h2>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value="mohammed@example.com"
                            readOnly
                            className="inputField"
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="currentPassword">Current Password</label>
                        <div className="passwordContainer">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="currentPassword"
                                value={currentPassword}
                                readOnly
                                className="inputField"
                            />
                            <button
                                type="button"
                                className="togglePasswordButton"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                    </div>
                    {!showChangePassword && (
                        <button
                            className="changePasswordButton"
                            onClick={() => setShowChangePassword(true)}
                        >
                            Change Password
                        </button>
                    )}
                    {showChangePassword && (
                        <div>
                            <div className="formGroup">
                                <label htmlFor="newPassword">New Password</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={handleNewPasswordChange}
                                    className="inputField"
                                    placeholder="Enter new password"
                                />
                                <small className="passwordHint">
                                    Password must contain at least one number, one uppercase letter, 
                                    and be at least 8 characters long. No special characters allowed.
                                </small>
                                <span
                                    className={`passwordStatus ${
                                        passwordValid ? "valid" : "invalid"
                                    }`}
                                >
                                    {passwordValid ? "✓ Password is valid" : "✗ Invalid password"}
                                </span>
                            </div>
                            <button
                                className="saveButton"
                                onClick={handleSavePassword}
                                disabled={!passwordValid}
                            >
                                Save Password
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
