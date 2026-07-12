import React from "react";
import { Link } from "react-router-dom";
import setupImage from "../assets/qualcomm/workflow-setup.jpg";
import hardwareImage from "../assets/qualcomm/hardware-eval-setup.jpg";
import cvOutputImage from "../assets/qualcomm/cv-output-deepstream.jpg";
import fridgeImage from "../assets/qualcomm/smart-fridge-demo.jpg";
import jetsonImage from "../assets/qualcomm/jetson-reference.jpg";
import "./QualcommProject.css";

const ImageCard = ({ src, alt, caption }) => (
  <figure className="image-card">
    <img src={src} alt={alt} />
    {caption ? (
      <figcaption className="image-caption">{caption}</figcaption>
    ) : null}
  </figure>
);

const QualcommProject = () => {
  const heroTags = [
    "Edge AI",
    "Developer Experience",
    "ONNX Runtime",
    "Quantization",
    "NPU Inference",
    "Product Evaluation",
  ];

  const metaItems = [
    { label: "Role", value: "ML Product Evaluation" },
    { label: "Context", value: "DiversaTech x Qualcomm" },
    { label: "Timeline", value: "Spring 2026" },
    { label: "Focus", value: "Edge AI developer workflow" },
  ];

  const productQuestions = [
    {
      title: "Setup clarity",
      body: "Can the developer understand what to install and why?",
    },
    {
      title: "Path selection",
      body: "Is it clear which workflow fits their model and skill level?",
    },
    {
      title: "Inference confidence",
      body: "Can they tell whether output is correct, accelerated, and ready to build on?",
    },
  ];

  const personas = [
    {
      title: "Beginner builder",
      body: "A student or hobbyist with limited Linux and embedded systems experience.",
    },
    {
      title: "Experienced ML developer",
      body: "A developer comfortable with Linux, dependencies, model conversion, and hardware debugging.",
    },
  ];

  const workflowSessions = [
    "First boot and environment setup",
    "Toolchain setup and sample applications",
    "Bring your own model workflow",
    "Inference, output validation, and camera integration",
  ];

  const workflowPaths = [
    { title: "Path 0", body: "Qdemo and prebuilt sample apps" },
    { title: "Path 1", body: "Qualcomm AI Hub and LiteRT" },
    { title: "Path 2", body: "PyTorch or TensorFlow to ONNX" },
    { title: "Path 3", body: "TensorFlow and LiteRT" },
    { title: "Path 4", body: "Edge Impulse and LiteRT" },
  ];

  const workflowSteps = [
    "Model",
    "ONNX Export",
    "Quantization",
    "ONNX Runtime",
    "QNN Provider",
    "NPU Inference",
  ];

  const findings = [
    {
      title: "What worked",
      items: [
        "ONNX Runtime and Pillow setup were relatively smooth.",
        "SqueezeNet 1.1 from torchvision worked as a baseline model.",
        "The workflow could start on CPU before moving toward NPU execution.",
        "The custom path gave developers more flexibility than a prebuilt model path.",
      ],
    },
    {
      title: "Where friction appeared",
      items: [
        "Path selection was ambiguous.",
        "The workflow required more ML ownership, including export and quantization decisions.",
        "One inference output returned monochrome without a clear warning, suggesting a silent channel mismatch.",
        "Webcam integration was not completed in this path.",
      ],
    },
    {
      title: "Product implication",
      items: [
        "Qualcomm should make the first successful model path more guided.",
        "A simple path selector, validation command, and clearer output checks would reduce confusion without hiding the advanced workflow from experienced developers.",
      ],
    },
  ];

  const recommendations = [
    {
      title: "Validated Day 1 image",
      body: "Bundle Qdemo, sample apps, model artifacts, camera plugins, IM SDK paths, QNN support, and NPU delegate checks into a single reliable starting image.",
    },
    {
      title: "Path selector",
      body: "Give developers a simple decision tree at the top of the docs, with AI Hub for pretrained paths, ONNX for custom models, and TensorFlow with LiteRT for a fast custom model entry point.",
    },
    {
      title: "qcom-ai-check command",
      body: "Add one command that verifies camera plugin status, sample apps, LiteRT runtime, QNN delegate availability, NPU visibility, and basic inference readiness.",
    },
    {
      title: "Recovery docs",
      body: "Add beginner friendly recovery guidance for USB camera fallback, headless SSH setup, no display setup, and serial or EDL recovery.",
    },
  ];

  return (
    <div className="qualcomm-project-page">
      <div className="page-ornament" aria-hidden="true" />

      <div className="case-shell">
        <nav className="nav-minimal">
          <Link to="/" className="back-link">
            Back to Work
          </Link>
          <span className="back-link muted-link">Case Study</span>
        </nav>

        <header className="project-header">
          <p className="case-eyebrow">Qualcomm Edge AI Workflow</p>
          <h1>Testing Day 1 Developer Experience for Edge AI</h1>
          <p className="project-subtitle">
            I evaluated how quickly a developer could move from hardware setup
            to meaningful edge inference on Qualcomm’s IQ9 platform, then
            translated workflow friction into product and ML systems
            recommendations.
          </p>

          <div className="meta-strip">
            {metaItems.map((item) => (
              <div key={item.label} className="meta-item">
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          <div className="case-tags">
            {heroTags.map((tag) => (
              <span key={tag} className="case-tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <main className="case-content">
          <section className="case-section hero-section">
            <div className="hero-copy">
              <p className="case-eyebrow">Case Study</p>
              <h2>Evaluating the first successful edge AI workflow</h2>
              <p className="case-copy">
                The core product question was not only whether the hardware
                could run models. It was whether a developer could open the box,
                configure the toolchain, run inference, and understand what to
                do next without losing momentum.
              </p>
            </div>
            <div className="hero-visual">
              <ImageCard
                src={setupImage}
                alt="Laptop and edge AI hardware setup used for workflow evaluation"
                caption="Hardware setup and Day 1 edge AI workflow testing"
              />
            </div>
          </section>

          <section className="case-section" id="product-question">
            <div className="section-heading">
              <p className="case-eyebrow">Product question</p>
              <h2 className="case-title">The product question</h2>
            </div>
            <p className="case-copy lead-copy">
              The core question was whether a developer could move from hardware
              setup to a meaningful first inference with enough clarity to keep
              going. That meant testing setup guidance, model path selection,
              inference confidence, and the handoff between ML workflow and
              platform usability.
            </p>

            <div className="case-card highlight-card">
              <p className="highlight-label">North star</p>
              <p>
                How fast can a new developer reach a meaningful first inference
                with a clear path from setup to output?
              </p>
            </div>

            <div className="case-grid three-up">
              {productQuestions.map((item) => (
                <article key={item.title} className="case-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="evaluation-design">
            <div className="section-heading">
              <p className="case-eyebrow">Evaluation design</p>
              <h2 className="case-title">How I evaluated the workflow</h2>
            </div>

            <div className="case-grid two-up">
              {personas.map((persona) => (
                <article key={persona.title} className="case-card">
                  <h3>{persona.title}</h3>
                  <p>{persona.body}</p>
                </article>
              ))}
            </div>

            <div className="case-grid four-up workflow-grid">
              {workflowSessions.map((session) => (
                <article key={session} className="case-card small-card">
                  <p>{session}</p>
                </article>
              ))}
            </div>

            <div className="case-grid five-up path-grid">
              {workflowPaths.map((path) => (
                <article key={path.title} className="case-card small-card">
                  <span>{path.title}</span>
                  <p>{path.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="ml-systems-deep-dive">
            <div className="section-heading">
              <p className="case-eyebrow">ML systems deep dive</p>
              <h2 className="case-title">
                My ML systems deep dive: custom model to ONNX
              </h2>
            </div>
            <p className="case-copy lead-copy">
              I focused most deeply on the bring your own model path. This
              workflow required exporting a PyTorch or TensorFlow model to ONNX,
              setting up ONNX Runtime, applying quantization decisions, and
              routing inference through Qualcomm’s QNN execution provider to
              reach the IQ9 NPU.
            </p>

            <div className="pipeline-card">
              {workflowSteps.map((step) => (
                <div key={step} className="pipeline-step">
                  {step}
                </div>
              ))}
            </div>

            <div className="case-grid three-up image-grid">
              <ImageCard
                src={hardwareImage}
                alt="Edge AI board connected to laptop and external monitor during setup"
                caption="Environment and hardware setup"
              />
              <ImageCard
                src={cvOutputImage}
                alt="Computer vision output running on screen during edge AI testing"
                caption="Computer vision inference output"
              />
              <ImageCard
                src={fridgeImage}
                alt="Camera-based computer vision prototype running on a laptop"
                caption="Camera-based prototype workflow"
              />
            </div>

            <div className="case-grid three-up insight-grid">
              {findings.map((item) => (
                <article key={item.title} className="case-card">
                  <h3>{item.title}</h3>
                  <ul>
                    {item.items.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="smart-fridge-prototype">
            <div className="section-heading">
              <p className="case-eyebrow">Prototype workflow</p>
              <h2 className="case-title">
                Computer vision prototype: smart fridge workflow
              </h2>
            </div>
            <p className="case-copy lead-copy">
              To test whether the workflow could support a real edge AI use
              case, my group built toward a computer vision prototype for a
              smart fridge scenario. The goal was to move from setup validation
              into a usable camera-based inference flow, where the system could
              process visual input and support downstream product decisions such
              as item recognition, freshness tracking, or inventory awareness.
            </p>

            <div className="case-grid three-up">
              <article className="case-card">
                <h3>Product use case</h3>
                <p>
                  A smart fridge needs reliable visual inference at the edge,
                  not just a model running in a notebook.
                </p>
              </article>
              <article className="case-card">
                <h3>ML workflow</h3>
                <p>
                  The prototype connected camera input, model setup, runtime
                  configuration, and inference output validation.
                </p>
              </article>
              <article className="case-card">
                <h3>Product learning</h3>
                <p>
                  The hardest part was not only model performance. It was making
                  the setup path clear enough that a developer could recover
                  from environment, camera, and runtime issues without losing
                  momentum.
                </p>
              </article>
            </div>
          </section>

          <section className="case-section" id="platform-findings">
            <div className="section-heading">
              <p className="case-eyebrow">Platform findings</p>
              <h2 className="case-title">Platform UX findings</h2>
            </div>

            <div className="case-grid two-up">
              <article className="case-card">
                <h3>Where Qualcomm felt strong</h3>
                <p>
                  Strong fit for production edge AI workflows. Useful when power
                  efficiency and hardware headroom matter. Better suited for
                  teams that own model conversion, quantization, and deployment
                  decisions. Relevant for robotics, smart camera, IoT, drone,
                  and embedded AI systems.
                </p>
              </article>
              <article className="case-card">
                <h3>Where NVIDIA felt easier</h3>
                <p>
                  Faster beginner path to a working demo. More mature sample
                  apps, containers, and DeepStream support out of the box.
                  Better for classrooms, hackathons, and early prototyping
                  teams. Less ambiguity for developers who need a guided setup
                  experience.
                </p>
              </article>
            </div>

            <div className="case-card note-card">
              <p>
                The takeaway was not that one platform is universally better. It
                was that platform usability depends on the developer’s starting
                point, the model path, and the amount of system control they
                need.
              </p>
            </div>

            <ImageCard
              src={jetsonImage}
              alt="NVIDIA Jetson reference setup used as a developer experience comparison"
              caption="NVIDIA Jetson reference setup used as a developer experience comparison"
            />
          </section>

          <section className="case-section" id="product-recommendations">
            <div className="section-heading">
              <p className="case-eyebrow">Product recommendations</p>
              <h2 className="case-title">Product recommendations</h2>
            </div>

            <div className="case-grid two-up recommendations-grid">
              {recommendations.map((item) => (
                <article key={item.title} className="case-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-section" id="impact">
            <div className="section-heading">
              <p className="case-eyebrow">Why this mattered</p>
              <h2 className="case-title">Why this mattered</h2>
            </div>
            <div className="case-card outcome-card">
              <p className="case-copy lead-copy">
                This project was not only an embedded systems benchmark. It was
                a developer experience study about whether powerful AI hardware
                is accessible to the people expected to build with it. Strong
                edge AI platforms need more than performance. They need clear
                defaults, trustworthy docs, recovery paths, and workflows that
                help new developers become capable developers.
              </p>
              <p>
                The evaluation turned hands on hardware and ML workflow testing
                into concrete product recommendations for Qualcomm’s Day 1
                developer experience. It identified where the IQ9 platform was
                strong, where setup friction could block adoption, and what
                changes would make the platform easier for beginners while still
                useful for experienced developers.
              </p>
            </div>

            <div className="cta-row">
              <Link to="/" className="cta-link">
                Back to Work
              </Link>
              <a
                href="/Nataly_Lopez_Resume.pdf"
                className="cta-link"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/natalyisabellopez"
                className="cta-link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default QualcommProject;
