import React, {useState} from "react"
import "./AdminDash.css";

function AdminDash() {
    const [students, setStudents] = useState(["Faisal", "Nawaf", "Turkey", "khalid", "mohammed"]);
    const [quizzes, setQuizzes] = useState([
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
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#999', color: 'black', border: 'none' }}>LOG OUT</button>
        </aside>
    <main>
    <header className="header">Hello, Admin</header>

        
    <section className="students">
        <h2 style={{ color: '#2196f3', marginRight:"auto" }}>Students info</h2>
        {students.map((student, index)=>
        <div className="stuDev" kay={index}>
            <sapn className="studentsList">{student}</sapn>
            <button style={{backgroundColor: "gray" }}>Edit</button>
            <button style={{ backgroundColor: "red" }} onClick={() => deleteStudent(index)} >
                Delete
                </button>
        </div>)}
    </section>

    
    <section className="students">
                    <h2 style={{ color: "#2196f3", marginRight: "auto" }}>Quizzes</h2>
                    {quizzes.map((quiz, index) => (
                        <div className="stuDev" key={index}>
                            <span className="studentsList">
                                {quiz.name}
                            </span>
                            <button style={{ backgroundColor: "gray" }}>Edit</button>
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