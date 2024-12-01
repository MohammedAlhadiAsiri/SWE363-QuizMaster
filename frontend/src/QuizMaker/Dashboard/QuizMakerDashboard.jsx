import React from 'react'
import QuizzesContainer from './QuizzesContainer'
import Navbar from '../../Navbar';
import Header from '../../components/Header';
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