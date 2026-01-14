export const projects = [
  {
    id: "bunge-lab",
    link: "/project/bunge-lab",
    image: "/images/RT-distribution_graph.png", // Added for the homepage card thumbnail
    badge: "Research RA • Bunge Laboratory",
    title: "Cognitive Performance Pipeline: Processing Behavioral Micro-Data",
    description:
      "Developing a Python-based pipeline to process behavioral micro-data and quantify cognitive relational matching.",
    experimentText: [
      "At the Bunge Lab, we investigated how the brain processes relational matching. Participants were shown sets of shapes and colors and had to identify patterns.",
      "The second-order tasks are significantly more taxing on cognitive control. My goal was to build a pipeline that could ingest raw trial-level data from over 100 participants.",
    ],
    visuals: [
      {
        url: "/images/RT-distribution_graph.png",
        caption: "RT density shift: Quantifying the latency gap.",
        fullWidth: false,
      },
      {
        url: "/images/Accuracybycondition_graph.png",
        caption: "Success rates for 1st vs 2nd-order matching.",
        fullWidth: false,
      },
      {
        url: "/images/RT-patterns_graph.png",
        caption: "Universal upward slope represents the 0.6s average increase.",
        fullWidth: true,
      },
    ],
    decisions: [
      {
        title: "Handling Outliers",
        desc: "Utilized within-participant winsorization rather than simple exclusion.",
      },
      {
        title: "Within-Subject Normalization",
        desc: "Applied z-scoring to control for individual baseline speeds.",
      },
      {
        title: "Data Ingestion Strategy",
        desc: "Automated concatenation of hundreds of PsychoPy CSV logs.",
      },
      {
        title: "Statistical Validation",
        desc: "Performed log-transformations to ensure mathematical integrity.",
      },
    ],
    verdictText:
      "My analysis confirmed the high cost of cognitive control. Using a paired t-test, I found a significant difference in Mean RT and Accuracy, validating the measurable drop in both speed and success.",
    stats: ["RT $t = -13.25$", "RT $p < 0.0001$", "Accuracy $p = 0.0005$"],
    githubUrl: "https://github.com/natalylopez",
  },
  {
    id: "asuc-octo",
    link: "/project/asuc-octo", // Essential for the homepage card to work
    image: "/images/berkeley-mobile-logic.png", // Thumbnail for the homepage
    badge: "UI/UX & Backend • ASUC OCTO",
    title: "Berkeley Mobile: Student Hub",
    description:
      "Redesigning the student experience through a centralized campus app, integrating dining, schedules, and Cal 1 Card services.",
    experimentText: [
      "As part of the ASUC Office of the CTO, I am co-developing the official campus app for UC Berkeley students.",
      "Our goal is to consolidate disparate campus resources—from dining menus to course schedules—into a single, high-performance mobile hub.",
    ],
    visuals: [
      {
        url: "/images/berkeley-mobile-logic.png",
        caption: "System logic and API integration flow for campus resources.",
        fullWidth: true,
      },
    ],
    decisions: [
      {
        title: "User-Centric Navigation",
        desc: "Designed a bottom-tab navigation to prioritize the most-used features like Cal 1 Card and Dining.",
      },
      {
        title: "API Integration",
        desc: "Architected backend connectors to pull real-time data from various campus APIs.",
      },
    ],
    verdictText:
      "The redesign focuses on reducing 'tab-fatigue' for students, creating a seamless mobile experience that feels native to the Berkeley brand.",
    stats: ["Target Users: 45k+", "Active Feature Leads: 3"],
    githubUrl: "https://github.com/natalylopez",
  },
  {
    id: "retention-ops",
    title: "RetentionOps Intelligence",
    category: "Machine Learning • Python",
    image: "/images/RetentionOps.png",
    path: "/projects/retention-ops",
    description: "Predictive inference engine for proactive churn management.",
  },
];
