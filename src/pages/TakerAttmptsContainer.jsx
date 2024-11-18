//This is TakerAttmptsContainer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizCard from './TakerQuizCard';
import '../QuizMaker/Dashboard/QuizzesContainer.css'
function TakerAttmptsContainer(){

    return (
        <section className='attempQuizzesContainer'>
            <div className='navBar'>
                <p className='attemquizzes'>Attempted Quizzes</p>
            </div>
            <TakerQuizCard />
        </section>
    );
}

export default TakerAttmptsContainer;