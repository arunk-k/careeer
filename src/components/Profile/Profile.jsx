import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="container py-5 profile-page">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm p-4 rounded-4">
            <div className="d-flex align-items-center gap-4 flex-column flex-md-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Profile"
                className="profile-img"
              />
              <div>
                <h3 style={{color:"#0890c6"}}>Arun KK</h3>
                <p className="text-muted mb-1">Email: arun@gmail.com</p>
                <p className="text-muted mb-1">Career Goal: Full Stack Developer</p>
                <p className="text-muted">Location: Kozhikode, Kerala</p>
                <button className="btn btn-outline-primary mt-2">Edit Profile</button>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="card shadow-sm p-4 rounded-4 mt-4">
            <h5 className="mb-3 fw-bold">Learning Progress</h5>
            <div className="progress" style={{ height: '20px' }}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: '65%' }}
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>
          </div>

          {/* Enrolled Careers */}
          <div className="card shadow-sm p-4 rounded-4 mt-4">
            <h5 className="mb-3 fw-bold">Your Career Paths</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">🧑‍💻 MERN Full Stack Developer</li>
              <li className="list-group-item">🎨 UI/UX Designer</li>
              <li className="list-group-item">📊 Data Analyst</li>
            </ul>
          </div>

          {/* Resume Download */}
          <div className="text-center mt-4">
            <button style={{backgroundColor:"#137ea8"}} className="btn text-light px-4">Download Resume (PDF)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
