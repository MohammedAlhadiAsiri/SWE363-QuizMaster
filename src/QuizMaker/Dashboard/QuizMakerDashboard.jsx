//This is QuizMakerDashboard.jsx
import React from 'react'
import QuizzesContainer from './QuizzesContainer'
import Navbar from '../../Navbar';
import './QuizMakerDashboard.css'
function QuizMakerDashboard(){
    return (
        <div className='quizMakerDashboard'>
            <Navbar />
            <QuizzesContainer />
        </div>
    );
}
export default QuizMakerDashboard;