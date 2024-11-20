import React, { useState } from 'react';
import './QuestionTypeModal.css';

function QuestionTypeModal({ addQuestionProp, openModal }) {
    // Manage the selected question type
    const [selectedType, setSelectedType] = useState('mcq'); 

    // Add question with the selected type
    function handleClick() {
        addQuestionProp(selectedType); 
    }

    return (
        <div className='questionTypeModal-background'>
            <div className='questionTypeModal-container'>
                <div className='modalTitle'>
                    <h2>Question</h2>
                    {/* Close the modal on click */}
                    <h2 className='closeIcon' onClick={() => openModal(false)}>X</h2>
                </div>
                <div className='questionTypeModal-body'>
                    <h2>Type</h2>
                </div>
                <div className='questionTypeModal-footer'>
                    {/* Option for Multiple-Choice */}
                    <div className='choiceContainer'>
                        <label htmlFor='mcqChoice' className='choicesLabel'>Multiple-Choice</label>
                        <input
                            type='radio'
                            name='typeChoice'
                            className='mcqChoice'
                            checked={selectedType === 'mcq'}
                            onChange={() => setSelectedType('mcq')}
                        />
                    </div>
                    {/* Option for True/False */}
                    <div className='choiceContainer'>
                        <label htmlFor='tfChoice' className='choicesLabel'>True/False</label>
                        <input
                            type='radio'
                            name='typeChoice'
                            className='tfChoice'
                            checked={selectedType === 'tf'}
                            onChange={() => setSelectedType('tf')}
                        />
                    </div>
                </div>
                {/* Add question with the selected type */}
                <button className='modalAddQuestionButton' onClick={handleClick}>
                    Add Question
                </button>
            </div>
        </div>
    );
}

export default QuestionTypeModal;
