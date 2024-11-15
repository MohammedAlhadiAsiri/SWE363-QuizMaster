import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import QuestionTypeModal from './QuestionTypeModal';
import DifficultyModal from './DifficultyModal';
import QuestionsList from './QuestionsList';
import './CreateQuizPage.css';
import { useNavigate } from 'react-router-dom';

function CreateQuizPage() {
    const navigate = useNavigate();

    const [openQuestionTypeModal, setOpenQuestionTypeModal] = useState(false);
    const [openDifficultyModal, setOpenDifficultyModal] = useState(false); 
    const [questionCards, setQuestionCards] = useState([]);

    // Open DifficultyModal on page load
    useEffect(() => {
        setOpenDifficultyModal(true);
    }, []);

    const handleExitClick = () => {
        navigate('/quiz-maker-dashboard');
    };

    const addQuestion = (type) => {
        setQuestionCards([...questionCards, { type, questionText: '', answers: Array(4).fill('') }]);
        setOpenQuestionTypeModal(false);
    };

    const removeQuestion = (index) => {
        const updatedQuestions = questionCards.filter((_, i) => i !== index);
        setQuestionCards(updatedQuestions);
    };

    const updateQuestion = (index, updatedQuestion) => {
        const updatedQuestions = questionCards.map((question, i) =>
            i === index ? updatedQuestion : question
        );
        setQuestionCards(updatedQuestions);
    };

    

    return (
        <div className='createQuiz'>
            <div className='sidebar'>
                <button className='exitButton' onClick={handleExitClick}>Exit</button>
                <QuestionsList questionCards={questionCards} removeQuestion={removeQuestion} />
                <button className='addQuestionButton' onClick={() => setOpenQuestionTypeModal(true)}>Add Question</button>
            </div>

            <div className='mainPage'>
                <div className='topbar'>
                    <input type="text" className="quizNameInput" placeholder="Enter Quiz Name" />
                    <button className='publishButton'>Publish</button>
                </div>
                
                <div className='questionCards'>
                    {questionCards.map((question, index) => (
                        <QuestionCard
                            key={index}
                            index={index}
                            type={question.type}
                            questionText={question.questionText}
                            answers={question.answers}
                            onUpdate={(updatedQuestion) => updateQuestion(index, updatedQuestion)}
                        />
                    ))}
                </div>

                {openQuestionTypeModal && (
                    <QuestionTypeModal addQuestionProp={addQuestion} openModal={setOpenQuestionTypeModal} />
                )}
                
                {openDifficultyModal && (
                    <DifficultyModal openModal={setOpenDifficultyModal} />
                )}
            </div>
        </div>
    );
}

export default CreateQuizPage;
