import React from "react";
import { skillCategories } from "../data/skills";
import "./SkillsBento.css";

const SkillsBento = () => {
  return (
    <section id="skills" className="container skills-section">
      <h2 className="section-title">Technical & Strategic Stack</h2>
      <div className="skills-bento">
        {skillCategories.map((category, index) => (
          <div key={index} className={`bento-item ${category.className}`}>
            <h3>
              <i className={category.icon} style={{ marginRight: "10px" }}></i>
              {category.title}
            </h3>
            <div className="pills">
              {category.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsBento;
