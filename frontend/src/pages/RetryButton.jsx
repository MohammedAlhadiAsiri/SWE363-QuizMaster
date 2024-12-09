//This is RetryButton.jsx
import React from 'react';
import '../QuizMaker/Dashboard/StatsButton.css';
import { useNavigate } from 'react-router-dom';
function RetryButton(){
    const navigate = useNavigate();
    function handleClick(){
        // retry the quiz
        navigate('/Quizzes')
    }
    return <button className='statsButton' onClick={handleClick}>Retry</button>;
}
export default RetryButton;