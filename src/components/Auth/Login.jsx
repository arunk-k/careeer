import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="login-card shadow p-4 rounded-4">
        <h2 style={{color:"#0890c6"}} className="text-center mb-4">Welcome Back</h2>
        <p className="text-center text-muted mb-4">Login to your CareerWay+ account</p>

        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" required />
          </div>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/forgot" className="small text-primary">Forgot password?</Link>
          </div>

          <button id="logBtn" type="submit" className="btn text-light w-100">Login</button>
        </form>

        <p className="mt-4 text-center">
          Don’t have an account? <Link to="/register" className="text-primary">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
