//This is TakerQuizCard.jsx
import React from 'react';
import RetryButton from './RetryButton';
import ShowResult from './ShowResultFiled';
import QuizName from '../QuizMaker/Dashboard/QuizName';
import '../QuizMaker/Dashboard/QuizCard.css'
//temp database
const quizzesNames = ['HTML Practice', 'World Geo', 'CSS Practice'];

function TakerQuizCard(){
    return (
        quizzesNames.map((quiz) => <div className='quizCard'>
            <RetryButton />
            <QuizName name={quiz}/>    
            <ShowResult />
        
        </div>)
        
    );
}
export default TakerQuizCard;
