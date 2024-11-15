//QuestionsList file
import React from 'react';
import './QuestionsList.css'
function QuestionsList(props){
    return ( 
        <ul className='questionsList'>
        {props.questionCards.map((_, index) => (
            <div className='questionListElement' key={index}>
                <li className='questionListLabel'>Question {index + 1}</li>
                <p className='removeQuestionIcon' onClick={() => props.removeQuestion(index)}>X</p>
            </div>
        ))}
    </ul>
    );
}

export default QuestionsList;