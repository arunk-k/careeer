import './Developer.css';

const Developer = () => {
  const roadmapSteps = [
    {
      title: "Step 1: Learn HTML, CSS, JS",
      description: "Understand the basics of web development using HTML, CSS, and JavaScript.",
      video: "https://www.youtube.com/embed/UB1O30fR-EE"
    },
    {
      title: "Step 2: Master Frontend Frameworks",
      description: "Learn popular frontend frameworks like React.js to build dynamic UIs.",
      video: "https://www.youtube.com/embed/dCLhUialKPQ?si=DtHz0v8jwQvz5DnY"
    },
    {
      title: "Step 3: Backend Fundamentals",
      description: "Get hands-on with Node.js, Express, and REST APIs.",
      video: "https://www.youtube.com/embed/Oe421EPjeBE"
    },
    {
      title: "Step 4: Databases & Hosting",
      description: "Understand MongoDB and how to deploy applications.",
      video: "https://www.youtube.com/embed/I7ljHD0-ZwM"
    },
  ];

  return (
    <div className="container py-5 developer-roadmap">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#0890c6" }}>Software Developer Roadmap</h2>
      <p className="text-center text-muted mb-5">Follow this step-by-step guide to become a professional developer</p>

      <div className="row g-4">
        {roadmapSteps.map((step, index) => (
          <div className="col-md-6" key={index}>
            <div className="card roadmap-card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">{step.title}</h5>
                <p className="card-text text-muted">{step.description}</p>
                <div className="ratio ratio-16x9 mt-3">
                  <iframe
                    src={step.video}
                    title={`Step ${index + 1} Video`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developer;
