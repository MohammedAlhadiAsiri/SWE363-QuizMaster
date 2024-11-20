import React from 'react';
import './QuizPublishedModal.css';

function QuizPublishedModal({ onClose }) {
    return (
        <div className="quizPublishedModal-background">
            <div className="quizPublishedModal-container">
                {/* Close modal button */}
                <button className="closeModalButton" onClick={onClose}>
                    &times;
                </button>
                {/* Display success message */}
                <h2 className='quizPublishedText'>Quiz Published!</h2>
                {/* Go back button */}
                <button className="goBackButton" onClick={onClose}>
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default QuizPublishedModal;
