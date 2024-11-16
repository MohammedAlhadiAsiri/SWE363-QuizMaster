import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import EditQuizPage from "./QuizMaker/Edit/EditQuizPage.jsx";
import CreateQuizPage from "./QuizMaker/Create/CreateQuizPage.jsx";
import StatsPage from "./QuizMaker/Stats/StatsPage.jsx";
import QuizMakerDashboard from "./QuizMaker/Dashboard/QuizMakerDashboard.jsx";
import About from "./pages/AboutUs";
import Quizzes from "./pages/Quizzes";
import Questions from "./pages/Questions";
import Filter from "./pages/Filter";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="/quiz-maker-dashboard"
                    element={<QuizMakerDashboard />}
                />
                <Route path="/create-quiz" element={<CreateQuizPage />} />
                <Route path="/edit-quiz" element={<EditQuizPage />} />
                <Route path="/stats" element={<StatsPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/filter" element={<Filter />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
