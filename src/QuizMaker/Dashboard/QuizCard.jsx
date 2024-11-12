//This is QuizCard.jsx
import React from 'react';
import EditButton from './EditButton';
import StatsButton from './StatsButton';
import QuizName from './QuizName';
import './QuizCard.css'
//temp database
const quizzesNames = ['HTML Practice', 'World Geo', 'CSS Practice'];

function QuizCard(){
    return (
        quizzesNames.map((quiz) => <div className='quizCard'>
            <StatsButton />
            <QuizName name={quiz}/>
            <EditButton />
            
        </div>)
        
    );
}
export default QuizCard;
