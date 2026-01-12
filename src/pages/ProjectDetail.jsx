import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  return (
    <div className="project-detail-page">
      <nav className="nav-minimal">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Work
        </Link>
        <div className="logo">
          NATALY<span>.</span>
        </div>
      </nav>

      <header className="project-header">
        <span className="badge">Research RA • Bunge Laboratory</span>
        <h1>
          Cognitive Performance Pipeline: Processing Behavioral Micro-Data
        </h1>
      </header>

      <main className="content-wrapper">
        <section className="narrative-section">
          <h2>The Experiment</h2>
          <p>
            At the Bunge Lab, we investigated how the brain processes
            <strong> relational matching</strong>. Participants were shown sets
            of shapes and colors and had to identify patterns. I specifically
            looked at the difference between
            <strong> first-order relations</strong> (e.g., matching shapes based
            on a single shared color) and
            <strong> second-order relations</strong> (integrating two
            relationships to find a match).
          </p>

          <p>
            The second-order tasks are significantly more taxing on cognitive
            control. My goal was to build a pipeline that could ingest raw
            trial-level data from over 100 participants and quantify the
            performance gap between these conditions.
          </p>

          <div className="viz-container">
            <div className="viz-box">
              <img
                src="/images/RT-distribution_graph.png"
                alt="RT Distribution"
              />
              <div className="viz-caption">
                RT density shift: Quantifying the latency gap.
              </div>
            </div>
            <div className="viz-box">
              <img src="/images/Accuracybycondition_graph.png" alt="Accuracy" />
              <div className="viz-caption">
                Success rates for 1st vs 2nd-order matching.
              </div>
            </div>
          </div>
        </section>

        <section className="narrative-section">
          <h2>My Decision Process</h2>
          <p>
            Behavioral data is inherently noisy. I approached the engineering
            challenges with a focus on statistical integrity and
            reproducibility:
          </p>

          <div className="decision-grid">
            <div className="decision-card">
              <h4>Handling Outliers</h4>
              <p>
                Utilized within-participant winsorization rather than simple
                exclusion to reduce skew without sacrificing accuracy data.
              </p>
            </div>
            <div className="decision-card">
              <h4>Within-Subject Normalization</h4>
              <p>
                Applied z-scoring to isolate how much each specific participant
                slowed down as cognitive demand scaled.
              </p>
            </div>
            <div className="decision-card">
              <h4>Data Ingestion Strategy</h4>
              <p>
                Automated the concatenation of hundreds of PsychoPy CSV logs via
                Python for a unified, tidy dataset.
              </p>
            </div>
            <div className="decision-card">
              <h4>Statistical Validation</h4>
              <p>
                Performed log-transformations for rigorous paired t-tests,
                ensuring findings were mathematically sound.
              </p>
            </div>
          </div>
        </section>

        <div className="viz-container">
          <div className="viz-box full-width">
            <img src="/images/RT-patterns_graph.png" alt="Trajectories" />
            <div className="viz-caption">
              Participant trajectories: The universal upward slope represents
              the 0.6s average increase in response time.
            </div>
          </div>
        </div>

        <section className="narrative-section">
          <h2>The Verdict</h2>
          <p>
            The second-order condition required significantly more processing
            time—
            <strong>roughly 0.6 seconds longer</strong> on average.
          </p>
          <p>
            Using a paired t-test, I found a significant difference in Mean RT
            (t = -13.25, p &lt; 0.0001) and Accuracy (p = 0.0005), validating
            the measurable drop in both speed and success.
          </p>
        </section>

        <section className="results-highlight">
          <h3>Reproducible Research Workflow</h3>
          <div className="stats-summary">
            <span className="stat-pill">RT t = -13.25</span>
            <span className="stat-pill">RT p &lt; 0.0001</span>
            <span className="stat-pill">Accuracy p = 0.0005</span>
          </div>
          <a
            href="https://github.com/natalylopez"
            className="github-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i> Examine My Code on GitHub
          </a>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
