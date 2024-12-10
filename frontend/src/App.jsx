import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./Home";
import QuizMakerDashboard from "./QuizMaker/Dashboard/QuizMakerDashboard";
import CreateQuizPage from "./QuizMaker/Create/CreateQuizPage";
import StatsPage from "./QuizMaker/Stats/StatsPage";
import EditQuizPage from "./QuizMaker/Edit/EditQuizPage";
import QuizContainerMakerPage from "./pages/QuizContainerMakerPage";
import QuizTakerAttmptsPage from "./pages/QuizTakerAttmptsPage";
import ProfilePage from "./pages/ProfilePage";
import Questions from "./pages/Questions";
import Filter from "./pages/Filter";
import Quizzes from "./pages/Quizzes";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route
                path="/quiz-maker-dashboard"
                element={<QuizMakerDashboard />}
            />
            <Route path="/create-quiz" element={<CreateQuizPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/edit-quiz" element={<EditQuizPage />} />
            <Route
                path="/maker-quiz-container"
                element={<QuizContainerMakerPage />}
            />
            <Route
                path="/taker-quiz-attmpts"
                element={<QuizTakerAttmptsPage />}
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/filter" element={<Filter />} />
        </Routes>
    );
};

export default App;
