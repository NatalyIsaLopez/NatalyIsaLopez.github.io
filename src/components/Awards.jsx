import React from "react";
import "./Awards.css";

const awardsData = [
  {
    icon: "fas fa-medal",
    title: "Regents Scholar",
    desc: "Highest honor at UC Berkeley, awarded to top 2% of applicants.",
  },
  {
    icon: "fas fa-trophy",
    title: "Haas EGAL Winner",
    desc: "2nd Place Team Captain for AI-powered DEI mentorship architecture.",
  },
  {
    icon: "fas fa-star",
    title: "Yardi Scholar",
    desc: "Awarded for excellence at the intersection of tech and social impact.",
  },
  {
    icon: "fas fa-globe",
    title: "UNHCR Challenge",
    desc: "Semi-finalist for proposing refugee digital education models.",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="awards">
      <div className="container">
        <h2 className="section-title centered">Honors & Recognition</h2>
        <div className="awards-grid">
          {awardsData.map((award, index) => (
            <div key={index} className="award-item">
              <i className={award.icon}></i>
              <h4>{award.title}</h4>
              <p>{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
