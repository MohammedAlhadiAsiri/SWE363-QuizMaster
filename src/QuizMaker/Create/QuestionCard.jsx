import React from 'react'
import './QuestionCard.css';
function QuestionCard(props){
    const mcq = (
        <div>
        <input type='text' className='answers' placeholder='Enter Answer' />
        <input type='radio' name='correctAns' className='radio' />
        <input type='text' className='answers' placeholder='Enter Answer' />
        <input type='radio' name='correctAns' className='radio' />
        <input type='text' className='answers' placeholder='Enter Answer' />
        <input type='radio' name='correctAns' className='radio' />
        <input type='text' className='answers' placeholder='Enter Answer' />
        <input type='radio' name='correctAns' className='radio' />
        </div>
    );
    const tf = (
        <div>
        <input type='text' className='answers' placeholder='Enter Answer' value='True' />
        <input type='radio' name='correctAns' className='radio' />
        <input type='text' className='answers' placeholder='Enter Answer' value='False' />
        <input type='radio' name='correctAns' className='radio' />
        </div>
    );
    return(
        <div className='card'>
            <input type="text" className="question" placeholder="Enter Question"/>
            {props.type === 'mcq' ? mcq : tf}
        </div>
    );
}

export default QuestionCard;