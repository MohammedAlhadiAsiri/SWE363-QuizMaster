import React, { useState, useEffect } from 'react';
import QuestionCard from '../Create/QuestionCard';
import QuestionTypeModal from '../Create/QuestionTypeModal';
import DifficultyModal from '../Create/DifficultyModal';
import QuestionsList from '../Create/QuestionsList';
import { useNavigate } from 'react-router-dom';

// Dummy quiz data for now
const dummyQuiz = {
    name: "Sample Quiz",
    questions: [
        {
            type: 'mcq',
            questionText: 'What is the capital of France?',
            answers: ['Paris', 'London', 'Berlin', 'Rome'],
            correctAnswerIndex: 0,
        },
        {
            type: 'tf',
            questionText: 'The Earth is flat.',
            answers: ['True', 'False'],
            correctAnswerIndex: 1,
        },
    ],
};

function EditQuizPage() {
    const navigate = useNavigate();
    const [quizName, setQuizName] = useState('');
    const [questionCards, setQuestionCards] = useState([]);
    const [openQuestionTypeModal, setOpenQuestionTypeModal] = useState(false);

    useEffect(() => {
        setQuizName(dummyQuiz.name);
        setQuestionCards(
            dummyQuiz.questions.map((q) => ({
                type: q.type,
                questionText: q.questionText,
                answers: q.answers,
            }))
        );
    }, []);

    // Add new question to the quiz
    const addQuestion = (type) => {
        setQuestionCards([...questionCards, { type, questionText: '', answers: Array(4).fill('') }]);
        setOpenQuestionTypeModal(false);
    };

    // Remove question from the quiz
    const removeQuestion = (index) => {
        const updatedQuestions = questionCards.filter((_, i) => i !== index);
        setQuestionCards(updatedQuestions);
    };

    // Update a question's content
    const updateQuestion = (index, updatedQuestion) => {
        const updatedQuestions = questionCards.map((question, i) =>
            i === index ? updatedQuestion : question
        );
        setQuestionCards(updatedQuestions);
    };

    // Save the quiz and navigate back
    const handleSaveClick = () => {
        const updatedQuiz = {
            name: quizName,
            questions: questionCards,
        };
        navigate('/Admin'); // Redirect after saving
    };

    return (
        <div className="createQuiz">
            <div className="sidebar">
                <button className="exitButton" onClick={() => navigate('/Admin')}>
                    Exit
                </button>
                <QuestionsList questionCards={questionCards} removeQuestion={removeQuestion} />
                <button className="addQuestionButton" onClick={() => setOpenQuestionTypeModal(true)}>
                    Add Question
                </button>
            </div>

            <div className="mainPage">
                <div className='mobileTopbar'>
                    <h2 className='closeIcon' onClick={() => navigate('/Admin')}>X</h2>
                    <h2>Create Quiz</h2>
                    <p onClick={handleSaveClick} className='publishText'>Save</p>
                </div>
                <div className="topbar">
                    <input
                        type="text"
                        className="quizNameInput"
                        placeholder="Enter Quiz Name"
                        value={quizName}
                        onChange={(e) => setQuizName(e.target.value)}
                    />
                    <button className="saveButton" onClick={handleSaveClick}>
                        Save
                    </button>
                </div>

                <div className="questionCards">
                    {/* Render each question card */}
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
                {/* Mobile button to add question */}
                <button className='mobileAddQuestionButton' onClick={() => setOpenQuestionTypeModal(true)}>Add Question</button>        
                {/* Modal for selecting question type */}
                {openQuestionTypeModal && (
                    <QuestionTypeModal addQuestionProp={addQuestion} openModal={setOpenQuestionTypeModal} />
                )}
            </div>
        </div>
    );
}

export default EditQuizPage;
