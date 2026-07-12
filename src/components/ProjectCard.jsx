import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const thumbnail = project.image;
  const variant = project.variant || project.layout || "standard";
  const mediaFit = project.mediaFit || "cover";
  const mediaStyle = project.mediaPosition
    ? { objectPosition: project.mediaPosition }
    : undefined;

  const cardContent = (
    <article className={`project-card card-surface project-card--${variant}`}>
      <div className="project-card__media">
        <div className="project-card__media-inner">
          {thumbnail ? (
            <img
              className={`fit-${mediaFit}`}
              src={thumbnail}
              alt={project.title}
              style={mediaStyle}
            />
          ) : (
            <div className="project-placeholder">AI · Data · Product</div>
          )}
        </div>
      </div>
      <div className="project-card__story">
        <div className="project-card__topline">
          <span className="project-card__role">{project.roleSignal}</span>
          <span className="project-card__metric">{project.impact}</span>
        </div>
        <h3>{project.title}</h3>
        <div className="project-card__rows">
          <div className="project-card__row">
            <span>Problem</span>
            <p>{project.problem}</p>
          </div>
          <div className="project-card__row">
            <span>Built</span>
            <p>{project.built}</p>
          </div>
          <div className="project-card__row">
            <span>Impact</span>
            <p>{project.impact}</p>
          </div>
        </div>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );

  if (project.path) {
    return (
      <Link to={project.path} className="project-card-link">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ProjectCard;
