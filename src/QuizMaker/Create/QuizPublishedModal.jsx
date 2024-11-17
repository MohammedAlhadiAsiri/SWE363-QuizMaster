import React from 'react';
import './QuizPublishedModal.css';

function QuizPublishedModal({ onClose }) {
    return (
        <div className="quizPublishedModal-background">
            <div className="quizPublishedModal-container">
                <button className="closeModalButton" onClick={onClose}>
                    &times;
                </button>
                <h2 className='quizPublishedText'>Quiz Published!</h2>
                <button className="goBackButton" onClick={onClose}>
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default QuizPublishedModal;
