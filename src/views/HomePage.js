import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="skill-forge-homepage">
      {/* Header Section */}
      <header className="header">
        <div className="header-logo">
          <img src="/logo512.png" alt="Skill Forge Logo" className="logo" />
          <span>Skill Forge</span>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/get-started" className="nav-link">Get Started</Link>
          <Link to="/explore-courses" className="nav-link">Explore Courses</Link>
        </nav>
        <button className="cta-button primary">Sign Up</button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Level Up Your Coding Skills with Skill Forge</h1>
          <p>Master C, C++, Python, Java, and JavaScript with our interactive AI-powered learning platform. Track your progress and earn badges as you advance.</p>
          <div className="cta-buttons">
            <Link to="/get-started" className="cta-button primary">Get Started</Link>
            <Link to="/explore-courses" className="cta-button secondary">Explore Courses</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Skill Forge?</h2>
        <p>Our platform is designed to help you master coding skills efficiently and effectively.</p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>AI-Powered Learning</h3>
            <p>Our AI tutor adapts to your learning style and provides personalized feedback.</p>
          </div>
          <div className="feature-card">
            <h3>Achievement System</h3>
            <p>Earn badges and track your progress as you complete challenges.</p>
          </div>
          <div className="feature-card">
            <h3>Skill Progression</h3>
            <p>Progress through 5 difficulty levels, from beginner to expert.</p>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="languages-section">
        <h2>Languages You'll Master</h2>
        <p>From fundamentals to advanced concepts, we've got you covered.</p>
        <div className="languages-grid">
          <div className="language-card">
            <h3>C Fundamentals</h3>
            <p>Learn the basics of C programming, including syntax, data types, and control structures.</p>
          </div>
          <div className="language-card">
            <h3>C++ Object-Oriented</h3>
            <p>Master object-oriented programming concepts with C++.</p>
          </div>
          <div className="language-card">
            <h3>Python Versatile</h3>
            <p>Explore Python's versatility in web development, data science, and automation.</p>
          </div>
          <div className="language-card">
            <h3>Java Enterprise</h3>
            <p>Build scalable enterprise applications with Java.</p>
          </div>
          <div className="language-card">
            <h3>JS Web Development</h3>
            <p>Create dynamic and interactive web applications with JavaScript.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Learners Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Skill Forge helped me master Python in just 3 months. The AI tutor is amazing!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"The achievement system kept me motivated throughout my learning journey."</p>
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo512.png" alt="Skill Forge Logo" />
            <span>Skill Forge</span>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/get-started">Get Started</Link>
            <Link to="/explore-courses">Explore Courses</Link>
          </div>
        </div>
        <p className="footer-text">© 2023 Skill Forge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;