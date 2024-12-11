import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import QuizNameStats from './QuizNameStats';
import QuizInfo from "./QuizInfo";
import QuizStats from "./QuizStats";
import './StatsPage.css'

function StatsPage() {
    const [quizData, setQuizData] = useState(null);
    const [error, setError] = useState(null);
    const { quizId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuizStats = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${API_BASE_URL}/quiz-stats/${quizId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setQuizData(response.data);
            } catch (error) {
                console.error('Error fetching quiz stats:', error);
                setError('Failed to fetch quiz statistics');
            }
        };

        fetchQuizStats();
    }, [quizId]);

    const handleExitClick = () => {
        navigate('/quiz-maker-dashboard');
    };

    if (error) return <div>{error}</div>;
    if (!quizData) return <div>Loading...</div>;

    return (
        <div className="statsPage">

            <button className="statsExitButton" onClick={handleExitClick}>Exit</button>
            <p className="exitIcon" onClick={handleExitClick}>X</p>
            <div className='statsMainContainer'>    
                <QuizNameStats name={quizData.quizName}/>
                <QuizInfo 
                    questionsNumber={quizData.totalQuestions}
                    quizDifficulty={quizData.difficulty} 
                    quizCreator={localStorage.getItem('userEmail')}
                />
                <QuizStats 
                    quizAttempts={0}  // Placeholder for future implementation
                    quizAverage="0%"  // Placeholder for future implementation
                />
            </div>
        </div>
    );
}

export default StatsPage;