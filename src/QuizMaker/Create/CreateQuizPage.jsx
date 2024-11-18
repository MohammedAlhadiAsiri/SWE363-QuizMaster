import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import QuestionTypeModal from './QuestionTypeModal';
import DifficultyModal from './DifficultyModal';
import QuestionsList from './QuestionsList';
import QuizPublishedModal from './QuizPublishedModal';
import './CreateQuizPage.css';
import { useNavigate } from 'react-router-dom';

function CreateQuizPage() {
    const navigate = useNavigate();
    const [openQuestionTypeModal, setOpenQuestionTypeModal] = useState(false);
    const [openDifficultyModal, setOpenDifficultyModal] = useState(false);
    const [showPublishedModal, setShowPublishedModal] = useState(false); 
    const [quizName, setQuizName] = useState('');
    const [questionCards, setQuestionCards] = useState([]);

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

    const validateQuizData = () => {
        if (!quizName) return "Quiz name is required.";
        if (questionCards.length === 0) return "At least one question is required.";
    
        for (let i = 0; i < questionCards.length; i++) {
            const question = questionCards[i];
            if (!question.questionText) return `Question ${i + 1} must have text.`;
    
            if (question.type === 'mcq') {
                if (question.answers.some(answer => answer === '')) {
                    return `All answer fields for Question ${i + 1} must be filled.`;
                }
                const correctAnswerSelected = document.querySelector(`input[name=correctAns${i}]:checked`);
                if (!correctAnswerSelected) {
                    return `A correct answer must be selected for Question ${i + 1}.`;
                }
            }
    
            if (question.type === 'tf') {
                const correctAnswerSelected = document.querySelector(`input[name=correctAns${i}]:checked`);
                if (!correctAnswerSelected) {
                    return `A correct answer must be selected for Question ${i + 1}.`;
                }
            }
        }
    
        return null; 
    };

    const handlePublishClick = () => {
        const validationError = validateQuizData();
        if (validationError) {
            alert(validationError);
            return;
        }

        // For backend phase
        const quizData = {
            name: quizName,
            questions: questionCards.map((question, index) => ({
                type: question.type,
                text: question.questionText,
                answers: question.answers,
                correctAnswerIndex: question.answers.findIndex((answer, i) =>
                    document.querySelector(`input[name=correctAns${index}]:checked`)?.value === answer
                ),
            })),
        };

        setShowPublishedModal(true); 
    };

    const closePublishedModal = () => {
        setShowPublishedModal(false);
        navigate('/quiz-maker-dashboard');
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
                    <input
                        type="text"
                        className="quizNameInput"
                        placeholder="Enter Quiz Name"
                        value={quizName}
                        onChange={(e) => setQuizName(e.target.value)}
                    />
                    <button className='publishButton' onClick={handlePublishClick}>Publish</button>
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

                {showPublishedModal && <QuizPublishedModal onClose={closePublishedModal} />}
            </div>
        </div>
    );
}

export default CreateQuizPage;
