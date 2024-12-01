import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs"
import Home from "./Home"; 
import QuizMakerDashboard from "./QuizMaker/Dashboard/QuizMakerDashboard"

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/quiz-maker-dashboard" element={<QuizMakerDashboard />} />

            </Routes>
    );
};

export default App;
