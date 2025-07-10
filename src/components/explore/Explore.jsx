import './Explore.css';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className="container py-5 explore-page">
      <h2 className="text-center mb-3 fw-bold" style={{ color: "#4bb2db" }}>
        Explore Career Paths
      </h2>
      <p className="text-center text-muted mb-2">
        Choose a category to start your journey
      </p>

      {/* Smart Suggest Button */}
      <div className="text-center mb-5">
        <Link to="/suggest" className="btn btn-outline-primary px-4 py-2">
           Get Smart Career Suggestions
        </Link>
      </div>

      {/* Career Category Cards */}
      <div className="row g-4">
        {[
          { title: 'Software Developer', icon: 'fa-code', path: '/explore/developer' },
          { title: 'UI/UX Designer', icon: 'fa-pen-nib', path: '/explore/designer' },
          { title: 'Data Analyst', icon: 'fa-chart-line', path: '/explore/data-analyst' },
          { title: 'Cybersecurity Expert', icon: 'fa-shield-halved', path: '/explore/cybersecurity' },
          { title: 'AI/ML Engineer', icon: 'fa-brain', path: '/explore/ai' },
          { title: 'Cloud Architect', icon: 'fa-cloud', path: '/explore/cloud' },
        ].map((item, idx) => (
          <div className="col-md-4 col-sm-6" key={idx}>
            <Link to={item.path} className="text-decoration-none">
              <div className="card explore-card text-center shadow-sm h-100">
                <div className="card-body">
                  <i className={`fa-solid ${item.icon} fa-2x text-info mb-3`}></i>
                  <h5 className="card-title text-dark">{item.title}</h5>
                  <p className="card-text text-muted">
                    Explore roadmap and resources for {item.title}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
