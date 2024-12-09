import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import "./AdminDash.css";

function AdminDash() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([
        { id: 1, name: "Faisal", email: "faisal@example.com", password: "password123" },
        { id: 2, name: "Nawaf", email: "nawaf@example.com", password: "password123" },
        { id: 3, name: "Turkey", email: "turkey@example.com", password: "password123" },
        { id: 4, name: "Khalid", email: "khalid@example.com", password: "password123" },
        { id: 5, name: "Mohammed", email: "mohammed@example.com", password: "password123" },
    ]);    const [quizzes, setQuizzes] = useState([
        { name: "HTML", isActive: true },
        { name: "CSS", isActive: true },
        { name: "JavaScript", isActive: false },
        { name: "React", isActive: true },
        { name: "Node.js", isActive: false },
    ]);

    function deleteQuiz(index){
        const updatedQuizzes = quizzes.filter((_, i) => i !==index);
        setQuizzes(updatedQuizzes);
    }

    function deleteStudent(index){
        const updatedStudents = students.filter((_, i) => i !==index);
        setStudents(updatedStudents);
    }

    function changeQuizStatus(index) {
        const updatedQuizzes = quizzes.map((quiz, i) =>
            i === index ? { ...quiz, isActive: !quiz.isActive } : quiz
        );
        setQuizzes(updatedQuizzes);
    }
    

    return(<div className="main">   
    <aside className="sideBar"> 
        <h2 className="sidebar-header">Quiz Master</h2>
        <p style={{color: "black"}}>Username: Admin</p>
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#999', color: 'black', border: 'none' }} onClick={() => navigate("/")} >LOG OUT</button>
        </aside>
    <main>
    <header className="header"> <p>--------------|  Hello, Admin</p></header>

        
    <section className="students">
        <h2 style={{ color: '#2196f3', marginRight:"auto", padding:"10px" }}>Students info</h2>
        {students.map((student, index)=>
        <div className="stuDev" kay={index}>
            <sapn className="studentsList">{student.name}</sapn>
            <button style={{backgroundColor: "gray" }} onClick={() => navigate("/EditStudent")} >Edit</button>
            <button style={{ backgroundColor: "red" }} onClick={() => deleteStudent(index)} >
                Delete
                </button>
        </div>)}
    </section>

    
    <section className="students">
                    <h2 style={{ color: "#2196f3", marginRight: "auto", padding:"10px" }}>Quizzes</h2>
                    {quizzes.map((quiz, index) => (
                        <div className="stuDev" key={index}>
                            <span className="studentsList">
                                {quiz.name}
                            </span>
                            <button style={{ backgroundColor: "gray" }} onClick={() => navigate("/EditForAdmin")} >Edit</button>
                            <button
                                style={{ backgroundColor: "red" }}
                                onClick={() => deleteQuiz(index)}
                            >
                                Delete
                            </button>
                            <button
                                className={`toggle-button ${quiz.isActive ? "Active" : "Not-Active"}`}
                                onClick={() => changeQuizStatus(index)}
                            >
                                {quiz.isActive ? "ACTIVE" : "NOT ACTIVE"}
                            </button>
                        </div>
                    ))}
                </section>


        </main>    
    </div>
    );
}
export default AdminDash