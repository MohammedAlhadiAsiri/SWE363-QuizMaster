import Navbar from "./Navbar.jsx";
import SignInModal from "./SignInModal.jsx";
import SignUpModal from "./SignUpModal.jsx";
import Hero from "./Hero.jsx";
import React, { useState } from "react";


function Home() {

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);


  const openSignUpModal = () => {
    setShowSignUpModal(true);
    setShowSignInModal(false);
};

const closeSignUpModal = () => {
    setShowSignUpModal(false);
};

const openSignInModal = () => {
  setShowSignInModal(true);
  setShowSignUpModal(false);
};

const closeSignInModal = () => {
  setShowSignInModal(false);
};


  return(
    <div>
    <Navbar openModal={openSignUpModal} />
    <div className={`main-content ${showSignUpModal ? "blur" : ""}`}>
        <Hero openModal={openSignUpModal} />
    </div>
    {showSignUpModal && <SignUpModal onClose={closeSignUpModal} openModal={openSignInModal} />}
    {showSignInModal && <SignInModal onClose={closeSignInModal} openModal={openSignUpModal} />}
    

</div>
  );
}

export default Home
