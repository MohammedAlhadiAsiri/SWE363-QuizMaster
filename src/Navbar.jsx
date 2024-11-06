import "./Navbar.css";
import React, { useState } from "react";

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <header className="header">
            <div className="logo">QuizMaster</div>
            <nav className={`navbar ${isOpen ? "open" : ""}`}>
                <a href="#about">About</a>
                <a href="#contact">Contact Us</a>
            </nav>
            <button className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </button>
        </header>
    )

}
export default Navbar;