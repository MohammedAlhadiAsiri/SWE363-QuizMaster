//This is QuizzesContainerMakerPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizCard from './QuizCardMakerPage';
import '../QuizMaker/Dashboard/QuizzesContainer.css'
function QuizContainerMakerPage(){
    const navigate = useNavigate();
    function handleClick(){navigate('/create-quiz')}
    return (
        <section className='quizzesContainer'>
            <div className='navBar'>
                <p className='quizzes'>Quizzes</p>
                <input type='text' placeholder='Search by quiz name'></input>
                <button className='createButton' onClick={handleClick}>Create</button>
            </div>
            <QuizCard />
        </section>
    );
}

export default QuizContainerMakerPage;