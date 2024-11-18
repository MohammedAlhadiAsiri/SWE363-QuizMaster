import React from 'react';
import './QuizStats.css';
function QuizStats(props){
    return (
        <div className='quizStatsContainer'>
            <div className='statCards'>
                <h2>{props.quizAttempts}</h2>
                <p className='statsText'>Attempts</p>
            </div>
            <div className='statCards'>
                <h2>{props.quizAverage}</h2>
                <p className='statsText'>Average</p>
            </div>
        </div>
    );
}
export default QuizStats;