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

    // State for modal visibility
    const [openQuestionTypeModal, setOpenQuestionTypeModal] = useState(false);
    const [openDifficultyModal, setOpenDifficultyModal] = useState(false);
    const [showPublishedModal, setShowPublishedModal] = useState(false);

    // State for quiz information
    const [quizName, setQuizName] = useState('');
    const [questionCards, setQuestionCards] = useState([]);
    const [difficulty, setDifficulty] = useState('easy'); // Default difficulty

    useEffect(() => {
        setOpenDifficultyModal(true); // Show difficulty modal on page load
    }, []);

    const handleExitClick = () => {
        navigate('/quiz-maker-dashboard');
    };

    const addQuestion = (type) => {
        const initialAnswers = type === 'mcq' ? Array(4).fill('') : ['True', 'False'];
        setQuestionCards([...questionCards, { type, questionText: '', answers: initialAnswers }]);
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

    const handlePublishClick = async () => {
        const validationError = validateQuizData();
    if (validationError) {
        alert(validationError);
        return;
    }

    const quizData = {
        name: quizName,
        difficulty,
        numberOfQuestions: questionCards.length,
        questions: questionCards.map((card, index) => ({
            questionText: card.questionText,
            answers: card.answers,
            correctAnswer: document.querySelector(`input[name=correctAns${index}]:checked`)?.value,
            type: card.type,
        })),
    };

    const token = localStorage.getItem('jwtToken'); // Retrieve token from local storage

    if (!token) {
        alert('You are not logged in.');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/create-quiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(quizData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Quiz created:', result);
            setShowPublishedModal(true);
        } else {
            const error = await response.json();
            alert(`Failed to create quiz: ${error.message}`);
        }
    } catch (error) {
        console.error('Error creating quiz:', error);
        alert('An error occurred while creating the quiz.');
    }
        console.log(quizData);
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
                <div className='mobileTopbar'>
                    <h2 className='closeIcon' onClick={handleExitClick}>X</h2>
                    <h2>Create Quiz</h2>
                    <p onClick={handlePublishClick} className='publishText'>Publish</p>
                </div>
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
                <button className='mobileAddQuestionButton' onClick={() => setOpenQuestionTypeModal(true)}>Add Question</button>
                {openQuestionTypeModal && (
                    <QuestionTypeModal addQuestionProp={addQuestion} openModal={setOpenQuestionTypeModal} />
                )}
                
                {openDifficultyModal && (
                    <DifficultyModal openModal={setOpenDifficultyModal} setDifficulty={setDifficulty} />
                )}

                {showPublishedModal && <QuizPublishedModal onClose={closePublishedModal} />}
            </div>
        </div>
    );
}

export default CreateQuizPage;
