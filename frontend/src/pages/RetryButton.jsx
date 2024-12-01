//This is RetryButton.jsx
import React from 'react';
import '../QuizMaker/Dashboard/StatsButton.css';
import { useNavigate } from 'react-router-dom';
function RetryButton(){
    const navigate = useNavigate();
    function handleClick(){
        // retry the quiz
        navigate('/retry')
    }
    return <button className='retryButton' onClick={handleClick}>Retry</button>;
}
export default RetryButton;