import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import "./AdminDash.css";

function EditStudent() {
    const navigate = useNavigate();


    return(<div className="main">   
    <aside className="sideBar"> 
        <h2 className="sidebar-header">Quiz Master</h2>
        <p style={{color: "black"}}>Username: Admin</p>
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#999', color: 'black', border: 'none' }} onClick={() => navigate("/")} >LOG OUT</button>
        </aside>
    <main>
    <header className="header"> <p>-------------------|  Hello, Admin</p></header> 
    <section className="students" style={{height: "500px"}}>
        <h2 style={{ color: '#2196f3', marginRight:"auto", padding:"10px" }}>Student info</h2>
        <div style={{ padding: "10px" }}>

                        <button
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#2196f3",
                                color: "#fff",
                                border: "none",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/admin")}
                        >
                            Back to Dashboard
                        </button>
                    </div>
    </section>
        </main>    
    </div>
    );
}
export default EditStudent