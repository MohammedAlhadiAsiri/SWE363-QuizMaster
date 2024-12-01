//This is QuizMakerPage.jsx
import React from 'react'
import QuizzesContainer from './TakerAttmptsContainer'
import Navbar from '../Navbar';
import '../QuizMaker/Dashboard/QuizMakerDashboard.css'
function QuizMakerPage(){
    return (
        <div className='quizMakerPage'>
            <Navbar />
            <QuizzesContainer />
        </div>
    );
}
export default QuizMakerPage;