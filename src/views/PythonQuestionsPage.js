import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PythonQuestionsPage.css';

const PythonQuestionsPage = () => {
  const [answer, setAnswer] = useState('');
  const [pyodide, setPyodide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Initialize Pyodide
  useEffect(() => {
    const loadPyodide = async () => {
      const pyodideInstance = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.21.3/full/',
      });
      setPyodide(pyodideInstance);
      setIsLoading(false);
    };
    loadPyodide();
  }, []);

  // Real-life Python problem
  const question = {
    id: 1,
    text: `Write a Python function to calculate the factorial of a number. 
           The function should take an integer as input and return its factorial. 
           For example, factorial(5) should return 120.`,
    testCases: [
      { input: 5, output: 120 },
      { input: 0, output: 1 },
      { input: 1, output: 1 },
      { input: 7, output: 5040 },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pyodide) {
      alert('Python environment is still loading. Please wait...');
      return;
    }

    try {
      // Execute the user's code
      await pyodide.runPythonAsync(answer);

      // Test the user's function against test cases
      let allTestsPassed = true;
      for (const testCase of question.testCases) {
        const result = await pyodide.runPythonAsync(
          `factorial(${testCase.input})`
        );
        if (result !== testCase.output) {
          allTestsPassed = false;
          break;
        }
      }

      if (allTestsPassed) {
        alert('Correct answer! 🎉');
      } else {
        alert('Incorrect answer. Try again!');
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  if (isLoading) {
    return <div>Loading Python environment...</div>;
  }

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