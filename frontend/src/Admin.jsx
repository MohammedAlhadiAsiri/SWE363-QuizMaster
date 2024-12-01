import React, { useState } from 'react';
import "./Admin.css"
function Dashboard() {

  {/* For visual purposes only */}
  const [students, setStudents] = useState([
    { id: 1, name: 'Khalid'},
    { id: 2, name: 'Abdulmalik'},
    { id: 3, name: 'Zyad'}
  ]);

  const [quizzes, setQuizzes] = useState([
    { id: 1, name: 'HTML Practice', active: true},
    { id: 2, name: 'World Geography', active: false}
  ]);

  return (
    <div className="main">
      <aside className="aside">
        <h1 style={{ color: '#2196f3' }}>Quiz Master</h1>
        <p>Username: Admin</p>
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#999', color: 'black', border: 'none' }}>LOG OUT</button>
      </aside>

      <main style={{ flex: 1, padding: '20px', margin: "50"}}>
        <header   className="header" style={{ fontSize: '20px', marginBottom: '20px', color: '#2196f3' }}>Good Afternoon, Admin</header>
        
        <section className="student">
          <h2 className="head" style={{ color: '#2196f3'}}>Student Info  </h2>
          {students.map(student => (
            <div className="list" key={student.id} style={{ display: 'flex', alignItems: 'center',  padding: '10px', margin: '5px 0', backgroundColor:"lightgray", }}>
              <p style={{ marginLeft: '10px', flex: 1, color:"black" }}>{student.name}</p>
              <button style={{ marginRight: '5px', backgroundColor: "gray" }}>Edit</button>
              <button style={{ backgroundColor: "red" }}>Delete</button>
            </div>
          ))}
        </section>
        
        <section className="quizzes">
          <h2 className="head" style={{ color: '#2196f3'}}>Quizzes</h2>
          {quizzes.map(quiz => (
            <div className='list' key={quiz.id} style={{ display: 'flex', alignItems: 'center', backgroundColor: 'lightgray', padding: '10px', margin: '5px 0' }}>
              <p style={{ marginLeft: '10px', flex: 1, color: "black" }}>{quiz.name}</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{
                  backgroundColor: quiz.active ? '#4caf50' : '#f44336',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '50px',
                  marginRight: '10px',
                }}>
                  {quiz.active ? 'Active' : 'Not Active'}
                </span>
                <button style={{ marginRight: '5px', backgroundColor: "gray" }}>Edit</button>
                <button style={{ backgroundColor: "red" }}>Delete</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;