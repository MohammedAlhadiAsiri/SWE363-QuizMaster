//This is QuizCardMakerPage.jsx
import React from 'react';
import EditButton from '../QuizMaker/Dashboard/EditButton';
import QuizName from '../QuizMaker/Dashboard/QuizName';
import './QuizCard.css'
//temp database
const quizzesNames = ['HTML Practice', 'World Geo', 'CSS Practice'];

function QuizCardMaker(){
    return (
        quizzesNames.map((quiz) => <div className='quizCard'>
            <QuizName name={quiz}/>
            <EditButton />
        </div>)
        
    );
}
export default QuizCardMaker;
