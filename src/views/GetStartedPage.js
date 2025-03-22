import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './GetStartedPage.css';

const GetStartedPage = () => {
  const navigate = useNavigate();

  // Mock data - replace with real data from your backend
  const courses = [
    { language: 'Python', completed: 13, total: 20, level: 'Intermediate', progress: 65 },
    { language: 'C++', completed: 8, total: 20, level: 'Easy', progress: 40 },
    { language: 'JavaScript', completed: 5, total: 20, level: 'Basic', progress: 25 },
    { language: 'Java', completed: 2, total: 20, level: 'Basic', progress: 10 },
    { language: 'C', completed: 1, total: 20, level: 'Basic', progress: 5 }
  ];

  const handleContinue = (language) => {
    if (language === 'Python') {
      navigate('/python-questions'); // Navigate to Python questions page
    } else {
      alert(`Continue learning ${language}`); // Placeholder for other courses
    }
  };

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <div className="nav-brand">Skill Forge</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/ai-tutor" className="nav-link">AI Tutor</Link>
        </div>
        <div className="auth-buttons">
          <button className="btn-login">Log in</button>
          <button className="btn-signup">Sign up</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Left Section */}
        <div className="dashboard-stats">
          <h2>Dashboard</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Progress</h3>
              <div className="progress-circle">28%</div>
              <p>42 of 150 lessons completed</p>
            </div>
            
            <div className="stat-card">
              <h3>Current Rank</h3>
              <div className="rank-badge">Intermediate Coder</div>
              <p>1250 points earned</p>
            </div>

            <div className="stat-card">
              <h3>Daily Streak</h3>
              <div className="streak-display">7 days</div>
              <p>Keep it up to earn streak badges!</p>
            </div>
          </div>

          <div className="ai-tutor-section">
            <h3>AI Tutor</h3>
            <button className="btn-continue">Continue Learning</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="dashboard-progress">
          <div className="badges-section">
            <h3>Badges Earned</h3>
            <div className="badges-display">
              <span>3/4 badges</span>
              <div className="badges-grid">
                {/* Add badge icons here */}
                <div className="badge-item">🏆</div>
                <div className="badge-item">🎖️</div>
                <div className="badge-item">⭐</div>
              </div>
            </div>
          </div>

          <div className="course-progress">
            <h3>Course Progress</h3>
            <div className="course-list">
              {courses.map((course, index) => (
                <div key={index} className="course-item">
                  <div className="course-header">
                    <h4>{course.language}</h4>
                    <span>{course.completed}/{course.total} lessons</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="course-footer">
                    <span className="course-level">{course.level}</span>
                    <button 
                      className="btn-continue"
                      onClick={() => handleContinue(course.language)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;