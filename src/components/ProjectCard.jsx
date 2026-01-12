import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  // We use the first image from the visuals array as the thumbnail
  const thumbnail =
    project.visuals && project.visuals[0] ? project.visuals[0].url : null;

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
        <p>{project.badge}</p> {/* Shows the "Bunge Lab" badge */}
        <Link to={`/project/${project.id}`} className="btn-view">
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
