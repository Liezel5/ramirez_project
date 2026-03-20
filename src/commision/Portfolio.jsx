import React from 'react';
import './style.css'; // Importing the separate CSS file

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <h1>LR Design</h1>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#interests">Interests & Goals</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#reflection">Reflection</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <section id="about" className="card-section">
          <h2>About Me</h2>
          <br />
          <img 
            src="image.png" 
            alt="Liezel Ramires" 
            className="profile-img" 
          />
          <p>
            <strong>Hi, I'm Liezel Ramires.</strong> An aspiring UI designer dedicated to creating intuitive and visually compelling digital experiences. I focus on blending aesthetics with functional usability to solve user problems effectively.
          </p>
        </section>

        <section id="interests" className="card-section">
          <h2>Interests & Goals</h2>
          <p><strong>Biggest Accomplishment:</strong> Successfully completing my design capstone with high commendations for user interface clarity.</p>
          <p><strong>Area of Interest:</strong> Web and Mobile Design, with a growing curiosity in how AI can enhance User Experience (UX).</p>
        </section>

        <section id="skills" className="card-section">
          <h2>Skills</h2>
          <div className="grid-container">
            <div className="skill-group">
              <h3>Programming</h3>
              <ul>
                <li>HTML5 / CSS3</li>
                <li>JavaScript (Basic)</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3>Tools & Frameworks</h3>
              <ul>
                <li>Figma / Adobe XD</li>
                <li>React.js (Basics)</li>
                <li>Bootstrap / Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="card-section">
          <h2>Projects</h2>
          <div className="project-card">
            <h3>E-Commerce Interface Redesign</h3>
            <p>Designed a mobile-first shopping experience focused on reducing checkout friction.</p>
            <p><strong>Role:</strong> Lead UI/UX Designer</p>
            <div className="tag-container">
              <span className="tag">Figma</span>
              <span className="tag">HTML/CSS</span>
            </div>
          </div>
          
          <div className="project-card">
            <h3>Personal Portfolio Site</h3>
            <p>Developing a clean, responsive site to showcase my design journey.</p>
            <p><strong>Role:</strong> Front-end Developer</p>
            <div className="tag-container">
              <span className="tag">React.js</span>
              <span className="tag">Vite</span>
            </div>
          </div>
        </section>

        <section id="reflection" className="card-section">
          <h2>Reflection</h2>
          <h3>What are the concepts you’ve learned in Full-stack & React.js?</h3>
          <p>I have gained an understanding of component-based architecture, managing state within applications, and how the front-end communicates with back-end services to create dynamic, data-driven sites.</p>
          
          <h3>What concepts do you still want to learn further?</h3>
          <p>I am eager to dive deeper into advanced React hooks, API integration, and mastering CSS-in-JS libraries to make my UI designs even more interactive and scalable.</p>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;