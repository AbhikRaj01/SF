import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PythonQuestionsPage.css';

const PythonQuestionsPage = () => {
  const { questionId } = useParams();
  const [answer, setAnswer] = useState('');
  const [pyodide, setPyodide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState(null);
  const navigate = useNavigate();

  const pythonQuestions = [
    {
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
    },
    {
      id: 2,
      text: `Write a Python function to check if a string is a palindrome. 
             A palindrome is a string that reads the same backward as forward. 
             For example, "madam" is a palindrome.`,
      testCases: [
        { input: '"madam"', output: true },
        { input: '"hello"', output: false },
        { input: '"racecar"', output: true },
        { input: '"python"', output: false },
      ],
    },
    {
      id: 3,
      text: `Write a Python function to find the largest number in a list. 
             The function should take a list of numbers as input and return the largest number. 
             For example, for the list [3, 5, 7, 2], the function should return 7.`,
      testCases: [
        { input: '[3, 5, 7, 2]', output: 7 },
        { input: '[-1, -5, -3]', output: -1 },
        { input: '[10]', output: 10 },
        { input: '[0, 0, 0]', output: 0 },
      ],
    },
    {
      id: 4,
      text: `Write a Python function to reverse a string. 
             The function should take a string as input and return the reversed string. 
             For example, for the input "hello", the function should return "olleh".`,
      testCases: [
        { input: '"hello"', output: '"olleh"' },
        { input: '"python"', output: '"nohtyp"' },
        { input: '"racecar"', output: '"racecar"' },
        { input: '""', output: '""' },
      ],
    },
  ];

  useEffect(() => {
    // Find the question based on the questionId
    const selectedQuestion = pythonQuestions.find(
      (q) => q.id === parseInt(questionId)
    );
    setQuestion(selectedQuestion);

    // Initialize Pyodide
    const loadPyodide = async () => {
      const pyodideInstance = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.21.3/full/',
      });
      setPyodide(pyodideInstance);
      setIsLoading(false);
    };
    loadPyodide();
  }, [questionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pyodide || !question) {
      alert('Python environment or question is not ready. Please wait...');
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

  if (isLoading || !question) {
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
        Back to Questions List
      </button>
    </div>
  );
};

export default PythonQuestionsPage;