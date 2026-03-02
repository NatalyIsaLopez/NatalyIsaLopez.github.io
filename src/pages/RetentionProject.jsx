import React from "react";
import { Link } from "react-router-dom";
import "./OCTOProject.css";

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
          RetentionOps • Churn Intelligence Engine
        </span>
        <h1>
          Building a Predictive Inference System for Proactive Customer
          Retention
        </h1>
      </header>

      <div className="content-wrapper">
        <section className="narrative-section">
          <h2>Project Overview</h2>
          <p>
            In the subscription economy, churn is a critical growth obstacle.
            This project involved the development of an{" "}
            <strong>end-to-end Machine Learning pipeline</strong> that
            identifies "at-risk" customers with high precision.
          </p>
          <p>
            Moving beyond static reporting, I engineered a{" "}
            <strong>live inference engine</strong> that allows stakeholders to
            simulate customer behavior and receive real-time strategic
            recommendations based on model output.
          </p>

          <div style={{ marginTop: "2rem", display: "flex", gap: "25px" }}>
            <a
              href="https://retentionopsinferenceengine.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              style={{ textDecoration: "none" }}
            >
              Launch Live App
            </a>
            <a
              href="https://github.com/NatalyIsaLopez/RetentionOps_Inference_Engine"
              target="_blank"
              rel="noopener noreferrer"
              className="back-link"
              style={{
                borderBottom: "2px solid #d2b48c",
                textDecoration: "none",
              }}
            >
              View Source Code
            </a>
          </div>
        </section>

        <div className="viz-container">
          <div className="viz-box">
            <img src="/images/RetentionOps.png" alt="Inference Engine UI" />
            <div className="viz-caption">
              Production interface: Real-time risk probability and variable
              simulation.
            </div>
          </div>
          <div className="viz-box">
            <img
              src="/images/ModelTraining.png"
              alt="SHAP Feature Importance"
            />
            <div className="viz-caption">
              Global Feature Impact: Identifying primary drivers like Contract
              Type and Tenure.
            </div>
          </div>
        </div>

        <section className="narrative-section">
          <h2>Technical Architecture & Methodology</h2>
          <h3>Modeling Strategy: Why XGBoost?</h3>
          <p>
            I selected <strong>Extreme Gradient Boosting (XGBoost)</strong> over
            traditional linear models. While Logistic Regression provides a
            baseline, it struggles with non-linear feature interactions—such as
            the compounding risk of high monthly charges combined with
            month-to-month contracts.
          </p>
          <ul className="journey-bullets" style={{ marginBottom: "2rem" }}>
            <li>
              <strong>Objective Function:</strong> binary:logistic for
              probabilistic output calibration.
            </li>
            <li>
              <strong>Regularization:</strong> Utilized L1 (Lasso) and L2
              (Ridge) within the framework to prevent overfitting.
            </li>
            <li>
              <strong>Optimization:</strong> Focused on minimizing Log-Loss to
              ensure probability scores reflected actual risk.
            </li>
          </ul>

          <h3>Data Engineering & Parity</h3>
          <p>
            To ensure the model performed in production exactly as it did during
            training, I built a custom serialization pipeline:
          </p>
          <div className="decision-grid">
            <div className="decision-card">
              <h4>Feature Mapping</h4>
              <p>
                Categorical variables were mapped into a serialized dictionary
                to maintain encoding consistency across the inference pipeline.
              </p>
            </div>
            <div className="decision-card">
              <h4>Inference Latency</h4>
              <p>
                Achieved sub-20ms response times by caching the model object
                using Streamlit’s specialized resource caching.
              </p>
            </div>
          </div>
        </section>

        <div className="viz-container">
          <div className="viz-box full-width">
            <img
              src="/images/CustomerRetentionReport.png"
              alt="SHAP Inference Report"
            />
            <div className="viz-caption">
              Local Interpretability: Analyzing specific feature contributions
              to an individual customer's risk score.
            </div>
          </div>
        </div>

        <section className="narrative-section">
          <h2>Decision Engine: Threshold Calibration</h2>
          <p>
            In a business context, the cost of a False Negative is significantly
            higher than a False Positive. I implemented a tiered risk-management
            system based on probability thresholds:
          </p>

          <div className="risk-tiers">
            <div className="tier-item tier-stable">
              <span className="tier-label" style={{ color: "#4CAF50" }}>
                Stable
              </span>
              <p>
                <strong>P &lt; 20%:</strong> Low-touch maintenance; candidates
                for premium upselling.
              </p>
            </div>
            <div className="tier-item tier-elevated">
              <span className="tier-label" style={{ color: "#FFC107" }}>
                Elevated
              </span>
              <p>
                <strong>20% ≤ P &lt; 50%:</strong> Early warning signals;
                triggers preventative service health checks.
              </p>
            </div>
            <div className="tier-item tier-critical">
              <span className="tier-label" style={{ color: "#F44336" }}>
                Critical
              </span>
              <p>
                <strong>P ≥ 50%:</strong> High-confidence churn prediction;
                triggers automated retention offers.
              </p>
            </div>
          </div>
        </section>

        <section className="narrative-section">
          <h2>Explainable AI (XAI) & Interpretability</h2>
          <p>
            A model is only useful if it is trusted. I integrated{" "}
            <strong>Dynamic Feature Impact</strong> visualizations providing
            Local Interpretability. For every simulation, the engine calculates
            which variables are pushing the probability higher or lower,
            allowing teams to understand the "why" behind the "who."
          </p>
        </section>

        <div className="results-highlight">
          <h3>Tech Stack & Key Achievements</h3>
          <div
            className="stats-summary"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "1.5rem",
            }}
          >
            <span className="stat-pill">Python 3.12</span>
            <span className="stat-pill">XGBoost / Scikit-Learn</span>
            <span className="stat-pill">Streamlit Cloud</span>
            <span className="stat-pill">Pickle Serialization</span>
          </div>
          <p style={{ marginBottom: "2rem", opacity: 0.9 }}>
            Transitioned a static Jupyter notebook into a production-ready
            application that delivers instant, actionable business insights.
          </p>
          <a
            href="https://github.com/NatalyIsaLopez/RetentionOps_Inference_Engine"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default RetentionProject;
