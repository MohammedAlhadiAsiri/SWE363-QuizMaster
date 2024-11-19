//This is QuizzesContainer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizCard from './QuizCard';
import './QuizzesContainer.css'
function QuizzesContainer(){
    const navigate = useNavigate();
    function handleClick(){navigate('/create-quiz')}
    return (
        <section className='quizzesContainer'>
            <div className='navBar'>
                <p className='quizzes'>Quizzes</p>
                <p className='addQuizIcon' onClick={handleClick}>+</p>
                <input type='text' placeholder='Search by quiz name' className='searchFilter'></input>
                <button className='createButton' onClick={handleClick}>Create</button>
            </div>
            <QuizCard />
        </section>
    );
}

export default QuizzesContainer;