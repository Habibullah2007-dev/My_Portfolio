import resumeAsset from "@/assets/resume.pdf.asset.json";
import profileAsset from "@/assets/profile.jpg.asset.json";

export const PROFILE = {
  name: "Habibullah Abdulganiyu Ayomide",
  initials: "HA",
  headline:
    "AI Automation Engineer · Computer & Communications Engineering Student · Founder of AgentForge",
  intro:
    "I'm Habibullah, a Computer and Communications Engineering student at Abubakar Tafawa Balewa University (ATBU), Nigeria, and the founder of AgentForge. I build AI-powered automation solutions tailored to African markets, with a focus on multilingual NLP, workflow automation, and agentic AI systems.",
  email: "habibabdulganiyu001@gmail.com",
  location: "Jos, Nigeria",
  linkedin:
    "https://www.linkedin.com/in/habibullah-abdulganiyu-ayomide-a77a632a6",
  github: "https://github.com/Habibullah2007-dev",
  githubUser: "Habibullah2007-dev",
  resume: resumeAsset.url,
  avatar: profileAsset.url,
};

export const KEYWORDS = [
  "AI Fluency",
  "Agentic AI",
  "Workflow Automation",
  "LLMs",
  "Prompt Engineering",
  "n8n",
];

export const LANGUAGES = ["Hausa", "Yoruba", "Arabic", "English"];

export const EDUCATION = [
  {
    title: "B.Eng. Computer and Communications Engineering",
    org: "Abubakar Tafawa Balewa University (ATBU), Bauchi",
    period: "2023 – 2028 (Expected)",
  },
  {
    title: "3MTT Fellowship",
    org: "Three Million Technical Talent Program",
    period: "2024 – Present",
    detail:
      "Professional training focused on technology skills development and industry readiness.",
  },
];

export const EXPERIENCE = [
  {
    role: "General AI Fluency Intern",
    org: "FlyRank AI",
    period: "2026 – Present",
    points: [
      "Supporting AI fluency initiatives",
      "Applying AI capabilities across various company workflows",
      "Contributing to AI-focused projects and evaluations",
    ],
  },
  {
    role: "Freelance AI Trainer",
    org: "Luel AI",
    period: "2026 – Present",
    points: [
      "Training and evaluating AI models",
      "Data annotation and collection",
      "Improving model performance through quality feedback",
    ],
  },
  {
    role: "Independent Developer — AI Technical Content Analysis System",
    org: "AgentForge",
    period: "2026 – Present",
    points: [
      "Designing and building an AI-powered platform for technical content analysis",
      "Developing systems capable of handling multiple content formats",
      "Exploring advanced AI workflows and content evaluation techniques",
    ],
  },
];

export const SKILL_GROUPS = [
  {
    title: "AI & Automation",
    skills: [
      "Lovable",
      "AI Fluency",
      "Agentic AI Systems",
      "Workflow Automation",
      "n8n Automation",
    ],
  },
  {
    title: "Large Language Models",
    skills: [
      "LLM Applications",
      "Prompt Engineering",
      "AI Evaluation",
      "AI Training",
    ],
  },
  {
    title: "Technical Competencies",
    skills: [
      "AI System Design",
      "Technical Content Analysis",
      "Multilingual NLP Concepts",
      "AI Workflow Development",
    ],
  },
];

export const FEATURED = {
  title: "AI Technical Content Analysis System",
  status: "In Active Development",
  description:
    "An AI-powered platform that analyzes and evaluates technical content from multiple input sources. The system is designed to help users understand, assess, and extract insights from technical materials through intelligent AI processing.",
  features: [
    "Multi-format content ingestion",
    "AI-powered analysis",
    "Technical content evaluation",
    "Automated insight generation",
    "Scalable architecture",
  ],
};

export const ROADMAP = [
  {
    name: "Gaskiya AI",
    status: "In Progress",
    desc: "Multi-agent fact-checking platform powered by AI and MongoDB.",
  },
  {
    name: "TruthLens",
    status: "In Progress",
    desc: "n8n-based multi-agent pipeline for content accuracy and bias detection.",
  },
  {
    name: "Quran Streak",
    status: "Planned",
    desc: "Progressive Web App for Quran reading and streak tracking.",
  },
  {
    name: "FoodLink",
    status: "Planned",
    desc: "Food delivery application with map integration.",
  },
  {
    name: "Future AI Automation Tools",
    status: "Planned",
    desc: "Resume builders, registration assistants, and workflow automation systems.",
  },
];
