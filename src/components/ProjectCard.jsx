import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  // Use the image defined in your projects.js data
  const thumbnail = project.image;

  return (
    <div className="project-card">
      <div className="project-img-box">
        {thumbnail ? (
          <img src={thumbnail} alt={project.title} />
        ) : (
          <div className="placeholder-icon">
            <i className="fas fa-microchip"></i>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.category || project.badge}</p>
        {/* We use project.path directly to ensure it matches App.jsx */}
        <Link to={project.path} className="btn-view">
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
