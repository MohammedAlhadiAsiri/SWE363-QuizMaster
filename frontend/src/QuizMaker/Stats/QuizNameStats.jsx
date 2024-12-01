import React from 'react';

function QuizNameStats(props){
    return (
        <div>
            <p className='quizNameStats'>{props.name}- <span className='statsWord'>Stats</span></p>
        </div>
    );
}

export default QuizNameStats;