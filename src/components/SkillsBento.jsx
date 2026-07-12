import React from "react";
import { skillCategories } from "../data/skills";
import "./SkillsBento.css";

const SkillsBento = () => {
  return (
    <div className="skills-grid">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className={`skill-card card-surface ${category.className}`}
        >
          <div className="skill-card-title">
            <span className="skill-icon" aria-hidden="true">
              {category.icon}
            </span>
            <h3>{category.title}</h3>
          </div>
          <div className="skill-pills">
            {category.skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsBento;
