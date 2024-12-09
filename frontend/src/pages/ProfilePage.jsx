// ProfilePage.jsx
import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
    const [password, setPassword] = useState("password123"); // Example password
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSaveChanges = () => {
        alert("Changes saved!"); // Replace with actual save logic
    };

    const handleDeleteAccount = () => {
        alert("Account deleted!"); // Replace with delete logic
    };

    const handleLogout = () => {
        alert("Logged out!"); // Replace with logout logic
    };

    return (
        <div className="profilePage">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="userInfo">
                    <h2 className="userName">Mohammed</h2>
                    <p className="userRole">Maker</p>
                </div>
                <div className="navButtons">
                    <button className="navButton">Home</button>
                    <button className="navButton">About</button>
                    <button className="navButton">Contact Us</button>
                </div>
                <div className="actionButtons">
                    <button className="logoutButton" onClick={handleLogout}>
                        Log Out
                    </button>
                    <button className="deleteButton" onClick={handleDeleteAccount}>
                        Delete Account
                    </button>
                </div>
            </div>

            {/* Main Section */}
            <div className="mainSection">
                {/* Header */}
                <header className="header">
                    <h1 className="websiteName">QuizMaster</h1>
                    <span className="pageTitle">Account</span>
                </header>

                {/* Body */}
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
                        <label htmlFor="password">Password</label>
                        <div className="passwordContainer">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
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
                    <button className="saveButton" onClick={handleSaveChanges}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
