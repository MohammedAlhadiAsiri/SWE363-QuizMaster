import React from 'react';
import EditButton from './EditButton';
import StatsButton from './StatsButton';
import QuizName from './QuizName';
import './QuizCard.css'

function QuizCard({ quizzes }) {
    return (
        // Map through quizzes and display each quiz card
        quizzes.map((quiz, index) => (
            <div key={index} className='quizCard'>
                <StatsButton />
                <QuizName name={quiz.name}/>
                <EditButton />
            </div>
        ))
    );
}

export default QuizCard;