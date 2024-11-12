//This is QuizName.jsx
import React from 'react';
import './QuizName.css'
function QuizName(props){
    return <p className='quizName'>{props.name}</p>;
}
export default QuizName;