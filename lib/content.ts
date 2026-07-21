/**
 * ============================================================================
 * content.ts — EVERYTHING on the site lives in this one file.
 * ============================================================================
 * Edit text, links, projects, jobs, skills, certs, and hackathons here.
 * You never need to touch a component to change what the site says.
 *
 * Search for "// PLACEHOLDER" to find every spot that still needs your input.
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// SITE-WIDE SETTINGS & LINKS
// ---------------------------------------------------------------------------
export const site = {
  name: "Amrutha Vinayakam",
  title: "Data Scientist & AI/ML Engineer",

  // Shown in the hero under your title. Keep it to one punchy line.
  tagline:
    "I build ML systems that turn messy data into decisions people trust.", // PLACEHOLDER — replace with your own one-liner

  // Used in <meta> description and Open Graph previews (LinkedIn, iMessage, etc.)
  metaDescription:
    "Portfolio of Amrutha Vinayakam — Data Scientist & AI/ML Engineer. Machine learning, LLM applications, and data products.", // PLACEHOLDER — tune if you like

  // The live URL of the deployed site. Needed for correct Open Graph previews.
  // Update this after you deploy (e.g. "https://amrutha.dev").
  url: "https://amrutha-vinayakam.vercel.app", // PLACEHOLDER — set to your real deployed URL

  links: {
    github: "https://github.com/amruthavinayakam",
    linkedin: "https://www.linkedin.com/in/vamrutha1503/",
    email: "amrutha513851@gmail.com",
    // Put your resume PDF at /public/resume.pdf (any PDF dropped there works).
    resume: "/resume.pdf", // PLACEHOLDER — replace public/resume.pdf with your real resume
  },
};

// ---------------------------------------------------------------------------
// ABOUT — 3–4 sentences. Written in first person.
// ---------------------------------------------------------------------------
export const about: string[] = [
  // Each string renders as its own paragraph. One paragraph is fine too.
  // PLACEHOLDER — replace all of this with your own words.
  "I'm a data scientist and AI/ML engineer who likes shipping models all the way to production — not just notebooks. My recent work spans LLM-powered applications, forecasting, and analytics that leadership actually uses.",
  "I've worked across nonprofits, startups, and Big Four consulting, which taught me to translate between business questions and technical answers quickly.",
  "I hold a master's degree from Fordham University and I'm currently focused on applied AI — retrieval, agents, and evaluation done properly.",
];

// ---------------------------------------------------------------------------
// EXPERIENCE — newest first. Each role: 2–3 metric-driven bullets.
// Good bullet formula: [action] + [what you built] + [measured outcome].
// ---------------------------------------------------------------------------
export type Job = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "Food Bank of South Jersey",
    role: "Data Science Manager",
    dates: "Dec 2025 — Present",
    location: "Pennsauken, NJ",
    bullets: [
      "Architected a centralized BigQuery data warehouse with scalable schemas and standardized reporting layers, reducing data discrepancies by 15% and saving 8 hours/week.",
      "Built Random Forest + Logistic Regression models to segment agencies on demographic and behavioral data, driving a 15% increase in distribution; deployed an XGBoost demand-forecasting model to improve planning and resource allocation.",
      "Delivered executive-ready Power BI dashboards and governed KPI reporting powering weekly and monthly operational reviews across Grants, Marketing, and Finance.",
    ],
  },
  {
    company: "Dreamline AI",
    role: "AI Engineer",
    dates: "Jul 2025 — Dec 2025",
    location: "Remote",
    bullets: [
      "Improved user-behavior prediction by 25% with an XGBoost + Logistic Regression ensemble enriched by LLM-based features for program rules, optimized for latency and cost.",
      "Increased program-match accuracy by 10% by segmenting users with K-Means clustering, validated with t-tests for statistical significance.",
      "Boosted production chatbot response accuracy by 15% via OpenAI API integration, and built an automated evaluation suite (F1, confusion matrices, cross-validation) maintaining 95% testing coverage.",
    ],
  },
  {
    company: "Fordham University",
    role: "Graduate Teaching / Technical Assistant",
    dates: "Sep 2023 — Dec 2024",
    location: "New York, NY",
    bullets: [
      "Developed and maintained 5+ ETL pipelines for academic datasets, reducing data-quality issues by 40% through standardized ingestion, cleaning, and validation for 30+ students.",
      "Created 4+ interactive Tableau dashboards for feedback and enrollment KPIs, improving faculty decision-making efficiency by 50% with self-serve reporting.",
      "Fine-tuned Hugging Face Transformer models to automate research content tagging at 92% accuracy, saving 10+ hours/month.",
    ],
  },
  {
    company: "Radical AI",
    role: "AI Engineer",
    dates: "May 2024 — Oct 2024",
    location: "New York, NY",
    bullets: [
      "Enhanced model quality by 25% and real-time processing speed by 30% by iterating on feature pipelines and training workflows with Python, scikit-learn, TensorFlow, and PyTorch.",
      "Raised production chatbot response accuracy by 15% through Hugging Face Transformers and OpenAI API prompt/retrieval tuning, and cut inference latency 20% by optimizing text pipelines with SpaCy and NLTK.",
      "Improved pipeline efficiency by 35% by integrating LangChain and LlamaIndex for scalable agent workflows, with evaluation suites validating 98% model reliability across releases.",
    ],
  },
  {
    company: "KPMG",
    role: "Data Analyst",
    dates: "Aug 2020 — Jul 2023",
    location: "India",
    bullets: [
      "Improved monthly revenue projections by 20% by building financial forecasting models (ARIMAX, SARIMAX, XGBoost) from claims and billing data, deployed in Azure ML Studio with automated monthly runs.",
      "Built and presented ROI models to finance stakeholders, influencing $2M+ in investment decisions across 3 digital-health pilots.",
      "Cut annual overhead by $250K with automated cost-per-patient dashboards, reduced billing delays 15% via SQL revenue-cycle reports across 7 departments, and drove 8% cost savings through A/B-tested pricing scenarios.",
    ],
  },
];

// ---------------------------------------------------------------------------
// PROJECTS — add/remove cards by adding/removing objects in this array.
// `demo` is optional: omit it (or set undefined) to hide the Live Demo link.
// ---------------------------------------------------------------------------
export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string; // optional live-demo URL
};

export const projects: Project[] = [
  {
    title: "Vigor — AI Fitness Coach",
    description:
      "Serverless AI health & fitness coach that chats with you and generates personalized workout and meal plans in seconds, built on AWS Bedrock and Lambda with the Spoonacular API.",
    tags: ["AWS Bedrock", "AWS Lambda", "Python", "Pydantic", "Spoonacular API"],
    github: "https://github.com/amruthavinayakam/AI_FitnessHealthCoach",
    // demo: "https://example.com", // PLACEHOLDER — uncomment if you have a live demo
  },
  {
    title: "AI Financial Advisor",
    description:
      "Conversational financial planning assistant with retrieval over market data and guardrailed recommendations.", // PLACEHOLDER
    tags: ["Python", "LangChain", "RAG", "Streamlit"], // PLACEHOLDER
    github: "https://github.com/amruthavinayakam/AI_FinancialAdvisor",
  },
  {
    title: "Career Research Agent",
    description:
      "Autonomous agent that researches companies and roles, then compiles tailored briefs for job applications.", // PLACEHOLDER
    tags: ["Agents", "OpenAI API", "Web Scraping", "Python"], // PLACEHOLDER
    github: "https://github.com/amruthavinayakam/AI_CareerAgent",
  },
  {
    title: "LLM Benchmarking",
    description:
      "Framework for benchmarking LLMs across tasks — comparing model quality, latency, and cost with reproducible evals.", // PLACEHOLDER — your description
    tags: ["Python", "LLMs", "Evals"], // PLACEHOLDER — real tech stack
    github: "https://github.com/amruthavinayakam/LLM_Benchmarking",
  },
  {
    title: "AceBot",
    description:
      "Voice-enabled AI companion app (GPT-4 + Flutter) with text/voice chat, news updates, motivational quotes, and mental-health support resources. Winner of the Wolfram Award at Taskformer's AI Chatbot Hackathon.",
    tags: ["Flutter", "Dart", "GPT-4", "GCP", "Speech-to-Text"],
    github: "https://github.com/amruthavinayakam/Taskformers_AceBot",
  },
];

// ---------------------------------------------------------------------------
// SKILLS — grouped for scannability. Reorder/add groups freely.
// ---------------------------------------------------------------------------
export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["Python", "SQL", "R", "TypeScript"], // PLACEHOLDER — adjust to your real list
  },
  {
    group: "ML / AI",
    items: [
      "PyTorch",
      "scikit-learn",
      "LLMs & RAG",
      "LangChain",
      "Hugging Face",
      "NLP",
      "Forecasting",
    ], // PLACEHOLDER
  },
  {
    group: "Cloud & Data",
    items: ["AWS", "GCP", "Snowflake", "Spark", "Airflow", "dbt"], // PLACEHOLDER
  },
  {
    group: "Tools",
    items: ["Git", "Docker", "Tableau", "Power BI", "FastAPI"], // PLACEHOLDER
  },
];

// ---------------------------------------------------------------------------
// CERTIFICATIONS — issuer + year.
// ---------------------------------------------------------------------------
export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url?: string; // optional credential link
};

export const certifications: Certification[] = [
  {
    name: "Google Cloud Associate Data Practitioner",
    issuer: "Google",
    year: "2026",
    url: "https://www.credly.com/badges/0032acb4-f03e-4e10-a165-d2ce3d59e546",
  },
  {
    name: "Data Visualisation: Empowering Business with Effective Insights (Tata Job Simulation)",
    issuer: "Forage",
    year: "2023",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata_szsyd7PWfn2wLubuz_1700493718337_completion_certificate.pdf",
  },
  {
    name: "Machine Learning with Python — Level 1",
    issuer: "IBM",
    year: "2023",
    url: "https://www.credly.com/badges/15b2a51e-f5f7-4b14-b477-77b3fd24cff1/linked_in_profile",
  },
  {
    name: "Certified Data Scientist",
    issuer: "ExcelR",
    year: "2023",
  },
  {
    name: "Data Science Certificate",
    issuer: "Corizo",
    year: "2022",
    url: "https://app.truscholar.io/profile?credId=634567024e47fc4943a3cd3e",
  },
];

// ---------------------------------------------------------------------------
// HACKATHONS — one line each. `result` is the highlight (e.g. "1st Place").
// ---------------------------------------------------------------------------
export type Hackathon = {
  name: string;
  result: string; // e.g. "Winner", "1st Place — AI Track", "Finalist"
  description: string; // one-line summary of what you built
  year: string;
  url?: string; // optional link to project/devpost
};

export const hackathons: Hackathon[] = [
  {
    name: "Taskformer's AI Chatbot Hackathon",
    result: "Winner — Wolfram Award",
    description:
      "Built AceBot, a voice-enabled Flutter chatbot with GPT-4: quick answers, news, motivation, and mental-health support resources in one companion app.",
    year: "2024", // PLACEHOLDER — confirm the year
    url: "https://taskformerai.devpost.com/",
  },
  {
    name: "AWS AI Agent Global Hackathon",
    result: "Participant",
    description:
      "Built Vigor, a fully serverless AI health & fitness coach (AWS Bedrock + Lambda) that generates personalized workout and meal plans in seconds — among 9,400+ participants worldwide.",
    year: "2025", // PLACEHOLDER — confirm the year
    url: "https://aws-agent-hackathon.devpost.com/",
  },
];

// ---------------------------------------------------------------------------
// CONTACT / INTEGRATIONS
// ---------------------------------------------------------------------------
export const config = {
  // 1. Formspree endpoint that delivers contact-form submissions to
  //    amrutha513851@gmail.com. Manage the form at https://formspree.io.
  //    If this is ever reset to a placeholder containing "YOUR_FORM_ID", the
  //    contact form falls back to opening the visitor's mail client instead.
  formspreeEndpoint: "https://formspree.io/f/xgogzpkn",

  // 2. Create a free project at https://posthog.com  →  Project Settings →
  //    copy the Project API key (starts with "phc_") here.
  posthogKey: "phc_PLACEHOLDER", // PLACEHOLDER — your PostHog project API key
  posthogHost: "https://us.i.posthog.com", // change to https://eu.i.posthog.com if you picked the EU region
};

// ---------------------------------------------------------------------------
// NAVIGATION — section order in the sticky nav. IDs must match section ids.
// ---------------------------------------------------------------------------
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];
