export const NAV = [
  { id: "about", label: "about.md" },
  { id: "education", label: "education.log" },
  { id: "projects", label: "projects/" },
  { id: "stack", label: "stack.json" },
  { id: "contact", label: "contact.sh" },
];

export const EDUCATION = [
  {
    period: "2023 — 2027",
    title: "B.Tech, Information Technology",
    place: "SNS College of Technology",
    detail:
      "Third-year coursework spanning data structures, algorithms, full-stack web development, and generative AI / agentic systems. Maintaining a strong DSA practice alongside coursework.",
    current: true,
  },
];

export const ABOUT = {
  paragraphs: [
    "I'm a third-year IT student who'd rather ship something real than read another tutorial. Most of my learning happens by building — DocuBot Pro started as a question of whether I could get a RAG pipeline actually working end to end, and turned into a full production deployment with auth, vector search, and a live frontend.",
    "Outside of project work, I treat LeetCode as a discipline, not a checkbox — 230+ problems in and still climbing, because I'd rather walk into an interview with reps already done than cram the week before.",
    "Right now I'm aiming at full-stack and GenAI-adjacent roles where I can keep building things end to end: backend, frontend, and the AI layer in between.",
  ],
};

export const PROJECTS = [
  {
    name: "docubot-pro",
    tag: "flagship",
    status: "deployed",
    desc: "Full-stack RAG application for document Q&A. Upload PDFs, embed with Jina AI, retrieve via pgvector, answer with Groq's llama-3.3-70b.",
    stack: ["Spring Boot 3", "Spring AI", "React", "pgvector", "Docker", "JWT"],
    links: { live: "#", code: "#" },
  },
  {
    name: "taskbrain-ai",
    tag: "productivity",
    status: "deployed",
    desc: "AI-assisted task manager that breaks goals into actionable steps and tracks progress over time.",
    stack: ["React", "Spring Boot", "REST API"],
    links: { live: "#", code: "#" },
  },
  {
    name: "ai-resume-analyzer",
    tag: "genai",
    status: "deployed",
    desc: "Parses resumes and returns structured, ATS-aware feedback against a target job description.",
    stack: ["Python", "NLP", "React"],
    links: { live: "#", code: "#" },
  },
  {
    name: "gsap-landing-page",
    tag: "frontend",
    status: "deployed",
    desc: "Motion-driven product landing page built to practice scroll-based animation and interaction design.",
    stack: ["React", "GSAP", "Tailwind CSS"],
    links: { live: "#", code: "#" },
  },
];

export const STACK = {
  core: ["Java", "Spring Boot", "React", "JavaScript", "SQL"],
  tools: ["Git", "Docker", "Postman", "VS Code"],
  exploring: ["GenAI / Agentic Systems", "Python", "pgvector"],
};

export const PROFILE = {
  name: "Prasanth BJ",
  role: "Full-stack developer",
  email: "your.email@example.com",
  github: "https://github.com/PrasanthBJ",
  linkedin: "https://www.linkedin.com/in/prasanth-bj/",
  leetcode: "https://leetcode.com/u/Prasanth_BJ/",
  resumeUrl: "/resume.pdf",
  college: "SNS College of Technology · B.Tech IT · class of 2027",
  whoamiLines: [
    "3rd-year IT student, SNS College of Technology",
    "241 problems solved on LeetCode, 1511 contest rating",
    "shipping full-stack RAG apps to production",
  ],
  stats: [
    { value: "240+", label: "leetcode_solved" },
    { value: "1511", label: "contest_rating" },
    { value: "04", label: "projects_shipped" },
  ],
};