// App.js
import React from 'react';
import './Landing.css';
import logo from '../../images/logo/prepai-logo.png';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="App">

      <section className="main-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h2 className="hero-title">Craft your Success Story</h2>
            <p className="hero-description">Ensure complete readiness for real-time interview simulations by using PrepAI's customized interview preparation, which offers company-specific questions that are in line with your job description.</p>
            <Link to="/register">
              <button className="cta-button">Get Started</button>
            </Link>
          </div>
          <img src="https://img.freepik.com/free-vector/online-interview-employee-employer_23-2148620898.jpg?w=826&t=st=1712327177~exp=1712327777~hmac=744553b5a742d8615df8113b54919e3e03ba7bceca0b7bc7e647c69fba920585" alt="Futuristic Hero" className="hero-image" />
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Welcome to PrepAI, your ultimate destination for AI-powered interview preparation tailored to specific companies and job roles. We understand the challenges candidates face in today's competitive job market, and we're here to empower you with the tools and knowledge you need to succeed. Whether you're targeting a specific company or aiming for a particular job role, PrepAI provides personalized preparation to help you ace your interviews.</p>
        </div>
      </section>

      <section className="features-section" id="features">

        <div className="features-content">
          <h1>Features</h1>
          <div className="feature-container">
          <div className="feature-content">
            <h2 className="feature-title">Company-based Questions</h2>
            <p className="feature-description">Prepare confidently for interviews with company-specific questions tailored to top employers. Gain insights into interview processes, practice scenarios, and receive feedback to excel in your interviews.</p>
            <Link to="/login"> 
              <button className="cta-button">Know More</button>
            </Link>
          </div>
          <img src="https://img.freepik.com/free-vector/marketing-professional-presenting-financial-chart-boss_74855-10928.jpg?w=2000" alt="Futuristic Hero" className="hero-image" />
        </div>
        <div className="feature-container">
          <img src="https://img.freepik.com/free-vector/choosing-best-candidate-concept_52683-43377.jpg?w=2000" alt="Futuristic Hero" className="hero-image" />
          <div className="feature-content">
            <h2 className="feature-title">ATS Resume Checker</h2>
            <p className="feature-description">Ensure your resume gets past Applicant Tracking Systems (ATS) with our AI-powered Resume Checker. Scan, analyze, and optimize your resume for keywords and formatting to increase your chances of landing interviews.</p>
            <Link to="/ats">
              <button className="cta-button">Know More</button>
            </Link>
          </div>
        </div>
        <div className="feature-container">
          <div className="feature-content">
            <h2 className="feature-title">Performance Report</h2>
            <p className="feature-description">Our AI analyzes your answers, providing a similarity score to gauge how closely your responses align with ideal answers.</p>
            <Link to="/login">  
              <button className="cta-button">Know More</button>
            </Link>
          </div>
          <img src="https://img.freepik.com/free-vector/office-workers-analyzing-researching-business-data_74855-4445.jpg?w=1380" alt="Futuristic Hero" className="hero-image" />
        </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-content">
        <img src={logo} alt="Futuristic Hero" className="hero-image" />
          <div className="">
          <h2>Contact Us</h2>
          <p>Email: support@prepai.com</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 PrepAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
