import React from "react";
import { experiences } from "../data/experience";
import "./ExperienceSlider.css";

const ExperienceSlider = () => {
  // Navigation helper for scrolling
  const scroll = (direction) => {
    const slider = document.getElementById("exp-slider");
    const scrollAmount = 450;
    if (direction === "left") {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {/* Navigation Arrows */}
        <button className="nav-arrow left-arrow" onClick={() => scroll("left")}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="experience-slider" id="exp-slider">
          {experiences.map((exp) => (
            <div key={exp.id} className="exp-card">
              <div className="exp-card-header">
                <span className="tag">
                  {exp.company} • {exp.location}
                </span>
                <h3>{exp.role}</h3>
                <p className="exp-period">{exp.period}</p>
              </div>

              <ul className="exp-bullets">
                {exp.description.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="nav-arrow right-arrow"
          onClick={() => scroll("right")}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ExperienceSlider;
