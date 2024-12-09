//This is TakerAttmptsContainer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TakerQuizCard from './TakerQuizCard';
import '../QuizMaker/Dashboard/QuizzesContainer.css'
function TakerAttmptsContainer(){

    return (
        <section className='quizzesContainer'>
            <div className='navBar'>
                <p className='quizzes'>Attempted Quizzes</p>
            </div>
            <TakerQuizCard />
        </section>
    );
}

export default TakerAttmptsContainer;