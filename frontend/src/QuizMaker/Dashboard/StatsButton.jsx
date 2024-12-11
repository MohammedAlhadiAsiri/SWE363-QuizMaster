import React from 'react';
import './StatsButton.css';
import { useNavigate } from 'react-router-dom';
function StatsButton({ quizId }){
    const navigate = useNavigate();
    function handleClick(){
        // Go to stats
        navigate(`/stats/${quizId}`)
    }
    return <button className='statsButton' onClick={handleClick}>Stats</button>;
}
export default StatsButton;