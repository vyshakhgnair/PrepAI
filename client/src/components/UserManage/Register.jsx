import React, { useState } from 'react';
import './user.css';
import logo from '../../images/logo/prepai-logo.png';

const Register = () => {
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic, for now, let's just redirect to the landing page
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Name"
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Register;
