import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";
import "./Home.css";

const Home = () => {
  const techStack = {
    languages: ["Python", "SQL", "C++", "Java", "JavaScript", "HTML5/CSS3"],
    frameworks: ["React.js", "React Native", "NumPy", "pandas"],
    ai_data: [
      "Machine Learning",
      "NLP",
      "Regression Analysis",
      "Data Visualization",
      "Algorithm Design",
    ],
  };

  const journey = [
    {
      date: "January 2025 — Present",
      role: "UI/UX Engineer",
      org: "ASUC OCTO",
      bullets: [
        "Collaborated with cross-functional product teams to deliver user-centered web experiences for 20,000+ UC Berkeley students.",
        "Developed responsive front-end features using React.js and JavaScript, converting Figma wireframes into production-ready interfaces.",
        "Integrated high-quality web interfaces with Git-based workflows to improve overall platform accessibility.",
      ],
    },
    {
      date: "November 2025",
      role: "Harvard WeCode Technology Fellow",
      org: "Harvard WECode",
      bullets: [
        "Selected as a Technology Fellow for the largest student-led Women in Computer Science conference in the world.",
        "Engaged with global tech leaders to promote gender diversity and inclusion within the software engineering industries.",
        "Collaborated on technical workshops and initiatives aimed at bridging the gender gap in emerging technology fields.",
      ],
    },
    {
      date: "May 2025 — August 2025",
      role: "Data & Healthcare Market Research Intern",
      org: "Datack Inc.",
      bullets: [
        "Conducted market research on 30+ global health and cognitive science startups, mapping industry trends.",
        "Developed a data-driven startup evaluation framework combining quantitative metrics for strategic decisions.",
        "Delivered 10 technical presentations to international teams, translating complex research into actionable insights.",
      ],
    },
    {
      date: "January 2025 — Present",
      role: "Research Assistant",
      org: "Building Blocks of Cognition Laboratory",
      bullets: [
        "Led the design of behavioral and neuroimaging experiments (fMRI/eye tracking) for 100+ participants.",
        "Applied statistical analysis and machine learning in Python (pandas, NumPy) to process complex behavioral datasets.",
        "Built regression models to extract actionable cognitive insights to advance understanding of reasoning.",
      ],
    },
    {
      date: "October 2025",
      role: "Team Captain (2nd Place)",
      org: "Haas EGAL X WIB D.E.I Case Competition",
      bullets: [
        "Architected an AI-powered reverse mentorship platform leveraging NLP to improve generational diversity.",
        "Designed matching algorithms optimizing mentor-mentee pairing based on skills, interests, and learning goals.",
        "Increased engagement metrics by 35% through optimized algorithmic pairing and professional development.",
      ],
    },
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* --- Professional Journey --- */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Professional Journey</h2>
            <p className="scroll-hint">Scroll horizontally to explore →</p>
          </div>
        </div>

        <div className="journey-slider-container">
          <div className="journey-slider">
            {journey.map((item, index) => (
              <div className="journey-card" key={index}>
                <span className="journey-date">{item.date}</span>
                <h3 className="journey-role">{item.role}</h3>
                <p className="journey-org">{item.org}</p>
                <ul className="journey-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Technical Stack Section --- */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h4>Languages</h4>
              <div className="pill-container">
                {techStack.languages.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h4>Frameworks & Libraries</h4>
              <div className="pill-container">
                {techStack.frameworks.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h4>AI & Data Science</h4>
              <div className="pill-container">
                {techStack.ai_data.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Selected Works --- */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Selected Works</h2>
            <p className="section-description">
              Research pipelines, data visualizations, and product experiments.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Connect Section --- */}
      <section className="connect-section" id="contact">
        <div className="container">
          <div className="connect-card">
            <div className="connect-content">
              <h2 className="connect-title">
                Let’s Connect<span>.</span>
              </h2>
              <p className="connect-subtitle">
                Currently seeking opportunities at the intersection of Data
                Science and UI/UX.
              </p>
            </div>

            <div className="connect-actions">
              <a
                href="mailto:nataly.lopez@berkeley.edu"
                className="email-button"
              >
                nataly_lopez@berkeley.edu
              </a>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/natalyisabellopez"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <span className="separator">/</span>
                <a
                  href="https://github.com/NatalyIsaLopez"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
