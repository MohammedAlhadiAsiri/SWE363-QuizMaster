import style from "../styles/header-style.module.css";
import { useNavigate } from "react-router-dom";
import ContactUsModal from "../ContactUsModal";
import SignInModal from "../SignInModal.jsx";
import SignUpModal from "../SignUpModal.jsx";
import React, { useState } from "react";

const Header = () => {
    const [showContactUsModal, setContactUsModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);

    const openContactUsModal = () => {
        setContactUsModal(true);
    };

    const closeContactUsModal = () => {
        setContactUsModal(false);
    };

    const openSignUpModal = (event) => {
        event.stopPropagation(); // Stop event propagation
        setShowSignUpModal(true);
        setShowSignInModal(false);
    };

    const closeSignUpModal = () => {
        setShowSignUpModal(false);
    };

    const openSignInModal = (event) => {
        event.stopPropagation(); // Stop event propagation
        setShowSignInModal(true);
        setShowSignUpModal(false);
    };

    const closeSignInModal = () => {
        setShowSignInModal(false);
    };

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/"); // Navigate to /
    };

    return (
        <>
            <header className={style.header_quiz} onClick={goToHome}>
                <div className={style.left_section}>
                    <p className={style.header_logo}>QuizMaster</p>
                </div>
                <div className={style.right_section}>
                    <button
                        className={style.right_text}
                        onClick={(event) => {
                            event.stopPropagation(); // Stop event propagation to the header
                            navigate("/"); // Navigate to the home page
                        }}
                    >
                        HOME
                    </button>
                    <button
                        className={style.right_text}
                        onClick={(event) => {
                            event.stopPropagation(); // Prevent event propagation to the header
                            openContactUsModal(); // Open the Contact Us modal
                        }}
                    >
                        CONTACT US
                    </button>
                    <button className={style.login} onClick={openSignUpModal}>
                        <p className={style.login_text}>Login</p>
                    </button>
                </div>
            </header>
            {showContactUsModal && (
                <ContactUsModal onClose={closeContactUsModal} />
            )}
            {showSignUpModal && (
                <SignUpModal
                    onClose={closeSignUpModal}
                    openModal={openSignInModal}
                />
            )}
            {showSignInModal && (
                <SignInModal
                    onClose={closeSignInModal}
                    openModal={openSignUpModal}
                />
            )}
        </>
    );
};

export default Header;
