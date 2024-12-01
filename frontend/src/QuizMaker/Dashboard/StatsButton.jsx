import React from 'react';
import './StatsButton.css';
import { useNavigate } from 'react-router-dom';
function StatsButton(){
    const navigate = useNavigate();
    function handleClick(){
        // Go to stats
        navigate('/stats')
    }
    return <button className='statsButton' onClick={handleClick}>Stats</button>;
}
export default StatsButton;