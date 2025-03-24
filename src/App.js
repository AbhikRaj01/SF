import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import GetStartedPage from './views/GetStartedPage';
import PythonQuestionsList from './views/PythonQuestionsList';
import PythonQuestionsPage from './views/PythonQuestionsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/python-questions" element={<PythonQuestionsList />} />
        <Route path="/python-questions/:questionId" element={<PythonQuestionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;