import React, { useState } from 'react';
import './Suggest.css';
import { Link, useNavigate } from 'react-router-dom';

const interestsList = [
  { label: "Coding", value: "coding" },
  { label: "Designing", value: "design" },
  { label: "Problem Solving", value: "problem" },
  { label: "Cybersecurity", value: "cyber" },
  { label: "Artificial Intelligence", value: "ai" },
  { label: "Cloud Computing", value: "cloud" },
  { label: "Business & Analytics", value: "data" }
];

const Suggest = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const handleToggle = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can pass selected to backend or store
    navigate('/explore'); // after suggestion, go to explore
  };

  return (
    <div className="suggest-page container py-5">
      <h2 className="text-center fw-bold mb-3" style={{ color: "#4bb2db" }}>Smart Career Suggestions</h2>
      <p className="text-center text-muted mb-5">Choose your interests and get recommended career paths</p>

      <form onSubmit={handleSubmit}>
        <div className="row g-4 justify-content-center">
          {interestsList.map((item, idx) => (
            <div className="col-md-4 col-sm-6" key={idx}>
              <div
                className={`interest-card shadow-sm ${selected.includes(item.value) ? 'selected' : ''}`}
                onClick={() => handleToggle(item.value)}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5"><Link to="/explore" className="btn btn-outline-primary px-4 py-2">Suggest Careers</Link>
        </div>
      </form>
    </div>
  );
};

export default Suggest;
