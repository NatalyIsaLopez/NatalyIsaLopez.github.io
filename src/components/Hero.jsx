import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container fade-up">
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="hero-kicker">
            Berkeley Cognitive Science + Data Science
          </span>
          <h1>Building AI and data products for human decision-making.</h1>
          <p>
            I work across product, machine learning, and strategy, translating
            ambiguous human problems into intelligent systems, from edge AI
            workflows to enterprise risk platforms and predictive analytics
            tools.
          </p>
          <p className="hero-role-line">
            AI Product · Machine Learning · Data Systems · Responsible Tech
          </p>
          <div className="hero-actions">
            <a href="#work" className="hero-btn">
              View Work
            </a>
            <a
              href="/Nataly_Lopez_Resume.pdf"
              className="hero-btn secondary"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/natalyisabellopez"
              className="hero-btn secondary"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Editorial portrait composition"
        >
          <div className="portrait-card">
            <div className="portrait-frame" aria-hidden="true" />
            <div className="portrait-photo-wrap">
              <img src="/images/Nataly_Lopez.JPG" alt="Nataly Lopez portrait" />
            </div>
            <div className="portrait-chips">
              <span>Berkeley</span>
              <span>AI Product</span>
              <span>ML Systems</span>
              <span>Responsible Tech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
