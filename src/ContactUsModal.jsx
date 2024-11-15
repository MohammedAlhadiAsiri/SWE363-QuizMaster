/*import React from 'react';
import "./ContactUsModal.css" 

const ContactUs = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="contact-us-modal">
            <h2>Contact Us</h2>
            <p>Have questions or need support? Reach out to us:</p>

            <div className="contact-info">
                <p><strong>Email:</strong> <a href="mailto:support@quizmaster.com">support@quizmaster.com</a></p>
                <p><strong>Phone:</strong> +123-456-7890</p>
            </div>

            <button className="back-button" onClick={goBack}>Back</button>
        </div>
    );
};

export default ContactUs;*/
// ContactUsModal.js
import React from "react";
import "./ContactUsModal.css";

function ContactUsModal({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="contact-us-modal">
                <h2>Contact Us</h2>
                <p>Have questions or need support?</p>
                <p>Reach out to us:</p>
                <div className="contact-info">
                    <p><strong>Email:</strong> <a href="mailto:support@quizmaster.com">support@quizmaster.com</a></p>
                    <p><strong>Phone:</strong> +966520123890</p>
                </div>

                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
}

export default ContactUsModal;

