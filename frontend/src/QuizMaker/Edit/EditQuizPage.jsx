import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import QuestionCard from '../Create/QuestionCard';
import QuestionTypeModal from '../Create/QuestionTypeModal';
import QuestionsList from '../Create/QuestionsList';

function EditQuizPage() {
    const navigate = useNavigate();
    const { quizId } = useParams();
    const [quizName, setQuizName] = useState('');
    const [questionCards, setQuestionCards] = useState([]);
    const [openQuestionTypeModal, setOpenQuestionTypeModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${API_BASE_URL}/edit-quiz/${quizId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                const quiz = response.data;
                setQuizName(quiz.name);
                setQuestionCards(quiz.questions.map(q => ({
                    type: q.type,
                    questionText: q.questionText,
                    answers: q.answers,
                    correctAnswer: q.correctAnswer
                })));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching quiz:', error);
                setError('Failed to fetch quiz data');
                setLoading(false);
            }
        };

        fetchQuizData();
    }, [quizId]);

    const addQuestion = (type) => {
        const initialAnswers = type === 'mcq' ? Array(4).fill('') : ['True', 'False'];
        setQuestionCards([...questionCards, { 
            type, 
            questionText: '', 
            answers: initialAnswers 
        }]);
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

    const handleSaveClick = async () => {
        try {
            const token = localStorage.getItem('token');
            const updatedQuiz = {
                name: quizName,
                questions: questionCards.map(q => ({
                    questionText: q.questionText,
                    type: q.type,
                    answers: q.answers,
                    correctAnswer: q.correctAnswer
                }))
            };

            await axios.put(`${API_BASE_URL}/edit-quiz/${quizId}`, updatedQuiz, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            navigate('/quiz-maker-dashboard');
        } catch (error) {
            console.error('Error updating quiz:', error);
            alert('Failed to update quiz');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="createQuiz">
            <div className="sidebar">
                <button className="exitButton" onClick={() => navigate('/quiz-maker-dashboard')}>
                    Exit
                </button>
                <QuestionsList questionCards={questionCards} removeQuestion={removeQuestion} />
                <button className="addQuestionButton" onClick={() => setOpenQuestionTypeModal(true)}>
                    Add Question
                </button>
            </div>

            <div className="mainPage">
                <div className='mobileTopbar'>
                    <h2 className='closeIcon' onClick={() => navigate('/quiz-maker-dashboard')}>X</h2>
                    <h2>Edit Quiz</h2>
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
                    {questionCards.map((question, index) => (
                        <QuestionCard
                            key={index}
                            index={index}
                            type={question.type}
                            questionText={question.questionText}
                            answers={question.answers}
                            correctAnswer={question.correctAnswer}
                            onUpdate={(updatedQuestion) => updateQuestion(index, updatedQuestion)}
                        />
                    ))}
                </div>
                <button className='mobileAddQuestionButton' onClick={() => setOpenQuestionTypeModal(true)}>
                    Add Question
                </button>
                {openQuestionTypeModal && (
                    <QuestionTypeModal addQuestionProp={addQuestion} openModal={setOpenQuestionTypeModal} />
                )}
            </div>
        </div>
    );
}

export default EditQuizPage;