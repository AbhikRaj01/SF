import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PythonQuestionsList.css';

const PythonQuestionsList = () => {
  const navigate = useNavigate();

  const pythonQuestions = [
    {
      id: 1,
      text: `Write a Python function to calculate the factorial of a number. 
             The function should take an integer as input and return its factorial. 
             For example, factorial(5) should return 120.`,
    },
    {
      id: 2,
      text: `Write a Python function to check if a string is a palindrome. 
             A palindrome is a string that reads the same backward as forward. 
             For example, "madam" is a palindrome.`,
    },
    {
      id: 3,
      text: `Write a Python function to find the largest number in a list. 
             The function should take a list of numbers as input and return the largest number. 
             For example, for the list [3, 5, 7, 2], the function should return 7.`,
    },
    {
      id: 4,
      text: `Write a Python function to reverse a string. 
             The function should take a string as input and return the reversed string. 
             For example, for the input "hello", the function should return "olleh".`,
    },
  ];

  const handleQuestionClick = (questionId) => {
    navigate(`/python-questions/${questionId}`);
  };

  return (
    <div className="questions-list">
      <h1>Python Coding Challenges</h1>
      <div className="question-grid">
        {pythonQuestions.map((question) => (
          <div
            key={question.id}
            className="question-card"
            onClick={() => handleQuestionClick(question.id)}
          >
            <h3>Question {question.id}</h3>
            <p>{question.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PythonQuestionsList;