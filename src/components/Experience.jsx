import './Experience.css'
import { useEffect } from "react";  

function Experience() {

    useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="experience" id="experience">

      <h2 className="section-title">Experience</h2>

    {/* Timeline */}
    <div className="timeline">

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>Google Data Analytics Professional Certificate</h3>
          <span>May 2026</span>
          <p>
            Covering the end-to-end data analysis process, including data cleaning, problem-solving and visualization.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>DeepLearning.AI Data Analytics Professional Certificate</h3>
          <span>March 2026</span>
          <p>
            Currently specialized in statistical modeling, data visualization, and translating datasets into business insights.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>Web Developer Internship - Xorvid Media</h3>
          <span>May 2025 - January 2026</span>
          <p>
            Developed front-end components and optimized site responsiveness.
          </p>
          <p>
            Collaborated on UI improvements and managed deployment and QA testing.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>IBM JavaScript Backend Developer Certificate</h3>
          <span>October 2025</span>
          <p>
            Validated skills in server-side logic, API development, and backend architecture.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>Amazon Junior Software Developer with GenAI Certificate</h3>
          <span>July 2025</span>
          <p>
            Gained expertise in leveraging Generative AI for software development efficiency and logic.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>B.S. in Computer Science - UT Rio Grande Valley</h3>
          <span>August 2020 - December 2024</span>
          <p>
            Focused on algorithms, data structures, and software engineering principles.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>Computer Science Tutor - UT Rio Grande Valley</h3>
          <span>January 2022 - December 2024</span>
          <p>
            Mentored 50+ students in coding best practices and efficient programming logic.
          </p>
          <p>
            Assisted faculty with assignment reviews and technical exam preparation.
          </p>
        </div>
      </div>

    </div>
      

      <div className="skills">

        <h2 className="section-title">Skills</h2>


        <div className="skills-category">
          <h3>Data Analysis & Visualization</h3>
          <div className="tags">
            <span>Python</span>
            <span>Pandas</span>
            <span>Numpy</span>
            <span>SQL</span>
            <span>Data Cleaning</span>
            <span>Jupyter</span>
            <span>Tableau</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
          </div>
        </div>


        <div className="skills-category">
          <h3>Web Development</h3>
          <div className="tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>REST APIs</span>
            <span>JavaScript</span>
          </div>
        </div>
        

        <div className="skills-category">
          <h3>Databases</h3>
          <div className="tags">
            <span>MySQL</span>
            <span>SQLite</span>
            <span>MongoDB</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience