import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  // Use the image defined in your projects.js data
  const thumbnail = project.image;

  const handleClick = () => {
    console.log("Navigating to:", project.path);
  };

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
        {/* Prioritize badge for consistency with Bunge/OCTO, fallback to category */}
        <p className="project-badge">{project.badge || project.category}</p>

        {/* We use project.path which now matches App.jsx exactly */}
        <Link to={project.path} className="btn-view" onClick={handleClick}>
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
