// App.js
import React from 'react';
import './Landing.css';
import logo from '../../images/logo/prepai-logo.png';

function Landing() {
  return (
    <div className="App">

      <section className="main-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h2 className="hero-title">Experience the Future Today</h2>
            <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="cta-button">Get Started</button>
          </div>
          <img src="https://img.freepik.com/free-vector/online-interview-employee-employer_23-2148620898.jpg?w=826&t=st=1712327177~exp=1712327777~hmac=744553b5a742d8615df8113b54919e3e03ba7bceca0b7bc7e647c69fba920585" alt="Futuristic Hero" className="hero-image" />
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo vitae ipsum malesuada condimentum.</p>
        </div>
      </section>

      <section className="features-section" id="features">

        <div className="features-content">
          <h2>Features</h2>
          <div className="feature-container">
          <div className="feature-content">
            <h2 className="feature-title">Experience the Future Today</h2>
            <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="cta-button">Get Started</button>
          </div>
          <img src="https://img.freepik.com/free-vector/online-interview-employee-employer_23-2148620898.jpg?w=826&t=st=1712327177~exp=1712327777~hmac=744553b5a742d8615df8113b54919e3e03ba7bceca0b7bc7e647c69fba920585" alt="Futuristic Hero" className="hero-image" />
        </div>
        <div className="feature-container">
          <img src="https://img.freepik.com/free-vector/online-interview-employee-employer_23-2148620898.jpg?w=826&t=st=1712327177~exp=1712327777~hmac=744553b5a742d8615df8113b54919e3e03ba7bceca0b7bc7e647c69fba920585" alt="Futuristic Hero" className="hero-image" />
          <div className="feature-content">
            <h2 className="feature-title">Experience the Future Today</h2>
            <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="cta-button">Get Started</button>
          </div>
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
