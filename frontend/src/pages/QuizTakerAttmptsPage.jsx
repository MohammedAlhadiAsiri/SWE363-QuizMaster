//This is QuizTakerAttmptsPage.jsx
import React from 'react'
import QuizzesContainer from './TakerAttmptsContainer'
import Navbar from '../Navbar';
import '../QuizMaker/Dashboard/QuizMakerDashboard.css'
function QuizTakerAttmptsPage(){
    return (
        <div className='quizMakerPage'>
            <Navbar />
            <QuizzesContainer />
        </div>
    );
}
export default QuizTakerAttmptsPage;