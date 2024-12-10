//This is QuizTakerAttmptsPage.jsx
import React from 'react'
import QuizzesContainer from './TakerAttmptsContainer'
import Navbar from '../Navbar';
import Header from '../components/Header'
import '../QuizMaker/Dashboard/QuizMakerDashboard.css'
function QuizTakerAttmptsPage(){
    return (
        <div className='quizMakerDashboard'>
            <Navbar />
            <QuizzesContainer />
        </div>
    );
}
export default QuizTakerAttmptsPage;