import React from 'react';
import { useNavigate } from 'react-router-dom';

function DifficultyModal({ openModal }) {
    // Hook to navigate between routes
    const navigate = useNavigate();  

    const handleClose = () => {
        // Navigate back to dashboard
        navigate('/quiz-maker-dashboard');  
        // Close the modal
        openModal(false);  
    }

    return (
        <div className='questionTypeModal-background'>
            <div className='questionTypeModal-container'>
                <div className='modalTitle'>
                    <h2>Choose Difficulty</h2>
                    {/* Close modal on click */}
                    <h2 className='closeIcon' onClick={handleClose}>X</h2>
                </div>
                <div className='questionTypeModal-body'>
                    <h2>Difficulty</h2>
                </div>
                <div className='questionTypeModal-footer'>
                    {/* Radio buttons for selecting difficulty */}
                    <div className='choiceContainer'>
                        <label htmlFor='easyChoice' className='choicesLabel'>Easy</label>
                        <input type='radio' name='difficultyChoice' id='easyChoice' checked />
                    </div>
                    <div className='choiceContainer'>
                        <label htmlFor='mediumChoice' className='choicesLabel'>Medium</label>
                        <input type='radio' name='difficultyChoice' id='mediumChoice' />
                    </div>
                    <div className='choiceContainer'>
                        <label htmlFor='hardChoice' className='choicesLabel'>Hard</label>
                        <input type='radio' name='difficultyChoice' id='hardChoice' />
                    </div>
                </div>
                <button className='modalAddQuestionButton' onClick={() => { openModal(false) }}>
                    Confirm Difficulty
                </button>
            </div>
        </div>
    );
}

export default DifficultyModal;
