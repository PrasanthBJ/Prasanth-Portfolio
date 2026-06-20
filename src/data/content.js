export const NAV = [
  { id: "about", label: "about.md" },
  { id: "experience", label: "experience.log" },
  { id: "projects", label: "projects/" },
  { id: "stack", label: "stack.json" },
  { id: "contact", label: "contact.sh" },
];

export const PROFILE = {
  name: "Prasanth BJ",
  role: "Full Stack Developer",
  email: "prasanthbj65@gmail.com",
  phone: "+91 89257 83870",
  github: "https://github.com/PrasanthBJ",
  linkedin: "https://linkedin.com/in/prasanth-bj",
  leetcode: "https://leetcode.com/u/Prasanth_BJ",
  resumeUrl: "./resume.pdf", // Changed from "/resume.pdf" to support nested deployment paths
  college: "SNS College of Technology · B.Tech IT · Class of 2027",
  stats: [
    { value: "240+", label: "leetcode_solved" },
    { value: "1511", label: "contest_rating" },
    { value: "05+", label: "apps_deployed" },
  ],
  whoamiLines: [
    "3rd-year IT student, SNS College of Technology",
    "240+ LeetCode problems solved, 1511 contest rating",
    "shipped 5+ production full-stack & RAG apps",
  ],
};

export const LEETCODE = {
  solved: 241,
  easy: 115,
  medium: 98,
  hard: 28,
  rating: 1511,
  globalRank: "356,920",
  contests: 17,
  topPercentage: "41.26%",
  activeDays: 219,
  maxStreak: 76,
  submissionsYear: 631,
  languages: [
    { name: "Java", count: 188 },
    { name: "Python3", count: 76 }
  ]
};

export const ABOUT = {
  paragraphs: [
    "I am an Information Technology undergraduate with hands-on experience building production-grade full-stack applications and scalable REST APIs. Skilled in backend service design, JWT-based authentication, relational database management, and containerized cloud deployment with Docker.",
    "I am comfortable working across the entire stack — from API design to responsive frontend delivery — with experience integrating third-party services and AI APIs. I seek Full Stack Developer roles in fast-paced product teams where I can build end-to-end software.",
  ],
};

export const EXPERIENCE = [
  {
    role: "Java Developer Intern",
    company: "Vercen Technologies Pvt Ltd",
    period: "May 2025 – June 2025",
    location: "India",
    bullets: [
      "Designed and developed 5+ REST APIs using Spring Boot for enterprise application modules with clean, scalable architecture.",
      "Optimized MySQL queries and improved API response handling, reducing latency for production-grade systems.",
      "Participated in Agile sprint cycles — sprint planning, code reviews, unit testing, and deployment activities."
    ]
  }
];

export const PROJECTS = [
  {
    name: "DocuBot Pro",
    tag: "flagship / AI Chat",
    status: "deployed",
    desc: "Full-stack AI document chat application. Users can upload document files (PDFs) and query them through a conversational AI assistant.",
    stack: ["Spring Boot 3", "React.js", "PostgreSQL", "pgvector", "Groq API", "Docker", "Apache Tika"],
    bullets: [
      "Built a production-deployed full-stack app enabling users to upload documents and query them via a conversational AI interface.",
      "Engineered Spring Boot backend with 10+ REST APIs, JWT auth, Apache Tika document parsing, and pgvector semantic search.",
      "Developed responsive React.js frontend with real-time chat, document upload, and auth flows using React Router and Tailwind CSS.",
      "Containerized with Docker and deployed on Render (backend) and Vercel (frontend), achieving sub-second query latency end-to-end."
    ],
    links: { live: "#", code: "https://github.com/PrasanthBJ" },
  },
  {
    name: "TaskBrain AI",
    tag: "productivity / AI",
    status: "deployed",
    desc: "Employee allocation and project monitoring platform that helps distribute work and monitor completion rates.",
    stack: ["Spring Boot", "React.js", "MySQL", "JWT", "OpenAI API"],
    bullets: [
      "Built a full-stack platform for allocating and monitoring employee tasks, with 10+ REST APIs covering CRUD, authentication, and workflow tracking.",
      "Integrated OpenAI API for AI-driven workload insights and implemented JWT-based authentication with role-based access control."
    ],
    links: { live: "#", code: "https://github.com/PrasanthBJ" },
  },
  {
    name: "AI Resume Analyzer",
    tag: "genai / tools",
    status: "deployed",
    desc: "Serverless web application that analyzes resume files and gives ATS compliance scores and suggestions.",
    stack: ["React.js", "Puter.js", "Tailwind CSS", "Prompt Engineering"],
    bullets: [
      "Built an AI-powered resume evaluation tool using Puter.js for serverless AI integration and backend authentication.",
      "Implemented LLM-based ATS scoring, keyword extraction, and job-match recommendations from a single-page React frontend."
    ],
    links: { live: "#", code: "https://github.com/PrasanthBJ" },
  }
];

export const STACK = {
  languages: ["Java", "Python", "SQL", "JavaScript"],
  backend: ["Spring Boot 3", "REST API Design", "JWT Authentication", "Hibernate", "Maven", "Apache Tika", "Spring AI"],
  frontend: ["React.js", "React Router", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
  databases: ["MySQL", "PostgreSQL", "pgvector", "MongoDB"],
  devops: ["Docker", "Git", "GitHub", "Agile/Scrum", "Vercel", "Render"],
  ai: ["OpenAI API", "Groq API", "Puter.js", "LLM Integration", "Prompt Engineering", "RAG Systems"],
  coreCs: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
};

export const EDUCATION = [
  {
    period: "2023 — 2027",
    degree: "Bachelor of Technology in Information Technology",
    college: "SNS College of Technology",
    location: "Coimbatore, India",
    detail: "CGPA: 8.16 / 10.0",
    coursework: ["Data Structures & Algorithms", "DBMS", "OOP", "Operating Systems", "Computer Networks", "Machine Learning", "Generative AI"],
    current: true,
  },
];

export const ACHIEVEMENTS = [
  {
    title: "LeetCode Contest Rating",
    detail: "Reached a contest rating of 1511 (Top 41.26%) across 17 contests, showing proficiency in problem-solving speed and accuracy."
  },
  {
    title: "241+ Problems Solved",
    detail: "Completed 115 Easy, 98 Medium, and 28 Hard algorithmic problems, focusing on Java (188 solved) and Python3 (76 solved)."
  },
  {
    title: "Production Deployments",
    detail: "Built and deployed 5+ production full-stack applications integrating Spring Boot, React.js, Docker, and third-party APIs."
  }
];