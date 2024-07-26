import React from 'react';
import './Signup.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Signup</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required />
          <FaUser className='icon' size={20} />
        </div>
        <div className="input-box">
          <input type="email" placeholder='Email' required />
          <FaEnvelope className='icon' size={20} />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className='icon' size={20} />
        </div>
        <button type="submit">Signup</button>
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Signup;