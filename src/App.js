import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import GetStartedPage from './views/GetStartedPage';
import PythonQuestionsPage from './views/PythonQuestionsPage'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/python-questions" element={<PythonQuestionsPage />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;