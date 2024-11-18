import React from 'react';
import './QuizInfo.css';
function QuizInfo(props){
    return(
        <div className='quizInfoContainer'>
            <div className='quizInfo'>
                <h2>Questions</h2>
                <p className='quizInfoText'>{props.questionsNumber}</p>
            </div>
            <div className='quizInfo'>
                <h2>Difficulty</h2>
                <p className='quizInfoText'>{props.quizDifficulty}</p>
            </div>
            <div className='quizInfo'>
                <h2>Creator</h2>
                <p className='quizInfoText'>{props.quizCreator}</p>
            </div>
        </div>
    );
}
export default QuizInfo;