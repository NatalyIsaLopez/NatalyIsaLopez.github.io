import React from "react";
import { Link } from "react-router-dom";
import "./OCTOProject.css";

const OCTOProject = () => {
  return (
    <div className="project-detail-page">
      {/* Minimal Navigation */}
      <nav className="nav-minimal">
        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>
        <span className="back-link" style={{ opacity: 0.5 }}>
          Case Study 01
        </span>
      </nav>

      {/* Header Section */}
      <header className="project-header">
        <span className="back-link" style={{ color: "#d2b48c" }}>
          ASUC OCTO • UI/UX Engineering
        </span>
        <h1>Berkeley Mobile: The All-in-One Student Hub</h1>
      </header>

      <div className="content-wrapper">
        {/* Intro Narrative */}
        <section className="narrative-section">
          <h2>The Objective</h2>
          <p>
            UC Berkeley students navigate a fragmented digital
            ecosystem—separate platforms for dining, fitness, transit, and
            academic alerts. In collaboration with cross-functional product
            teams, I co-developed the initial{" "}
            <strong>low-fidelity wireframes and frontend architecture</strong>{" "}
            for Berkeley Mobile.
          </p>
          <p>
            Our mission was to centralize the "Cal experience" into a unified
            interface, streamlining real-time data for RSF gym capacity, campus
            news, and mobile student credentials—all within one seamless
            interface.
          </p>
        </section>

        {/* Visuals Grid: Logic and Low-Fi */}
        <div className="viz-container">
          <div className="viz-box">
            <img src="/images/berkeley-mobile-logic.png" alt="System Logic" />
            <div className="viz-caption">
              System architecture and API integration logic
            </div>
          </div>
          <div className="viz-box">
            <img
              src="/images/berkeley-mobile-lowfi.png"
              alt="Low Fidelity Wireframes"
            />
            <div className="viz-caption">
              Initial wireframe iterations for core navigation
            </div>
          </div>
        </div>

        {/* Implementation Narrative */}
        <section className="narrative-section">
          <h2>Development & Systems Thinking</h2>
          <p>
            As the project transitioned into implementation, I spearheaded the{" "}
            <strong>frontend integration</strong>, adapting the Berkeley Mobile
            framework into a responsive web-based interface. This involved
            building modular layouts and optimizing data rendering from campus
            APIs.
          </p>

          <div className="decision-grid">
            <div className="decision-card">
              <h4>UX Research</h4>
              <p>
                Conducted user flow analyses to identify high-priority features
                for daily student routines, including gym usage and transit
                tracking.
              </p>
            </div>
            <div className="decision-card">
              <h4>Frontend Architecture</h4>
              <p>
                Developed a modular React-based architecture to handle dynamic,
                high-traffic content during peak campus hours.
              </p>
            </div>
          </div>
        </section>

        <section className="narrative-section">
          <p>
            A critical part of this role involved collaborating with backend
            developers to standardize <strong>JSON data schemas</strong>. By
            unifying endpoints, we ensured cross-platform consistency between
            the web app and native mobile client.
          </p>
        </section>

        {/* Results Callout Box */}
        <div className="results-highlight">
          <h3>The Verdict</h3>
          <div className="stats-summary">
            <span className="stat-pill">20,000+ Potential Users</span>
            <span className="stat-pill">React.js Architecture</span>
            <span className="stat-pill">Unified API Logic</span>
          </div>
          <p style={{ marginBottom: "2rem", opacity: 0.9 }}>
            Berkeley Mobile bridges the gap between design and development,
            transforming how the Berkeley community interacts with campus
            systems.
          </p>
          <a
            href="https://www.figma.com/design/Jf8NgIpMqMlI9qlorbzhVG/Berkeley-Mobile-Website-Low-Fi-Protypes--Copy-?node-id=0-1&t=Fn3qrjqxoGUnkBRo-1"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            View Figma Docs
          </a>
        </div>
      </div>
    </div>
  );
};

export default OCTOProject;
