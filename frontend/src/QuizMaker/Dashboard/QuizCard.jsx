import React from 'react';
import EditButton from './EditButton';
import StatsButton from './StatsButton';
import QuizName from './QuizName';
import './QuizCard.css'

function QuizCard({ quizzes }) {
    return (
        quizzes.map((quiz) => (
            <div key={quiz._id} className='quizCard'>
                <StatsButton quizId={quiz._id} />
                <QuizName name={quiz.name}/>
                <EditButton />
            </div>
        ))
    );
}

export default QuizCard;