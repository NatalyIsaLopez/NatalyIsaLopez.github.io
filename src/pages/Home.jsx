import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";
import ExperienceSlider from "../components/ExperienceSlider";
import SkillsBento from "../components/SkillsBento";
import "./Home.css";

const FlowerOrnamentSvg = () => (
  <svg viewBox="0 0 420 980" preserveAspectRatio="xMidYMid meet">
    <path
      className="flower-line flower-stem"
      d="M188 312 C156 430 138 526 168 618 C202 722 166 804 128 932"
    />
    <path
      className="flower-line flower-stem-soft"
      d="M205 322 C234 428 248 542 220 652 C198 742 216 820 262 940"
    />
    <path
      className="flower-line"
      d="M194 300 C135 266 108 212 134 174 C178 192 204 238 194 300Z"
    />
    <path
      className="flower-line"
      d="M204 293 C184 222 204 152 252 120 C276 178 260 246 204 293Z"
    />
    <path
      className="flower-line"
      d="M212 296 C266 230 330 214 388 246 C342 302 276 320 212 296Z"
    />
    <path
      className="flower-line"
      d="M198 304 C146 338 92 326 58 292 C108 258 160 264 198 304Z"
    />
    <path
      className="flower-line"
      d="M204 306 C236 352 236 404 200 454 C174 402 178 350 204 306Z"
    />
    <path
      className="flower-line flower-detail"
      d="M202 304 C214 250 228 188 252 120"
    />
    <path
      className="flower-line flower-detail"
      d="M204 304 C250 278 314 254 388 246"
    />
    <path
      className="flower-line flower-detail"
      d="M198 304 C158 290 108 288 58 292"
    />
    <path
      className="flower-line flower-detail"
      d="M196 302 C168 254 148 210 134 174"
    />
    <circle className="flower-dot" cx="202" cy="303" r="2" />
    <circle className="flower-dot" cx="194" cy="296" r="1.5" />
    <circle className="flower-dot" cx="211" cy="295" r="1.5" />
    <circle className="flower-dot" cx="206" cy="312" r="1.4" />
  </svg>
);

const Home = () => {
  const featuredProject = projects.find(
    (project) => project.variant === "featured",
  );

  const dossierProject = projects.find(
    (project) => project.variant === "dossier",
  );

  const standardProjects = projects.filter(
    (project) => project.variant === "standard",
  );

  const operatingModel = [
    {
      label: "Users",
      copy: "Ambiguous human needs, institutional constraints, and decision pressure.",
    },
    {
      label: "Workflows",
      copy: "Product judgment that scopes the right problem and the right intervention.",
    },
    {
      label: "Models",
      copy: "Technical depth that makes the system believable and usable.",
    },
    {
      label: "Infrastructure",
      copy: "Reliable implementation, data systems, and execution discipline.",
    },
    {
      label: "Institutions",
      copy: "Responsible decision layers that account for trust, risk, and public impact.",
    },
  ];

  const responsibleThemes = [
    {
      title: "Human-Centered AI",
      body: "Designing systems that support real users, not abstract benchmarks.",
    },
    {
      title: "Risk + Governance",
      body: "Building decision tools with accountability, transparency, and context.",
    },
    {
      title: "Public Interest Tech",
      body: "Applying product and ML thinking to institutions that affect people’s lives.",
    },
  ];

  return (
    <div className="home-page">
      <div
        className="floral-ornament floral-ornament--primary"
        aria-hidden="true"
      >
        <FlowerOrnamentSvg />
      </div>

      <Hero />

      <section className="section" id="work">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title">Selected Work</h2>
            <p>
              Projects and systems across AI product, machine learning
              infrastructure, data products, and decision support.
            </p>
          </div>

          <div className="work-gallery">
            {featuredProject ? <ProjectCard project={featuredProject} /> : null}

            <div className="work-grid">
              {standardProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {dossierProject ? <ProjectCard project={dossierProject} /> : null}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="thinking">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">How I Think</p>
            <h2 className="section-title">How I Think</h2>
            <p>
              My value is not only technical execution; it is the ability to
              connect model behavior, product constraints, and institutional
              context into clear action.
            </p>
          </div>

          <div className="operating-model">
            <div className="model-rail">
              {operatingModel.map((step, index) => (
                <div className="model-step" key={step.label}>
                  <div className="model-index">0{index + 1}</div>
                  <div className="model-body">
                    <h3>{step.label}</h3>
                    <p>{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section responsible-section" id="responsible-systems">
        <div className="container">
          <div className="responsible-shell">
            <div className="responsible-intro">
              <p className="eyebrow">Responsible Systems</p>
              <h2 className="section-title">
                Thinking About Responsible Systems
              </h2>
              <p>
                Technology is never just technical. I’m interested in AI and
                data systems that shape how people, companies, and institutions
                make decisions, especially around access, risk, labor,
                education, and public life.
              </p>
            </div>

            <div className="responsible-grid">
              {responsibleThemes.map((theme) => (
                <article key={theme.title} className="responsible-card">
                  <h3>{theme.title}</h3>
                  <p>{theme.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="experience">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">Experience</h2>
            <p>
              A recruiter-facing snapshot of the product, technical, and
              strategy work that shapes how I build.
            </p>
          </div>

          <ExperienceSlider />
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div
          className="floral-ornament floral-ornament--secondary"
          aria-hidden="true"
        >
          <FlowerOrnamentSvg />
        </div>

        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Skills</p>
            <h2 className="section-title">Skills</h2>
            <p>
              A compact view of the tools, languages, and methods I use to move
              from problem framing to implementation.
            </p>
          </div>

          <SkillsBento />
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="contact-shell card-surface">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">
                Let’s build thoughtful AI and data products.
              </h2>
              <p>
                I’m currently exploring roles where product judgment, technical
                depth, and responsible systems thinking can compound in real
                work.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:nataly.lopez@berkeley.edu">
                nataly.lopez@berkeley.edu
              </a>
              <a
                href="https://www.linkedin.com/in/natalyisabellopez"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="/Nataly_Lopez_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
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
      </section>
    </div>
  );
};

export default Home;
