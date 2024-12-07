import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs"
import Home from "./Home"; 
import QuizMakerDashboard from "./QuizMaker/Dashboard/QuizMakerDashboard"
import CreateQuizPage from "./QuizMaker/Create/CreateQuizPage";
import StatsPage from "./QuizMaker/Stats/StatsPage";
import EditQuizPage from "./QuizMaker/Edit/EditQuizPage";

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/quiz-maker-dashboard" element={<QuizMakerDashboard />} />
                <Route path="/create-quiz" element={<CreateQuizPage />} />
                <Route path="/stats" element={<StatsPage />} />
                <Route path="/edit-quiz" element={<EditQuizPage />} />

            </Routes>
    );
};

export default App;
