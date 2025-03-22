import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PythonQuestionsPage.css';

const PythonQuestionsPage = () => {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  // Real-life Python problem
  const question = {
    id: 1,
    text: `Write a Python function to calculate the factorial of a number. 
           The function should take an integer as input and return its factorial. 
           For example, factorial(5) should return 120.`,
    correctAnswer: `def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().replace(/\s+/g, '') === question.correctAnswer.replace(/\s+/g, '')) {
      alert('Correct answer! 🎉');
    } else {
      alert('Incorrect answer. Try again!');
    }
    setAnswer('');
  };

  return (
    <div className="python-questions-page">
      {/* Header with Logo */}
      <header className="question-header">
        <img src="/logo512.png" alt="Skill Forge Logo" className="logo" />
        <h1>Python Coding Challenge</h1>
      </header>

      {/* Question Card */}
      <div className="question-card">
        <h2>Problem Statement</h2>
        <p>{question.text}</p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your Python code here..."
            required
          />
          <button type="submit">Submit Answer</button>
        </form>
      </div>

      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="btn-back">
        Back to Dashboard
      </button>
    </div>
  );
};

export default PythonQuestionsPage;