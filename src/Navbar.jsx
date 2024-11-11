import "./Navbar.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();
    function handleClick(){navigate('/');}
    return(
        <header className="header">
            <div className="logo" onClick={handleClick}>QuizMaster</div>
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