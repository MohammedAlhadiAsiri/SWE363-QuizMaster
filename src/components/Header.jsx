import "../style.css";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="left-section">
                    <p className="header-logo">QuizMaster</p>
                </div>
                <div className="right-section">
                    <button className="right-text">HOME</button>
                    <button className="right-text">CONTACT US</button>
                    <button className="login">
                        <p className="login-text">Login</p>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
