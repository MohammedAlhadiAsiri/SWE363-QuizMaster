import React from 'react';

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

export default ContactUs;
