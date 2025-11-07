import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TheoryPage from './pages/TheoryPage';
import QuizPage from './pages/QuizPage';
import './App.css';

import { Analytics } from '@vercel/analytics/react';

import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/theory/:formationKey" element={<TheoryPage />} />
        <Route path="/quiz/:formationKey" element={<QuizPage />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
