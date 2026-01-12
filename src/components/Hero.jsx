import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text-side">
          <span className="hero-eyebrow">Nataly Lopez</span>
          <h1 className="hero-headline">
            Building Tech with Purpose<span>.</span>
          </h1>
          <p className="hero-subheadline">
            <span className="highlight">Regents’ and Chancellor’s Scholar</span>{" "}
            at UC Berkeley, creating data-driven products that blend innovation,
            human insight, and public impact to solve global challenges.
          </p>

          <div className="hero-cta-group">
            {/* The direct path to your public folder file */}
            <a
              href="/Nataly_Lopez_Resume.pdf"
              className="btn-primary"
              download="Nataly_Lopez_Resume.pdf"
            >
              <i className="fas fa-file-download"></i> Download Resume
            </a>

            <a href="#projects" className="btn-outline">
              View My Work
            </a>
          </div>
        </div>

        <div className="hero-image-side">
          <div className="portrait-wrapper">
            <img
              src="/images/Nataly_Lopez.JPG"
              alt="Nataly Lopez portrait"
              className="portrait-img"
            />
            <div className="portrait-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
