import React from 'react';
import QuestionCard from './QuestionCard';
import './CreateQuizPage.css';
import { useNavigate } from 'react-router-dom';

function CreateQuizPage(){
    const navigate = useNavigate();
    function handleExitClick(){navigate('/quiz-maker-dashboard')}
    return(
        <div className='createQuiz'>
            <div className='sidebar'>
                <button className='exitButton' onClick={handleExitClick}>Exit</button>
                <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
                <button className='addQuestionButton'>Add Question</button>
            </div>

            <div className='mainPage'>
                <div className='topbar'>
                    <input type="text" className="quizNameInput" placeholder="Enter Quiz Name"/>
                    <button className='publishButton'>Publish</button>
                </div>
                <div className='questinCards'>
                    <QuestionCard type='mcq'/>
                    <QuestionCard type='tf'/>
                </div>
                
            </div>
        </div>
    );
};

export default CreateQuizPage;