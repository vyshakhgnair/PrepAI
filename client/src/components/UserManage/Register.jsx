import React, { useState } from 'react';
import './user.css';
import axios from 'axios';
import logo from '../../images/logo/prepai-logo.png';

const Register = () => {
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uname, // Ensure this matches the expected field name in your backend
          email,
          password,
          phone,
        })
      });
      const data = await response.json();
      if (data.user) {
        // Registration successful, redirect to landing page or show a success message
      } else {
        // Show an error message
      }
    } catch (error) {
      // Handle error
    }
  };
  
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username" // Changed placeholder to match expected field name
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email-id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Register</button> {/* Removed onClick event */}
      </form>
    </div>
  );
};

export default Register;
