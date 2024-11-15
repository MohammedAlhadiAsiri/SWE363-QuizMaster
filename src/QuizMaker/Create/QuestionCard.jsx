import React from 'react';
import './QuestionCard.css';

function QuestionCard({ type, index, questionText, answers, onUpdate }) {
    const handleQuestionTextChange = (e) => {
        onUpdate({ questionText: e.target.value, type, answers });
    };

    const handleAnswerChange = (answerIndex, value) => {
        const updatedAnswers = answers.map((answer, i) => (i === answerIndex ? value : answer));
        onUpdate({ questionText, type, answers: updatedAnswers });
    };

    const mcq = (
        <div className='answersContainer'>
            {answers.map((answer, i) => (
                <div key={i}>
                    <input
                        type='text'
                        className='answers'
                        placeholder='Enter Answer'
                        value={answer}
                        onChange={(e) => handleAnswerChange(i, e.target.value)}
                    />
                    <input type='radio' name={`correctAns${index}`} className='radio' />
                </div>
            ))}
        </div>
    );

    const tf = (
        <div className='answersContainer'>
            {['True', 'False'].map((option, i) => (
                <div key={i}>
                    <input
                        type='text'
                        className='answers'
                        value={option}
                        readOnly
                    />
                    <input type='radio' name={`correctAns${index}`} className='radio' />
                </div>
            ))}
        </div>
    );

    return (
        <div className='card'>
            <label className='questionIndex'>Question {index + 1}</label>
            <input
                type="text"
                className="question"
                placeholder="Enter Question"
                value={questionText}
                onChange={handleQuestionTextChange}
            />
            {type === 'mcq' ? mcq : tf}
        </div>
    );
}

export default QuestionCard;
