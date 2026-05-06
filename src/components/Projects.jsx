import { useState } from "react";
import './Projects.css'

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openProject = (project) => {
      setSelectedProject(project);
    };

    const closeModal = () => {
      setSelectedProject(null);
    };
  
  return (
    <section className="projects" id="projects">
      

      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>POS System (Excel-Based)</h3>
          <p>
            Inventory and sales system built using Python with Excel integration for real-world business workflow.
          </p>
          <div className="project-tags">
            <span>Python</span>
            <span>Pandas</span>
            <span>Excel API</span>
          </div>
          <button
            onClick={() =>
              openProject({
                title: "POS System (Excel-Based)",
                details: {
                  summary: "Built a POS system using Python",
                  highlights: [
                    "Used Pandas for data processing",
                    "Connected Excel for reporting",
                    "Improved inventory tracking accuracy"
                  ]
                }
              })
            }
          >
          Learn More
          </button>
        </div>

        <div className="project-card">
          <h3>Password Manager</h3>
          <p>
            Secure local application using hashing and AES encryption to protect user data.
          </p>
          <div className="project-tags">
            <span>Python</span>
            <span>Cryptography</span>
            <span>Security</span>
          </div>
          <button
            onClick={() =>
              openProject({
                title: "Password Manager",
                details: {
                  summary: "Built a Python desktop application with custom GUI for credential storage",
                  highlights: [
                    "Implemented AES encryption and hashing for secure local JSON storage",
                    "Developed USB hardware authentication layer restricting unauthorized access",
                    "Improved inventory tracking accuracy"
                  ]
                }
              })
            }
          >
          Learn More
          </button>
        </div>

        <div className="project-card">
          <h3>Expense Tracker App</h3>
          <p>
            Full-stack application to track income and expenses with data visualization and persistent storage.
          </p>
          <div className="project-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
          <button
    
          >
          Learn More
          </button>
        </div>

        <div className="project-card">
          <h3>Snake Game </h3>
          <p>
            Reinforcement learning experiment where an AI learns to play Snake using Python.
          </p>
          <div className="project-tags">
            <span>Python</span>
            <span>AI</span>
            <span>Machine Learning</span>
          </div>
          <button
           
          >
          Learn More
          </button>
        </div>

      </div>

            {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>

            <h2>{selectedProject.title}</h2>

            <p className="modal-summary">
              {selectedProject.details.summary}
            </p>

            <ul className="modal-details">
              {selectedProject.details.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button onClick={closeModal}>
              Close
            </button>

          </div>
        </div>
      )}


    </section>
  )
}

export default Projects