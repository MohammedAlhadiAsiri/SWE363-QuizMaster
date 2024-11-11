//This is StatsButton.jsx
import React from 'react';
import './StatsButton.css';

function StatsButton(){
    function handleClick(){
        // go to stats
    }
    return <button className='statsButton' onClick={handleClick}>Stats</button>;
}
export default StatsButton;