import React, { useState } from "react";
import "./hero.css";
import GetStartedButton from "./GetStartedButton.jsx";
import img1 from "../public/smiling-happy-indian-student-with-backpack-pointing-his-finger-wall 1.png";
import img2 from "../public/picture-background.svg";
function Hero({ openModal }) {
    return (
        <div className="container">
            <div className="pic-button">
                <h1>Test Your Knowledge</h1>
                <h1>-Anytime, Anywhere-</h1>
                <GetStartedButton onClick={openModal} />
            </div>
            <div className="picture-container">
                <img src={img1} className="picture"></img>
                <img src={img2} className="picture-background"></img>
            </div>
        </div>
    );
}
export default Hero;
