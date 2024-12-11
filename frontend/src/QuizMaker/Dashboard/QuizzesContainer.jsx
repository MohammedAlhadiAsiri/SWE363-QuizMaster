import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QuizCard from './QuizCard';
import './QuizzesContainer.css'

function QuizzesContainer() {
    const navigate = useNavigate();
    const [quizzes, setQuizzes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    // Fetch user's quizzes when component mounts
    useEffect(() => {
        const fetchUserQuizzes = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    return;
                }

                const response = await axios.get(`${API_BASE_URL}/quiz-maker-dashboard`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setQuizzes(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
                setError('Failed to fetch quizzes');
            }
        };

        fetchUserQuizzes();
    }, [navigate]);

    // Navigate to quiz creation page
    function handleClick() {
        navigate('/create-quiz');
    }

    // Filter quizzes based on search term
    const filteredQuizzes = quizzes.filter(quiz => 
        quiz.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (error) {
        return <div className='error-message'>{error}</div>;
    }

    return (
        <section className='quizzesContainer'>
            <div className='navBar'>
                <p className='quizzes'>Quizzes</p>
                <p className='addQuizIcon' onClick={handleClick}>+</p>
                <input 
                    type='text' 
                    placeholder='Search by quiz name' 
                    className='searchFilter'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='createButton' onClick={handleClick}>Create</button>
            </div>
            {/* Display list of quiz cards */}
            {filteredQuizzes.length === 0 ? (
                <p className='no-quizzes'>No quizzes created yet</p>
            ) : (
                <QuizCard quizzes={filteredQuizzes} />
            )}
        </section>
    );
}

export default QuizzesContainer;