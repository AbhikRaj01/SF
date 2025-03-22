import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import GetStartedPage from './views/GetStartedPage';
import ExploreCoursesPage from './views/ExploreCoursesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/explore-courses" element={<ExploreCoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;