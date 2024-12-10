import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DifficultyModal({ openModal, setDifficulty }) {
    const navigate = useNavigate();
    const [selectedDifficulty, setSelectedDifficulty] = useState('easy'); // Default difficulty

    const handleConfirm = () => {
        setDifficulty(selectedDifficulty); // Update the difficulty in the parent component
        openModal(false); // Close the modal
    };

    const handleClose = () => {
        navigate('/quiz-maker-dashboard'); // Navigate back to dashboard
        openModal(false);
    };

    return (
        <div className='questionTypeModal-background'>
            <div className='questionTypeModal-container'>
                <div className='modalTitle'>
                    <h2>Choose Difficulty</h2>
                    <h2 className='closeIcon' onClick={handleClose}>X</h2>
                </div>
                <div className='questionTypeModal-body'>
                    <h2>Difficulty</h2>
                </div>
                <div className='questionTypeModal-footer'>
                    <div className='choiceContainer'>
                        <label htmlFor='easyChoice' className='choicesLabel'>Easy</label>
                        <input
                            type='radio'
                            name='difficultyChoice'
                            id='easyChoice'
                            checked={selectedDifficulty === 'easy'}
                            onChange={() => setSelectedDifficulty('easy')}
                        />
                    </div>
                    <div className='choiceContainer'>
                        <label htmlFor='mediumChoice' className='choicesLabel'>Medium</label>
                        <input
                            type='radio'
                            name='difficultyChoice'
                            id='mediumChoice'
                            checked={selectedDifficulty === 'medium'}
                            onChange={() => setSelectedDifficulty('medium')}
                        />
                    </div>
                    <div className='choiceContainer'>
                        <label htmlFor='hardChoice' className='choicesLabel'>Hard</label>
                        <input
                            type='radio'
                            name='difficultyChoice'
                            id='hardChoice'
                            checked={selectedDifficulty === 'hard'}
                            onChange={() => setSelectedDifficulty('hard')}
                        />
                    </div>
                </div>
                <button className='modalAddQuestionButton' onClick={handleConfirm}>
                    Confirm Difficulty
                </button>
            </div>
        </div>
    );
}

export default DifficultyModal;
