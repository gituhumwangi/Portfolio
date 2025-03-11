import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "DineFinder",
    description: "A website that helps users find amazing restaurants.",
    image: "https://via.placeholder.com/400", // Replace with an actual screenshot
    demo: "https://gituhumwangi.github.io/Qula-website/",
    code: "https://github.com/gituhumwangi/Qula-website"
  },
  {
    title: "MoodTracker",
    description: "A mental health companion app.",
    image: "https://via.placeholder.com/400",
    demo: "#",
    code: "#"
  },
  {
    title: "Pennywise",
    description: "A budgeting app for smart savings.",
    image: "https://via.placeholder.com/400",
    demo: "#",
    code: "#"
  }
];

const Projects = () => {
  return (
    <section id="myprojects">
      <h2 className="projectTitle">My Projects</h2>

      <div className="projectGrid">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <img src={project.image} alt={project.title} className="projectImage" />
            <h3 className="projectName">{project.title}</h3>
            <p className="projectDesc">{project.description}</p>
            <div className="projectLinks">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demoBtn">Live Demo</a>
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="codeBtn">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
