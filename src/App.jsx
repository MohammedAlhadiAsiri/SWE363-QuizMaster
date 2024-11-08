import "./App.css"
import Navbar from "./Navbar.jsx";
import SignUpModal from "./SignUpModal.jsx";
import Hero from "./Hero.jsx";
import React, { useState } from "react";

function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("Opening modal..."); 
    setShowModal(true);
};

const closeModal = () => {
    setShowModal(false);
};

  return(
    <div>
    <Navbar openModal={openModal} />
    <div className={`main-content ${showModal ? "blur" : ""}`}>
        <Hero openModal={openModal} />
    </div>
    {showModal && <SignUpModal onClose={closeModal} />}
</div>
  );
}

export default App
