// This is ShowResultFiled.jsx
import React, { useState } from 'react';
import './ShowResultFiled.css';

function ShowResultField() {
    const [quizResult, setQuizResult] = useState(null);

    function handleClick() {
        // Simulate fetching quiz results
        const result = "You scored 85%!"; // Example result
        setQuizResult(result);
    }

    return (
        <div className="editTextBox" onClick={handleClick}>
            {quizResult || "Show Quiz Result"}
        </div>
    );
}

export default ShowResultField;
