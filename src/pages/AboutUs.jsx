import "../style.css";
import Header from "../components/Header";

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="main-container">
                <div className="aoutUs-container">
                    <h1>ABOUT US</h1>
                </div>
                <p className="para">
                    At <span className="quiz-master">QuizMaster</span>, we blend
                    fun with learning, providing an enjoyable way to test your
                    knowledge on a variety of topics. Whether you’re preparing
                    for an exam or just looking to have fun, our platform has
                    something for everyone!
                </p>
            </div>
        </>
    );
};

export default AboutUs;
