import React, { useState } from 'react';
import './user.css';
import logo from '../../images/logo/prepai-logo.png';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
        })
      });
      const data = await response.json();
      console.log(data.user.email);
      if (email === data.user.email && password === data.user.password) {
        // Login successful, redirect to home page or show a success message
        window.location.href = '/dashboard';
      } else {
        // Show an error message
        alert('Login failed. Please check your email and password.');
      }
    } catch (error) {
      // Handle error
      console.error('An error occurred:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email-id"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
