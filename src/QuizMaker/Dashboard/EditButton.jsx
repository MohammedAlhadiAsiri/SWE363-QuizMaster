//This is EditButton.jsx
import React from 'react';
import './EditButton.css'
function EditButton(){
    function handleClick(){
        // go to edit quiz
    }
    return (
        <button className='editButton' onClick={handleClick}>Edit</button>
    );
};
export default EditButton;