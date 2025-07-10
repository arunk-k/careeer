import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Using same style as login

const Register = () => {
  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="login-card shadow p-4 rounded-4">
        <h2 style={{ color: "#0890c6" }} className="text-center mb-3">Join CareerWay+</h2>
        <p className="text-center text-muted mb-4">Create your account to get started</p>

        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Create a password" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Re-enter your password" required />
          </div>

          <button type="submit" id="logBtn" className="btn text-light w-100">Register</button>
        </form>

        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-primary">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
