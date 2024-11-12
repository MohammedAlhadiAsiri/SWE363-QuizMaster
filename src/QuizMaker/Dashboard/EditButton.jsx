//This is EditButton.jsx
import React from 'react';
import './EditButton.css'
import { useNavigate } from 'react-router-dom';

function EditButton(){
    const navigate = useNavigate();
    function handleClick(){
        // go to edit quiz
        navigate('/edit-quiz');
    }
    return (
        <button className='editButton' onClick={handleClick}>Edit</button>
    );
};
export default EditButton;