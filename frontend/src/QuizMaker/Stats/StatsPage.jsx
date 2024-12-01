import React from "react";
import QuizNameStats from './QuizNameStats';
import QuizInfo from "./QuizInfo";
import QuizStats from "./QuizStats";
import './StatsPage.css'
import { useNavigate } from "react-router-dom";
function StatsPage(){
    //temp data for this phase
    const dummyData = {
        creator: 'Ziyad',
        name: 'Sample Quiz',
        questionsNumber: 2,
        difficulty: 'Normal',
        attempts: 3,
        average: '60%'
    };

    const navigate = useNavigate();
    const handleExitClick = () => {navigate('/quiz-maker-dashboard');};
    return (
        <div className="statsPage">
            
            <button className="statsExitButton" onClick={handleExitClick}>Exit</button>
            <p className="exitIcon" onClick={handleExitClick}>X</p>
            <div className='statsMainContainer'>    
                <QuizNameStats name={dummyData.name}/>
                <QuizInfo questionsNumber={dummyData.questionsNumber}
                    quizDifficulty={dummyData.difficulty} 
                    quizCreator={dummyData.creator}
                />
                <QuizStats quizAttempts={dummyData.attempts}
                    quizAverage={dummyData.average}
                    />
            </div>
        
        </div>
    );
}
export default StatsPage;