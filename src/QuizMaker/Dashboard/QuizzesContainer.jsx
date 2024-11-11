//This is QuizzesContainer.jsx
import React from 'react';
import QuizCard from './QuizCard';
import './QuizzesContainer.css'
function QuizzesContainer(){
    return (
        <section className='quizzesContainer'>
            <div className='navBar'>
                <p className='quizzes'>Quizzes</p>
                <input type='text' placeholder='Search by quiz name'></input>
                <button className='createButton'>Create</button>
            </div>
            <QuizCard />
        </section>
    );
}

export default QuizzesContainer;