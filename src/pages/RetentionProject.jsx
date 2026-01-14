import React from "react";
import { Link } from "react-router-dom";
import "./OCTOProject.css"; // Reusing the same CSS for visual consistency

const RetentionProject = () => {
  return (
    <div className="project-detail-page">
      <nav className="nav-minimal">
        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>
        <span className="back-link" style={{ opacity: 0.5 }}>
          Case Study 02
        </span>
      </nav>

      <header className="project-header">
        <span className="back-link" style={{ color: "#d2b48c" }}>
          Machine Learning • Predictive Analytics
        </span>
        <h1>RetentionOps: Churn Intelligence Engine</h1>
      </header>

      <div className="content-wrapper">
        <section className="narrative-section">
          <h2>Project Overview</h2>
          <p>
            In the subscription economy, churn is the ultimate growth killer. I
            engineered an end-to-end <strong>Machine Learning pipeline</strong>{" "}
            that identifies "at-risk" customers with high precision.
          </p>
          <p>
            Moving beyond static reporting, this project features a{" "}
            <strong>live inference engine</strong> that allows stakeholders to
            simulate customer behavior and receive real-time strategic
            recommendations based on model output.
          </p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "20px" }}>
            <a
              href="https://your-streamlit-link.com"
              target="_blank"
              className="back-link"
              style={{ borderBottom: "2px solid #d2b48c" }}
            >
              View Live App
            </a>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              className="back-link"
              style={{ borderBottom: "2px solid #d2b48c" }}
            >
              Source Code
            </a>
          </div>
        </section>

        {/* Visual Comparison Grid */}
        <div className="viz-container">
          <div className="viz-box">
            <div
              style={{
                padding: "40px",
                background: "#f0f0f0",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              [Image: XGBoost Feature Importance Plot]
            </div>
            <div className="viz-caption">
              Global feature importance: Contract type and Tenure as primary
              indicators.
            </div>
          </div>
          <div className="viz-box">
            <div
              style={{
                padding: "40px",
                background: "#f0f0f0",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              [Image: Inference Engine UI]
            </div>
            <div className="viz-caption">
              Real-time simulation interface built with Streamlit.
            </div>
          </div>
        </div>

        <section className="narrative-section">
          <h2>Technical Architecture</h2>
          <p>
            I selected <strong>XGBoost</strong> for its ability to handle
            non-linear feature interactions—like the compounding risk of high
            monthly charges combined with month-to-month contracts.
          </p>

          <div className="decision-grid">
            <div className="decision-card">
              <h4>Optimization</h4>
              <p>
                Minimized Log-Loss using binary:logistic objective functions to
                ensure probabilistic outputs were reliable reflections of risk.
              </p>
            </div>
            <div className="decision-card">
              <h4>Latency</h4>
              <p>
                Achieved sub-20ms response times by caching the model object
                using Streamlit’s @st.cache_resource for instant inference.
              </p>
            </div>
          </div>
        </section>

        <section className="narrative-section">
          <h2>Decision Logic & XAI</h2>
          <p>
            A model is only useful if it is trusted. I integrated{" "}
            <strong>Explainable AI (XAI)</strong> through dynamic feature impact
            visualizations. For every simulation, the engine calculates which
            variables are pushing the probability higher or lower, allowing
            teams to understand the "Why" behind the "Who."
          </p>
        </section>

        {/* Results Callout Box */}
        <div className="results-highlight">
          <h3>Key Achievements</h3>
          <div className="stats-summary">
            <span className="stat-pill">XGBoost & Scikit-Learn</span>
            <span className="stat-pill">Sub-20ms Latency</span>
            <span className="stat-pill">Explainable AI (XAI)</span>
          </div>
          <p style={{ marginBottom: "2rem", opacity: 0.9 }}>
            Transitioned a static notebook into a production-ready application
            with a reactive UI and strategic recommendation logic.
          </p>
          <a
            href="https://github.com/NatalyIsaLopez"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            View Python Implementation
          </a>
        </div>
      </div>
    </div>
  );
};

export default RetentionProject;
