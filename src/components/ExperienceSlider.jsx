import React from "react";
import { experiences } from "../data/experience";
import "./ExperienceSlider.css";

const ExperienceSlider = () => {
  return (
    <div className="experience-list">
      {experiences.map((exp) => (
        <article key={exp.id} className="exp-card card-surface">
          <div className="exp-card-header">
            <div className="exp-dot" aria-hidden="true" />
            <span className="tag">
              {exp.company} • {exp.location}
            </span>
            <h3>{exp.role}</h3>
            <p className="exp-period">{exp.period}</p>
          </div>

          <ul className="exp-bullets">
            {exp.highlights.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>

          <div className="exp-tags">
            {exp.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ExperienceSlider;
