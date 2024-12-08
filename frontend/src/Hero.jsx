import React, { useState } from "react";
import "./hero.css";
import GetStartedButton from "./GetStartedButton.jsx";
function Hero({openModal}){
    
    return(
        <div className="container">
            <div>
                <h1>Test Your Knowledge</h1>
                <h1>-Anytime, Anywhere-</h1>
                <GetStartedButton onClick={openModal}/>
            </div>
            <div className="picture-container">
                <img src=".\public\smiling-happy-indian-student-with-backpack-pointing-his-finger-wall 1.png" className="picture"></img>
                <img src=".\public\picture-background.svg" className="picture-background"></img>

            </div>
       </div>
    )

}
export default Hero;