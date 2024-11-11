import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import EditQuizPage from './QuizMaker/Edit/EditQuizPage.jsx';
import CreateQuizPage from './QuizMaker/Create/CreateQuizPage.jsx';
import StatsPage from './QuizMaker/Stats/StatsPage.jsx';
import QuizMakerDashboard from './QuizMaker/Dashboard/QuizMakerDashboard.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz-maker-dashboard" element={<QuizMakerDashboard />} />
        <Route path="/create-quiz" element={<CreateQuizPage />} />
        <Route path="/edit-quiz" element={<EditQuizPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
